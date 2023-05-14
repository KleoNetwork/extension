import type { Apps } from "types/account";
import { writable } from "svelte/store";

export default writable<Apps>({
  connections: [],
});
