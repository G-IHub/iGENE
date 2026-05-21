import heroImg from "../assets/hero-bg.png";
import HowItWorks from "../components/sections/HowItWorks";

export default function Home() {
  return (
    <>
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden min-h-screen flex items-center">
      
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="background collage" 
          className="w-full h-auto object-cover object-left pointer-events-none" 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Text Container */}
        <div className="flex flex-col items-start text-left space-y-6 max-w-[540px]">
          <h1 className="text-4xl lg:text-[52px] font-medium text-[#1A1A1A] tracking-tight leading-[1.12] font-sans">
            Precision Genetic Testing <br className="hidden sm:block" />
            &amp; AI-Powered Health <br className="hidden sm:block" />
            Guidance, Right From <br className="hidden sm:block" />
            WhatsApp
          </h1>

          <p className="text-[17px] text-gray-500 font-normal leading-relaxed">
            Get personalized insights for your health, medications, disease risks, and genetic conditions through Genomac Labs.
          </p>

          <div className="pt-2">
            <a 
              href="#chat-demo" 
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-medium text-white bg-[#9D2398] hover:bg-[#8A1D84] transition-colors shadow-sm"
            >
              Chat with iGENE &raquo;
            </a>
          </div>
        </div>
        
        
      </div>
    </section>
    
    {/* How It Works Section */}
    <HowItWorks />
    </>
  )
}
