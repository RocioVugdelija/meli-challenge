import { currencyMap } from './currencyMap';

export default function  getSymbolFromCurrencyCode(currencyCode : string) {
  const code = currencyCode.toUpperCase();
  if (!currencyMap.hasOwnProperty(code)) {
    return currencyCode;
  }
  const currencySymbol = currencyMap[code];

  return currencySymbol;
}