import appstore from "../assets/appstore.svg"
import playstore from "../assets/playstore.svg"
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="relative w-full bg-[#FEF2FF] py-25 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute -bottom-80 left-10 blur-3xl w-[500px] h-[500px] bg-radial from-[#B241B7] to-[#FFFFFF00] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[#0061D4] font-bold text-xs sm:text-sm tracking-widest uppercase mb-4">
            BECOME A LEGENDARY DESIGNER
          </p>
          <h2 className="text-3xl font-bold text-[#171717] mb-6 leading-tight">
            What iGENE patients discovered — and what they did about it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          <div className="bg-[#1e1022] rounded-2xl p-8 pt-10 relative flex flex-col justify-between shadow-xl mt-8 lg:mt-0">
            <div className="absolute -top-8 left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-[#1e1022] text-4xl font-serif font-black leading-none mt-2">“</span>
            </div>
            <p className="text-gray-200 text-[15px] leading-relaxed mb-8 mt-4">
              "I had no idea what precision medicine was. I just knew my mother and aunt both had breast cancer. I messaged iGENE on WhatsApp and within 15 minutes it made sense to me. The test confirmed I carry a BRCA variant. I now have a monitoring plan. I feel prepared, not scared."
            </p>
            <div>
              <div className="flex items-center gap-1 mb-4">
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
                <FaStar size={18} className="text-gray-600 fill-gray-600" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">Olatunbosun Oyediran</h4>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <img src={appstore} alt="App Store" className="w-[14px] h-[14px] fill-current" />
                <span>AppStore User</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1e1022] rounded-2xl p-8 pt-10 relative flex flex-col justify-between shadow-xl mt-8 lg:mt-0">
            <div className="absolute -top-8 left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-[#1e1022] text-4xl font-serif font-black leading-none mt-2">“</span>
            </div>
            <p className="text-gray-200 text-[15px] leading-relaxed mb-8 mt-4">
              "I am a 49-year-old executive. I do not have any obvious health problems. But I wanted to know what my genes say before something goes wrong. iGENE discovered I have elevated cardiovascular genetic risk. I am on a monitoring protocol now. That information is worth far more than the price."
            </p>
            <div>
              <div className="flex items-center gap-1 mb-4">
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">Salvation Ogudu</h4>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[14px] h-[14px] fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.976H5.078z"></path>
                </svg>
                <span>X User</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1e1022] rounded-2xl p-8 pt-10 relative flex flex-col justify-between shadow-xl mt-8 lg:mt-0">
            <div className="absolute -top-8 left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-[#1e1022] text-4xl font-serif font-black leading-none mt-2">“</span>
            </div>
            <p className="text-gray-200 text-[15px] leading-relaxed mb-8 mt-4">
              "My husband and I both tested before our wedding. We found out we are both sickle cell carriers. That information changed our family planning completely. We are grateful we knew before, not after. Every couple in Nigeria should do this."
            </p>
            <div>
              <div className="flex items-center gap-1 mb-4">
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
                <FaStar size={18} className="text-orange-500 fill-orange-500" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">Michael Anokwu</h4>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <img src={playstore} alt="Play Store" className="w-[14px] h-[14px] fill-current" />
                <span>PlayStore User</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;