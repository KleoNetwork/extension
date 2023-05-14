import type { SSN } from "types/ssn";
import { writable } from "svelte/store";

export default writable({
  selected: 0,
  list: [] as SSN[],
});
