import { Themes } from "config/theme";
import { writable } from "svelte/store";

export default writable<string>(Themes.Light);
