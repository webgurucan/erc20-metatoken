/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ERC1155 } from "./ERC1155";

export class ERC1155Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ERC1155> {
    return super.deploy(overrides) as Promise<ERC1155>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  connect(signer: Signer): ERC1155Factory {
    return super.connect(signer) as ERC1155Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
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
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506112cf806100206000396000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c80634e1273f41161005b5780634e1273f4146102c3578063a22cb4651461043a578063e985e9c514610468578063f242432a146104965761007c565b8062fdd58e1461008157806301ffc9a7146100bf5780632eb2c2d6146100fa575b600080fd5b6100ad6004803603604081101561009757600080fd5b506001600160a01b038135169060200135610561565b60408051918252519081900360200190f35b6100e6600480360360208110156100d557600080fd5b50356001600160e01b031916610587565b604080519115158252519081900360200190f35b6102c1600480360360a081101561011057600080fd5b6001600160a01b03823581169260208101359091169181019060608101604082013564010000000081111561014457600080fd5b82018360208201111561015657600080fd5b8035906020019184602083028401116401000000008311171561017857600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156101c857600080fd5b8201836020820111156101da57600080fd5b803590602001918460208302840111640100000000831117156101fc57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561024c57600080fd5b82018360208201111561025e57600080fd5b8035906020019184600183028401116401000000008311171561028057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105ce945050505050565b005b6103ea600480360360408110156102d957600080fd5b8101906020810181356401000000008111156102f457600080fd5b82018360208201111561030657600080fd5b8035906020019184602083028401116401000000008311171561032857600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561037857600080fd5b82018360208201111561038a57600080fd5b803590602001918460208302840111640100000000831117156103ac57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061068b945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561042657818101518382015260200161040e565b505050509050019250505060405180910390f35b6102c16004803603604081101561045057600080fd5b506001600160a01b03813516906020013515156107a3565b6100e66004803603604081101561047e57600080fd5b506001600160a01b0381358116916020013516610811565b6102c1600480360360a08110156104ac57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a0810160808201356401000000008111156104ec57600080fd5b8201836020820111156104fe57600080fd5b8035906020019184600183028401116401000000008311171561052057600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061083f945050505050565b6001600160a01b0391909116600090815260208181526040808320938352929052205490565b60006001600160e01b031982166301ffc9a760e01b14806105b857506001600160e01b03198216636cdb3d1360e11b145b156105c5575060016105c9565b5060005b919050565b336001600160a01b03861614806105ea57506105ea8533610811565b6106255760405162461bcd60e51b815260040180806020018281038252602f8152602001806111f2602f913960400191505060405180910390fd5b6001600160a01b03841661066a5760405162461bcd60e51b81526004018080602001828103825260308152602001806111966030913960400191505060405180910390fd5b610676858585856108f5565b610684858585855a86610ba0565b5050505050565b606081518351146106cd5760405162461bcd60e51b815260040180806020018281038252602c8152602001806111c6602c913960400191505060405180910390fd5b6060835167ffffffffffffffff811180156106e757600080fd5b50604051908082528060200260200182016040528015610711578160200160208202803683370190505b50905060005b845181101561079b5760008086838151811061072f57fe5b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020600085838151811061076557fe5b602002602001015181526020019081526020016000205482828151811061078857fe5b6020908102919091010152600101610717565b509392505050565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b038616148061085b575061085b8533610811565b6108965760405162461bcd60e51b815260040180806020018281038252602a815260200180611137602a913960400191505060405180910390fd5b6001600160a01b0384166108db5760405162461bcd60e51b815260040180806020018281038252602b81526020018061110c602b913960400191505060405180910390fd5b6108e785858585610daa565b610684858585855a86610e92565b80518251146109355760405162461bcd60e51b81526004018080602001828103825260358152602001806111616035913960400191505060405180910390fd5b815160005b81811015610abf576109b083828151811061095157fe5b6020026020010151600080896001600160a01b03166001600160a01b03168152602001908152602001600020600087858151811061098b57fe5b602002602001015181526020019081526020016000205461101690919063ffffffff16565b600080886001600160a01b03166001600160a01b0316815260200190815260200160002060008684815181106109e257fe5b6020026020010151815260200190815260200160002081905550610a6a838281518110610a0b57fe5b6020026020010151600080886001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610a4557fe5b602002602001015181526020019081526020016000205461107390919063ffffffff16565b600080876001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610a9c57fe5b60209081029190910181015182528101919091526040016000205560010161093a565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610b45578181015183820152602001610b2d565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610b84578181015183820152602001610b6c565b5050505090500194505050505060405180910390a45050505050565b610bb2856001600160a01b03166110d4565b15610da2576000856001600160a01b031663bc197c8184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015610c55578181015183820152602001610c3d565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015610c94578181015183820152602001610c7c565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015610cd0578181015183820152602001610cb8565b50505050905090810190601f168015610cfd5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b158015610d2257600080fd5b5087f1158015610d36573d6000803e3d6000fd5b50505050506040513d6020811015610d4d57600080fd5b505190506001600160e01b0319811663bc197c8160e01b14610da05760405162461bcd60e51b815260040180806020018281038252603f815260200180611221603f913960400191505060405180910390fd5b505b505050505050565b6001600160a01b038416600090815260208181526040808320858452909152902054610ddc908263ffffffff61101616565b6001600160a01b0380861660009081526020818152604080832087845282528083209490945591861681528082528281208582529091522054610e25908263ffffffff61107316565b6001600160a01b03808516600081815260208181526040808320888452825291829020949094558051868152938401859052805191939288169233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a450505050565b610ea4856001600160a01b03166110d4565b15610da2576000856001600160a01b031663f23a6e6184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610f48578181015183820152602001610f30565b50505050905090810190601f168015610f755780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b158015610f9857600080fd5b5087f1158015610fac573d6000803e3d6000fd5b50505050506040513d6020811015610fc357600080fd5b505190506001600160e01b0319811663f23a6e6160e01b14610da05760405162461bcd60e51b815260040180806020018281038252603a815260200180611260603a913960400191505060405180910390fd5b60008282111561106d576040805162461bcd60e51b815260206004820152601760248201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604482015290519081900360640190fd5b50900390565b6000828201838110156110cd576040805162461bcd60e51b815260206004820152601660248201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604482015290519081900360640190fd5b9392505050565b6000813f80158015906110cd57507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47014159291505056fe4552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e544552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f5245524331313535235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135352362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f5245524331313535235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474545524331313535235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745a2646970667358221220793be3797ae2e45109a9d3574a30988a8453e2db6ff8878042f17ffaec7693ed64736f6c63430006080033";
