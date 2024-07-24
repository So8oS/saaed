import React from "react";

const WhyUs = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-7 my-24 py-20 text-center  border-t border-b border-slate-300"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Why Choose Us?
      </h2>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
        Bespoke Coaching and Consulting Solutions
      </h3>
      <ul className="text-gray-800 flex flex-col gap-7  pl-1 list-inside list-disc">
        <li className="text-sm md:text-base lg:text-xl leading-relaxed px-4 md:px-8 text-justify">
          At SAAED, we specialize in providing bespoke coaching and consulting
          solutions tailored to the unique needs of each entity we serve. Our
          commitment is to deliver exceptional value by creating customized
          programs that address specific challenges and goals.
        </li>
        <li className="text-sm md:text-base lg:text-xl leading-relaxed px-4 md:px-8 text-justify">
          Whether you are a business, government agency, or any other
          organization, we work closely with you to develop a distinctive
          product that aligns perfectly with your requirements.
        </li>
        <li className="text-sm md:text-base lg:text-xl leading-relaxed px-4 md:px-8 text-justify">
          Our mission is to empower you with the tools and strategies needed for
          success, ensuring that our services are as unique and effective as the
          organizations we support.
        </li>
      </ul>
    </div>
  );
};

export default WhyUs;
