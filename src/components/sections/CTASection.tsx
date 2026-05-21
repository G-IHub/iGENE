import React from 'react';
import { Play } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-24 bg-white font-sans">
      <div className="mx-auto max-w-7xl">
        
        {/* CTA Card Container */}
        <div className="relative overflow-hidden rounded-[40px] bg-[#972FAF] px-6 py-16 md:py-24 lg:px-20 flex flex-col items-center justify-center text-center shadow-sm">
          
          {/* Background Shape Approximations
            If you have the exact SVG background from Figma, you can replace these absolute divs 
            and add bg-[url('/path-to-your-bg.svg')] bg-cover bg-center to the container above. 
          */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Lighter top-left curve */}
            <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-[#8923A2] rounded-full blur-[2px] opacity-80 mix-blend-multiply"></div>
            {/* Darker bottom-right curve */}
            <div className="absolute -bottom-[20rem] -right-[10rem] w-[800px] h-[800px] bg-[#4D0C66] rounded-[40%] rotate-[-15deg]"></div>
          </div>

          {/* Content (Z-index ensures it sits above the background shapes) */}
          <div className="relative z-10 flex flex-col items-center">
            
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px] max-w-4xl leading-[1.15]">
              Your DNA already knows things your doctor doesn't. Isn't it time you did too?
            </h2>
            
            <p className="mb-10 max-w-4xl text-[17px] leading-relaxed text-white/95">
              Book a consultation with our team today. We'll explain exactly what genetic testing means for you, which services fit your situation, and what your next step should be — in plain language, no pressure.
            </p>

            <button className="group flex h-14 items-center gap-3 rounded-full bg-white pl-8 pr-2 font-medium text-[#972FAF] transition-all hover:scale-105 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-white/20">
              <span className="text-[16px] pr-2">Book a consultation</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAECEE] transition-colors group-hover:bg-[#E5E7EB]">
                <Play className="ml-0.5 h-4 w-4 fill-gray-400 text-gray-400" />
              </div>
            </button>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;