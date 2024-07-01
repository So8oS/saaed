"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

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

const coachingTypes = [
  "Relationship coaching",
  "Life coaching",
  "Business coaching",
  "Career coaching",
  "Child coaching",
];

interface FormValues {
  name: string;
  email: string;
  telephone: string;
  coachingType: string;
  preferredDate: string;
  message: string;
  companyName: string;
  responsibleName: string;
  industry: string;
  city: string;
  website: string;
  phone: string;
  question1: string;
  question2: string;
  question3: string;
}

const Form = () => {
  const [activeTab, setActiveTab] = useState("individual");
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };

  return (
    <div className="overflow-scroll border flex flex-col justify-center items-center border-gray-100 space-y-4 max-w-screen-xl bg-white p-6 m-3 lg:p-10 shadow-2xl rounded-lg border-t-8 border-r-8 border-t-[#1f8598] border-r-[#ed8972]">
      <h1 className="mb-6 text-xl font-semibold lg:text-2xl self-center">
        Booking Form
      </h1>
      <div className="shadow rounded-full h-10 mt-4 flex relative items-center w-64 self-center">
        <div className="w-full flex justify-center">
          <button onClick={() => setActiveTab("individual")}>Individual</button>
        </div>
        <div className="w-full flex justify-center">
          <button onClick={() => setActiveTab("business")}>Business</button>
        </div>
        <span
          className={`elSwitch bg-indigo-600 shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute ${
            activeTab === "individual" ? "left-1" : "left-[calc(50%+4px)]"
          }`}
        >
          {activeTab === "individual" ? "Individual" : "Business"}
        </span>
      </div>
      {/* @ts-ignore */}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl m-auto">
        {activeTab === "individual" ? (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
              </div>
            </div>
            <div className="pt-4">
              <label>Telephone:</label>
              <input
                type="tel"
                placeholder="Telephone"
                {...register("telephone")}
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2 pt-4">
              <div>
                <label>Coaching Type:</label>
                <select
                  {...register("coachingType")}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 cursor-pointer"
                >
                  {coachingTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Preferred Date:</label>
                <input
                  type="date"
                  {...register("preferredDate")}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 cursor-pointer"
                />
              </div>
            </div>
            <div className="py-4">
              <label>Message:</label>
              <textarea
                rows={4}
                {...register("message")}
                className="mt-2 w-full rounded-md bg-gray-100 p-1"
              ></textarea>
            </div>
          </>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label>Company Name:</label>
                <input
                  type="text"
                  placeholder="Company L.L.C"
                  {...register("companyName")}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
              </div>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("responsibleName")}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
              </div>
            </div>
            <div className="pt-4">
              <label>Industry:</label>
              <div className="relative w-full mt-2 bg-gray-100 rounded-lg">
                <select
                  {...register("industry")}
                  className="peer flex w-full cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring"
                >
                  {industries.map((industry, index) => (
                    <option key={index} value={industry.value}>
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="pt-4">
              <label>City:</label>
              <div className="relative w-full mt-2 bg-gray-100 rounded-lg">
                <select
                  {...register("city")}
                  className="peer flex w-full cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring"
                >
                  {cities.map((city, index) => (
                    <option key={index} value={city.value}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="pt-4">
              <label>Website:</label>
              <input
                type="text"
                placeholder="https://example.com"
                {...register("website")}
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
            <div className="pt-4">
              <label>Email Address:</label>
              <input
                type="email"
                placeholder="Info@example.com"
                {...register("email")}
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
            <div className="grid gap-4 lg:grid-cols-2 pt-4">
              <div>
                <label>Phone: </label>
                <input
                  type="text"
                  placeholder="+543 5445 0543"
                  {...register("phone")}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                  required
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
                    {...register(`question${index + 1}`)}
                    className="mt-2 w-full rounded-md bg-gray-100 p-1"
                  ></textarea>
                </div>
              ))}
            </div>
          </>
        )}
        <div>
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-[#1f8598] p-2 text-center font-semibold text-white"
          >
            {activeTab === "individual" ? "Submit" : "Get Started"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
