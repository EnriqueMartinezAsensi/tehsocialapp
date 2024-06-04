import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es_ES from "../locales/es_ES/translations.json";
import en_GB from "../locales/en_GB/translations.json";
import jp_JP from "../locales/jp_JP/translations.json";

const resources = {
  es_ES: { translation: es_ES },
  en_GB: { translation: en_GB },
  jp_JP: { translation: jp_JP },
};

const getDefaultLanguage = () => {
  const languajeStored = window.localStorage.getItem("languaje");

  if (languajeStored) return languajeStored;

  const browserLanguage = navigator.language;
  const languajes = Object.keys(resources);

  const language = languajes.find((lang) =>
    lang.replace("_", "").toLowerCase().includes(browserLanguage.replace("-", "").replace("_", "").toLowerCase())
  );
  return language;
};

const initI18n = () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: getDefaultLanguage(),
  });
};

export default initI18n;
