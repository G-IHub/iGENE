import phoneImg from '../../assets/phone.svg'

export default function HowItWorks() {
  const features = [
    {
      title: "Chat With Our AI Assistant",
      description: "Ask questions about symptoms, testing, family history, medications, or available services.",
      icon: (
        <svg className="w-[18px] h-[18px] text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h2m4 0h4" />
        </svg>
      ),
      iconBg: "bg-blue-50"
    },
    {
      title: "Receive Personalized Guidance",
      description: "Our system helps identify relevant testing pathways and next steps.",
      icon: (
        <svg className="w-[18px] h-[18px] text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3M12 9a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      ),
      iconBg: "bg-emerald-50"
    },
    {
      title: "Schedule Your Test or Consultation",
      description: "Book a test, consultation, or sample coordination directly.",
      icon: (
        <svg className="w-[18px] h-[18px] text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" d="M4.5 10.5c2.5-4.5 6.5-4.5 7.5 1.5 1 6 5 6 7.5 1.5m-15 3c2.5 4.5 6.5 4.5 7.5-1.5 1-6 5-6 7.5-1.5" />
          <path strokeLinecap="round" d="M8 8.5v7M12 9v6M16 8.5v7" />
        </svg>
      ),
      iconBg: "bg-purple-50"
    },
    {
      title: "Get Actionable Insights",
      description: "Receive clinically useful reports and guidance to support healthcare decisions.",
      icon: (
        <svg className="w-[18px] h-[18px] text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 4v5a7 7 0 0014 0V4M5 4h2m10 0h2M12 16v3m-2.5 2.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" />
        </svg>
      ),
      iconBg: "bg-cyan-50"
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column - Features */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight mb-16 font-sans">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start text-left">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center mb-5 ${feature.iconBg}`}>
                  {feature.icon}
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-slate-500 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image Card */}
        <div className="flex justify-center lg:justify-end w-full">
          <img 
              src={phoneImg} 
              alt="Phone App Demonstration" 
              className="w-full h-full object-contain"
            />
        </div>

      </div>
    </section>
  )
}
