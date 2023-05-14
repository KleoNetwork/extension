import type { KleoWallet } from "types/token";
import { writable } from "svelte/store";

export default writable<KleoWallet[]>([]);
