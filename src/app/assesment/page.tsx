"use client";
import React, { useState } from "react";

const questions = [
  { text: "You enjoy vibrant social events with lots of people." },
  { text: "You often spend time exploring unrealistic yet intriguing ideas." },
  {
    text: "Your travel plans are more likely to look like a rough list of ideas than a detailed itinerary.",
  },
  { text: "You feel energized by spending time alone." },
  { text: "You find it easy to empathize with someone else’s feelings." },
  { text: "You prefer a book over a party." },
  { text: "Challenging situations excite you rather than scare you." },
  { text: "You trust logic more than feelings." },
  { text: "You find it hard to introduce yourself to new people." },
  {
    text: "You often get so lost in thoughts that you ignore or forget your surroundings.",
  },
];

const AsForm = () => {
  const [responses, setResponses] = useState(
    Array(questions.length).fill(null)
  );

  const handleChange = (questionIndex: number, value: number) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = value;
    setResponses(newResponses);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative border border-gray-100 space-y-4 max-w-screen-lg   mb-10  bg-white p-6 lg:p-10 shadow-2xl rounded-lg border-t-8 border-r-8 border-t-[#1f8598] border-r-[#ed8972]">
        <h1 className="mb-6 text-xl font-semibold lg:text-2xl self-center">
          Assestment Form
        </h1>

        {questions.map((question, index) => (
          <div key={index} className="space-y-4">
            <p className="text-lg">{`${index + 1}- ${question.text} `}</p>
            <div className="flex justify-between items-center">
              {[
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree",
              ].map((option, optionIndex) => (
                <label
                  key={optionIndex}
                  className="inline-flex flex-col items-center space-y-2 cursor-pointer"
                >
                  <span className="text-xs text-gray-600">{option}</span>
                  <input
                    type="radio"
                    name={`question${index}`}
                    className="hidden"
                    checked={responses[index] === optionIndex}
                    onChange={() => handleChange(index, optionIndex)}
                  />
                  <span
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2  ${
                      responses[index] === optionIndex
                        ? "bg-[#ed8972] border-[#ed8972]"
                        : "cursor-pointer hover:border-[#ed8972]"
                    }`}
                  >
                    {responses[index] === optionIndex && (
                      <span className="w-4 h-4 bg-green-500 rounded-full m-auto"></span>
                    )}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsForm;
