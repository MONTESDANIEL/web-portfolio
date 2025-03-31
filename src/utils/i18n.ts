import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "/src/assets/locales/en/translation.json";
import esTranslation from "/src/assets/locales/es/translation.json";

type TranslationResources = typeof enTranslation;

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      en: TranslationResources;
      es: TranslationResources;
    };
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((error) => console.error("Error initializing i18n:", error));

export default i18n;
