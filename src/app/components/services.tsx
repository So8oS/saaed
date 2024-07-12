"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";

const services = {
  individual: [
    {
      service: "Mental & Professional Health",
      description:
        "Workshops focused on mental health awareness and stress management.",
      icon: "graduation-cap.png",
    },
    {
      service: "Relationship Coaching",
      description:
        "Strengthening interpersonal relationships and communication skills.",
      icon: "team.png",
    },
    {
      service: "Professional Coaching",
      description: "Career development and performance enhancement support.",
      icon: "suitcase.png",
    },
    {
      service: "Personal Coaching",
      description:
        "Guidance for achieving personal growth, balance, and fulfillment.",
      icon: "person.png",
    },
  ],
  business: [
    {
      service: "Team Development Programs",
      description:
        "Tailored programs for team development and improving work culture.",
      icon: "puzzle-piece.png",
    },
    {
      service: "Communication Coaching",
      description:
        "Training to enhance clarity and effectiveness in communication.",
      icon: "speak.png",
    },
    {
      service: "Executive Coaching",
      description:
        "Leadership development and strategic support for executives.",
      icon: "podium.png",
    },
    {
      service: "Emotional Intelligence Tests",
      description:
        "Comprehensive evaluations to improve emotional intelligence.",
      icon: "mental-health.png",
    },
  ],
};

const nums = [
  {
    icon: "certified.png",
    title: "Certified",
    text: "All trainers at Saaed are certified by the International Coaching Federation (ICF).",
  },
  {
    icon: "user.png",
    title: "Experienced",
    text: "Our trainers have over 10 years of experience in the field of coaching.",
  },
  {
    icon: "sales.png",
    title: "Effective",
    text: "Our coaching programs are designed to help you achieve your goals and improve your performance.",
  },
];

import {
  FaGraduationCap,
  FaHospital,
  FaLaptopCode,
  FaUtensils,
  FaRocket,
  FaHandsHelping,
  FaFemale,
} from "react-icons/fa";
import { Slider } from "./slider";
import ShimmerButton from "@/components/magicui/shimmer-button";

const sectors = [
  {
    title: "Education",
    icon: <FaGraduationCap className="w-6 h-6" />,
    description: "We provide educational solutions and support.",
  },
  {
    title: "Healthcare and Pharmaceuticals",
    icon: <FaHospital className="w-6 h-6" />,
    description: "We serve the healthcare and pharmaceutical sectors.",
  },
  {
    title: "Information Technology",
    icon: <FaLaptopCode className="w-6 h-6" />,
    description: "We offer IT services and solutions.",
  },
  {
    title: "Food, Tourism, and Hospitality",
    icon: <FaUtensils className="w-6 h-6" />,
    description: "We work with the food, tourism, and hospitality industries.",
  },
  {
    title: "Startups",
    icon: <FaRocket className="w-6 h-6" />,
    description: "We support startups in their growth and development.",
  },
  {
    title: "Charities, Clinics, and Psychiatric Centers",
    icon: <FaHandsHelping className="w-6 h-6" />,
    description: "We assist charities, clinics, and psychiatric centers.",
  },
  {
    title: "Women's Empowerment Institutions and Centers",
    icon: <FaFemale className="w-6 h-6" />,
    description: "We empower women through various institutions and centers.",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <div className="pt-16 flex flex-col justify-center items-center  ">
      <h2
        className="text-4xl lg:text-5xl font-bold mb-10 text-center"
        data-aos="fade-up"
      >
        Our Services
      </h2>

      <div
        className="flex justify-center mb-10 gap-3 font-medium"
        data-aos="fade-up"
      >
        <button
          className={`px-4 py-2   ${
            activeTab === "business" ? "bg-black  text-white" : "bg-gray-200"
          } rounded-3xl`}
          onClick={() => setActiveTab("business")}
        >
          Business
        </button>
        <button
          className={`px-4 py-2   ${
            activeTab === "individual" ? "bg-black  text-white" : "bg-gray-200"
          } rounded-3xl`}
          onClick={() => setActiveTab("individual")}
        >
          Individual
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* @ts-ignore */}
        {services[activeTab].map((service, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6
            hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125 relative"
          >
            <img
              src={`${service.icon}`}
              alt={service.service}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center lg:h-16">
              {service.service}
            </h3>
            <p className="text-center text-gray-600">{service.description}</p>
            <BorderBeam
              size={250}
              duration={12}
              delay={9}
              colorFrom="#2fa2b6"
              colorTo="#f4a896"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row  gap-7 md:gap-20 py-16 md:py-36 ">
        {nums.map((num, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex flex-col justify-center items-center p-10 rounded-lg border-t-8 border-r-8 border-t-[#1f8598] border-r-[#ed8972] bg-white shadow-2xl 
              hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 
          "
          >
            <div className="flex flex-col justify-center items-center gap-6 text-center px-2 min-w-[250px]">
              <img src={num.icon} alt="icon" className="w-16 h-16" />
              <h1 className="text-xl font-semibold">{num.title}</h1>
              <p className="text-slate-500 italic">{num.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl lg:text-5xl font-bold mb-10 text-center"
          data-aos="fade-up"
        >
          Sectors We Serve
        </h2>

        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 overflow-x-hidden p-1">
          {sectors.map((sector, index) => (
            <div
              data-aos="fade-left"
              key={index}
              className="p-6 max-w-sm  bg-white rounded-xl shadow-md flex items-center space-x-4 
               transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 overflow-x-hidden
              "
            >
              <div className="flex-shrink-0 ">{sector.icon}</div>
              <div>
                <div className="text-xl font-medium text-black">
                  {sector.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Slider />
      <div
        className=" flex flex-col justify-center items-center text-center py-12 border w-full mt-5 rounded-xl bg-slate-50 "
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-bold mb-4 ">Are you still confused?</h1>
        <p className="text-xl font-medium  leading-relaxed  md:px-14 mb-3">
          Take your free test now!
        </p>
        <p className="px-10 md:px-20">
          This assessment is designed to help you identify the type of coaching
          that best suits your needs. Please answer the following questions
          honestly. At the end of the test, you will receive a recommendation
          based on your answers.
        </p>

        <Link href="/assesment" className="mt-8">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-lg text-center font-medium leading-none tracking-tight text-white">
              Go to Test
            </span>
          </ShimmerButton>
        </Link>
      </div>
    </div>
  );
};

export default Services;
