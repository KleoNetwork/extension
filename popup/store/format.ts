import { writable } from "svelte/store";
import { Formats } from "config/formats";

export default writable<string>(Formats.Bech32);
