import React, { useState } from 'react';
import logo from '../assets/genomac-logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed bg-[#F6F4E6] w-full flex justify-center z-50 p-4">
      <nav className="relative flex flex-col w-full max-w-4xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-2xl md:rounded-xl px-4 md:px-6 py-3 transition-all duration-300">
        
        <div className="flex items-center justify-between w-full">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Genomac Labs" className="w-7 h-7" />
            <span className="font-semibold text-gray-800 tracking-wide text-sm md:text-base font-[sanchez]">iGENE</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#what-is-igene" className="hover:text-gray-900 transition-colors">What is iGENE</a>
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#stories" className="hover:text-gray-900 transition-colors">Stories</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </div>
          <div className="hidden md:block">
            <a href="https://app.zikorail.com/go/genomac-labs-genetic-test" target='_blank' className="bg-[#B241B7] hover:bg-[#a03cb1] cursor-pointer text-white px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
              Chat on WhatsApp
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12l-9-8v6H0v4h15v6z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 pt-4 pb-2 mt-2 border-t border-gray-100">
            <a href="#what-is-igene" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-gray-900 px-2">What is iGENE</a>
            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-gray-900 px-2">How it works</a>
            <a href="#stories" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-gray-900 px-2">Stories</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-gray-900 px-2">FAQ</a>
            <a href="https://app.zikorail.com/go/genomac-labs-genetic-test" target="_blank" className="bg-[#B241B7] hover:bg-[#a03cb1] text-white px-5 py-2 mt-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-colors w-full">
              Chat on WhatsApp
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12l-9-8v6H0v4h15v6z" />
              </svg>
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;