import React from "react";
import record from "../../assets/record.svg";
import rejected from "../../assets/rejected.svg";
import person from "../../assets/person.svg";

interface PrivacyFeatureProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const PrivacyFeature: React.FC<PrivacyFeatureProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start text-left">
      {/* Feature Icon */}
      <div className="mb-6 flex h-16 items-center justify-center text-[#E07A5F]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Feature Title */}
      <h3 className="mb-3 text-xl font-semibold text-[#1A1A1A]">{title}</h3>

      {/* Feature Description */}
      <p className="text-base leading-relaxed text-[#666666]">{description}</p>
    </div>
  );
};

export const PrivacySection: React.FC = () => {
  const features = [
    {
      imageSrc: rejected,
      imageAlt: "Your data stays yours",
      title: "Your data stays yours",
      description:
        "We never sell or share your genetic information with third parties, insurers, or advertisers – under any circumstance.",
    },
    {
      imageSrc: record,
      imageAlt: "Used only for your care",
      title: "Used only for your care",
      description:
        "Your genetic data is accessed only to generate your report and care plan. Nothing else. No exceptions.",
    },
    {
      imageSrc: person,
      imageAlt: "Guided by global standards",
      title: "Guided by global standards",
      description:
        "Our data practices are guided by HIPAA, GDPR, and NDPR principles – because your trust is the foundation of precision medicine.",
    },
  ];

  return (
    <section className="bg-[#F9F8F3] px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Top Tagline */}
        <span className="block text-xs font-semibold uppercase tracking-wider text-[#4A55E7] mb-6">
          // Your Privacy //
        </span>

        {/* Main Heading */}
        <h2 className="mb-20 text-4xl font-medium tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl max-w-4xl">
          Your genetic data is yours. Always.
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {features.map((feature, index) => (
            <PrivacyFeature
              key={index}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
