import { Message } from "lib/streem/message";
import { MTypePopup } from "lib/streem/stream-keys";
import { warpMessage } from "lib/utils/warp-message";

export async function getZNS(domain: string) {
  const data = await new Message({
    type: MTypePopup.DOMAIN_RESOLVE,
    payload: {
      domain,
    },
  }).send();
  return warpMessage(data);
}
