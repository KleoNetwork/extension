import { Common } from "config/common";
import { writable } from "svelte/store";

export default writable<number>(Number(Common.TIME_BEFORE_LOCK));
