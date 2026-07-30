import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed bg-[#F6F4E6] w-full flex justify-center z-50 p-4">
      <nav className="relative flex flex-col w-full max-w-4xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-2xl md:rounded-xl px-4 md:px-6 py-3 transition-all duration-300">
        
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className="font-semibold text-gray-800 tracking-wide text-sm md:text-base">iGENE</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Resources</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Company</a>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#B241B7] hover:bg-[#a03cb1] cursor-pointer text-white px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
              Contact Us
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12l-9-8v6H0v4h15v6z" />
              </svg>
            </button>
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
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-2">How it works</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-2">Pricing</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-2">Resources</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-2">Company</a>
            <a href="" className="bg-[#B241B7] hover:bg-[#a03cb1] text-white px-5 py-2 mt-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-colors w-full">
              Contact Us
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