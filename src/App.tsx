import { useState, useEffect } from 'react';
import { NeuralCanvas } from './components/NeuralCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnershipBanner } from './components/PartnershipBanner';
import { About } from './components/About';
import { SocialImpact } from './components/SocialImpact';
import { NgoPartner } from './components/NgoPartner';
import { SocialGoodTracks } from './components/SocialGoodTracks';
import { Highlights } from './components/Highlights';
import { Prizes } from './components/Prizes';
import { ImportantDates } from './components/ImportantDates';
import { StayConnected } from './components/StayConnected';
import { TransparencySection } from './components/TransparencySection';
import { Registration } from './components/Registration';
import { TermsSection, TermsModal } from './components/TermsAndConditions';
import { PrivacyModal } from './components/PrivacyModal';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App = () => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    if (viewParam === 'terms') {
      setIsTermsModalOpen(true);
    } else if (viewParam === 'privacy') {
      setIsPrivacyModalOpen(true);
    }
  }, []);

  const handleNavigateToRegister = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#073B3A] text-[#F3F0E8] relative selection:bg-[#C6FF3D] selection:text-[#073B3A]">
      <NeuralCanvas />

      <Navbar
        onOpenTerms={() => setIsTermsModalOpen(true)}
        onNavigateToRegister={handleNavigateToRegister}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onRegisterClick={handleNavigateToRegister}
          onExploreClick={handleExploreClick}
        />

        {/* 2. Official Collaboration Partners Section */}
        <PartnershipBanner />

        {/* 3. About Gemini Agentic 2026 */}
        <About />

        {/* 4. Social Impact: Technology With a Purpose */}
        <SocialImpact />

        {/* 5. About Our NGO Partner Profile */}
        <NgoPartner />

        {/* 6. AI for Social Good Challenge Tracks */}
        <SocialGoodTracks />

        {/* 7. Key Event Pillars & Highlights */}
        <Highlights />

        {/* 8. Guaranteed Prize Pool (₹24,000) */}
        <Prizes />

        {/* 9. Six-Phase Event Timeline */}
        <ImportantDates />

        {/* 10. Stay Connected (WhatsApp & Google Form) */}
        <StayConnected />

        {/* 11. Transparent Financial Governance & Contribution */}
        <TransparencySection />

        {/* 12. 5-Step Official Registration via Unstop */}
        <Registration
          onOpenTerms={() => setIsTermsModalOpen(true)}
        />

        {/* 13. Terms & Conditions Summary */}
        <TermsSection />

        {/* 14. Frequently Asked Questions */}
        <FAQ />

        {/* 15. Contact Section */}
        <Contact />
      </main>

      {/* Footer with full partner attribution & navigation */}
      <Footer
        onOpenTerms={() => setIsTermsModalOpen(true)}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onNavigateToRegister={handleNavigateToRegister}
      />

      {/* Global Modals */}
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
};

export default App;
