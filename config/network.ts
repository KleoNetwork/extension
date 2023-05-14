export const NETWORK = {
  mainnet: {
    PROVIDER: "https://api.zilliqa.com",
    MSG_VERSION: 1,
  },
  testnet: {
    PROVIDER: "https://dev-api.zilliqa.com",
    MSG_VERSION: 1,
  },
  private: {
    PROVIDER: "http://127.0.0.1:5555",
    MSG_VERSION: 1,
  },
};
export const NETWORK_KEYS = Object.keys(NETWORK);
