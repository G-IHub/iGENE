import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import image from "../../assets/image.svg";
// This is caused a build error, npm run build worked well, but prod failed - apparently the actaully image 
// was Image.svg not image.svg as referenced here - capital "I"!!! Imagine??????! I added this to be able to commit sha
import image1 from '../../assets/image1.svg';
import image2 from '../../assets/image2.svg';
import image3 from '../../assets/image3.svg';

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  tagline,
  description,
  features,
}) => {
  return (
    <div className="flex flex-col">
      {/* Card Image */}
      <div className="mb-6 overflow-hidden rounded-2xl aspect-[16/10]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
        {title}
      </h3>
      
      <p className="text-sm font-medium text-[#0066FF] mb-3">
        {tagline}
      </p>
      
      <p className="text-base text-[#4A4A4A] leading-relaxed mb-6">
        {description}
      </p>

      {/* Feature Checklist */}
      <ul className="space-y-3 mt-auto">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-[#2A2A2A]">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#2EC4B6] mt-0.5" strokeWidth={2} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  const services = [
    {
      imageSrc: image,
      imageAlt: "Genome Sequencing interface",
      title: "Genetic Testing",
      tagline: "In plain terms: a test that reads your DNA for hidden health clues",
      description: "We identify inherited risks and give you a complete picture of your genetic health profile – before symptoms even appear.",
      features: [
        "Cancer-related gene screening",
        "Hereditary disease detection",
        "Cardiovascular risk genes",
        "Rare genetic disorder identification",
        "Reproductive & family planning insights"
      ]
    },
    {
      imageSrc: image1,
      imageAlt: "Medical infographic of syringe and vials",
      title: "Pharmacogenomics",
      tagline: "In plain terms: finding which medications will actually work for your body",
      description: "Some medications work well for certain people and poorly for others. Your genes determine which side you're on.",
      features: [
        "Drug effectiveness matching",
        "Medication safety risk identification",
        "Adverse reaction prevention",
        "Personalized treatment guidance"
      ]
    },
    {
      imageSrc: image2,
      imageAlt: "Healthcare professionals assisting individuals in a community outreach setting",
      title: "Preventive & Predictive Health",
      tagline: "In plain terms: knowing what could go wrong before it does",
      description: "Discover potential health risks before symptoms appear – so you can take action early, not after the damage is done.",
      features: [
        "Disease risk prediction by condition",
        "Early intervention planning",
        "Lifestyle decision support",
        "Long-term health outcome modeling"
      ]
    },
    {
      imageSrc: image3,
      imageAlt: "Researcher looking into a microscope",
      title: "Research & Sequencing Services",
      tagline: "In plain terms: advanced genomics support for institutions",
      description: "We partner with hospitals, universities, and research teams to deliver sequencing and genomics analysis at scale.",
      features: [
        "Clinical genomics sequencing",
        "Hospital diagnostic integration",
        "University research partnerships",
        "Population-level genomics studies"
      ]
    }
  ];

  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Top Header Label */}
        <span className="block text-center text-xs font-semibold uppercase tracking-wider text-[#0066FF] mb-4">
          Our Service
        </span>

        {/* Section Heading */}
        <h2 className="mb-16 text-center text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
          Precision medicine services, explained simply.
        </h2>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              title={service.title}
              tagline={service.tagline}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;