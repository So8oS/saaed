/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import Link from "next/link";

const routes = [
  {
    name: "Home",
    icon: <IoHome className="w-8 h-8" />,
    path: "/",
  },
  {
    name: "About",
    icon: <BsInfoCircleFill className="w-8 h-8" />,
    path: "/about",
  },
];

const Sidbar = () => {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <CiMenuFries className="w-8 h-8 cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="flex  flex-col justify-between   gap-8 font-Lora  border-r border-t border-l border-black  ">
          <img src="./logo.png" alt="Logo" className="w-20 pt-8 self-center" />
          <div className="flex flex-col  text-2xl gap-8 border-y border-slate-900 py-5 ">
            {routes.map((route, index) => (
              <Link
                href={`/${route.path}`}
                key={index}
                className="flex  items-center gap-5  p-2 rounded-md "
              >
                {route.icon}
                <h1
                  className="self start cursor-pointer
            "
                >
                  {route.name}
                </h1>
              </Link>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            {lang === "en" ? (
              <img
                src="./ar.png"
                alt="Language"
                className="w-12 cursor-pointer self-center"
                onClick={() => setLang("ar")}
              />
            ) : (
              <img
                src="./en.png"
                alt="Language"
                className="w-12 cursor-pointer self-center"
                onClick={() => setLang("en")}
              />
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidbar;
