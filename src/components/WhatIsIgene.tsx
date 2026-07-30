import React from 'react';
import { LuEar } from "react-icons/lu";
import { FiActivity } from "react-icons/fi";
import { PiCompass } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";

const WhatIsIgene = () => {
  return (
    <section className="relative w-full bg-[#FEF2FF] py-25 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute -bottom-80 left-10 blur-3xl w-[500px] h-[500px] bg-radial from-[#B241B7] to-[#FFFFFF00] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center lg:px-24 mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-0.5 bg-[#912996]"></div>
            <span className="text-[#912996] font-bold text-xs sm:text-sm tracking-widest uppercase">
              What is iGENES
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#171717]  mb-6 leading-tight">
            An AI health assistant that listens to your health concern and connects it to precision medicine — in plain language.
          </h2>
          <div className="space-y-6 text-[#313539] text-lg leading-relaxed mx-auto">
            <p>
              IGENE is not a hospital. It is not a laboratory. It is not a doctor. It is an intelligent conversation — available on WhatsApp, free to start — that takes your everyday health concern and connects it, step by step, to the most advanced form of personalised healthcare available in Africa today.
            </p>
            <p>
              Most Africans have never heard of precision medicine. iGENE does not ask you to understand it. iGENE does the understanding for you, and delivers the answer in language you can act on.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#F8F1FE] border border-[#6B1DAE] rounded-2xl p-6 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-[#6B1DAE] flex items-center justify-center text-white mb-4">
              <LuEar size={16} />
            </div>
            <h3 className="font-semibold text-[#111827] mb-3">IGENE listens</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Tell IGENE your concern on WhatsApp. It asks intelligent follow-up questions about your family history, symptoms, and lifestyle. You feel heard — not processed.
            </p>
          </div>

          <div className="bg-[#F2F9FF] border border-[#0B85EE] rounded-2xl p-6 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-[#0B85EE] flex items-center justify-center text-white mb-4">
              <FiActivity size={16} />
            </div>
            <h3 className="font-semibold text-[#111827] mb-3">IGENE connects the data</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Behind your words, IGENE maps your situation against genetic risk factors and precision medicine pathways, then explains in the simplest possible terms what your concern means and what can be done.
            </p>
          </div>

          <div className="bg-[#FFEEED] border border-[#FF6A62] rounded-2xl p-6 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-[#FF6A62] flex items-center justify-center text-white mb-4">
              <IoSearchOutline size={16} />
            </div>
            <h3 className="font-semibold text-[#111827] mb-3">IGENE recommends</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              After consultation with our verified expert clinicians, iGENE recommends the right genetic assessment, explaining what it tests, why it matters for you specifically, and what you will know after.
            </p>
          </div>

          <div className="bg-[#EDEBFF] border border-[#604FFA] rounded-2xl p-6 flex flex-col shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#604FFA] flex items-center justify-center text-white mb-4">
              <PiCompass size={16} />
            </div>
            <h3 className="font-semibold text-[#111827] mb-3">IGENE guides you all the way</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              From sample collection at home, through real-time tracking, to a results call with a precision medicine consultant. Every step supported, explained, and personally guided.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIgene;