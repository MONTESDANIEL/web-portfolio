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
    debug: true,
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    console.log("i18n initialized successfully.");
    console.log("Current Language:", i18n.language);
  })
  .catch((error) => {
    console.error("Error initializing i18n:", error);
  });

i18n.on("languageChanged", (lng) => {
  console.log(`Language changed to: ${lng}`);
  console.log(
    "Current Translations:",
    i18n.getResourceBundle(lng, "translation")
  );
});

export default i18n;
