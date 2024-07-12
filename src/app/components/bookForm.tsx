"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

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
  clientType: string;
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
  const [activeTab, setActiveTab] = useState("bussiness");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    const templateParams = {
      to_name: "Saaed",
      from_name: data.name,
      email: data.email,
      telephone: data.telephone,
      coachingType: data.coachingType,
      preferredDate: data.preferredDate,
      message: data.message,
      clientType: activeTab,
    };

    if (activeTab === "business") {
      Object.assign(templateParams, {
        companyName: data.companyName,
        responsibleName: data.responsibleName,
        industry: data.industry,
        city: data.city,
        website: data.website,
        phone: data.phone,
        question1: data.question1,
        question2: data.question2,
        question3: data.question3,
      });
    }

    emailjs
      .send(
        "sa3ed",
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_JS
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            "Form submitted successfully 🎉\n Saeed team will contact you soon!"
          );
          reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to submit the form, please try again later");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="overflow-scroll border flex flex-col justify-center items-center border-gray-100 space-y-4 max-w-screen-xl bg-white p-6 m-3 lg:p-10 shadow-2xl rounded-lg border-t-8 border-r-8 border-t-[#1f8598] border-r-[#ed8972]">
      <h1 className="mb-6 text-xl font-semibold lg:text-2xl self-center">
        Booking Form
      </h1>
      <div className="shadow rounded-full h-10 mt-4 flex relative items-center w-72 self-center font-medium">
        <div className="w-full flex justify-center">
          <button onClick={() => setActiveTab("individual")}>Individual</button>
        </div>
        <div className="w-full flex justify-center">
          <button onClick={() => setActiveTab("business")}>Business</button>
        </div>
        <span
          className={`elSwitch bg-[#1f8598] shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute ${
            activeTab === "individual" ? "left-1" : "left-[calc(50%+-5px)]"
          }`}
        >
          {activeTab === "individual" ? "Individual" : "Business"}
        </span>
      </div>
      {/* @ts-ignore */}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl m-auto">
        {activeTab === "individual" ? (
          <>
            <input
              type="hidden"
              value="individual"
              {...register("clientType")}
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">
                    {errors.name.message?.toString()}
                  </p>
                )}
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Entered value does not match email format",
                    },
                  })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.email.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="pt-4">
              <label>Telephone:</label>
              <input
                type="tel"
                placeholder="Telephone"
                {...register("telephone", {
                  required: "Telephone is required",
                })}
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
              {errors.telephone && (
                <p className="text-red-500 text-sm">
                  {errors.telephone.message?.toString()}
                </p>
              )}
            </div>
            <div className="grid gap-4 md:grid-cols-2 pt-4">
              <div>
                <label>Coaching Type:</label>
                <select
                  {...register("coachingType", {
                    required: "Coaching type is required",
                  })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 cursor-pointer"
                >
                  {coachingTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.coachingType && (
                  <p className="text-red-500 text-sm">
                    {errors.coachingType.message?.toString()}
                  </p>
                )}
              </div>
              <div>
                <label>Preferred Date:</label>
                <input
                  type="date"
                  {...register("preferredDate", {
                    required: "Preferred date is required",
                  })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 cursor-pointer"
                />
                {errors.preferredDate && (
                  <p className="text-red-500 text-sm">
                    {errors.preferredDate.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="py-4">
              <label>Message:</label>
              <textarea
                rows={4}
                {...register("message", { required: "Message is required" })}
                className="mt-2 w-full rounded-md bg-gray-100 p-1"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">
                  {errors.message.message?.toString()}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <input type="hidden" value="business" {...register("clientType")} />
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label>Company Name:</label>
                <input
                  type="text"
                  placeholder="Company L.L.C"
                  {...register("companyName", {
                    required: "Company name is required",
                  })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">
                    {errors.companyName.message?.toString()}
                  </p>
                )}
              </div>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("responsibleName", {
                    required: "Name is required",
                  })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                {errors.responsibleName && (
                  <p className="text-red-500 text-sm">
                    {errors.responsibleName.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="pt-4">
              <label>Industry:</label>
              <div className="relative w-full mt-2 bg-gray-100 rounded-lg">
                <select
                  {...register("industry", {
                    required: "Industry is required",
                  })}
                  className="peer flex w-full cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring"
                >
                  {industries.map((industry, index) => (
                    <option key={index} value={industry.value}>
                      {industry.name}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p className="text-red-500 text-sm">
                    {errors.industry.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="pt-4">
              <label>City:</label>
              <div className="relative w-full mt-2 bg-gray-100 rounded-lg">
                <select
                  {...register("city", { required: "City is required" })}
                  className="peer flex w-full cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring"
                >
                  {cities.map((city, index) => (
                    <option key={index} value={city.value}>
                      {city.name}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <p className="text-red-500 text-sm">
                    {errors.city.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="pt-4">
              <label>Website:</label>
              <input
                type="text"
                placeholder="https://example.com"
                {...register("website", { required: "Website is required" })}
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
              {errors.website && (
                <p className="text-red-500 text-sm">
                  {errors.website.message?.toString()}
                </p>
              )}
            </div>
            <div className="pt-4">
              <label>Email Address:</label>
              <input
                type="email"
                placeholder="Info@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format",
                  },
                })}
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
            <div className="grid gap-4 lg:grid-cols-2 pt-4">
              <div>
                <label>Phone: </label>
                <input
                  type="text"
                  placeholder="+543 5445 0543"
                  {...register("phone", { required: "Phone is required" })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">
                    {errors.phone.message?.toString()}
                  </p>
                )}
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
                    {...register(`question${index + 1}`, {
                      required: `Answer to question ${index + 1} is required`,
                    })}
                    className="mt-2 w-full rounded-md bg-gray-100 p-1"
                  ></textarea>
                  {errors[`question${index + 1}`] && (
                    <p className="text-red-500 text-sm">
                      {errors[`question${index + 1}`]?.message?.toString()}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
        <div>
          <button
            type="submit"
            className={`mt-5 w-full rounded-md bg-[#1f8598] p-2 text-center font-semibold text-white cursor-pointer  disabled:opacity-65 disabled:cursor-not-allowed `}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <svg
                aria-hidden="true"
                className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : activeTab === "individual" ? (
              "Submit"
            ) : (
              "Get Started"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
