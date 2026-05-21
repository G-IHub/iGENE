import React from 'react';
import { ChevronsRight } from 'lucide-react';
import logoImg from '../../assets/logo.svg';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 mx-auto max-w-[95%] lg:max-w-7xl">
      <div className="flex h-[72px] items-center justify-between rounded-full bg-white px-6 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] md:px-8">
        
          {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-purple-100 p-0.5 flex items-center justify-center overflow-hidden shrink-0">
            <img src={logoImg} className="w-full h-full object-cover rounded-full" alt="Overlay Logo" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 font-sans">iGENE</span>
        </a>

        {/* Navigation Links (Hidden on mobile) */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-[16px] font-medium text-[#666666] transition-colors hover:text-[#972FAF]">
            About Us
          </a>
          <a href="#courses" className="text-[16px] font-medium text-[#666666] transition-colors hover:text-[#972FAF]">
            Our Courses
          </a>
          <a href="#blog" className="text-[16px] font-medium text-[#666666] transition-colors hover:text-[#972FAF]">
            Blog
          </a>
          <a href="#contact" className="text-[16px] font-medium text-[#666666] transition-colors hover:text-[#972FAF]">
            Contact US
          </a>
        </div>

        {/* CTA Button */}
        <a href="https://app.zikorail.com/go/genomac-labs-genetic-test" className="group flex items-center gap-1 rounded-full bg-[#972FAF] px-6 py-3 font-medium text-white transition-transform hover:scale-105 hover:bg-[#832698]">
          <span>Chat with iGeng</span>
          <ChevronsRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;