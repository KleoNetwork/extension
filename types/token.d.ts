export interface KleoWallet {
  balance: number;
}
export interface ZRC2Token {
  decimals: number;
  name: string;
  symbol: string;
  base16: string;
  bech32: string;
  rate: number;
  pool?: string[];
}

export interface InitItem {
  type: string;
  value: string;
  vname: string;
}

export interface ZRC2Info {
  balance: string;
  bech32: string;
  name: string;
  symbol: string;
  decimals: number;
  base16: string;
  rate: number;
  pool?: string[];
}

export interface Attribute {
  display_type: string;
  trait_type: string;
  value: number;
}

export interface NFTMetadata {
  name: string;
  image: string;
  attributes: Attribute[];
}

export interface NFTToken {
  id: string;
  url: string;
  meta?: NFTMetadata;
}

export interface ZRCNFT {
  base16: string;
  bech32: string;
  name: string;
  symbol: string;
  baseUri?: string;
  balances: NFTToken[];
}

export interface NFTFromServer {
  base16: string;
  baseUri: string | null;
  bech32: string;
  name: string;
  symbol: string;
  balances: {
    tokenId: string;
    url: string;
  }[];
}
