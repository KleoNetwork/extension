export interface TxBlock {
  TxBlock: {
    body: {
      BlockHash: string;
      HeaderSign: string;
      MicroBlockInfos: {
        MicroBlockHash: string;
        MicroBlockShardId: number;
        MicroBlockTxnRootHash: string;
      }[];
    };
    header: {
      BlockNum: string;
      DSBlockNum: string;
      GasLimit: string;
      GasUsed: string;
      MbInfoHash: string;
      MinerPubKey: string;
      NumMicroBlocks: number;
      NumPages: number;
      NumTxns: number;
      PrevBlockHash: string;
      Rewards: string;
      StateDeltaHash: string;
      StateRootHash: string;
      Timestamp: string;
      TxnFees: string;
      Version: number;
    };
  };
  TxHashes: Array<string[]>;
}
