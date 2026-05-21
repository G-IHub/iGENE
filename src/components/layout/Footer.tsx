import logoImg from '../../assets/logo.svg'

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-12 bg-white px-6 border-t border-slate-100 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-100">
        
        <div className="md:col-span-5 flex flex-col items-start space-y-4">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-purple-100 p-0.5 flex items-center justify-center overflow-hidden shrink-0">
              <img src={logoImg} className="w-full h-full object-cover rounded-full" alt="Overlay Logo" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 font-sans">iGENE</span>
          </a>
          <p className="text-slate-500 text-sm max-w-sm font-normal">
            Genomac Labs uses clinical-grade precision genetic sequencing paired with medical-grade intelligence models to empower you on your health journey.
          </p>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-slate-900 font-semibold text-sm">Navigation</h4>
          <div className="flex flex-col space-y-2.5">
            <a href="#about" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">About Us</a>
            <a href="#courses" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Our Courses</a>
            <a href="#blog" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Blog</a>
          </div>
        </div>

        <div className="md:col-span-4 space-y-4">
          <h4 className="text-slate-900 font-semibold text-sm">Stay Updated</h4>
          <p className="text-slate-500 text-sm font-normal">
            Subscribe to get notifications on genetic research findings and Genomac Lab breakthroughs.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:bg-white transition-colors shadow-sm"
            />
            <button 
              type="button" 
              className="bg-[#9D2398] hover:bg-[#8A1D84] text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm active:scale-95"
            >
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-sm">
        <span>&copy; {new Date().getFullYear()} Genomac Labs Inc. All rights reserved.</span>
        <div className="flex gap-6 mt-4 sm:mt-0 font-medium">
          <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Cookie settings</a>
        </div>
      </div>
    </footer>
  )
}
