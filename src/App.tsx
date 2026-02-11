import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import BeforeAfter from "./components/illustrations/BeforeAfter";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import ServiceAreas from "./components/ServiceAreas";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import ScrollReveal from "./components/ScrollReveal";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    function handleOpenPrivacy() {
      setPrivacyOpen(true);
    }
    window.addEventListener("open-privacy-policy", handleOpenPrivacy);
    return () => window.removeEventListener("open-privacy-policy", handleOpenPrivacy);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
                The Garage Rescue Difference
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                From cluttered chaos to clean, usable space
              </p>
            </div>
            <BeforeAfter className="mt-10" />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <Pricing />
      </ScrollReveal>

      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal>
        <ServiceAreas />
      </ScrollReveal>

      <ContactForm />
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <FloatingCTA />
      <CookieBanner />
      <PrivacyPolicy open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
}
