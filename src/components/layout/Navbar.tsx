import { useState } from 'react'
import logoImg from '../../assets/logo.png'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="absolute top-0 left-0 right-0 z-50 pt-6 px-6">
      <nav className="max-w-7xl mx-auto bg-white rounded-3xl h-20 flex items-center justify-between px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-purple-100 p-0.5 flex items-center justify-center overflow-hidden shrink-0">
            <img src={logoImg} className="w-full h-full object-cover rounded-full" alt="Overlay Logo" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 font-sans">iGENE</span>
        </a>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-[15px] font-medium text-slate-500 hover:text-slate-900 transition-colors">About Us</a>
          <a href="#courses" className="text-[15px] font-medium text-slate-500 hover:text-slate-900 transition-colors">Our Courses</a>
          <a href="#blog" className="text-[15px] font-medium text-slate-500 hover:text-slate-900 transition-colors">Blog</a>
          <a href="#contact" className="text-[15px] font-medium text-slate-500 hover:text-slate-900 transition-colors">Contact US</a>
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex">
          <a 
            href="#chat-demo" 
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[15px] font-medium text-white bg-[#9D2398] hover:bg-[#8A1D84] transition-colors"
          >
            Chat with iGENE &raquo;
          </a>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-500 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white mt-2 rounded-2xl p-4 space-y-3 shadow-lg border border-slate-100 max-w-7xl mx-auto">
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-600 font-medium hover:text-slate-900"
          >
            About Us
          </a>
          <a 
            href="#courses" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-600 font-medium hover:text-slate-900"
          >
            Our Courses
          </a>
          <a 
            href="#blog" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-600 font-medium hover:text-slate-900"
          >
            Blog
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-600 font-medium hover:text-slate-900"
          >
            Contact US
          </a>
          <div className="pt-2">
            <a 
              href="#chat-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block py-2.5 rounded-full text-[15px] font-medium text-white bg-[#9D2398]"
            >
              Chat with iGENE &raquo;
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
