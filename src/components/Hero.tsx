import background from "../assets/Background.svg";
// import background from "../assets/hero.png";

const Hero = () => {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center pt-28 pb-16 md:pt-32 px-4 sm:px-6 lg:px-8 text-center bg-linear-to-r from-[#F6F5EF] to-[#FFFFFF] overflow-hidden">
      <img src={background} alt="Background" className="absolute z-0 top-0" />

      <div className="relative z-10  w-full">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-white border border-gray-200 rounded-full py-1.5 px-2 md:px-3 mb-6 md:mb-8 shadow-sm max-w-full">
          <span className="bg-gray-900 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
            New
          </span>
          <span className="text-xs md:text-sm text-gray-600 pr-2 truncate md:whitespace-normal">
            AI-Powered Precision Health{" "}
            <span className="hidden sm:inline">— Available on WhatsApp ↗</span>
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900  mx-auto leading-tight mb-4 md:mb-6 px-2">
          Whatever health concern is
          <br className="hidden sm:block" /> keeping you up at night
          <br className="hidden sm:block" />
          <span className="text-[#767676] font-medium">
            iGENE has the answers.
          </span>
        </h1>
        <p className="text-[#5A5A5A] max-w-3xl mx-auto text-sm sm:text-base md:text-lg mb-8 md:mb-10 leading-relaxed px-4">
          iGENE is a free AI health assistant on WhatsApp. Tell it what's on
          your mind about your health. It listens, understands your concerns,
          and connects you with advanced medical insights—in plain,
          easy-to-understand language.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 mb-6 w-full sm:w-auto px-4">
          <a href="https://app.zikorail.com/go/genomac-labs-genetic-test" target="_blank" className="bg-[#B241B7] hover:bg-[#a34abc] text-white px-6 py-3 md:py-3.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-colors w-full sm:w-auto shadow-md shadow-purple-500/20">
            Set up your business
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12l-9-8v6H0v4h15v6z" />
            </svg>
          </a>
          <a href="https://app.zikorail.com/go/genomac-labs-genetic-test" target="_blank" className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-6 py-3 md:py-3.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-colors shadow-sm w-full sm:w-auto">
            Request a demo
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <p className="text-xs md:text-sm text-[#B3B3B3]">
          14-day free trial. Cancel anytime.
        </p>
      </div>
    </main>
  );
};

export default Hero;
