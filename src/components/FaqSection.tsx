"use client";

import React, { useState } from "react";
import { Plus, X, Play } from "lucide-react";
import neon from "../assets/neon.svg";

// --- FAQ Data ---
const faqs = [
  {
    id: "01",
    question: "What exactly is iGENE and how does it work?",
    answer:
      "iGENE is an AI health assistant on WhatsApp. You start a free conversation, tell iGENE your health concern, and iGENE uses your family history, symptoms, and lifestyle to recommend the right genetic assessment for your specific situation. The entire experience, from first message to final report, happens through WhatsApp, with sample collection at your home or office; or you visit the nearest partner hospital to you.",
  },
  {
    id: "02",
    question:
      "Do I need to know anything about genetics or precision medicine to use iGENE?",
    answer:
      'Absolutely not. iGENE was specifically designed for people who have never heard the words "precision medicine" before. You just need a health concern — something you have been worrying about or wondering about. iGENE asks you questions in plain language, explains everything in plain language, and recommends a course of action in plain language. The science happens behind the scenes. You never need to engage with it directly.',
  },
  {
    id: "03",
    question:
      "Is the first consultation really free? What happens if I decide not to proceed?",
    answer:
      "Yes — the first consultation is completely free with no commitment to proceed. iGENE will listen to your concern, ask follow-up questions, and recommend the appropriate assessment. If you decide not to proceed after the consultation, that is perfectly fine. There is no pressure and no hidden cost. You only pay when you actively decide to go ahead with an assessment.",
  },
  {
    id: "04",
    question: "Do I need to go to a hospital or clinic?",
    answer:
      "No. iGENE is designed to be completed entirely from your home or office. Your consultation is on WhatsApp. Your sample is collected at home via a collection kit or a mobile phlebotomist who visits you. Your results are delivered via a phone call and a written report sent to you. The only exception is if you choose to visit our partner laboratory in Lagos directly — but this is optional.",
  },
  {
    id: "05",
    question:
      "Which laboratory processes my sample and how do I know it is reliable?",
    answer:
      "iGENE partners with an accredited precision medicine laboratory in Lagos, Nigeria. Our partner lab maintains validated testing pipelines, quality certification, and clinical-grade standards. Your sample is processed in Nigeria using the same methodologies as leading international genetic testing providers. Results are delivered within 14–21 calendar days of sample receipt at the lab. Priority processing (5–8 days) is available at an additional fee.",
  },
  {
    id: "06",
    question: "What happens to my genetic data?",
    answer:
      "Your genetic data is handled with the highest level of encryption and strict privacy protocols. It is never sold to third parties and is used solely for the purpose of generating your health reports.", // Placeholder answer for the last item
  },
];

// --- Individual FAQ Item Component ---
const FaqItem = ({
  id,
  question,
  answer,
  defaultOpen = false,
}: {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-[#ecedf0] rounded-xl p-6 transition-all duration-300">
      <div
        className="flex items-start justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-4 lg:gap-6">
          <span className="text-[#B3B3B3] font-medium">{id}</span>
          <h4 className="text-[#1E1E1E] font-semibold text-[15px] leading-snug lg:text-base pr-4">
            {question}
          </h4>
        </div>
        <button className="text-[#1E1E1E] shrink-0 mt-0.5 cursor-pointer">
          {isOpen ? (
            <X size={20} strokeWidth={2.5} />
          ) : (
            <Plus size={20} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 pl-10">
          <p className="text-[#5A5A5A] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col gap-8 mb-10 md:mb-16">
        <div>
          <p className="text-[#4338CA] text-xs font-semibold tracking-widest uppercase">
            // FREQUENTLY ASKED QUESTIONS //
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 lg:items-end">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2C2C2C] leading-[1.15] max-w-3xl">
            Get Quick Answers to Common Questions
          </h2>
          <p className="text-[#767676] text-base md:text-lg max-w-2xl">
            Everything you need to know about iGENE, pricing, and how to get
            started.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10 xl:gap-40">
        <div className="w-full lg:w-[42%]">
          <div className="w-full max-w-[420px] aspect-square rounded-3xl mb-6 relative overflow-hidden mx-auto lg:mx-0">
            <img src={neon} alt="FAQ" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-[#1E1E1E] font-semibold text-lg mb-2">
              Still have questions?
            </h4>
            <p className="text-[#5A5A5A] mb-4">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
            <button className="bg-[#6366F1] cursor-pointer hover:bg-[#4F46E5] text-white text-sm font-semibold py-3 px-4 rounded-lg transition-colors flex items-center gap-2">
              Get in touch
              <Play size={12} fill="currentColor" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[58%] xl:w-11/12">
          <div className="mb-3">
            <span className="text-[#B3B3B3] font-semibold">Support</span>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                // defaultOpen={index < 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
