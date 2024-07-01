/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";
import { Popup } from "./popup";

const Hero = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center pb-16  ">
      <h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 "
        data-aos="fade-up"
      >
        Unlock Your Potential{" "}
      </h1>
      <p
        className="text-base md:text-xl  leading-relaxed  md:px-14"
        data-aos="fade-up"
      >
        At SAAED, our mission is to empower individuals and organizations by
        providing expert guidance and support through our diverse range of
        services and research initiatives.{" "}
      </p>

      <Link
        data-aos="fade-up"
        href="/book"
        className="  bg-black  text-white text-lg font-semibold  px-8 py-2 rounded-full mt-8
                  hover:bg-slate-300 hover:text-black transition duration-300 

        "
      >
        Book Now
      </Link>
      {/* <Popup /> */}
    </div>
  );
};

export default Hero;
