import { Message } from "lib/streem/message";
import { MTypePopup } from "lib/streem/stream-keys";
import { warpMessage } from "lib/utils/warp-message";
import { updateState } from "./store-update";

export async function changeGasMultiplier(multiplier: number) {
  const data = await new Message({
    type: MTypePopup.SET_GAS_MULTIPLIER,
    payload: {
      multiplier,
    },
  }).send();
  const state = warpMessage(data);
  updateState(state);
  return state;
}

export async function resetGas() {
  const data = await Message.signal(MTypePopup.RESET_GAS).send();
  const state = warpMessage(data);
  updateState(state);
  return state;
}
