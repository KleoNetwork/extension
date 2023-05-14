import type { Wallet } from "types/account";
import { writable } from "svelte/store";

export default writable<Wallet>({
  selectedAddress: 0,
  identities: [],
});
