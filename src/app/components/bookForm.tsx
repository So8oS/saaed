'use client';
import React, { useState } from "react";

const industries = [
  { name: "Sector 1", value: "sector1" },
  { name: "Sector 2", value: "sector2" },
  { name: "Sector 3", value: "sector3" },
  { name: "Sector 4", value: "sector4" },
  { name: "Sector 5", value: "sector5" },
];

const questions = [
  "Briefly describe your company's core activities and services:",
  "What are the main challenges your company is currently facing?",
  "Are there specific goals you wish to achieve through our services?",
];

const cities = [
  { name: "City 1", value: "city1" },
  { name: "City 2", value: "city2" },
  { name: "City 3", value: "city3" },
  { name: "City 4", value: "city4" },
  { name: "City 5", value: "city5" },
];

const Form = () => {
  const [activeTab, setActiveTab] = useState("individual");

  return (
    <div className="border border-gray-100 space-y-4 max-w-screen-xl bg-white p-6 lg:p-10 shadow-2xl rounded-lg border-t-8 border-r-8 border-t-[#1f8598] border-r-[#ed8972]">
      <h1 className="mb-6 text-xl font-semibold lg:text-2xl self-center">
        Form
      </h1>
      <div className="mb-4">
        <button
          className={`mr-4 ${activeTab === "individual" ? "font-bold" : ""}`}
          onClick={() => setActiveTab("individual")}
        >
          Individual
        </button>
        <button
          className={`${activeTab === "business" ? "font-bold" : ""}`}
          onClick={() => setActiveTab("business")}
        >
          Business
        </button>
      </div>
      {activeTab === "individual" ? (
        <form>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label>Name:</label>
              <input
                type="text"
                placeholder="Name"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Email"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
          </div>
          <div className="pt-4">
            <label>Telephone:</label>
            <input
              type="tel"
              placeholder="Telephone"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div className="py-4">
            <label>Message:</label>
            <textarea
              rows={4}
              className="mt-2 w-full rounded-md bg-gray-100 p-1"
            ></textarea>
          </div>
          <div>
            <button
              type="button"
              className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <form>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label>Company Name:</label>
              <input
                type="text"
                placeholder="Company L.L.C"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
            <div>
              <label>Company Responsible:</label>
              <input
                type="text"
                placeholder="Name"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
          </div>
          <div className="pt-4">
            <label>Industry:</label>
            <div className="relative w-56 mt-2 bg-gray-100 rounded-lg">
              <input
                className="peer hidden"
                type="checkbox"
                name="select-1"
                id="select-1"
              />
              <label
                htmlFor="select-1"
                className="flex w-full cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring"
              >
                Select Option
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute right-5 top-3 h-4 text-gray-600 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                {industries.map((industry, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:bg-gray-200 p-2 px-3"
                  >
                    {industry.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-4">
            <label>City:</label>
            <div className="relative w-56 mt-2 bg-gray-100 rounded-lg">
              <input
                className="peer hidden"
                type="checkbox"
                name="select-1"
                id="select-1"
              />
              <label
                htmlFor="select-2"
                className="flex w-full cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring"
              >
                Select Option
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute right-5 top-3 h-4 text-gray-600 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                {cities.map((city, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:bg-gray-200 p-2 px-3"
                  >
                    {city.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-4">
            <label>Website:</label>
            <input
              type="text"
              placeholder="https://example.com"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div className="pt-4">
            <label>Email Address:</label>
            <input
              type="email"
              placeholder="Info@example.com"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-2 pt-4">
            <div>
              <label>
                Phone: <span className="text-sm text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="+543 5445 0543"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
          </div>
          <div className="my-16">
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <div className="flex flex-col gap-8">
            {questions.map((question, index) => (
              <div key={index}>
                <label className="">{`${index + 1}- ${question}`}</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-md bg-gray-100 p-1"
                ></textarea>
              </div>
            ))}
          </div>
          <div>
            <button
              type="button"
              className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
            >
              Get Started
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
