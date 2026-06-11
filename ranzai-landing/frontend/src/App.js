import React, { useState } from "react";
import "@/App.css";
import { CONTENT } from "./content";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { SocialProof } from "./components/sections/SocialProof";
import { Features } from "./components/sections/Features";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Pricing } from "./components/sections/Pricing";
import { WhyRanzAI } from "./components/sections/WhyRanzAI";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/sections/Footer";

function App() {
  const [lang, setLang] = useState("id");
  const t = CONTENT[lang];

  return (
    <div className="App min-h-screen bg-[#FAFAFA] text-[#111827]">
      <Header t={t} lang={lang} setLang={setLang} />
      <main data-testid="landing-main">
        <Hero t={t} />
        <SocialProof t={t} />
        <Features t={t} />
        <HowItWorks t={t} />
        <Pricing t={t} />
        <WhyRanzAI t={t} />
        <FAQ t={t} />
        <FinalCTA t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
