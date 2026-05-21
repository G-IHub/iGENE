import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import familyImg from '../../assets/image4.png';
import doctorImg from '../../assets/image5.png';

interface FeatureListProps {
  items: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ items }) => (
  <ul className="space-y-4 mt-8">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3 text-sm md:text-base text-white">
        <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 opacity-90" strokeWidth={1.5} />
        <span className="leading-tight">{item}</span>
      </li>
    ))}
  </ul>
);

export const ValuePropositionSection: React.FC = () => {
  const individualFeatures = [
    "Understand your personal disease risks",
    "Know which medications work best for you",
    "Get a nutrition plan built for your genes",
    "Screen for hereditary conditions early",
    "Take control before symptoms appear"
  ];

  const institutionFeatures = [
    "Genomics diagnostic lab integration",
    "Disease risk screening for patient populations",
    "Pharmacogenomics - match drugs to patient genetics",
    "Research partnerships and data collaboration",
    "Staff training and clinical genomics support"
  ];

  return (
    <section className="bg-[#F6F5EE] px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Top Header Split Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16 gap-8 lg:gap-16">
          <div className="max-w-2xl">
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#4A55E7] mb-6">
              // Your Privacy //
            </span>
            <h2 className="text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
              THE BIGGER VISION Making Precision Medicine More Accessible in Africa
            </h2>
          </div>
          
          <div className="max-w-md lg:mt-12">
            <p className="text-base leading-relaxed text-[#666666]">
              Genetic testing and precision medicine should not only exist in advanced countries. At Genomac Labs, we are building systems that help more Africans access:
            </p>
          </div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Row 1: Individual Card */}
          <div className="bg-[#B241B7] rounded-3xl p-8 md:p-12 flex flex-col justify-center">
            <span className="bg-white text-[#B241B7] text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full w-max mb-6">
              For Individual
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              You don't need to be sick to benefit from this.
            </h3>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-2">
              Your DNA is already telling a story about your health. Genomac Labs helps you read it — in plain language, with a plan you can act on.
            </p>
            <FeatureList items={individualFeatures} />
          </div>

          {/* Row 1: Family Image */}
          <div className="rounded-3xl overflow-hidden min-h-[400px] lg:min-h-0">
            <img 
              src={familyImg}
              alt="Family blowing noses into tissues" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 2: Doctor Image */}
          <div className="rounded-3xl overflow-hidden min-h-[400px] lg:min-h-0 order-last lg:order-none">
            <img 
              src={doctorImg}
              alt="Doctor consulting with a patient" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 2: Institution Card */}
          <div className="bg-[#B241B7] rounded-3xl p-8 md:p-12 flex flex-col justify-center">
            <span className="bg-white text-[#B241B7] text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full w-max mb-6">
              For Institution
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Bring precision diagnostics to your patients.
            </h3>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-2">
              Hospitals, clinics, universities, and research teams can partner with Genomac Labs to integrate genomics into their practice.
            </p>
            <FeatureList items={institutionFeatures} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;