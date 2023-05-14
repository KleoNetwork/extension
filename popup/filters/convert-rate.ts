import Big from "big.js";

Big.PE = 99;

export function convertRate(rate = 0, balance: string | number) {
  if (Number(balance) === 0) {
    return Big(0);
  }

  const _balance = Big(balance);
  const _rate = Big(rate);

  return _balance.mul(_rate);
}
