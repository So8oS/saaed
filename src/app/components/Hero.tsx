/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
import WordFadeIn from "@/components/magicui/word-fade-in";

const Hero = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center pb-16  ">
      <WordFadeIn words="Unlock Your Potential" delay={0.05} className="mb-4" />
      {/* <h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 "
        // data-aos="fade-up"
      >
        Unlock Your Potential{" "}
      </h1> */}
      <p
        className="text-base md:text-xl  leading-relaxed  md:px-14"
        data-aos="fade-up"
      >
        At SAAED, our mission is to empower individuals and organizations by
        providing expert guidance and support through our diverse range of
        services and research initiatives.{" "}
      </p>

      <Link data-aos="fade-up" href="/book" className=" mt-8 z-10">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-lg text-center font-medium leading-none px-2 tracking-tight text-white">
            Book Now
          </span>
        </ShimmerButton>
      </Link>
      {/* <Popup /> */}
    </div>
  );
};

export default Hero;
