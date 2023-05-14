import type { RateCurrencies } from "types/zilliqa";
import { writable } from "svelte/store";

export default writable<RateCurrencies>({
  btc: 0,
  eth: 0,
  usd: 0,
});
