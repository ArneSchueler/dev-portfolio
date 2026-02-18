import { EN } from "./en/index.js";
import { DE } from "./de/index.js";

export const DATA_BY_LANG = { en: EN, de: DE };

export function getData(lang) {
  return DATA_BY_LANG[lang] ?? EN;
}
