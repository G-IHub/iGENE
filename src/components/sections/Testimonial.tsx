import React from 'react';
import { Star } from 'lucide-react';
import avatar from '../../assets/Avatar.svg'; // Replace with actual avatar image paths

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  avatarUrl: string;
  rating: number;
}

const TestimonialCard: React.FC<Testimonial> = ({ quote, author, location, avatarUrl, rating }) => {
  return (
    <div className="flex flex-col bg-white p-8 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
      {/* Star Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-6 h-6 ${
              index < rating 
                ? 'fill-[#FCA927] text-[#FCA927]' 
                : 'fill-[#D1D5DB] text-[#D1D5DB]'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-grow mb-8">
        <p className="text-[#333333] text-[17px] leading-relaxed">
          "{quote}"
        </p>
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={avatarUrl}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-[#1A1A1A] text-sm md:text-base">
            {author}
          </span>
          <span className="text-[#888888] text-sm">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Testimonial: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      rating: 4,
      quote: "I had unexplained fatigue for two years. Three doctors told me I was fine. Genomac Labs found a genetic variant affecting how I absorb B12. Six weeks after treatment, I felt like a completely different person.",
      author: "Adaeze K.",
      location: "Lagos, Nigeria",
      avatarUrl: avatar
    },
    {
      rating: 4,
      quote: "My father died of a heart attack at 52. My Genomac report showed I carry the same cardiovascular gene variant — but gave me a precise prevention plan. I'm 44 and healthier than I've ever been.",
      author: "Emmanuel M.",
      location: "Abuja, Nigeria",
      avatarUrl: avatar
    },
    {
      rating: 4,
      quote: "As a physician, I was skeptical at first. After referring several patients and seeing the diagnostic precision firsthand, I'm now a convert. The reports are thorough, clinically useful, and genuinely transformative.",
      author: "Dr. Dele O",
      location: "Consultant Physician, Ibadan",
      avatarUrl: avatar
    }
  ];

  return (
    <section className="bg-[#F8F9FA] px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="block text-xs font-bold uppercase tracking-widest text-[#00C853] mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-medium tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-[54px]">
            Real people. Real clarity.
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;