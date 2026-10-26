import React from 'react';

const WhatIsIgene = () => {
  return (
    <section id="what-is-igene" className="relative w-full bg-[#FEF2FF] py-25 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute -bottom-80 left-10 blur-3xl w-[500px] h-[500px] bg-radial from-[#B241B7] to-[#FFFFFF00] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center lg:px-24 mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-0.5 bg-[#912996]"></div>
            <span className="text-[#912996] font-bold text-xs sm:text-sm tracking-widest uppercase">
              What is iGENE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] mb-6 leading-tight max-w-2xl mx-auto">
            Your health concern, connected to precision medicine — in plain language.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {["Not a hospital", "Not a lab", "Not a doctor"].map((item) => (
              <span key={item} className="bg-white border border-gray-200 text-gray-500 text-sm px-4 py-1.5 rounded-full">
                {item}
              </span>
            ))}
            <span className="bg-[#B241B7] text-white text-sm font-medium px-4 py-1.5 rounded-full">
              An AI conversation on WhatsApp
            </span>
          </div>
          <p className="text-[#313539] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Most Africans have never heard of precision medicine. You don't need to. iGENE does the understanding for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIgene;
