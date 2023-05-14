import { Message } from "lib/streem/message";
import { MTypePopup } from "lib/streem/stream-keys";
import { warpMessage } from "lib/utils/warp-message";
import { updateState } from "./store-update";

export async function selectNetwrok(net: string) {
  const data = await new Message({
    type: MTypePopup.SELECT_NETWORK,
    payload: {
      net,
    },
  }).send();
  const state = warpMessage(data);
  updateState(state);
  return state;
}

export async function getLatestBlockNumber() {
  const data = await Message.signal(MTypePopup.GET_LATEST_BLOCK).send();
  const state = warpMessage(data);
  updateState(state);
  return state;
}

export async function changeConfig(config: object) {
  const data = await new Message({
    type: MTypePopup.SET_NET_CONFIG,
    payload: config,
  }).send();
  const state = warpMessage(data);
  updateState(state);
  return state;
}

export async function resetNetwrok() {
  const data = await Message.signal(MTypePopup.RESET_NETWROK).send();
  const state = warpMessage(data);
  updateState(state);
  return state;
}

export async function updateSSN() {
  const data = await Message.signal(MTypePopup.UPDATE_SSN_LIST).send();
  const state = warpMessage(data);
  updateState(state);
  return state;
}

export async function selectSSN(index: number) {
  const data = await new Message({
    type: MTypePopup.SELECT_SSN,
    payload: index,
  }).send();
  const state = warpMessage(data);
  updateState(state);
  return state;
}
