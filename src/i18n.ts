import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "hi", // default language
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "Hello, Welcome",
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते, स्वागत है",
        },
      },
      mr: {
        translation: {
          greeting: "नमस्कार, स्वागत आहे",
        },
      },
      telugu: {
        translation: {
          greeting: "హలో, స్వాగతం",
        },
      },
      tamil: {
        translation: {
          greeting: "வணக்கம், வரவேற்கிறோம்",
        },
      },
      bengali: {
        translation: {
          greeting: "হ্যালো, স্বাগতম",
        },
      },
    gujrati: { 
      translation: {
        greeting: "હેલો, સ્વાગત છે",
      },
    },
  }
  });

export default i18n;
