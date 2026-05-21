import React, { useState } from 'react';
import { ChevronDown, Play } from 'lucide-react';
import neonImg from '../../assets/neon.svg';

interface FAQ {
  question: string;
  answer: string;
}

interface AccordionItemProps {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ faq, index, isOpen, onClick }) => {
  const numberStr = String(index + 1).padStart(2, '0');

  return (
    <div 
      className={`rounded-2xl transition-colors duration-300 mb-3 ${
        isOpen ? 'bg-[#EAECEE]' : 'bg-white hover:bg-gray-50'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left py-5 px-6 focus:outline-none"
      >
        <div className="flex items-center gap-6">
          <span className="text-gray-400 font-medium text-lg w-6">
            {numberStr}
          </span>
          <span className="text-[#1A1A1A] font-medium text-[17px]">
            {faq.question}
          </span>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      {/* Smooth Accordion Content using CSS Grid */}
      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 px-6 pl-[4.5rem]">
            <p className="text-[#555555] leading-relaxed text-[15px]">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs: FAQ[] = [
    {
      question: "Is genetic testing only for people who are already sick?",
      answer: "No — and this is the most common misconception. Genetic testing is often most valuable before you're sick. It tells you what risks to watch out for, which lifestyle changes matter most for your body, and which medications are safe and effective for you — all before anything goes wrong."
    },
    {
      question: "Do i need to understand science to use Genomac Lab?",
      answer: "Not at all. We translate everything into plain language. Your report tells you what your results mean for your health in everyday terms — no medical degree required. A specialist also walks you through everything personally."
    },
    {
      question: "How is a sample collected? Is it painful?",
      answer: "No. In most cases, we use a simple saliva swab — just a cotton swab inside your cheek. No needles, no pain. In some cases a small blood sample may be needed, collected by a trained professional at our lab or a partner clinic near you."
    },
    {
      question: "How long does it take to get my result?",
      answer: "Most reports are ready within 48 hours of receiving your sample. A specialist reviews your results before they are shared with you, so you receive a report that has been checked and is ready to act on."
    },
    {
      question: "Is my genetic data kept confidential?",
      answer: "Absolutely. Your genetic information is among the most sensitive data that exists, and we treat it that way. It is never sold, shared with insurers or advertisers, or used for any purpose other than generating your personal results and care plan."
    },
    {
      question: "Can hospital and research work with Genomac Labs?",
      answer: "Yes. We actively support clinical, institutional, and research collaborations. If you represent a hospital, university, or health organization, reach out to us at info@genomaclabs.com to discuss how we can work together."
    },
    {
      question: "Is support available on weekends?",
      answer: "Our support team is available Monday through Friday during regular business hours. However, emergency clinical support for healthcare providers is accessible 24/7."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F6F5F2] px-6 py-20 md:px-12 lg:px-24 font-sans">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-12">
          
          {/* Top Left: Title */}
          <div className="lg:col-span-5">
            <span className="block text-[11px] font-bold uppercase tracking-widest text-[#4A55E7] mb-6">
              // FREQUENTLY ASKED QUESTIONS //
            </span>
            <h2 className="text-4xl font-medium tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-[44px] leading-[1.1]">
              Get Quick Answers to Common Questions
            </h2>
          </div>

          {/* Top Right: Description */}
          <div className="lg:col-span-7 flex lg:items-end">
            <p className="text-[#666666] text-lg lg:pb-2 max-w-lg">
              Everything you need to know about Zikorail, pricing, and how to get started.
            </p>
          </div>

          {/* Bottom Left: CTA Card */}
          <div className="lg:col-span-5">
            <div className="flex flex-col">
              {/* Image */}
              <div className="rounded-3xl overflow-hidden mb-8 aspect-square bg-[#0F0A0A]">
                <img 
                  src={neonImg}
                  alt="Neon Question Mark"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                Still have questions?
              </h3>
              <p className="text-[#555555] text-[15px] leading-relaxed mb-6">
                Can't find the answer you're looking for? Please chat to our friendly team.
              </p>
              
              <button className="bg-[#6B71F2] hover:bg-[#5A5EE0] text-white text-sm font-medium py-3 px-6 rounded-lg w-max flex items-center gap-2 transition-colors duration-200">
                Get in touch
                <Play className="w-3 h-3 fill-current" />
              </button>
            </div>
          </div>

          {/* Bottom Right: Accordion List */}
          <div className="lg:col-span-7">
            <span className="block text-sm font-medium text-gray-400 mb-4">
              Support
            </span>
            
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;