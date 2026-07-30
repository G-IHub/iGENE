import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuestionSection from "./components/QuestionSection";
import WhatisIgene from "./components/WhatIsIgene";
import Testimonial from "./components/Testimonial";
import HowItWorks from "./components/HowItWorks";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuestionSection />
      <WhatisIgene />
      <HowItWorks />
      <Testimonial />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
