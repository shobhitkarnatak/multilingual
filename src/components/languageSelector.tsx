import React from "react";
import i18n from "../i18n";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" },
  { code: "mr", name: "मराठी" },
  { code: "telugu", name: "తెలుగు" },
  { code: "tamil", name: "தமிழ்" },
  { code: "bengali", name: "বাংলা" },
  { code: "gujrati", name: "ગુજરાતી" },
];

const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
};

const LanguageSelector: React.FC = () => {
  return (
    <>
      {languages.map((lang) => (
        <button key={lang.code} onClick={() => changeLanguage(lang.code)}>
          {lang.name}
        </button>
      ))}
    </>
  );
};

export default LanguageSelector;
