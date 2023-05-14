import type { ParamItem } from "types/transaction";

export enum InitFields {
  ContractOwner = "contract_owner",
  Name = "name",
  Symbol = "symbol",
  Decimals = "decimals",
  Address = "_this_address",
  InitSupply = "init_supply",
  InitialBaseUri = "initial_base_uri",
}

export function findParam(
  init: ParamItem[],
  vname: string
): undefined | string {
  return init.find((param) => param.vname === vname)?.value as string;
}

export function initParser(init: ParamItem[]) {
  const symbol = findParam(init, InitFields.Symbol) || "";
  const name = findParam(init, InitFields.Name) || "";
  const decimals = Number(findParam(init, InitFields.Decimals));
  const initSupply = findParam(init, InitFields.InitSupply);
  const contractOwner =
    findParam(init, InitFields.ContractOwner) ||
    findParam(init, "contract_owner");
  const baseUri = findParam(init, InitFields.InitialBaseUri);
  const address = findParam(init, InitFields.Address);

  return {
    name,
    symbol,
    decimals,
    initSupply,
    contractOwner,
    baseUri,
    address,
  };
}
