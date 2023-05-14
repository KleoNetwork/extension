import type { Contact } from "types/contact";
import { writable } from "svelte/store";

export default writable<Contact[]>([]);
