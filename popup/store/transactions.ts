import type {
  MessagePayload,
  TransactionForConfirm,
  StoredTx,
} from "types/transaction";
import { writable } from "svelte/store";

interface TxStore {
  forConfirm: TransactionForConfirm[];
  transactions: StoredTx[];
  message?: MessagePayload;
}
export default writable<TxStore>({
  forConfirm: [],
  transactions: [],
  message: undefined,
});
