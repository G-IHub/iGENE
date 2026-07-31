import React from "react";
import building from "../assets/building.svg";

const CtaSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 flex flex-col items-center justify-center overflow-hidden bg-linear-to-b from-white via-[#fcf5ff] to-[#B241B752]">
      <img src={building} alt="Building" className="absolute w-full h-full object-cover -bottom-10 opacity-60" />

      <div className="relative z-10 max-w-[850px] mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl lg:text-[52px] font-medium mb-3 leading-tight tracking-tight">
          Your health questions deserve
          <br className="hidden md:block" /> real answers. 🚀
        </h2>
        <p className="text-lg md:text-2xl leading-relaxed mb-8 px-4 md:px-0">
          iGENE starts with a free conversation — no hospitals, no appointments,
          no jargon. Just you, your concern, and an AI that knows how to connect
          it to the answers your body has been waiting for.
        </p>
        <a href="https://app.zikorail.com/go/genomac-labs-genetic-test" target="_blank" className="bg-[#B241B7] cursor-pointer hover:bg-[#a03cb1] text-white font-medium text-sm px-4 py-3 rounded-full transition-colors duration-300 shadow-sm">
          Get started with iGENE
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
