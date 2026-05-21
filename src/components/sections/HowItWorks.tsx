import React from "react";
import { MessageSquareText, Target, Quote, Headset } from "lucide-react";
import phone from "../../assets/phone.svg";

interface FeatureProps {
  icon: React.ReactNode;
  iconBgColor: string;
  iconTextColor: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureProps> = ({
  icon,
  iconBgColor,
  iconTextColor,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start">
      {/* Icon Container */}
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full mb-5 ${iconBgColor} ${iconTextColor}`}
      >
        {icon}
      </div>

      {/* Feature Title */}
      <h3 className="text-[19px] font-bold text-[#1A1A1A] leading-tight mb-3">
        {title}
      </h3>

      {/* Feature Description */}
      <p className="text-[15px] leading-relaxed text-[#666666]">
        {description}
      </p>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  const features = [
    {
      icon: <MessageSquareText className="h-5 w-5" strokeWidth={2} />,
      iconBgColor: "bg-[#EBF1FF]",
      iconTextColor: "text-[#4A85F6]",
      title: "Chat With Our AI Assistant",
      description:
        "Ask questions about symptoms, testing, family history, medications, or available services.",
    },
    {
      icon: <Target className="h-5 w-5" strokeWidth={2} />,
      iconBgColor: "bg-[#E6F7F4]",
      iconTextColor: "text-[#20B2AA]",
      title: "Receive Personalized Guidance",
      description:
        "Our system helps identify relevant testing pathways and next steps.",
    },
    {
      icon: <Quote className="h-5 w-5 fill-current" strokeWidth={2} />,
      iconBgColor: "bg-[#F3EAFF]",
      iconTextColor: "text-[#9B51E0]",
      title: "Schedule Your Test or Consultation",
      description:
        "Book a test, consultation, or sample coordination directly.",
    },
    {
      icon: <Headset className="h-5 w-5" strokeWidth={2} />,
      iconBgColor: "bg-[#E6F4FF]",
      iconTextColor: "text-[#36A2EB]",
      title: "Get Actionable Insights",
      description:
        "Receive clinically useful reports and guidance to support healthcare decisions.",
    },
  ];

  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-24 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-semibold tracking-tight text-[#2B2D42] sm:text-5xl lg:text-[44px] mb-12 lg:mb-16">
              How It Works
            </h2>

            {/* 2x2 Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 pr-0 lg:pr-8">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  iconBgColor={feature.iconBgColor}
                  iconTextColor={feature.iconTextColor}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Image Presentation */}
          <div className="relative flex w-full items-center justify-center rounded-[32px] bg-[#F4F4F4] aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden">
            <img
              src={phone}
              alt="Mobile app interface displaying currency conversion amidst 3D crystal structures"
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
