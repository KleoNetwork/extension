import { Contracts } from "config/contracts";
import { Runtime } from "lib/runtime";
import { RPCMethod } from "config/methods";
import { httpProvider } from "./provider";

export class PhishingDetect {
  #host = String(window.location.host).replace("www.", "");
  #field = "domains";
  #url = Runtime.extension.getURL("phishing.html");
  #checked = false;

  public get checked() {
    return this.#checked;
  }

  public phishing = false;
  public http = "";

  async check() {
    if (!this.http || !this.phishing) {
      return;
    }
    this.#checked = true;

    try {
      const params = [Contracts.Phishing, this.#field, [this.#host]];
      const { result } = await httpProvider(
        this.http,
        RPCMethod.GetSmartContractSubState,
        params
      );

      if (result && result[this.#field]) {
        window.location.replace(this.#url);
      }
    } catch {
      //
    }
  }
}
