/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ERC1155Meta } from "./ERC1155Meta";

export class ERC1155MetaFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ERC1155Meta> {
    return super.deploy(overrides) as Promise<ERC1155Meta>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ERC1155Meta {
    return super.attach(address) as ERC1155Meta;
  }
  connect(signer: Signer): ERC1155MetaFactory {
    return super.connect(signer) as ERC1155MetaFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Meta {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Meta;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newNonce",
        type: "uint256"
      }
    ],
    name: "NonceChange",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "TransferBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "TransferSingle",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_amount",
        type: "string"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "URI",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      }
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signerAddress",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_sig",
        type: "bytes"
      }
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bool",
        name: "isValid",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_isGasFee",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "metaSafeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      },
      {
        internalType: "bool",
        name: "_isGasFee",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "metaSafeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "_isGasFee",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "metaSetApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address"
      }
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506129bd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d35760003560e01c8063a3d4926e11610081578063f242432a1161005b578063f242432a146101b5578063f5d4c820146101c8578063fa4e12d7146101db576100d3565b8063a3d4926e1461017c578063ce0b514b1461018f578063e985e9c5146101a2576100d3565b80632eb2c2d6116100b25780632eb2c2d6146101345780634e1273f414610149578063a22cb46514610169576100d3565b8062fdd58e146100d857806301ffc9a7146101015780632d0335ab14610121575b600080fd5b6100eb6100e6366004611b69565b6101ee565b6040516100f89190612899565b60405180910390f35b61011461010f366004611c73565b610214565b6040516100f89190611fd3565b6100eb61012f36600461176f565b61025b565b6101476101423660046118c9565b610276565b005b61015c610157366004611b94565b6102fe565b6040516100f89190611f92565b610147610177366004611abf565b6103f7565b61014761018a36600461180c565b610466565b61014761019d3660046119ec565b6105b3565b6101146101b03660046117d4565b61066b565b6101476101c3366004611a64565b610699565b6101476101d6366004611973565b610711565b6101146101e9366004611aec565b610816565b6001600160a01b0391909116600090815260208181526040808320938352929052205490565b60006001600160e01b031982166301ffc9a760e01b148061024557506001600160e01b03198216636cdb3d1360e11b145b1561025257506001610256565b5060005b919050565b6001600160a01b031660009081526002602052604090205490565b336001600160a01b03861614806102925750610292853361066b565b6102b75760405162461bcd60e51b81526004016102ae9061256e565b60405180910390fd5b6001600160a01b0384166102dd5760405162461bcd60e51b81526004016102ae9061240b565b6102e985858585610bfc565b6102f7858585855a86610e06565b5050505050565b606081518351146103215760405162461bcd60e51b81526004016102ae90612468565b6060835167ffffffffffffffff8111801561033b57600080fd5b50604051908082528060200260200182016040528015610365578160200160208202803683370190505b50905060005b84518110156103ef5760008086838151811061038357fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008583815181106103b957fe5b60200260200101518152602001908152602001600020548282815181106103dc57fe5b602090810291909101015260010161036b565b509392505050565b3360008181526001602090815260408083206001600160a01b038716808552925291829020805460ff191685151517905590519091907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319061045a908590611fd3565b60405180910390a35050565b6001600160a01b03851661048c5760405162461bcd60e51b81526004016102ae90612634565b60606104966115c5565b606061054989857fa3d4926e8cf8fe8e020cd29f514c256bc2eec62aa2337e415f1a33a4828af5a060001b8c8c8c6040516020016104d49190611dd0565b604051602081830303815290604052805190602001208c6040516020016104fb9190611dd0565b604051602081830303815290604052805190602001208c61051d576000610520565b60015b60405160200161053596959493929190611ff5565b604051602081830303815290604052610ed9565b905061055789898989610bfc565b841561059a57808060200190518101906105719190611d35565b809450819350505061058b89898989866020015186610e06565b6105958983611042565b6105a8565b6105a8898989895a86610e06565b505050505050505050565b6001600160a01b0385166105d95760405162461bcd60e51b81526004016102ae90612297565b60606105e36115c5565b606061061b89857fce0b514b3931bdbe4d5d44e4f035afe7113767b7db71949271f6a62d9c60f558828c8c8c8c61051d576000610520565b905061062989898989611251565b841561065d57808060200190518101906106439190611d35565b809450819350505061058b89898989866020015186611339565b6105a8898989895a86611339565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b03861614806106b557506106b5853361066b565b6106d15760405162461bcd60e51b81526004016102ae9061215c565b6001600160a01b0384166106f75760405162461bcd60e51b81526004016102ae906120b4565b61070385858585611251565b6102f7858585855a86611339565b606061076d86837ff5d4c820494c8595de274c7ff619bead38aac4fbc3d143b5bf956aa4b84fa52482898961074757600061074a565b60015b89610756576000610759565b60015b604051602001610535959493929190612029565b6001600160a01b038781166000818152600160209081526040808320948b168084529490915290819020805460ff19168915151790555192935090917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31906107d6908890611fd3565b60405180910390a3821561080e576107ec6115c5565b818060200190518101906108009190611d02565b905061080c8782611042565b505b505050505050565b6000808251116108385760405162461bcd60e51b81526004016102ae906125cb565b6001600160a01b03851661085e5760405162461bcd60e51b81526004016102ae90612511565b60006108698361140c565b60f81c90506005811061088e5760405162461bcd60e51b81526004016102ae9061223a565b60008160ff16600581111561089f57fe5b90506000808080808560058111156108b357fe5b14156108d15760405162461bcd60e51b81526004016102ae906122f4565b60018560058111156108df57fe5b14156109b55787516061146109065760405162461bcd60e51b81526004016102ae906123ae565b61091788600063ffffffff61147216565b925061092a88602063ffffffff61147216565b91508760408151811061093957fe5b602001015160f81c60f81b60f81c935060018a8585856040516000815260200160405260405161096c9493929190612071565b6020604051602081039080840390855afa15801561098e573d6000803e3d6000fd5b5050604051601f1901516001600160a01b038d81169116149750610bf49650505050505050565b60028560058111156109c357fe5b1415610a765787516061146109ea5760405162461bcd60e51b81526004016102ae906123ae565b6109fb88600063ffffffff61147216565b9250610a0e88602063ffffffff61147216565b915087604081518110610a1d57fe5b602001015160f81c60f81b60f81c935060018a604051602001610a409190611e65565b604051602081830303815290604052805190602001208585856040516000815260200160405260405161096c9493929190612071565b6003856005811115610a8457fe5b1415610b29576040516320c13b0b60e01b81526001600160a01b038c16906320c13b0b90610ab8908c908c9060040161208f565b60206040518083038186803b158015610ad057600080fd5b505afa158015610ae4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b089190611c8f565b6001600160e01b0319166320c13b0b60e01b149650610bf495505050505050565b6004856005811115610b3757fe5b1415610bdc57604051630b135d3f60e11b81526001600160a01b038c1690631626ba7e90610b6b908d908c90600401612058565b60206040518083038186803b158015610b8357600080fd5b505afa158015610b97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbb9190611c8f565b6001600160e01b031916630b135d3f60e11b149650610bf495505050505050565b60405162461bcd60e51b81526004016102ae9061223a565b949350505050565b8051825114610c1d5760405162461bcd60e51b81526004016102ae906121dd565b815160005b81811015610da757610c98838281518110610c3957fe5b6020026020010151600080896001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610c7357fe5b60200260200101518152602001908152602001600020546114a190919063ffffffff16565b600080886001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610cca57fe5b6020026020010151815260200190815260200160002081905550610d52838281518110610cf357fe5b6020026020010151600080886001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610d2d57fe5b60200260200101518152602001908152602001600020546114c990919063ffffffff16565b600080876001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610d8457fe5b602090810291909101810151825281019190915260400160002055600101610c22565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610df7929190611fa5565b60405180910390a45050505050565b610e18856001600160a01b03166114f5565b1561080e576000856001600160a01b031663bc197c8184338a8989886040518763ffffffff1660e01b8152600401610e54959493929190611e96565b602060405180830381600088803b158015610e6e57600080fd5b5087f1158015610e82573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610ea79190611c8f565b90506001600160e01b0319811663bc197c8160e01b1461080c5760405162461bcd60e51b81526004016102ae90612691565b60608083806020019051810190610ef09190611cab565b6001600160a01b03871660009081526002602052604081205491945091925090610f2183604163ffffffff61147216565b9050818110801590610f3557508160640181105b610f515760405162461bcd60e51b81526004016102ae906127df565b6000610f8d86838780519060200120604051602001610f7293929190611e06565b6040516020818303038152906040528051906020012061152c565b90506060868387604051602001610fa693929190611e2d565b60408051601f198184030181528282526001600160a01b038c166000818152600260205292909220600187019081905590935090917fb861b7bdbe611a846ab271b8d2810391bc8b5a968f390c322438ecab66bccf599161100691612899565b60405180910390a261101a89838388610816565b6110365760405162461bcd60e51b81526004016102ae90612351565b50505050509392505050565b6000611051826060015161140c565b60f81c9050600281106110765760405162461bcd60e51b81526004016102ae9061283c565b60008160ff16600281111561108757fe5b83516040850151919250600091829182916001600160a01b0316156110b05786604001516110b2565b335b925060008560028111156110c257fe5b141561118e5786606001518060200190518101906110e091906117a7565b90945091506001600160a01b0384163014156111245761110288848484611251565b61111f8884845a8560405180602001604052806000815250611339565b611189565b604051637921219560e11b81526001600160a01b0385169063f242432a90611156908b90879087908790600401611f5a565b600060405180830381600087803b15801561117057600080fd5b505af1158015611184573d6000803e3d6000fd5b505050505b611247565b86606001518060200190518101906111a6919061178b565b6040516323b872dd60e01b81529094506001600160a01b038516906323b872dd906111d9908b9087908690600401611f36565b602060405180830381600087803b1580156111f357600080fd5b505af1158015611207573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122b9190611c57565b6112475760405162461bcd60e51b81526004016102ae906124b4565b5050505050505050565b6001600160a01b038416600090815260208181526040808320858452909152902054611283908263ffffffff6114a116565b6001600160a01b03808616600090815260208181526040808320878452825280832094909455918616815280825282812085825290915220546112cc908263ffffffff6114c916565b6001600160a01b03808516600081815260208181526040808320888452909152908190209390935591519086169033907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629061132b90879087906128a2565b60405180910390a450505050565b61134b856001600160a01b03166114f5565b1561080e576000856001600160a01b031663f23a6e6184338a8989886040518763ffffffff1660e01b8152600401611387959493929190611ef3565b602060405180830381600088803b1580156113a157600080fd5b5087f11580156113b5573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906113da9190611c8f565b90506001600160e01b0319811663f23a6e6160e01b1461080c5760405162461bcd60e51b81526004016102ae906126ee565b60008082511161142e5760405162461bcd60e51b81526004016102ae906120ff565b8160018351038151811061143e57fe5b0160200151825160001901909252507fff000000000000000000000000000000000000000000000000000000000000001690565b600081602001835110156114985760405162461bcd60e51b81526004016102ae9061274b565b50016020015190565b6000828211156114c35760405162461bcd60e51b81526004016102ae906121a6565b50900390565b6000828201838110156114ee5760405162461bcd60e51b81526004016102ae906127a8565b9392505050565b6000813f80158015906114ee57507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141592915050565b600060405180604001604052806002815260200161190160f01b8152507f035aff83d86937d35b32e04f0ddc6ff469290eef2f1b692d8a815c89404d474960001b3060405160200161157f929190611fde565b60405160208183030381529060405280519060200120836040516020016115a893929190611e06565b604051602081830303815290604052805190602001209050919050565b6040518060800160405280600081526020016000815260200160006001600160a01b03168152602001606081525090565b600082601f830112611606578081fd5b8135611619611614826128d7565b6128b0565b81815291506020808301908481018184028601820187101561163a57600080fd5b60005b848110156116595781358452928201929082019060010161163d565b505050505092915050565b600082601f830112611674578081fd5b8135611682611614826128f7565b915080825283602082850101111561169957600080fd5b8060208401602084013760009082016020015292915050565b600082601f8301126116c2578081fd5b81516116d0611614826128f7565b91508082528360208285010111156116e757600080fd5b6116f881602084016020860161291b565b5092915050565b600060808284031215611710578081fd5b61171a60806128b0565b9050815181526020820151602082015260408201516117388161294b565b6040820152606082015167ffffffffffffffff81111561175757600080fd5b611763848285016116b2565b60608301525092915050565b600060208284031215611780578081fd5b81356114ee8161294b565b60006020828403121561179c578081fd5b81516114ee8161294b565b600080604083850312156117b9578081fd5b82516117c48161294b565b6020939093015192949293505050565b600080604083850312156117e6578182fd5b82356117f18161294b565b915060208301356118018161294b565b809150509250929050565b60008060008060008060c08789031215611824578182fd5b863561182f8161294b565b9550602087013561183f8161294b565b9450604087013567ffffffffffffffff8082111561185b578384fd5b6118678a838b016115f6565b9550606089013591508082111561187c578384fd5b6118888a838b016115f6565b94506080890135915061189a82612963565b90925060a088013590808211156118af578283fd5b506118bc89828a01611664565b9150509295509295509295565b600080600080600060a086880312156118e0578081fd5b85356118eb8161294b565b945060208601356118fb8161294b565b9350604086013567ffffffffffffffff80821115611917578283fd5b61192389838a016115f6565b94506060880135915080821115611938578283fd5b61194489838a016115f6565b93506080880135915080821115611959578283fd5b5061196688828901611664565b9150509295509295909350565b600080600080600060a0868803121561198a578081fd5b85356119958161294b565b945060208601356119a58161294b565b935060408601356119b581612963565b925060608601356119c581612963565b9150608086013567ffffffffffffffff8111156119e0578182fd5b61196688828901611664565b60008060008060008060c08789031215611a04578384fd5b8635611a0f8161294b565b95506020870135611a1f8161294b565b945060408701359350606087013592506080870135611a3d81612963565b915060a087013567ffffffffffffffff811115611a58578182fd5b6118bc89828a01611664565b600080600080600060a08688031215611a7b578283fd5b8535611a868161294b565b94506020860135611a968161294b565b93506040860135925060608601359150608086013567ffffffffffffffff8111156119e0578182fd5b60008060408385031215611ad1578182fd5b8235611adc8161294b565b9150602083013561180181612963565b60008060008060808587031215611b01578182fd5b8435611b0c8161294b565b935060208501359250604085013567ffffffffffffffff80821115611b2f578384fd5b611b3b88838901611664565b93506060870135915080821115611b50578283fd5b50611b5d87828801611664565b91505092959194509250565b60008060408385031215611b7b578182fd5b8235611b868161294b565b946020939093013593505050565b60008060408385031215611ba6578182fd5b823567ffffffffffffffff80821115611bbd578384fd5b81850186601f820112611bce578485fd5b80359250611bde611614846128d7565b80848252602080830192508084018a828389028701011115611bfe578889fd5b8894505b86851015611c29578035611c158161294b565b845260019490940193928101928101611c02565b509096508701359350505080821115611c40578283fd5b50611c4d858286016115f6565b9150509250929050565b600060208284031215611c68578081fd5b81516114ee81612963565b600060208284031215611c84578081fd5b81356114ee81612971565b600060208284031215611ca0578081fd5b81516114ee81612971565b60008060408385031215611cbd578182fd5b825167ffffffffffffffff80821115611cd4578384fd5b611ce0868387016116b2565b93506020850151915080821115611cf5578283fd5b50611c4d858286016116b2565b600060208284031215611d13578081fd5b815167ffffffffffffffff811115611d29578182fd5b610bf4848285016116ff565b60008060408385031215611d47578182fd5b825167ffffffffffffffff80821115611d5e578384fd5b611ce0868387016116ff565b6000815180845260208085019450808401835b83811015611d9957815187529582019590820190600101611d7d565b509495945050505050565b60008151808452611dbc81602086016020860161291b565b601f01601f19169290920160200192915050565b815160009082906020808601845b83811015611dfa57815185529382019390820190600101611dde565b50929695505050505050565b60008451611e1881846020890161291b565b91909101928352506020820152604001919050565b60008451611e3f81846020890161291b565b8201848152835190611e5882602080840190880161291b565b0160200195945050505050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b60006001600160a01b03808816835280871660208401525060a06040830152611ec260a0830186611d6a565b8281036060840152611ed48186611d6a565b8381036080850152611ee68186611da4565b9998505050505050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a06080830152611f2b60a0830184611da4565b979650505050505050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b6000602082526114ee6020830184611d6a565b600060408252611fb86040830185611d6a565b8281036020840152611fca8185611d6a565b95945050505050565b901515815260200190565b9182526001600160a01b0316602082015260400190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526001600160a01b0393841660208601529190921660408401526060830191909152608082015260a00190565b600083825260406020830152610bf46040830184611da4565b93845260ff9290921660208401526040830152606082015260800190565b6000604082526120a26040830185611da4565b8281036020840152611fca8185611da4565b6020808252602b908201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c4960408201526a1117d49150d2541251539560aa1b606082015260800190565b60208082526037908201527f4c6962427974657323706f704c617374427974653a20475245415445525f544860408201527f414e5f5a45524f5f4c454e4754485f5245515549524544000000000000000000606082015260800190565b6020808252602a908201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c49604082015269222fa7a822a920aa27a960b11b606082015260800190565b60208082526017908201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604082015260600190565b60208082526035908201527f45524331313535235f7361666542617463685472616e7366657246726f6d3a2060408201527f494e56414c49445f4152524159535f4c454e4754480000000000000000000000606082015260800190565b6020808252603a908201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460408201527f7572653a20554e535550504f525445445f5349474e4154555245000000000000606082015260800190565b60208082526033908201527f455243313135354d657461236d657461536166655472616e7366657246726f6d60408201527f3a20494e56414c49445f524543495049454e5400000000000000000000000000606082015260800190565b60208082526036908201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460408201527f7572653a20494c4c4547414c5f5349474e415455524500000000000000000000606082015260800190565b60208082526033908201527f455243313135354d657461235f7369676e617475726556616c69646174696f6e60408201527f3a20494e56414c49445f5349474e415455524500000000000000000000000000606082015260800190565b60208082526037908201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460408201527f7572653a204c454e4754485f39375f5245515549524544000000000000000000606082015260800190565b60208082526030908201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960408201527f4e56414c49445f524543495049454e5400000000000000000000000000000000606082015260800190565b6020808252602c908201527f455243313135352362616c616e63654f6642617463683a20494e56414c49445f60408201526b082a4a482b2be988a9c8ea8960a31b606082015260800190565b60208082526032908201527f455243313135354d657461235f7472616e736665724761734665653a2045524360408201527f32305f5452414e534645525f4641494c45440000000000000000000000000000606082015260800190565b60208082526033908201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460408201527f7572653a20494e56414c49445f5349474e455200000000000000000000000000606082015260800190565b6020808252602f908201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960408201527f4e56414c49445f4f50455241544f520000000000000000000000000000000000606082015260800190565b60208082526043908201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460408201527f7572653a204c454e4754485f475245415445525f5448414e5f305f524551554960608201526214915160ea1b608082015260a00190565b60208082526038908201527f455243313135354d657461236d6574615361666542617463685472616e73666560408201527f7246726f6d3a20494e56414c49445f524543495049454e540000000000000000606082015260800190565b6020808252603f908201527f45524331313535235f63616c6c6f6e455243313135354261746368526563656960408201527f7665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474500606082015260800190565b6020808252603a908201527f45524331313535235f63616c6c6f6e4552433131353552656365697665643a2060408201527f494e56414c49445f4f4e5f524543454956455f4d455353414745000000000000606082015260800190565b6020808252603c908201527f4c696242797465732372656164427974657333323a20475245415445525f4f5260408201527f5f455155414c5f544f5f33325f4c454e4754485f524551554952454400000000606082015260800190565b60208082526016908201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604082015260600190565b6020808252602f908201527f455243313135354d657461235f7369676e617475726556616c69646174696f6e60408201527f3a20494e56414c49445f4e4f4e43450000000000000000000000000000000000606082015260800190565b6020808252602e908201527f455243313135354d657461235f7472616e736665724761734665653a20554e5360408201527f5550504f525445445f544f4b454e000000000000000000000000000000000000606082015260800190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff811182821017156128cf57600080fd5b604052919050565b600067ffffffffffffffff8211156128ed578081fd5b5060209081020190565b600067ffffffffffffffff82111561290d578081fd5b50601f01601f191660200190565b60005b8381101561293657818101518382015260200161291e565b83811115612945576000848401525b50505050565b6001600160a01b038116811461296057600080fd5b50565b801515811461296057600080fd5b6001600160e01b03198116811461296057600080fdfea2646970667358221220e2fa204480aec4ce1fa5f7c4c6dfb5eadb944d99377147bcf36bdbcd63f09c3a64736f6c63430006080033";
