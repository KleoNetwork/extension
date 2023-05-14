import type { ZRCNFT } from "types/token";
import { writable } from "svelte/store";

export default writable<ZRCNFT[]>([]);
