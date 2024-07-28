/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Language = () => {
  const [lang, setLang] = useState("en");
  const { i18n } = useTranslation();
  return (
    <div>
      {lang === "en" ? (
        <img
          src="./ar.png"
          alt="Language"
          className="w-8 cursor-pointer"
          onClick={() => {
            setLang("ar");
            i18n.changeLanguage("ar");
          }}
        />
      ) : (
        <img
          src="./en.png"
          alt="Language"
          className="w-8 cursor-pointer"
          onClick={() => {
            setLang("en");
            i18n.changeLanguage("en");
          }}
        />
      )}
    </div>
  );
};

export default Language;
