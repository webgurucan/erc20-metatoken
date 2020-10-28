/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface SignatureValidatorInterface extends ethers.utils.Interface {
  functions: {
    "isValidSignature(address,bytes32,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [string, BytesLike, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;

  events: {};
}

export class SignatureValidator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SignatureValidatorInterface;

  functions: {
    /**
     * Verifies that a hash has been signed by the given signer.
     * @param _data Full EIP-712 data structure that was hashed and signed
     * @param _hash Hash of the EIP-712 encoded data
     * @param _sig Proof that the hash has been signed by signer.     For non wallet signatures, _sig is expected to be an array tightly encoded as     (bytes32 r, bytes32 s, uint8 v, uint256 nonce, SignatureType sigType)
     * @param _signerAddress Address that should have signed the given hash.
     */
    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      isValid: boolean;
      0: boolean;
    }>;
  };

  /**
   * Verifies that a hash has been signed by the given signer.
   * @param _data Full EIP-712 data structure that was hashed and signed
   * @param _hash Hash of the EIP-712 encoded data
   * @param _sig Proof that the hash has been signed by signer.     For non wallet signatures, _sig is expected to be an array tightly encoded as     (bytes32 r, bytes32 s, uint8 v, uint256 nonce, SignatureType sigType)
   * @param _signerAddress Address that should have signed the given hash.
   */
  isValidSignature(
    _signerAddress: string,
    _hash: BytesLike,
    _data: BytesLike,
    _sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  staticCall: {
    /**
     * Verifies that a hash has been signed by the given signer.
     * @param _data Full EIP-712 data structure that was hashed and signed
     * @param _hash Hash of the EIP-712 encoded data
     * @param _sig Proof that the hash has been signed by signer.     For non wallet signatures, _sig is expected to be an array tightly encoded as     (bytes32 r, bytes32 s, uint8 v, uint256 nonce, SignatureType sigType)
     * @param _signerAddress Address that should have signed the given hash.
     */
    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike
    ): Promise<PopulatedTransaction>;
  };
}
