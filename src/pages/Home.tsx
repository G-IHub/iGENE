// import heroImg from "../assets/hero-bg.svg";
import { ChevronsRight } from 'lucide-react';
import HowItWorks from "../components/sections/HowItWorks";
import PrivacySection from "../components/sections/PrivacySection";
import ServicesSection from "../components/sections/ServicesSection";
import ValuePropositionSection from "../components/sections/ValuePropositionSection";
import Testimonial from "../components/sections/Testimonial";
import FAQ from "../components/sections/FAQ";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <>
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FAFAFA] pt-32 pb-20">
      
      {/* Main Container */}
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row lg:items-center px-6 md:px-12 lg:px-8">
        
        {/* Left Content (Text & CTA) */}
        <div className="relative z-10 w-full lg:w-[55%] flex flex-col items-start pt-12 lg:pt-24">
          <h1 className="mb-6 text-4xl font-medium tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
            Precision Genetic Testing <br className="hidden lg:block" />
            & AI-Powered Health <br className="hidden lg:block" />
            Guidance, Right From <br className="hidden lg:block" />
            WhatsApp
          </h1>
          
          <p className="mb-10 max-w-[500px] text-lg leading-relaxed text-[#666666]">
            Get personalized insights for your health, medications, disease
            risks, and genetic conditions through Genomac Labs.
          </p>
          
          <button className="group flex items-center gap-1 rounded-full bg-[#972FAF] px-8 py-4 text-[17px] font-medium text-white transition-all hover:scale-105 hover:bg-[#832698] shadow-lg shadow-purple-900/20">
            <span>Chat with iGeng</span>
            <ChevronsRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right Content (Tilted Image Grid) */}
        <div className="absolute right-[-20%] top-[10%] hidden lg:block h-full w-[800px] pointer-events-none">
          
          {/* Tilted Wrapper */}
          <div className="relative w-full h-full rotate-[-12deg] scale-110 translate-x-16 translate-y-12">
            
            {/* Grid Layout */}
            <div className="grid grid-cols-3 gap-6">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-6 mt-24">
                <div className="h-64 w-full rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
                  <img src="/images/grid-1.jpg" alt="Health App" className="w-full h-full object-cover" />
                </div>
                <div className="h-80 w-full rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
                  <img src="/images/grid-2.jpg" alt="Genome Sequencing" className="w-full h-full object-cover" />
                </div>
                <div className="h-48 w-full rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
                  <img src="/images/grid-3.jpg" alt="Study Notes" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-6 mt-8">
                <div className="h-48 w-full rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
                  <img src="/images/grid-4.jpg" alt="Mobile App View" className="w-full h-full object-cover" />
                </div>
                <div className="h-96 w-full rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
                  <img src="/images/grid-5.jpg" alt="Doctors analyzing data" className="w-full h-full object-cover" />
                </div>
                <div className="h-64 w-full rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
                  <img src="/images/grid-6.jpg" alt="Lab Research" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-6 mt-32">
                <div className="h-80 w-full rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
                  <img src="/images/grid-7.jpg" alt="Body mapping" className="w-full h-full object-cover" />
                </div>
                <div className="h-64 w-full rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
                  <img src="/images/grid-8.jpg" alt="Precision Diagnostics" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>
          </div>

          {/* Fade Overlay to blend the images into the background smoothly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent z-10"></div>
        </div>
      </div>
    </section>
    
    {/* How It Works Section */}
    <HowItWorks />
    {/* Privacy Section */}
    <PrivacySection />
    {/* Services Section */}
    <ServicesSection />
    {/* Value Proposition Section */}
    <ValuePropositionSection />
    {/* Testimonial Section */}
    <Testimonial />
    {/* FAQ Section */}
    <FAQ />
    {/* CTA Section */}
    <CTASection />



    </>
  )
}
