import heroImg from "../assets/hero-bg.png";
import { ChevronsRight } from 'lucide-react';
import HowItWorks from "../components/sections/HowItWorks";
import PrivacySection from "../components/sections/PrivacySection";
import ServicesSection from "../components/sections/ServicesSection";
import ValuePropositionSection from "../components/sections/ValuePropositionSection";
import { Testimonial } from "../components/sections/Testimonial";
import { FAQ } from "../components/sections/FAQ";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <>
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FAFAFA] pt-32 pb-20 font-sans lg:pt-0">
      
      {/* Main Container */}
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row lg:items-center px-6 md:px-12 lg:px-8">
        
        {/* Left Content (Text & CTA) */}
        <div className="relative z-10 w-full lg:w-[55%] flex flex-col items-start pt-12 lg:pt-30 lg:pl-10">
          <h1 className="mb-6 text-4xl font-medium tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-[54px] lg:leading-[1.1]">
            Precision Genetic Testing <br className="hidden lg:block" />
            & AI-Powered Health <br className="hidden lg:block" />
            Guidance, Right From <br className="hidden lg:block" />
            WhatsApp
          </h1>
          
          <p className="mb-10 max-w-[500px] text-lg leading-relaxed text-[#666666]">
            Get personalized insights for your health, medications, disease
            risks, and genetic conditions through Genomac Labs.
          </p>
          
          <a href='https://app.zikorail.com/go/genomac-labs-genetic-test' target='_blank' className="group flex items-center gap-1 rounded-full bg-[#972FAF] px-8 py-4 text-[17px] font-medium text-white transition-all hover:scale-105 hover:bg-[#832698] shadow-lg shadow-purple-900/20">
            <span>Chat with iGENE</span>
            <ChevronsRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right Content (Tilted Image Grid) */}
        <div className="absolute right-0 top-[-10%] hidden lg:block h-full w-[800px] pointer-events-none">
          
          {/* Tilted Wrapper */}
          <div className="w-full h-full translate-x- translate-y-12">
            <img src={heroImg} alt="" />
          </div>

          {/* Fade Overlay to blend the images into the background smoothly */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent z-10"></div> */}
        </div>

        <div className="block md:hidden absolute -bottom-60 left-0 w-full h-[600px] overflow-hidden pointer-events-none" >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FAFAFA] via-transparent to-transparent z-10">
              <img src={heroImg} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
      </div>
    </section>
    
    {/* How It Works Section */}
    <HowItWorks />
    {/* Value Proposition Section */}
    <ValuePropositionSection />
    {/* Services Section */}
    <ServicesSection />
    {/* Privacy Section */}
    <PrivacySection />
    {/* Testimonial Section */}
    <Testimonial />
    {/* FAQ Section */}
    <FAQ />
    {/* CTA Section */}
    <CTASection />



    </>
  )
}
