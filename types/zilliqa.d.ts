import type { TxParams } from "types/transaction";

export type Params =
  | TxParams[]
  | string[]
  | number[]
  | (string | string[] | number[])[];
export type Balance = {
  nonce: number;
  balance: string;
};

export interface SignedMessage {
  message: string;
  publicKey: string;
  signature: string;
}

export interface RPCBody {
  id: number;
  jsonrpc: string;
  method: string;
  params: Params;
}

export interface RPCResponse {
  id: number;
  jsonrpc: string;
  result?: any;
  error?: {
    code: number;
    data: unknown;
    message: string;
  };
}

export interface RateCurrencies {
  [currency: string]: number;
}

declare global {
  interface Navigator {
    hid: {
      getDevices(opt: any): Promise<any[]>;
      requestDevice(opt: any): Promise<any[]>;
    };
  }
}
