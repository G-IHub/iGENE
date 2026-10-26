import {
  RiTwitterXFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
} from "react-icons/ri";
import logo from "../assets/genomac-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1b1125] py-16 flex flex-col items-center justify-center gap-10 px-28">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Genomac Labs" className="w-8 h-8" />
        <span className="text-white font-semibold text-lg tracking-wide">
          iGENE
        </span>
      </div>

      {/* Footer Links */}
      <nav className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 md:gap-8 px-4">
        <a
          href="#what-is-igene"
          className="text-[#d1d0d5] hover:text-white font-medium text-[15px] transition-colors"
        >
          What is iGENE
        </a>
        <a
          href="#how-it-works"
          className="text-[#d1d0d5] hover:text-white font-medium text-[15px] transition-colors"
        >
          How it works
        </a>
        <a
          href="#stories"
          className="text-[#d1d0d5] hover:text-white font-medium text-[15px] transition-colors"
        >
          Patient stories
        </a>
        <a
          href="#faq"
          className="text-[#d1d0d5] hover:text-white font-medium text-[15px] transition-colors"
        >
          FAQ
        </a>
        <a
          href="https://app.zikorail.com/go/genomac-labs-genetic-test"
          target="_blank"
          className="text-[#d1d0d5] hover:text-white font-medium text-[15px] transition-colors"
        >
          Chat on WhatsApp
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
