import { APIs, ViewBlockMethods } from "config/api-list";
import { Themes } from "config/theme";

export function viewTransaction(hash: string, netwrok: string) {
  const url = APIs.VIEW_BLOCK_URL;
  const type = ViewBlockMethods.Transaction;

  return `${url}/${type}/${hash}?network=${netwrok}`;
}

export function viewAddress(address: string, netwrok: string) {
  const url = APIs.VIEW_BLOCK_URL;
  const type = ViewBlockMethods.Address;

  return `${url}/${type}/${address}?network=${netwrok}`;
}

export function viewIcon(addr: string, theme: Themes | string) {
  addr = addr === "zil1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq9yf6pz" ? "ZIL" : addr;

  const color = theme === Themes.Dark ? "dark" : "light";
  return `https://meta.viewblock.io/zilliqa.${addr}/logo?t=${color}`;
}
