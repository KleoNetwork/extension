import { Message } from "lib/streem/message";
import { MTypePopup } from "lib/streem/stream-keys";
import { warpMessage } from "lib/utils/warp-message";

export async function getRandomSeed(n: number) {
  const data = await new Message({
    type: MTypePopup.GET_RANDOM_SEED,
    payload: {
      length: n,
    },
  }).send();
  return warpMessage(data);
}
