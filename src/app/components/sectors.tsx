import React from "react";
import {
  FaGraduationCap,
  FaHospital,
  FaLaptopCode,
  FaUtensils,
  FaRocket,
  FaHandsHelping,
  FaFemale,
} from "react-icons/fa";

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

const Sectors = () => {
  return (
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
  );
};

export default Sectors;
