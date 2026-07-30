import {
  RiTwitterXFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1b1125] py-16 flex flex-col items-center justify-center gap-10 px-28">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
        <span className="text-white font-semibold text-lg tracking-wide">
          IGENE
        </span>
      </div>

      {/* Footer Links */}
      <nav className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 md:gap-8 px-4">
        <a
          href="#"
          className="text-[#d1d0d5] hover:text-white font-medium text-[15px] transition-colors"
        >
          Overview
        </a>
        <a
          href="#"
          className="text-[#d1d0d5] hover:text-white font-medium text-[15px] transition-colors"
        >
          Teams
        </a>
        <a
          href="#"
          className="text-[#d1d0d5] hover:text-white font-medium text-[15px] transition-colors"
        >
          Jobs
        </a>
        <a
          href="#"
          className="text-[#d1d0d5] hover:text-white font-medium text-[15px] transition-colors"
        >
          Help
        </a>
        <a
          href="#"
          className="text-[#d1d0d5] hover:text-white font-medium text-[15px] transition-colors"
        >
          Privacy
        </a>
      </nav>

      {/* Social Icons */}
      <div className="flex items-center gap-6 mt-2">
        <a
          href="#"
          className="text-[#a19fa6] hover:text-white transition-colors"
          aria-label="Facebook"
        >
          <RiFacebookCircleFill size={22} className="fill-current" />
        </a>
        <a
          href="#"
          className="text-[#a19fa6] hover:text-white transition-colors"
          aria-label="Twitter"
        >
          <RiTwitterXFill size={22} className="fill-current" />
        </a>
        <a
          href="#"
          className="text-[#a19fa6] hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <RiInstagramLine size={22} className="fill-current" />
        </a>
        <a
          href="#"
          className="text-[#a19fa6] hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <RiLinkedinBoxFill size={22} className="fill-current" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
