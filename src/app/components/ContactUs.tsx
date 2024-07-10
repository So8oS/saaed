"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

interface IFormInput {
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
}

export const Contactus = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);

    try {
      await emailjs.send(
        "gmail",
        "template_3nth5o9",
        // @ts-ignore
        data,
        process.env.NEXT_PUBLIC_EMAIL_JS
      );
      reset();
      toast("Your message has been sent");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      console.error("Failed to send email:", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border flex flex-col justify-center items-center border-gray-100 space-y-4 w-full max-w-screen-sm bg-white p-6 m-3 lg:p-10 shadow-2xl rounded-lg border-t-8 border-r-8 border-t-[#1f8598] border-r-[#ed8972]">
      <h1 className="mb-6 text-3xl md:text-4xl font-semibold self-center">
        Contact Us
      </h1>
      <form
        className="flex flex-col items-center gap-12 w-full"
        onSubmit={handleSubmit(sendEmail)}
      >
        <input
          className="h-12 w-full rounded-md bg-gray-100 px-3"
          type="text"
          placeholder="Name"
          {...register("user_name", { required: true })}
        />
        <input
          className="h-12 w-full rounded-md bg-gray-100 px-3"
          type="email"
          placeholder="Email"
          {...register("user_email", { required: true })}
        />
        <input
          className="h-12 w-full rounded-md bg-gray-100 px-3"
          type="text"
          placeholder="Phone"
          {...register("user_phone", { required: true })}
        />
        <textarea
          rows={4}
          className="w-full rounded-md bg-gray-100 px-3 p-2"
          placeholder="Message"
          {...register("message", { required: true })}
        />
        <input
          className={`w-full rounded-md bg-[#1f8598] p-2 text-center font-semibold text-white cursor-pointer ${
            isLoading ? "disabled:opacity-65 disabled:cursor-not-allowed" : ""
          }`}
          type="submit"
          value={isLoading ? "Sending..." : "Send"}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};
