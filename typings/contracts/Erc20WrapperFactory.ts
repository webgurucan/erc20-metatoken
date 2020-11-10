/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Erc20Wrapper } from "./Erc20Wrapper";

export class Erc20WrapperFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Erc20Wrapper> {
    return super.deploy(overrides || {}) as Promise<Erc20Wrapper>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Erc20Wrapper {
    return super.attach(address) as Erc20Wrapper;
  }
  connect(signer: Signer): Erc20WrapperFactory {
    return super.connect(signer) as Erc20WrapperFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Erc20Wrapper {
    return new Contract(address, _abi, signerOrProvider) as Erc20Wrapper;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
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
        indexed: false,
        internalType: "address",
        name: "token_address",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_id",
        type: "uint256"
      }
    ],
    name: "TokenRegistration",
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
    stateMutability: "payable",
    type: "receive"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address payable",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address payable",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      }
    ],
    name: "getTokenID",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenID",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "getIdAddress",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNTokens",
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
        internalType: "bytes4",
        name: "interfaceID",
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
  }
];

const _bytecode =
  "0x6080604052600160025534801561001557600080fd5b50600160008190527fa15bc60c955c405d20d9149c709e2460f1c2d9a497496a7f46004d1772c3054c81905560046020527fabd6e7cb50984ff9c2f3e18a2660c3353dadf4e3291deeb275dae2cd1e44fe0580546001600160a01b0319169091179055611e8f806100876000396000f3fe6080604052600436106100e05760003560e01c80639040a9491161007f578063d9caed1211610059578063d9caed121461026a578063e985e9c51461028a578063f23a6e61146102aa578063f242432a146102ca576100f3565b80639040a94914610208578063a22cb4651461021d578063bc197c811461023d576100f3565b80634e1273f4116100bb5780634e1273f41461017b57806363f8071c146101a85780637358e9a5146101c85780638340f549146101f5576100f3565b8062fdd58e146100f857806301ffc9a71461012e5780632eb2c2d61461015b576100f3565b366100f3576100f1600133346102ea565b005b600080fd5b34801561010457600080fd5b5061011861011336600461175b565b6104f0565b6040516101259190611c5a565b60405180910390f35b34801561013a57600080fd5b5061014e610149366004611865565b610516565b604051610125919061193d565b34801561016757600080fd5b506100f16101763660046115dd565b61056a565b34801561018757600080fd5b5061019b610196366004611786565b610627565b60405161012591906118f9565b3480156101b457600080fd5b506101186101c3366004611589565b61073f565b3480156101d457600080fd5b506101e86101e336600461188d565b610775565b60405161012591906118a8565b6100f1610203366004611687565b6102ea565b34801561021457600080fd5b506101186107aa565b34801561022957600080fd5b506100f161023836600461172e565b6107b0565b34801561024957600080fd5b5061025d6102583660046115dd565b61081e565b6040516101259190611948565b34801561027657600080fd5b506100f1610285366004611687565b6108b5565b34801561029657600080fd5b5061014e6102a53660046115a5565b6108ce565b3480156102b657600080fd5b5061025d6102c53660046116c7565b6108fc565b3480156102d657600080fd5b506100f16102e53660046116c7565b610945565b6001600160a01b0382166103195760405162461bcd60e51b815260040161031090611a80565b60405180910390fd5b60006001600160a01b0384166001146104ac57341561034a5760405162461bcd60e51b815260040161031090611ac7565b6040516323b872dd60e01b81526001600160a01b038516906323b872dd9061037a903390309087906004016118bc565b602060405180830381600087803b15801561039457600080fd5b505af11580156103a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cc9190611849565b506103d56109fb565b6103f15760405162461bcd60e51b81526004016103109061195d565b6001600160a01b038416600090815260036020526040902054806104a25760028054600101908190556000818152600460209081526040808320805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038b169081179091558352600390915290819020829055519092507ff977d54986414fc91816901629d1d788ad95448ab4198dcb9b6dc5ed2b930c1f9061049590879085906118e0565b60405180910390a16104a6565b8091505b506104cf565b3482146104cb5760405162461bcd60e51b8152600401610310906119ea565b5060015b6104ea83828460405180602001604052806000815250610a2f565b50505050565b6001600160a01b0391909116600090815260208181526040808320938352929052205490565b60006001600160e01b031982166301ffc9a760e01b148061054757506001600160e01b03198216636cdb3d1360e11b145b8061056257506001600160e01b03198216630271189760e51b145b90505b919050565b336001600160a01b0386161480610586575061058685336108ce565b6105c15760405162461bcd60e51b815260040180806020018281038252602f815260200180611db2602f913960400191505060405180910390fd5b6001600160a01b0384166106065760405162461bcd60e51b8152600401808060200182810382526030815260200180611d566030913960400191505060405180910390fd5b61061285858585610aca565b610620858585855a86610d75565b5050505050565b606081518351146106695760405162461bcd60e51b815260040180806020018281038252602c815260200180611d86602c913960400191505060405180910390fd5b6060835167ffffffffffffffff8111801561068357600080fd5b506040519080825280602002602001820160405280156106ad578160200160208202803683370190505b50905060005b8451811015610737576000808683815181106106cb57fe5b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020600085838151811061070157fe5b602002602001015181526020019081526020016000205482828151811061072457fe5b60209081029190910101526001016106b3565b509392505050565b6001600160a01b038116600090815260036020526040902054806105655760405162461bcd60e51b815260040161031090611bb2565b6000818152600460205260409020546001600160a01b0316806105655760405162461bcd60e51b815260040161031090611a33565b60025490565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b600033301461083f5760405162461bcd60e51b815260040161031090611bfd565b60005b84518110156108a25761086785828151811061085a57fe5b6020026020010151610775565b5061089a308787848151811061087957fe5b602002602001015187858151811061088d57fe5b6020026020010151610f6d565b600101610842565b5063bc197c8160e01b9695505050505050565b60006108c08461073f565b90506104ea33848385610f6d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b600033301461091d5760405162461bcd60e51b815260040161031090611b55565b61092684610775565b5061093330868686610f6d565b5063f23a6e6160e01b95945050505050565b336001600160a01b0386161480610961575061096185336108ce565b61099c5760405162461bcd60e51b815260040180806020018281038252602a815260200180611cf7602a913960400191505060405180910390fd5b6001600160a01b0384166109e15760405162461bcd60e51b815260040180806020018281038252602b815260200180611ccc602b913960400191505060405180910390fd5b6109ed858585856110e0565b610620858585855a866111bc565b6000803d8015610a125760208114610a1b57610a27565b60019150610a27565b60206000803e60005191505b501515905090565b6001600160a01b038416600090815260208181526040808320868452909152902054610a5b908361132e565b6001600160a01b038516600081815260208181526040808320888452825280832094909455835187815290810186905283519293919233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62928290030190a46104ea60008585855a866111bc565b8051825114610b0a5760405162461bcd60e51b8152600401808060200182810382526035815260200180611d216035913960400191505060405180910390fd5b815160005b81811015610c9457610b85838281518110610b2657fe5b6020026020010151600080896001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610b6057fe5b602002602001015181526020019081526020016000205461138f90919063ffffffff16565b600080886001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610bb757fe5b6020026020010151815260200190815260200160002081905550610c3f838281518110610be057fe5b6020026020010151600080886001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610c1a57fe5b602002602001015181526020019081526020016000205461132e90919063ffffffff16565b600080876001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610c7157fe5b602090810291909101810151825281019190915260400160002055600101610b0f565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610d1a578181015183820152602001610d02565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610d59578181015183820152602001610d41565b5050505090500194505050505060405180910390a45050505050565b610d87856001600160a01b03166113ec565b15610f65576000856001600160a01b031663bc197c8184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015610e18578181015183820152602001610e00565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015610e57578181015183820152602001610e3f565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015610e93578181015183820152602001610e7b565b50505050905090810190601f168015610ec05780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b158015610ee557600080fd5b5087f1158015610ef9573d6000803e3d6000fd5b50505050506040513d6020811015610f1057600080fd5b505190506001600160e01b0319811663bc197c8160e01b14610f635760405162461bcd60e51b815260040180806020018281038252603f815260200180611de1603f913960400191505060405180910390fd5b505b505050505050565b610f78848383611423565b6001821461103e5760008281526004602081905260409182902054915163a9059cbb60e01b81526001600160a01b0390921691829163a9059cbb91610fc19188918791016118e0565b602060405180830381600087803b158015610fdb57600080fd5b505af1158015610fef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110139190611849565b5061101c6109fb565b6110385760405162461bcd60e51b815260040161031090611b0f565b506104ea565b6001600160a01b0383166110645760405162461bcd60e51b8152600401610310906119a2565b6000836001600160a01b03168260405161107d906118a5565b60006040518083038185875af1925050503d80600081146110ba576040519150601f19603f3d011682016040523d82523d6000602084013e6110bf565b606091505b50509050806106205760405162461bcd60e51b815260040161031090611b0f565b6001600160a01b03841660009081526020818152604080832085845290915290205461110c908261138f565b6001600160a01b038086166000908152602081815260408083208784528252808320949094559186168152808252828120858252909152205461114f908261132e565b6001600160a01b03808516600081815260208181526040808320888452825291829020949094558051868152938401859052805191939288169233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a450505050565b6111ce856001600160a01b03166113ec565b15610f65576000856001600160a01b031663f23a6e6184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611260578181015183820152602001611248565b50505050905090810190601f16801561128d5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b1580156112b057600080fd5b5087f11580156112c4573d6000803e3d6000fd5b50505050506040513d60208110156112db57600080fd5b505190506001600160e01b0319811663f23a6e6160e01b14610f635760405162461bcd60e51b815260040180806020018281038252603a815260200180611e20603a913960400191505060405180910390fd5b600082820183811015611388576040805162461bcd60e51b815260206004820152601660248201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604482015290519081900360640190fd5b9392505050565b6000828211156113e6576040805162461bcd60e51b815260206004820152601760248201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604482015290519081900360640190fd5b50900390565b6000813f801580159061138857507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141592915050565b6001600160a01b03831660009081526020818152604080832085845290915290205461144f908261138f565b6001600160a01b03841660008181526020818152604080832087845282528083209490945583518681529081018590528351919333927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629281900390910190a4505050565b600082601f8301126114c4578081fd5b81356114d76114d282611c87565b611c63565b8181529150602080830190848101818402860182018710156114f857600080fd5b60005b84811015611517578135845292820192908201906001016114fb565b505050505092915050565b600082601f830112611532578081fd5b813567ffffffffffffffff81111561154657fe5b611559601f8201601f1916602001611c63565b915080825283602082850101111561157057600080fd5b8060208401602084013760009082016020015292915050565b60006020828403121561159a578081fd5b813561138881611ca5565b600080604083850312156115b7578081fd5b82356115c281611ca5565b915060208301356115d281611ca5565b809150509250929050565b600080600080600060a086880312156115f4578081fd5b85356115ff81611ca5565b9450602086013561160f81611ca5565b9350604086013567ffffffffffffffff8082111561162b578283fd5b61163789838a016114b4565b9450606088013591508082111561164c578283fd5b61165889838a016114b4565b9350608088013591508082111561166d578283fd5b5061167a88828901611522565b9150509295509295909350565b60008060006060848603121561169b578283fd5b83356116a681611ca5565b925060208401356116b681611ca5565b929592945050506040919091013590565b600080600080600060a086880312156116de578081fd5b85356116e981611ca5565b945060208601356116f981611ca5565b93506040860135925060608601359150608086013567ffffffffffffffff811115611722578182fd5b61167a88828901611522565b60008060408385031215611740578182fd5b823561174b81611ca5565b915060208301356115d281611cbd565b6000806040838503121561176d578182fd5b823561177881611ca5565b946020939093013593505050565b60008060408385031215611798578182fd5b823567ffffffffffffffff808211156117af578384fd5b818501915085601f8301126117c2578384fd5b81356117d06114d282611c87565b80828252602080830192508086018a8283870289010111156117f0578889fd5b8896505b8487101561181b57803561180781611ca5565b8452600196909601959281019281016117f4565b509096508701359350505080821115611832578283fd5b5061183f858286016114b4565b9150509250929050565b60006020828403121561185a578081fd5b815161138881611cbd565b600060208284031215611876578081fd5b81356001600160e01b031981168114611388578182fd5b60006020828403121561189e578081fd5b5035919050565b90565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b8181101561193157835183529284019291840191600101611915565b50909695505050505050565b901515815260200190565b6001600160e01b031991909116815260200190565b60208082526025908201527f455243323057726170706572236465706f7369743a205452414e534645525f46604082015264105253115160da1b606082015260800190565b60208082526028908201527f4552433230577261707065722377697468647261773a20494e56414c49445f526040820152671150d2541251539560c21b606082015260800190565b60208082526029908201527f455243323057726170706572236465706f7369743a20494e434f52524543545f6040820152684d53475f56414c554560b81b606082015260800190565b6020808252602d908201527f455243323057726170706572236765744964416464726573733a20554e52454760408201526c24a9aa22a922a22faa27a5a2a760991b606082015260800190565b60208082526027908201527f455243323057726170706572236465706f7369743a20494e56414c49445f524560408201526610d2541251539560ca1b606082015260800190565b60208082526028908201527f455243323057726170706572236465706f7369743a204e4f4e5f4e554c4c5f4d60408201526753475f56414c554560c01b606082015260800190565b60208082526026908201527f4552433230577261707065722377697468647261773a205452414e534645525f60408201526511905253115160d21b606082015260800190565b60208082526038908201527f455243323057726170706572236f6e4552433131353552656365697665643a2060408201527f494e56414c49445f455243313135355f52454345495645440000000000000000606082015260800190565b6020808252602b908201527f45524332305772617070657223676574546f6b656e49443a20554e524547495360408201526a2a22a922a22faa27a5a2a760a91b606082015260800190565b6020808252603d908201527f455243323057726170706572236f6e455243313135354261746368526563656960408201527f7665643a20494e56414c49445f455243313135355f5245434549564544000000606082015260800190565b90815260200190565b60405181810167ffffffffffffffff81118282101715611c7f57fe5b604052919050565b600067ffffffffffffffff821115611c9b57fe5b5060209081020190565b6001600160a01b0381168114611cba57600080fd5b50565b8015158114611cba57600080fdfe4552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e544552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f5245524331313535235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135352362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f5245524331313535235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474545524331313535235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745a26469706673582212205df97259aeb0bb71d627d23aeb0b54c1bb7285d0575847f737b4c029bbdcda8364736f6c63430007040033";
