/* eslint-disable @next/next/no-img-element */
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { usePathname } from "next/navigation";

const Language = () => {
  const pathname = usePathname();

  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const [lang, setLang] = useState(locale);

  const changeLanguage = (nextLocale: React.SetStateAction<string>) => {
    startTransition(() => {
      setLang(nextLocale);
      router.push(
        `/${nextLocale}/${pathname.length > 4 ? pathname.split("/")[2] : ""}`
      );
    });
  };

  return (
    <div className="flex justify-center items-center">
      {lang === "en" ? (
        <img
          src="/ar.png"
          alt="Language"
          className="w-8 cursor-pointer"
          onClick={() => changeLanguage("ar")}
        />
      ) : (
        <img
          src="/en.png"
          alt="Language"
          className="w-8 cursor-pointer"
          onClick={() => changeLanguage("en")}
        />
      )}
    </div>
  );
};

export default Language;
