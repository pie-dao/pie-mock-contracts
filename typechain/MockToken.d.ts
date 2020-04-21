/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface MockTokenInterface extends Interface {
  functions: {
    allowance: TypedFunctionDescription<{
      encode([owner, spender]: [string, string]): string;
    }>;

    approve: TypedFunctionDescription<{
      encode([spender, amount]: [string, BigNumberish]): string;
    }>;

    balanceOf: TypedFunctionDescription<{
      encode([account]: [string]): string;
    }>;

    burn: TypedFunctionDescription<{
      encode([_from, _amount]: [string, BigNumberish]): string;
    }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    decreaseAllowance: TypedFunctionDescription<{
      encode([spender, subtractedValue]: [string, BigNumberish]): string;
    }>;

    failTransfer: TypedFunctionDescription<{ encode([]: []): string }>;

    failTransferFrom: TypedFunctionDescription<{ encode([]: []): string }>;

    increaseAllowance: TypedFunctionDescription<{
      encode([spender, addedValue]: [string, BigNumberish]): string;
    }>;

    mint: TypedFunctionDescription<{
      encode([_to, _amount]: [string, BigNumberish]): string;
    }>;

    name: TypedFunctionDescription<{ encode([]: []): string }>;

    returnFalseTransfer: TypedFunctionDescription<{ encode([]: []): string }>;

    returnFalseTransferFrom: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    setTransferFailed: TypedFunctionDescription<{
      encode([_value]: [boolean]): string;
    }>;

    setTransferFromFailed: TypedFunctionDescription<{
      encode([_value]: [boolean]): string;
    }>;

    setTransferFromReturnFalse: TypedFunctionDescription<{
      encode([_value]: [boolean]): string;
    }>;

    setTransferReturnFalse: TypedFunctionDescription<{
      encode([_value]: [boolean]): string;
    }>;

    symbol: TypedFunctionDescription<{ encode([]: []): string }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([_to, _amount]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([_from, _to, _amount]: [string, string, BigNumberish]): string;
    }>;
  };

  events: {
    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class MockToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MockToken;
  attach(addressOrName: string): MockToken;
  deployed(): Promise<MockToken>;

  on(event: EventFilter | string, listener: Listener): MockToken;
  once(event: EventFilter | string, listener: Listener): MockToken;
  addListener(eventName: EventFilter | string, listener: Listener): MockToken;
  removeAllListeners(eventName: EventFilter | string): MockToken;
  removeListener(eventName: any, listener: Listener): MockToken;

  interface: MockTokenInterface;

  functions: {
    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    balanceOf(account: string): Promise<BigNumber>;

    burn(
      _from: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    decimals(): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    failTransfer(): Promise<boolean>;

    failTransferFrom(): Promise<boolean>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    mint(
      _to: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    name(): Promise<string>;

    returnFalseTransfer(): Promise<boolean>;

    returnFalseTransferFrom(): Promise<boolean>;

    setTransferFailed(
      _value: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setTransferFromFailed(
      _value: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setTransferFromReturnFalse(
      _value: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setTransferReturnFalse(
      _value: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    symbol(): Promise<string>;

    totalSupply(): Promise<BigNumber>;

    transfer(
      _to: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  allowance(owner: string, spender: string): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  balanceOf(account: string): Promise<BigNumber>;

  burn(
    _from: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  decimals(): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  failTransfer(): Promise<boolean>;

  failTransferFrom(): Promise<boolean>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  mint(
    _to: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  name(): Promise<string>;

  returnFalseTransfer(): Promise<boolean>;

  returnFalseTransferFrom(): Promise<boolean>;

  setTransferFailed(
    _value: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setTransferFromFailed(
    _value: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setTransferFromReturnFalse(
    _value: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setTransferReturnFalse(
    _value: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  symbol(): Promise<string>;

  totalSupply(): Promise<BigNumber>;

  transfer(
    _to: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferFrom(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimate: {
    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(spender: string, amount: BigNumberish): Promise<BigNumber>;

    balanceOf(account: string): Promise<BigNumber>;

    burn(_from: string, _amount: BigNumberish): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish
    ): Promise<BigNumber>;

    failTransfer(): Promise<BigNumber>;

    failTransferFrom(): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish
    ): Promise<BigNumber>;

    mint(_to: string, _amount: BigNumberish): Promise<BigNumber>;

    name(): Promise<BigNumber>;

    returnFalseTransfer(): Promise<BigNumber>;

    returnFalseTransferFrom(): Promise<BigNumber>;

    setTransferFailed(_value: boolean): Promise<BigNumber>;

    setTransferFromFailed(_value: boolean): Promise<BigNumber>;

    setTransferFromReturnFalse(_value: boolean): Promise<BigNumber>;

    setTransferReturnFalse(_value: boolean): Promise<BigNumber>;

    symbol(): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transfer(_to: string, _amount: BigNumberish): Promise<BigNumber>;

    transferFrom(
      _from: string,
      _to: string,
      _amount: BigNumberish
    ): Promise<BigNumber>;
  };
}
