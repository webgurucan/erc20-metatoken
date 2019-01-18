/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class IERC1271Wallet extends Contract {
  functions: {
    isValidSignature(_hash: string, _signature: (string)[]): Promise<string>;
  };
  filters: {};
}
