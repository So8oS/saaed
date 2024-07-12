"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const questions: string[] = [
  "What is your primary goal at the moment?",
  "What is your biggest challenge right now?",
  "What do you enjoy most in your daily routine?",
  "What do you feel you need help with?",
  "How would you describe your current situation?",
  "What outcome are you hoping to achieve with coaching?",
];

const options: string[][] = [
  [
    "A) Achieve a better work-life balance",
    "B) Advance in my career or find a new job",
    "C) Improve my relationships with family, friends, or partner",
    "D) Start or grow my own business",
    "E) Enhance my leadership and management skills",
    "F) Improve my overall health and well-being",
  ],
  [
    "A) Feeling overwhelmed and unfulfilled in life",
    "B) Facing career stagnation or job dissatisfaction",
    "C) Experiencing conflicts or communication issues in relationships",
    "D) Struggling with business strategy and growth",
    "E) Managing a team or making effective decisions as a leader",
    "F) Dealing with stress, anxiety, or health concerns",
  ],
  [
    "A) Personal hobbies and interests",
    "B) Working on projects or tasks related to my job",
    "C) Spending time with loved ones",
    "D) Planning and strategizing for my business",
    "E) Leading and inspiring others",
    "F) Engaging in activities that promote health and wellness",
  ],
  [
    "A) Finding purpose and direction in life",
    "B) Career planning and professional development",
    "C) Building stronger and more meaningful relationships",
    "D) Business planning and overcoming entrepreneurial challenges",
    "E) Leadership skills and executive decision-making",
    "F) Managing stress and improving physical and mental health",
  ],
  [
    "A) Struggling to find satisfaction and joy in everyday life",
    "B) Feeling stuck or uncertain about my career path",
    "C) Facing relationship difficulties or lack of connection",
    "D) Experiencing challenges in growing or managing my business",
    "E) Needing to improve my leadership effectiveness and team management",
    "F) Battling health issues or seeking a healthier lifestyle",
  ],
  [
    "A) A more balanced and fulfilling life",
    "B) Clearer career goals and professional success",
    "C) Stronger, healthier relationships",
    "D) Business growth and improved entrepreneurial skills",
    "E) Enhanced leadership abilities and team performance",
    "F) Better health and reduced stress",
  ],
];

const resultPrompt = (answers: string[]): string => {
  const counts: { [key: string]: number } = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
  };
  answers.forEach((answer: string) => counts[answer]++);
  const maxAnswer = Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );

  switch (maxAnswer) {
    case "A":
      return "You may benefit from <strong>Life Coaching</strong>. This type of coaching helps individuals achieve personal growth, find balance, and increase overall life satisfaction.";
    case "B":
      return "<strong>Career Coaching</strong> would be suitable for you. Career coaching focuses on professional development, career advancement, and finding job satisfaction.";
    case "C":
      return "You should consider <strong>Relationship Coaching</strong>. This coaching helps improve communication, resolve conflicts, and build stronger relationships with loved ones.";
    case "D":
      return "<strong>Business Coaching</strong> is likely the best fit. Business coaching supports entrepreneurs in planning, strategizing, and growing their businesses.";
    case "E":
      return "<strong>Executive Coaching</strong> is what you need. This coaching enhances leadership skills, decision-making abilities, and overall executive performance.";
    case "F":
      return `<strong>Health and Wellness Coaching</strong> would be beneficial. This type of coaching focuses on managing stress, improving health, and promoting well-being.`;
    default:
      return "Please complete the assessment to receive a recommendation.";
  }
};

const AssessmentForm: React.FC = () => {
  const [responses, setResponses] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (questionIndex: number, value: string): void => {
    const newResponses = [...responses];
    newResponses[questionIndex] = value;
    setResponses(newResponses);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (responses.includes(null)) {
      alert("Please answer all questions before submitting.");
      return;
    }
    const answerCodes = responses.map((response) => response!.split(")")[0]);
    setResult(resultPrompt(answerCodes));
    setIsDialogOpen(true);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative border border-gray-100 space-y-4 max-w-screen-lg mb-10 bg-white py-6 px-5 lg:p-10 shadow-2xl rounded-lg border-t-8 border-r-8 border-t-[#1f8598] border-r-[#ed8972]">
        <h1 className="mb-6 text-2xl font-semibold lg:text-2xl self-center">
          Assessment Form
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col">
          {questions.map((question, index) => (
            <div key={index} className="mb-8">
              <p className="mb-2 font-semibold md:text-2xl">{`${
                index + 1
              }. ${question}`}</p>
              <div className="flex flex-col gap-4">
                {options[index].map((option, optionIndex) => (
                  <label key={optionIndex} className="md:text-lg text-sm flex">
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={option}
                      className="mr-2"
                      checked={responses[index] === option}
                      onChange={() => handleChange(index, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-[#1f8598] p-2 text-center font-semibold text-white cursor-pointer "
          >
            Submit
          </button>
        </form>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="flex flex-col justify-center items-center gap-5 text-center py-32">
          <h1 className="text-4xl font-semibold">Assessment Result</h1>
          <p className="text-xl" dangerouslySetInnerHTML={{ __html: result }} />
          <Link href="/book" className="z-10">
            <button className="mt-5 w-full rounded-md text-lg bg-[#1f8598] px-4 py-2 text-center font-semibold text-white cursor-pointer">
              Book Now
            </button>
          </Link>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AssessmentForm;
