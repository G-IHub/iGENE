"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

// --- FAQ Data ---
const faqs = [
  {
    id: "01",
    question: "What exactly is iGENE and how does it work?",
    answer:
      "iGENE is an AI health assistant on WhatsApp. Tell it your health concern, and it uses your family history, symptoms, and lifestyle to recommend the right genetic assessment for you. Everything happens on WhatsApp, with your sample collected at home, at work, or at a partner hospital near you.",
  },
  {
    id: "02",
    question:
      "Do I need to know anything about genetics or precision medicine to use iGENE?",
    answer:
      "Not at all. iGENE is built for people who have never heard of precision medicine. You just need a health concern. iGENE asks questions and explains everything in plain language — the science happens behind the scenes.",
  },
  {
    id: "03",
    question:
      "Is the first consultation really free? What happens if I decide not to proceed?",
    answer:
      "Yes. The first consultation is free, with no commitment. If you decide not to go ahead, that's perfectly fine — there's no pressure and no hidden cost. You only pay if you choose to proceed with an assessment.",
  },
  {
    id: "04",
    question: "Do I need to go to a hospital or clinic?",
    answer:
      "No. Your consultation happens on WhatsApp, your sample can be collected at home or at work, and your results come by phone call and written report. Visiting our partner laboratory in Lagos is optional.",
  },
  {
    id: "05",
    question:
      "Which laboratory processes my sample and how do I know it is reliable?",
    answer:
      "iGENE partners with an accredited precision medicine laboratory in Lagos, Nigeria, that follows clinical-grade standards. Results arrive 14–21 days after the lab receives your sample, or 5–8 days with paid priority processing.",
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
          <p className="text-[#5A5A5A] text-sm md:text-[15px] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  return (
    <section id="faq" className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#912996]"></div>
            <span className="text-[#912996] font-bold text-xs sm:text-sm tracking-widest uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl md:text-[28px] font-bold text-[#171717] leading-tight mb-4">
            Quick answers to common questions
          </h2>
          <p className="text-[#767676] text-base">
            Everything you need to know before you start your chat.
          </p>
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

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
          <p className="text-[#5A5A5A]">Still have questions?</p>
          <a
            href="https://app.zikorail.com/go/genomac-labs-genetic-test"
            target="_blank"
            className="bg-[#B241B7] hover:bg-[#a34abc] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Ask iGENE on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
