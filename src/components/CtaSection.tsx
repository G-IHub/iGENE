import React from "react";
import building from "../assets/building.svg";

const CtaSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 flex flex-col items-center justify-center overflow-hidden bg-linear-to-b from-white via-[#fcf5ff] to-[#B241B752]">
      <img src={building} alt="" className="absolute w-full h-full object-cover -bottom-10 opacity-60" />

      <div className="relative z-10 max-w-[850px] mx-auto text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#171717] mb-4 leading-tight tracking-tight">
          Your health concern deserves a real answer.
        </h2>
        <p className="text-[#5A5A5A] text-base md:text-lg leading-relaxed max-w-xl mb-8 px-4 md:px-0">
          Start with a free WhatsApp chat — no appointments, no jargon. Just
          your concern, and an AI that connects it to real answers.
        </p>
        <a href="https://app.zikorail.com/go/genomac-labs-genetic-test" target="_blank" className="bg-[#B241B7] cursor-pointer hover:bg-[#a03cb1] text-white font-medium text-sm px-6 py-3 md:py-3.5 rounded-full transition-colors duration-300 shadow-md shadow-purple-500/20 flex items-center gap-2">
          Chat with iGENE on WhatsApp
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12l-9-8v6H0v4h15v6z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
