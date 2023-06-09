import { DEFAULT_CURRENCIES } from "config/currencies";
import assert from "assert";
import { BrowserStorage, buildObject } from "lib/storage";
import { Fields } from "config/fields";
import { ErrorMessages } from "config/errors";

export class CurrenciesController {
  #selected = DEFAULT_CURRENCIES[0];

  public get selected() {
    return this.#selected;
  }

  public async update(newSelected: string) {
    assert(
      DEFAULT_CURRENCIES.includes(newSelected),
      `${ErrorMessages.IncorrectParams} newSelected`
    );

    this.#selected = newSelected;

    await BrowserStorage.set(
      buildObject(Fields.SELECTED_CURRENCY, this.selected)
    );
  }

  public async sync() {
    const content = await BrowserStorage.get(Fields.SELECTED_CURRENCY);
    const selected = String(content);

    if (!content || !DEFAULT_CURRENCIES.includes(selected)) {
      return this.reset();
    }

    this.#selected = selected;
  }

  public async reset() {
    this.#selected = DEFAULT_CURRENCIES[0];

    await BrowserStorage.set(
      buildObject(Fields.SELECTED_CURRENCY, this.selected)
    );
  }
}
