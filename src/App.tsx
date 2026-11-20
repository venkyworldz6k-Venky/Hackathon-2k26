import { useState, useEffect } from 'react';
import { NeuralCanvas } from './components/NeuralCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Highlights } from './components/Highlights';
import { Prizes } from './components/Prizes';
import { ImportantDates } from './components/ImportantDates';
import { StayConnected } from './components/StayConnected';
import { Registration } from './components/Registration';
import { TermsSection, TermsModal } from './components/TermsAndConditions';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App = () => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    if (viewParam === 'terms') {
      setIsTermsModalOpen(true);
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
        <Hero
          onRegisterClick={handleNavigateToRegister}
          onExploreClick={handleExploreClick}
        />

        <About />

        <Highlights />

        <Prizes />

        <ImportantDates />

        <StayConnected />

        <Registration
          onOpenTerms={() => setIsTermsModalOpen(true)}
        />

        <TermsSection />

        <FAQ />

        <Contact />
      </main>

      <Footer
        onOpenTerms={() => setIsTermsModalOpen(true)}
        onNavigateToRegister={handleNavigateToRegister}
      />

      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </div>
  );
};

export default App;
