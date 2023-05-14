import { writable } from "svelte/store";
import { DEFAULT_CURRENCIES } from "config/currencies";

export default writable<string>(DEFAULT_CURRENCIES[0]);
