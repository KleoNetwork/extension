import type { ZIlPayBackground } from "core/background/wallet/bg-zilpay";
import { MTypePopup, MTypeTab } from "lib/streem/stream-keys";
import { Runtime } from "lib/runtime";

export function startBackground(core: ZIlPayBackground) {
  Runtime.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (sender.id !== Runtime.runtime.id) {
      sendResponse(null);
      return true;
    }
    switch (msg.type) {
      case MTypePopup.KLEO_CONNECTIONS:
        console.log("send Response abc", sendResponse);
        return true;
      case MTypePopup.GET_LATEST_BLOCK:
        console.log("send Response", sendResponse);
        core.netwrok.getLatestBlockNumber(sendResponse);
        return true;
      case MTypePopup.UPDATE_DEX_DATA:
        console.log("send Response", sendResponse);
        core.settings.updateDexData(sendResponse);
        return true;
      case MTypePopup.UPDATE_DEX_SETTINGS:
        console.log("message payload blocks", msg.payload.blocks);
        console.log("message payload slippage", msg.payload.slippage);
        console.log("send Response", sendResponse);
        core.settings.updateDexSettings(
          msg.payload.blocks,
          msg.payload.slippage,
          sendResponse
        );
        return true;
      case MTypePopup.SET_PHISHING_DETECTION:
        core.apps.setPhishing(msg.payload.enabled, sendResponse);
        return true;
      case MTypePopup.GET_REQUIRED_PARAMS:
        core.transaction.getRequiredParams(msg.payload.index, sendResponse);
        return true;
      case MTypePopup.GET_CURRENT_NONCE:
        core.transaction.getCurrentNonce(sendResponse);
        return true;
      case MTypePopup.RESET_NONCE:
        core.transaction.resetNonce(sendResponse);
        return true;
      case MTypePopup.CLEAR_ALL_TXNS:
        core.transaction.clearHistory(sendResponse);
        return true;
      case MTypePopup.FROM_BECH32:
        core.settings.fromBech32(msg.payload.bech32, sendResponse);
        return true;
      case MTypePopup.SET_PROMT_ENABLED:
        core.settings.setPromtEnabled(msg.payload.enabled, sendResponse);
        return true;
      case MTypePopup.SET_ADDRESS_FORMAT:
        core.settings.setAddressFormat(msg.payload.format, sendResponse);
        return true;
      case MTypePopup.SET_LOCK_TIME:
        core.settings.setLockTime(msg.payload.h, sendResponse);
        return true;
      case MTypePopup.RESET_GAS:
        core.settings.resetGas(sendResponse);
        return true;
      case MTypePopup.SET_GAS_MULTIPLIER:
        core.settings.changeGasMultiplier(msg.payload.multiplier, sendResponse);
        return true;
      case MTypePopup.SET_LOCALE:
        core.settings.changeLocale(msg.payload.locale, sendResponse);
        return true;
      case MTypePopup.RESET_LOCALE:
        core.settings.resetLocale(sendResponse);
        return true;
      case MTypePopup.SET_THEME:
        core.settings.changeTheme(msg.payload.theme, sendResponse);
        return true;
      case MTypePopup.RESET_THEME:
        core.settings.resetTheme(sendResponse);
        return true;
      case MTypePopup.CHANGE_CURRENCY:
        core.settings.changeCurrency(msg.payload.currency, sendResponse);
        return true;
      case MTypePopup.RESET_CURRENCY:
        core.settings.resetCurrency(sendResponse);
        return true;
      case MTypePopup.UPDATE_RATE:
        core.settings.updateRate(sendResponse);
        return true;
      case MTypePopup.LEDGER_LOAD_ACCOUNT:
        core.wallet.loadLedgerAccount(msg.payload, sendResponse);
        return true;
      case MTypePopup.ADD_CONTACT:
        core.contacts.addContact(msg.payload.contact, sendResponse);
        return true;
      case MTypePopup.RM_CONTACT:
        core.contacts.removeContact(msg.payload.index, sendResponse);
        return true;
      case MTypeTab.GET_WALLET_DATA:
        core.apps.showWalletData(msg.domain, sendResponse);
        return true;
      case MTypeTab.CONNECT_APP:
        console.log("msg", msg);
        console.log("sendRsp", sendResponse);
        core.apps.addConfirm(msg.payload, sendResponse);
        return true;
      case MTypeTab.DISCONNECT_APP:
        core.apps.disconnectApp(msg.payload, sendResponse);
        return true;
      case MTypePopup.RM_APP:
        core.apps.removeApp(msg.payload.index, sendResponse);
        return true;
      case MTypePopup.CLEAR_APPS:
        core.apps.clearApps(sendResponse);
        return true;
      case MTypePopup.USER_RESPONSE_DAPP:
        console.log("this is being called sir?", msg.payload.confirmed);
        core.apps.userResponse(msg.payload, sendResponse);
        return true;
      case MTypeTab.CALL_TO_SIGN_TX:
        core.transaction.addConfirm(msg.payload, sendResponse);
        return true;
      case MTypeTab.SIGN_MESSAGE:
        core.transaction.addMessage(msg.payload, sendResponse);
        return true;
      case MTypePopup.REJECT_SIGN_MESSAGE:
        core.transaction.rejectMessage(sendResponse);
        return true;
      case MTypePopup.SIGN_MESSAGE_APPROVE:
        core.transaction.confirmSignMessage(msg.payload.index, sendResponse);
        return true;
      case MTypePopup.SELECT_ACCOUNT:
        core.wallet.selectAccount(msg.payload.index, sendResponse);
        return true;
      case MTypePopup.EXPORT_QR_CODE:
        core.wallet.exportAccountQRCode(msg.payload.index, sendResponse);
        return true;
      case MTypePopup.SELECT_NETWORK:
        core.netwrok.select(msg.payload.net, sendResponse);
        return true;
      case MTypePopup.RESET_NETWROK:
        core.netwrok.reset(sendResponse);
        return true;
      case MTypePopup.SET_NET_CONFIG:
        core.netwrok.changeConfig(msg.payload, sendResponse);
        return true;
      case MTypePopup.UPDATE_SSN_LIST:
        core.netwrok.updateSSN(sendResponse);
        return true;
      case MTypePopup.SELECT_SSN:
        core.netwrok.selectFromSSN(msg.payload, sendResponse);
        return true;
      case MTypePopup.GET_ZRC2_STATE:
        core.zrc.getZRC2Info(msg.payload.address, sendResponse);
        return true;
      case MTypePopup.RM_TOKEN:
        core.zrc.removeToken(msg.payload.index, sendResponse);
        return true;
      case MTypePopup.GET_ZRC2_ALLOWANCES_FOR_SWAP:
        core.zrc.getZRC2AllowancesForSwap(msg.payload, sendResponse);
        return true;
      case MTypePopup.UPDATE_NFT_LIST:
        core.zrc.updateNFTList(sendResponse);
        return true;
      case MTypePopup.FETCH_NFT:
        core.zrc.fetchNFT(msg.payload, sendResponse);
        return true;
      case MTypePopup.GET_NFT_LIST:
        core.zrc.getNFTList(sendResponse);
        return true;
      case MTypePopup.ADD_NFT:
        console.log("message payload", msg.payload);
        console.log("response", sendResponse);
        core.zrc.addNFT(msg.payload, sendResponse);
        return true;
      case MTypePopup.REMOVE_NFT:
        core.zrc.removeNFT(msg.payload, sendResponse);
        return true;
      case MTypePopup.RM_ACCOUNT:
        core.wallet.removeAccount(sendResponse);
        return true;
      case MTypePopup.SET_ACCOUNT_NAME:
        core.wallet.setAccountName(
          msg.payload.index,
          msg.payload.name,
          sendResponse
        );
        return true;
      case MTypePopup.ADD_ZRC2_TOKEN:
        core.zrc.addZRC2(msg.payload, sendResponse);
        return true;
      case MTypePopup.GET_WALLET_STATE:
        core.popup.initPopup(sendResponse);
        return true;
      case MTypePopup.EXPORT_SEED:
        core.wallet.exportSeedPhrase(msg.payload.password, sendResponse);
        return true;
      case MTypePopup.ENCRYPT_WALLET:
        core.wallet.exportEncrypted(sendResponse);
        return true;
      case MTypePopup.EXPORT_PRIVATE_KEY:
        core.wallet.exportPrivateKey(msg.payload.password, sendResponse);
        return true;
      case MTypePopup.EXPORT_QR_CODE_WALLET:
        core.wallet.exportQrcodeWallet(msg.payload.password, sendResponse);
        return true;
      case MTypePopup.IMPORT_PRIVATE_KEY:
        core.wallet.importPrivateKey(msg.payload, sendResponse);
        return true;
      case MTypePopup.IMPORT_TRACK_ACCOUNT:
        core.wallet.importTrackAccount(
          msg.payload.bech32,
          msg.payload.name,
          sendResponse
        );
        return true;
      case MTypePopup.IMPORT_KEYSTORE:
        /// TODO: make a keystore method in core.
        return true;
      case MTypePopup.GET_RANDOM_SEED:
        core.popup.randomizeWords(msg.payload.length, sendResponse);
        return true;
      case MTypePopup.CREATE_ACCOUNT_BY_SEED:
        console.log("message payload name", msg.payload.name);
        console.log("send Response", sendResponse);
        core.wallet.createAccountBySeed(msg.payload.name, sendResponse);
        return true;
      case MTypePopup.UPDATE_BALANCE:
        core.wallet.balanceUpdate(sendResponse);
        return true;
      case MTypePopup.UPDATE_TXNS:
        core.transaction.checkProcessedHistory(sendResponse);
        return true;
      case MTypePopup.SEND_TO_SIGN_TX:
        core.transaction.signSendTx(
          msg.payload.txIndex,
          msg.payload.index,
          msg.payload.params,
          sendResponse
        );
        return true;
      case MTypePopup.DOMAIN_RESOLVE:
        core.ud.getOwner(msg.payload.domain, sendResponse);
        return true;
      case MTypePopup.REJECT_CONFIRM_TX:
        core.transaction.rmConfirm(msg.payload.index, sendResponse);
        return true;
      case MTypePopup.REJECT_ALL_CONFIRM_TXNS:
        core.transaction.rejectAll(sendResponse);
        return true;
      case MTypePopup.SET_PASSWORD:
        core.popup.unlock(msg.payload.password, sendResponse);
        return true;
      case MTypePopup.LOG_OUT:
        core.popup.logout(sendResponse);
        return true;
      case MTypePopup.SET_SEED_AND_PASSWORD:
        core.popup.initSeedWallet(msg.payload, sendResponse);
        return true;
      default:
        sendResponse(null);
        return true;
    }
  });
}
