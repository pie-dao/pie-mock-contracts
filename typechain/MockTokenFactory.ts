/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { MockToken } from "./MockToken";

export class MockTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish
  ): Promise<MockToken> {
    return super.deploy(_name, _symbol, _decimals) as Promise<MockToken>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish
  ): UnsignedTransaction {
    return super.getDeployTransaction(_name, _symbol, _decimals);
  }
  attach(address: string): MockToken {
    return super.attach(address) as MockToken;
  }
  connect(signer: Signer): MockTokenFactory {
    return super.connect(signer) as MockTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockToken {
    return new Contract(address, _abi, signerOrProvider) as MockToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
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
        internalType: "address",
        name: "_spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
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
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "doKyberLikeApproval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "failTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "failTransferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "returnFalseTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "returnFalseTransferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_value",
        type: "bool"
      }
    ],
    name: "setDoKyberLikeApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_value",
        type: "bool"
      }
    ],
    name: "setTransferFailed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_value",
        type: "bool"
      }
    ],
    name: "setTransferFromFailed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_value",
        type: "bool"
      }
    ],
    name: "setTransferFromReturnFalse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_value",
        type: "bool"
      }
    ],
    name: "setTransferReturnFalse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
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
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001dd238038062001dd2833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b506040526020018051906020019092919050505082828160039080519060200190620001dc9291906200024c565b508060049080519060200190620001f59291906200024c565b506012600560006101000a81548160ff021916908360ff160217905550505062000225816200022e60201b60201c565b505050620002fb565b80600560006101000a81548160ff021916908360ff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200028f57805160ff1916838001178555620002c0565b82800160010185558215620002c0579182015b82811115620002bf578251825591602001919060010190620002a2565b5b509050620002cf9190620002d3565b5090565b620002f891905b80821115620002f4576000816000905550600101620002da565b5090565b90565b611ac7806200030b6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80639dc29fac116100c3578063c069afe61161007c578063c069afe614610672578063cc453268146106a2578063d17c8d43146106d2578063dd62ed3e146106f4578063f974c01f1461076c578063fd057fd01461078e5761014d565b80639dc29fac146104e4578063a0cf6e8b14610532578063a204fbb114610554578063a457c2d714610576578063a9059cbb146105dc578063ad67f839146106425761014d565b8063313ce56711610115578063313ce5671461030157806339509351146103255780633dfd8b831461038b57806340c10f19146103bb57806370a082311461040957806395d89b41146104615761014d565b806306fdde0314610152578063095ea7b3146101d557806318160ddd1461023b57806323b872dd14610259578063294e40e2146102df575b600080fd5b61015a6107be565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561019a57808201518184015260208101905061017f565b50505050905090810190601f1680156101c75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610221600480360360408110156101eb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610860565b604051808215151515815260200191505060405180910390f35b6102436108aa565b6040518082815260200191505060405180910390f35b6102c56004803603606081101561026f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108b4565b604051808215151515815260200191505060405180910390f35b6102e761094f565b604051808215151515815260200191505060405180910390f35b610309610961565b604051808260ff1660ff16815260200191505060405180910390f35b6103716004803603604081101561033b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610978565b604051808215151515815260200191505060405180910390f35b6103b9600480360360208110156103a157600080fd5b81019080803515159060200190929190505050610a2b565b005b610407600480360360408110156103d157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a48565b005b61044b6004803603602081101561041f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a56565b6040518082815260200191505060405180910390f35b610469610a9e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104a957808201518184015260208101905061048e565b50505050905090810190601f1680156104d65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610530600480360360408110156104fa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b40565b005b61053a610b4e565b604051808215151515815260200191505060405180910390f35b61055c610b61565b604051808215151515815260200191505060405180910390f35b6105c26004803603604081101561058c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b74565b604051808215151515815260200191505060405180910390f35b610628600480360360408110156105f257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c41565b604051808215151515815260200191505060405180910390f35b6106706004803603602081101561065857600080fd5b81019080803515159060200190929190505050610cda565b005b6106a06004803603602081101561068857600080fd5b81019080803515159060200190929190505050610cf7565b005b6106d0600480360360208110156106b857600080fd5b81019080803515159060200190929190505050610d13565b005b6106da610d30565b604051808215151515815260200191505060405180910390f35b6107566004803603604081101561070a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d43565b6040518082815260200191505060405180910390f35b610774610dca565b604051808215151515815260200191505060405180910390f35b6107bc600480360360208110156107a457600080fd5b81019080803515159060200190929190505050610ddd565b005b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108565780601f1061082b57610100808354040283529160200191610856565b820191906000526020600020905b81548152906001019060200180831161083957829003601f168201915b5050505050905090565b60006005809054906101000a900460ff161561089857600082148061088e5750600061088c3385610d43565b145b61089757600080fd5b5b6108a28383610dfa565b905092915050565b6000600254905090565b6000600560019054906101000a900460ff161561091c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061197f6030913960400191505060405180910390fd5b600560039054906101000a900460ff161561093a5760009050610948565b610945848484610e18565b90505b9392505050565b6005809054906101000a900460ff1681565b6000600560009054906101000a900460ff16905090565b6000610a21610985610ef1565b84610a1c8560016000610996610ef1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ef990919063ffffffff16565b610f81565b6001905092915050565b80600560026101000a81548160ff02191690831515021790555050565b610a528282611178565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b365780601f10610b0b57610100808354040283529160200191610b36565b820191906000526020600020905b815481529060010190602001808311610b1957829003601f168201915b5050505050905090565b610b4a828261133f565b5050565b600560029054906101000a900460ff1681565b600560039054906101000a900460ff1681565b6000610c37610b81610ef1565b84610c3285604051806060016040528060258152602001611a6d6025913960016000610bab610ef1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115039092919063ffffffff16565b610f81565b6001905092915050565b6000600560029054906101000a900460ff1615610ca9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806119af602c913960400191505060405180910390fd5b600560049054906101000a900460ff1615610cc75760009050610cd4565b610cd183836115c3565b90505b92915050565b80600560046101000a81548160ff02191690831515021790555050565b806005806101000a81548160ff02191690831515021790555050565b80600560036101000a81548160ff02191690831515021790555050565b600560019054906101000a900460ff1681565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600560049054906101000a900460ff1681565b80600560016101000a81548160ff02191690831515021790555050565b6000610e0e610e07610ef1565b8484610f81565b6001905092915050565b6000610e258484846115e1565b610ee684610e31610ef1565b610ee1856040518060600160405280602881526020016119db60289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610e97610ef1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115039092919063ffffffff16565b610f81565b600190509392505050565b600033905090565b600080828401905083811015610f77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611007576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180611a496024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561108d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806119376022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561121b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b611227600083836118a2565b61123c81600254610ef990919063ffffffff16565b600281905550611293816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ef990919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113c5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611a036021913960400191505060405180910390fd5b6113d1826000836118a2565b61143c81604051806060016040528060228152602001611915602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115039092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611493816002546118a790919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008383111582906115b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561157557808201518184015260208101905061155a565b50505050905090810190601f1680156115a25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60006115d76115d0610ef1565b84846115e1565b6001905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611667576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611a246025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806118f26023913960400191505060405180910390fd5b6116f88383836118a2565b61176381604051806060016040528060268152602001611959602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115039092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506117f6816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ef990919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b505050565b60006118e983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611503565b90509291505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63654d6f636b546f6b656e2e7472616e7366657246726f6d3a207472616e7366657246726f6d2073657420746f206661696c4d6f636b546f6b656e2e7472616e736665723a207472616e7366657246726f6d2073657420746f206661696c45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220c645b11e33ea0a71bff32bc8ea37d60a2c75b0f998178eb2d6fb46ce3214584e64736f6c63430006040033";
