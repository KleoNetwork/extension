import { NETWORK, NETWORK_KEYS } from "config/network";
import { writable } from "svelte/store";

export default writable({
  config: NETWORK,
  selected: NETWORK_KEYS[0],
});
