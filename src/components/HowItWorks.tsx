"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import phoneMockup1 from "../assets/iPhone.svg";
import phoneMockup2 from "../assets/iPhone1.svg";
import phoneMockup3 from "../assets/iPhone2.svg";
import phoneMockup4 from "../assets/iPhone3.svg";
import phoneMockup5 from "../assets/iPhone4.svg";
import phoneMockup6 from "../assets/iPhone5.svg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// All 6 steps extracted exactly from your provided images
const steps = [
  {
    id: 1,
    title: "Start a free chat",
    description:
      "Message iGENE on WhatsApp. Tell it what is on your mind about your health. The AI listens, asks intelligent questions, and understands your concern in 10–15 minutes.",
    tag: "FREE . WHATSAPP . 15MIN",
    bgColor: "#f8f5ff",
    image: phoneMockup1,
  },
  {
    id: 2,
    title: "Get your recommendation",
    description:
      "iGENE connects your concern to the right genetic assessment — explaining what it tests, why it matters for you specifically, and what you will know after.",
    tag: "Personalised · Plain language",
    bgColor: "#f0f7ff",
    image: phoneMockup2,
  },
  {
    id: 3,
    title: "Sample collected at home",
    description:
      "Our mobile phlebotomist visits you or you visit our nearest partner hospital close to you. Your sample is collected, labelled, and dispatched to the lab.",
    tag: "Home · Office · Lab",
    bgColor: "#fff5f5",
    image: phoneMockup3,
  },
  {
    id: 4,
    title: "Track every step",
    description:
      "Six WhatsApp updates from the moment your sample leaves your hands to the moment your results are ready. You always know exactly where it is.",
    tag: "6 real-time updates",
    bgColor: "#eff0ff",
    image: phoneMockup4,
  },
  {
    id: 5,
    title: "Results in plain language",
    description:
      "A 45–60 minute call with a precision medicine consultant. What was found. What it means for you. What to do next. No confusing clinical language.",
    tag: "Expert consultation",
    bgColor: "#ebfbfb",
    image: phoneMockup5,
  },
  {
    id: 6,
    title: "Your personal health report",
    description:
      "A written plain-language report and 12-month monitoring plan — sent within 24 hours of your results call. Share it with your doctor. Keep it for life.",
    tag: "Written report · 12-month plan",
    bgColor: "#fdf2f8",
    image: phoneMockup6,
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length) return;

      // Ensure cards 1-5 start off-screen
      cards.forEach((card, index) => {
        if (index !== 0) {
          gsap.set(card, { y: "100vh" });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardContainerRef.current, // Target the cards directly, not the whole section
          start: "top 20%", // Let it scroll up until it sits nicely near the top of the viewport
          end: `+=${cards.length * 150}%`, // Longer scroll distance for maximum smoothness
          pin: true,
          scrub: 1, // Fluid follow-through effect on the scrollbar
        },
      });

      // Crucial: 1.5 second "empty" scroll duration so the user reads the first card
      tl.to({}, { duration: 1.5 });

      cards.forEach((card, index) => {
        if (index === 0) return;

        const stepLabel = `step${index}`;

        // Glide the new card up smoothly
        tl.to(
          card,
          {
            y: 0,
            duration: 2,
            ease: "power2.inOut",
          },
          stepLabel,
        );

        // Neatly scale and push back previous cards
        for (let j = 0; j < index; j++) {
          const prevCard = cards[j];
          tl.to(
            prevCard,
            {
              scale: 1 - (index - j) * 0.04,
              y: -(index - j) * 25,
              opacity: 1 - (index - j) * 0.08,
              duration: 2,
              ease: "power2.inOut",
            },
            stepLabel,
          );
        }

        // Another reading pause after the card locks into place
        tl.to({}, { duration: 1.5 });
      });
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className="w-full bg-white relative pb-32">
      {/* Scrollable Header Section (Doesn't Pin) */}
      <div className="w-full px-6 pt-24 mb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-purple-700"></div>
            <span className="text-purple-700 font-semibold text-xs tracking-widest uppercase">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 leading-[1.2]">
            From your first message to your final result — six steps, all on
            WhatsApp.
          </h2>
          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
            Every iGENE patient goes through the same journey. The only thing
            that changes is the test — because every person's concern is
            different.
          </p>
        </div>
      </div>

      {/* The Pinning Card Container */}
      <div
        ref={cardContainerRef}
        className="relative w-full max-w-275 mx-auto px-6 h-105"
      >
        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={`${
              index === 0
                ? "relative"
                : "absolute top-0 left-6 right-6 w-[calc(100%-3rem)]"
            } rounded-4xl p-8 md:p-14 shadow-lg border border-black/5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center will-change-transform origin-top h-full`}
            style={{
              backgroundColor: step.bgColor,
              zIndex: index + 10,
            }}
          >
            {/* Left Side: Text Content */}
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6 tracking-tight">
                {step.title}
              </h3>
              <p className="text-[#4B5563] text-lg md:text-[19px] leading-relaxed mb-8">
                {step.description}
              </p>
              <p className="text-[#06b6d4] font-medium tracking-wide text-[15px]">
                {step.tag}
              </p>
            </div>

            {/* Right Side: Visual/Mockup Placeholder */}
            <div className="hidden relative md:flex justify-center items-center h-full">
              <img src={step.image} alt={`${step.title} phone mockup`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
