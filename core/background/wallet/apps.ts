import type { StreamResponse } from "types/stream";
import type { ZIlPayCore } from "./core";
import type { AppConnect } from "types/app-connect";
import { MTypeTab } from "lib/streem/stream-keys";
import { TabsMessage } from "lib/streem/tabs-message";
import { ErrorMessages } from "config/errors";
import { uuidv4 } from "lib/crypto/uuid";
import { payloadConnect } from "types/connect";

export class ZilPayApps {
  readonly #core: ZIlPayCore;

  constructor(core: ZIlPayCore) {
    this.#core = core;
  }

  public showWalletData(domain: string, sendResponse: StreamResponse) {
    try {
      const has = this.#core.apps.isConnected(domain);
      let account = null;

      if (has) {
        account = {
          base16: this.#core.account.selectedAccount.base16,
          bech32: this.#core.account.selectedAccount.bech32,
        };
      }

      sendResponse({
        resolve: {
          account,
          netwrok: this.#core.netwrok.selected,
          http: this.#core.netwrok.provider,
          nativeHttp: this.#core.netwrok.nativeHttp,
          isConnect: has,
          isEnable: this.#core.guard.isEnable,
          phishing: this.#core.apps.phishing,
        },
      });
    } catch (err) {
      sendResponse({
        reject: err.message,
      });
    }
  }

  public async setPhishing(value: boolean, sendResponse: StreamResponse) {
    try {
      this.#core.guard.checkSession();
      await this.#core.apps.setPhishing(value);

      sendResponse({
        resolve: this.#core.state,
      });
    } catch (err) {
      sendResponse({
        reject: err.message,
      });
    }
  }

  public async userResponse(
    payload: payloadConnect,
    sendResponse: StreamResponse
  ) {
    try {
      if (payload.confiremd) {
        //const app = this.#core.apps.confirmApp;
        console.log("this is confiremd", payload);
        await new TabsMessage({
          type: MTypeTab.RESPONSE_TO_DAPP,
          payload: payload,
        }).send();
        //await this.#core.apps.add(app);
        //await this.#core.apps.add(app);
      } else {
        console.log("not confimed", payload);
      }
      await this.#core.apps.rejectConfirm();
      sendResponse({
        resolve: this.#core.state,
      });
    } catch (err) {}
  }

  // public async userResponse(confiremd: boolean, sendResponse: StreamResponse) {
  //   try {
  //     this.#core.guard.checkSession();
  //     const app = this.#core.apps.confirmApp;
  //     const uuid = String(app.uuid);
  //     console.log("app uuid", app.uuid);
  //     console.log("is it confirmed?", confiremd);
  //     console.log("state", this.#core.state);
  //     if (confiremd) {
  //       console.log("inside if");
  //       const account = {
  //         base16: this.#core.account.selectedAccount.base16,
  //         bech32: this.#core.account.selectedAccount.bech32,
  //       };
  //       await new TabsMessage({
  //         type: MTypeTab.RESPONSE_TO_DAPP,
  //         payload: {
  //           uuid,
  //           account,
  //         },
  //       }).send();
  //       try {
  //         // await this.#core.apps.add(app);
  //       } catch {
  //         await this.#core.apps.rejectConfirm();
  //       }
  //     } else {
  //       await new TabsMessage({
  //         type: MTypeTab.RESPONSE_TO_DAPP,
  //         payload: {
  //           uuid,
  //           reject: ErrorMessages.Rejected,
  //         },
  //       }).send();
  //       await this.#core.apps.rejectConfirm();
  //     }
  //     console.log("send Response", sendResponse);
  //     console.log(this.#core.apps);
  //     sendResponse({
  //       resolve: this.#core.state,
  //     });
  //   } catch (err) {
  //     console.log("is there error?", err);
  //     sendResponse({
  //       reject: err.message,
  //     });
  //   }
  // }

  public async disconnectApp(app: AppConnect, sendResponse: StreamResponse) {
    try {
      const foundIndex = this.#core.apps.connections.findIndex(
        (c) => c.domain === app.domain
      );

      if (foundIndex >= 0) {
        this.#core.apps.rm(foundIndex);
      }

      await new TabsMessage({
        type: MTypeTab.RESPONSE_TO_DAPP,
        payload: {
          uuid: app.uuid,
          account: null,
        },
      }).send();
    } catch (err) {
      sendResponse({
        reject: err.message,
      });
    }
  }

  // public async addConfirm(app: AppConnect, sendResponse: StreamResponse) {
  //     try {
  //       console.log("hello world", app);

  //       const has = this.#core.apps.isConnected(app.domain);
  //       console.log("has is true?", has);
  //       console.log("this guard enable", this.#core.guard.isEnable);
  //       if (has && this.#core.guard.isEnable) {
  //         const account = {
  //           base16: this.#core.account.selectedAccount.base16,
  //           bech32: this.#core.account.selectedAccount.bech32,
  //         };
  //         await new TabsMessage({
  //           type: MTypeTab.RESPONSE_TO_DAPP,
  //           payload: {
  //             account,
  //             uuid: app.uuid,
  //           },
  //         }).send();
  //       } else {
  //         await this.#core.apps.addConfirm(app);
  //         sendResponse({
  //           resolve: {
  //             app,
  //           },
  //         });
  //         await this.#core.prompt.open();
  //       }
  //     } catch (err) {
  //       sendResponse({
  //         reject: err.message,
  //       });
  //     }
  //   }

  public async addConfirm(app: AppConnect, sendResponse: StreamResponse) {
    try {
      const has = this.#core.apps.isConnected(app.domain);
      console.log("has is true?", has);
      if (has) {
        // This should mention the
        console.log("already connected?");
        await this.#core.apps.addConfirm(app);
        sendResponse({
          resolve: {
            app,
          },
        });
        await this.#core.prompt.open();
      } else {
        await this.#core.apps.addConfirm(app);
        sendResponse({
          resolve: {
            app,
          },
        });
        await this.#core.prompt.open();
      }
    } catch (err) {
      sendResponse({
        reject: err.message,
      });
    }
  }

  public async removeApp(index: number, sendResponse: StreamResponse) {
    try {
      this.#core.guard.checkSession();
      await this.#core.apps.rm(index);

      sendResponse({
        resolve: this.#core.state,
      });
    } catch (err) {
      sendResponse({
        reject: err.message,
      });
    }
  }

  public async clearApps(sendResponse: StreamResponse) {
    try {
      this.#core.guard.checkSession();
      await this.#core.apps.reset();

      sendResponse({
        resolve: this.#core.state,
      });
    } catch (err) {
      sendResponse({
        reject: err.message,
      });
    }
  }
}
