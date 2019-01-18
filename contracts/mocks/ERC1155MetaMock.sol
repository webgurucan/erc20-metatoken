pragma solidity ^0.5.0;

import "../token/ERC1155MintBurn.sol";
import "../token/ERC1155Meta.sol";


contract ERC1155MetaMock is ERC1155Meta {

  // ---- Minting functions

  /**
   * @dev Mint _value of tokens of a given id 
   * @param _to The address to mint tokens to.
   * @param _id token id to mint
   * @param _value The amount to be minted
   */
  function mintMock(address _to, uint256 _id, uint256 _value) 
    public 
  {
    super.mint(_to, _id, _value);
  }

  /**
   * @dev Mint tokens for each ids in _ids
   * @param _to The address to mint tokens to.
   * @param _ids Array of ids to mint
   * @param _values Array of amount of tokens to mint per id
   */
  function batchMintMock(address _to, uint256[] memory _ids, uint256[] memory _values) 
    public 
  {
    super.batchMint(_to, _ids, _values);
  }

  // ---- Burning functions 

  /**
   * @dev burn _value of tokens of a given token id 
   * @param _from The address to burn tokens from.
   * @param _id token id to burn
   * @param _value The amount to be burned
   */
  function burnMock(address _from, uint256 _id, uint256 _value) 
    public
  { 
    super.burn(_from, _id, _value);
  }

  /**
   * @dev burn _value of tokens of a given token id 
   * @param _from The address to burn tokens from.
   * @param _ids Array of token ids to burn
   * @param _values Array of the amount to be burned
   */
  function batchBurnMock(address _from, uint256[] memory _ids, uint256[] memory _values) 
    public 
  {
    super.batchBurn(_from, _ids, _values);
  }

}