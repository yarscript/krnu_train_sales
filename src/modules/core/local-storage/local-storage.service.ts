import { Injectable } from '@angular/core';

const APP_PREFIX = 'TTA-';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService
{
  constructor() {}

  static loadInitialState() {
    return Object.keys(localStorage).reduce((state: any, storageKey) => {
      state = JSON.parse(localStorage.getItem(storageKey));

      if (storageKey.includes(APP_PREFIX)) {
        const stateKeys =
          storageKey.replace(APP_PREFIX, '').toLowerCase().split('.').map(
            (key) =>
              key.split('-').map(
                (token, index) => index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1)
              ).join('')
          );

        let currentStateRef = state;

        console.log('currentStateRef', currentStateRef)

        stateKeys.forEach((key, index) => {
          if (index === stateKeys.length - 1) {
            currentStateRef = { ...JSON.parse(localStorage.getItem(storageKey)) };
            currentStateRef[key] = currentStateRef[key] || {};

            console.log('currentStateRef after parse =====>>', currentStateRef)
            // console.log('JSON.parse(localStorage.getItem(storageKey))', JSON.parse(localStorage.getItem(storageKey)))
            return ;
          }
          console.log('currentStateRef[key] =====>>', currentStateRef[key])
          currentStateRef[key] = currentStateRef[key] || {};
          currentStateRef = currentStateRef[key];
        });
      }
      console.log('state bero return', state)
      return state;
    }, {});
  }

  setItem(key: string, value: any) {
    console.log('LocalStorage setItem::key =====>>', key)
    console.log('LocalStorage setItem::value =====>>', value)
    localStorage.setItem(`${ APP_PREFIX }${ key }`, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(`${ APP_PREFIX }${ key }`));
  }

  removeItem(key: string) {
    localStorage.removeItem(`${ APP_PREFIX }${ key }`);
  }

  /** Tests that localStorage exists, can be written to, and read from. */
  testLocalStorage() {
    const testValue = 'testValue';
    const testKey = 'testKey';
    const errorMessage = 'localStorage did not return expected value';

    this.setItem(testKey, testValue);
    const retrievedValue = this.getItem(testKey);
    this.removeItem(testKey);

    if (retrievedValue !== testValue) {
      throw new Error(errorMessage);
    }
  }
}
