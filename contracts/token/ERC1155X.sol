pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "./ERC1155.sol";

/**
 * @dev Multi-Fungible Tokens with additional functions. These additional functions allow users
 *      to presign function calls and allow third parties to execute these on their behalf. 
 *      There are also minting functions that were added that benefit from the balance packing
 *      efficiency gains via batchMinting.
 */ 
contract ERC1155X is ERC1155, Ownable { 

  struct Signature {
  // Signature structure
    uint8   v;        // v variable from ECDSA signature.
    bytes32 r;        // r variable from ECDSA signature.
    bytes32 s;        // s variable from ECDSA signature.
    uint256 nonce;    // Signature nonce from signer
    string sigPrefix; // Signature prefix message (e.g. "\x19Ethereum Signed Message:\n32").
  }

  // Signature nonce per address
  mapping (address => uint256) nonces;

  //
  // Signature Based Transfer
  //

  /**
   * @dev Transfers objects from signer to _to based on signature
   * @param _to Address to send tokens to. If 0x1, signer did not specify a _to address.
   * @param _id Object id to transfer
   * @param _value Amount of object of given _id to transfer.
   * @param _data Contains a Signature object (uint8,bytes32,bytes32,uint256,string), 
   * @return Address that signed the hash.
   */
//   function safeTransferFrom(
//     address _from,
//     address _to, 
//     uint256 _id, 
//     uint256 _value,
//     bytes memory _data) 
//     public 
//   {
//     require(_to != address(0), "INVALID_RECIPIENT");
//  // require(_value <= balanceFrom);  Not necessary since checked within writeValueInBin()

//     // If no data, then it's a regular safeTransferFrom
//     if (_data.length <  ) {
//       super.safeTransferFrom(_from, _to, _id, _value, _data);
//     } else {
//       uint8 isMetaTransfer, Signature sig, bytes memory data) = abi.decode(_data, (uint8, Signature, bytes))
//       if (isMetaTransfer == 0) {
//         super.safeTransferFrom(_from, _to, _id, _value, _data);
//       }
//     }


//     // Get signer
//     address from = recoverTransferSigner(_to, _id, _value, data, sig);
 
//     //Sender nonce
//     uint256 nonce = nonces[from];
 
//     //Update signature nonce
//     nonces[_from] += 1; 

//     // Update balances
//     _updateIDBalance(_from, _id, _value, Operations.Sub); // Subtract value
//     _updateIDBalance(_to, _id, _value, Operations.Add);   // Add value

//     if (_to.isContract()) {
//       bytes4 retval = IERC1155TokenReceiver(_to).onERC1155Received(msg.sender, _from, _id, _value, _data);
//       require(retval == ERC1155_RECEIVED_VALUE, "INVALID_ON_RECEIVE_MESSAGE");
//     }

//     // Emit event
//     emit TransferSingle(msg.sender, _from, _to, _id, _value);
//   } 

  //
  // Operator Functions
  //

  // /**
  //  * @dev Approve the passed address to spend on behalf of _from if valid signature is provided.
  //  * @param _owner Address that wants to set operator status  _spender.
  //  * @param _operator The address which will act as an operator for _owner.
  //  * @param _approved _operator"s new operator status (true or false). 
  //  * @param _sig Signature struct containing signature related variables.
  //  */
  // function sigSetApprovalForAll(address _owner, address _operator,  bool _approved, Signature memory _sig) 
  //   public  
  // { 
  //   // Verify if _owner is the signer
  //   require(_owner == recoverApprovalSigner(_operator, _approved, nonces[_owner], _sig), "Signer is not token owner");

  //   // Update signature nonce of _owner
  //   nonces[_owner] += 1;

  //   // Update operator status
  //   operators[_owner][_operator] = _approved;

  //   // Emit event
  //   emit ApprovalForAll(_owner, _operator, _approved);
  // }

  // 
  //  Minting Functions         
  //

  /**
   * @dev Mint _value of objects of a given id 
   * @param _to The address to mint objects to.
   * @param _id Object id to mint
   * @param _value The amount to be minted
   */
  function mint(address _to, uint256 _id, uint256 _value) 
    external onlyOwner
  {
    // require(_id < NUMBER_OF_ids); Not required since out of range will throw
    // require(_value <= 2**16-1);         Not required since checked in writeValueInBin  
    
    //Add _value
    balances[_to][_id] = balances[_to][_id].add(_value);

    // Emit event
    emit TransferSingle(msg.sender, address(0x0), _to, _id, _value);
  }

  /**
   * @dev Mint 1 of object for each id in _ids
   * @param _to The address to mint objects to.
   * @param _ids Array of ids to mint
   * @param _values Array of amount of tokens to mint per id
   * IMRPOVEMENT : Could be simplified if EIP-1283 (https://eips.ethereum.org/EIPS/eip-1283) is implemented
   */
  function batchMint(address _to, uint256[] memory _ids, uint256[] memory _values) 
    public onlyOwner 
  {
    require(_ids.length == _values.length, "INVALID_ARRAYS_LENGTH");

    // Number of transfer to execute
    uint256 nTransfer = _ids.length;

     // Executing all transfers
    for (uint256 i = 0; i < nTransfer; i++) {
      // Update storage balance of previous bin
      balances[_to][_ids[i]] = balances[_to][_ids[i]].add(_values[i]);
    }

    // Emit mint event
    emit TransferBatch(msg.sender, address(0x0), _to, _ids, _values);
  }

  // 
  // Signature View Functions               
  // 

  // /**
  // * @dev Returns the address of associated with the private key that signed _hash
  // * @param _from Address who signed the message that wants to transfer from.
  // * @param _to Address to send tokens to.
  // * @param _id Object id to transfer
  // * @param _value Maximum amount of object of given _id to transfer.
  // * @param _nonce Signature nonce for _from.
  // * @param _sig Signature struct containing signature related variables.
  // * @return Address that signed the hash.
  // *
  // * TODO: Is prefix bytes32 ok? What if no prefix? Need to hash twice?
  // * 
  // */

  // // Replace most these arguments with a encoded argument and function calls?

  // function recoverTransferSigner( 
  //   address _to,
  //   uint256 _id,
  //   uint256 _value,
  //   bytes  memory _data,
  //   uint256 _nonce,
  //   Signature memory _sig)
  //   public view returns (address signer)
  // { 
  //   bytes32 prefixedHash;

  //   // Get hash
  //   bytes32 hash = keccak256(
  //     abi.encodePacked(address(this), _from, _to, _id,  _value, _data, _nonce)
  //   );

  //   // If prefix provided, hash with prefix, else ignore prefix 
  //   prefixedHash = keccak256(abi.encodePacked(_sig.sigPrefix, hash));

  //   // return signer recovered
  //   return recoverHashSigner(prefixedHash, _sig.r, _sig.s, _sig.v);
  // }

  // /**
  //  * @dev Returns the address of the private key that signed the approve message
  //  * @param _operator The address which will act as an operator for _owner.
  //  * @param _approved  _operator"s new operator status (true or false)
  //  * @param _nonce Signature nonce for _from.
  //  * @param _sig Signature struct containing signature related variables.
  //  * @return Address that signed the hash.
  //  *
  //  * Is prefix bytes32 ok? What if no prefix? Need to hash twice?
  //  * TODO: Check no prefix (throw or skip) 
  //  * 
  //  */
  // function recoverApprovalSigner( 
  //   address _operator,
  //   bool    _approved,
  //   uint256 _nonce,
  //   Signature memory _sig)
  //   public view returns (address signer)
  // { 
  //   // Hashing arguments
  //   bytes32 hash = keccak256( abi.encodePacked(address(this), _operator, _approved, _nonce) );

  //   // If prefix provided, hash with prefix, else ignore prefix
  //   bytes32 prefixedHash = keccak256( abi.encodePacked(_sig.sigPrefix, hash) );

  //   // return signer recovered
  //   return recoverHashSigner(prefixedHash, _sig.r, _sig.s, _sig.v);
  // }

  // /**
  //  * @dev Returns the address of associated with the private key that signed _hash
  //  * @param _hash Hash that was signed.
  //  * @param _r r variable from ECDSA signature.
  //  * @param _s s variable from ECDSA signature.
  //  * @param _v v variable from ECDSA signature.
  //  * @return Address that signed the hash.
  //  */
  // function recoverHashSigner(bytes32 _hash, bytes32 _r, bytes32 _s, uint8 _v)
  //   public pure returns (address signer)
  // {
  //   // Version of signature should be 27 or 28, but 0 and 1 are also possible versions
  //   if (_v < 27) {
  //     _v += 27;
  //   }

  //   // Recover who signed the hash
  //   signer = ecrecover(_hash, _v, _r, _s);

  //   // Makes sure signer is not 0x0. This is to prevent signer appearing to be 0x0.
  //   assert(signer != address(0x0));

  //   // Return recovered signer address
  //   return signer;
  // }

  // /**
  // * @dev Returns the current nonce associated with a given address
  // * @param _signer Address to query signature nonce for
  // */
  // function getNonce(address _signer) 
  //   external view returns (uint256 nonce) 
  // {
  //   return nonces[_signer];
  // }

}

