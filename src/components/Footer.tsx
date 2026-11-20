import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

interface FooterProps {
  onOpenTerms: () => void;
  onNavigateToRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onNavigateToRegister }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#031918] text-[#F3F0E8] border-t border-[#F3F0E8]/10 pt-16 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#073B3A] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#F3F0E8]/10">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#C6FF3D]/40 flex items-center justify-center text-[#C6FF3D]">
                <Terminal className="w-5 h-5 text-[#C6FF3D]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-mono font-bold block">
                  {HACKATHON_CONFIG.organizer}
                </span>
                <span className="text-base font-extrabold text-[#F3F0E8] tracking-tight">
                  {HACKATHON_CONFIG.eventName}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F3F0E8]/70 leading-relaxed max-w-sm">
              &ldquo;{HACKATHON_CONFIG.tagline}&rdquo; An elite, 100% online coding challenge empowering
              innovators to engineer autonomous agents and intelligent systems.
            </p>

            <div className="pt-2 text-xs font-mono text-[#F3F0E8]/50 space-y-1">
              <p>Total Prize Pool: <span className="text-[#FFD700] font-bold">₹24,000</span></p>
              <p>Registration Fee: <span className="text-[#C6FF3D] font-bold">₹250 (Non-Refundable)</span></p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C6FF3D] font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F3F0E8]/80 font-medium">
              <li>
                <a href="#" className="hover:text-[#C6FF3D] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C6FF3D] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#prizes" className="hover:text-[#C6FF3D] transition-colors">
                  Prizes
                </a>
              </li>
              <li>
                <button
                  onClick={onNavigateToRegister}
                  className="hover:text-[#C6FF3D] transition-colors cursor-pointer text-left"
                >
                  Register
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-[#C6FF3D] transition-colors cursor-pointer text-left"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C6FF3D] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C6FF3D] font-bold mb-4">
              Official Hubs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F3F0E8]/80">
              <li>
                <a
                  href={HACKATHON_CONFIG.placeholders.whatsappChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6FF3D] transition-colors flex items-center gap-1.5"
                >
                  WhatsApp Channel
                </a>
              </li>
              <li>
                <a
                  href={HACKATHON_CONFIG.placeholders.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6FF3D] transition-colors flex items-center gap-1.5"
                >
                  Google Participant Form
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-[#C6FF3D] transition-colors">
                  Event Milestones
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#C6FF3D] transition-colors">
                  FAQs & Help
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C6FF3D] font-bold mb-4">
              Fee Policy Notice
            </h4>
            <div className="p-3.5 rounded-xl bg-[#052928] border border-[#F3F0E8]/10 text-xs text-[#F3F0E8]/70 leading-relaxed space-y-2">
              <p>
                The registration fee of <strong>₹250 per participant</strong> is strictly non-refundable under all
                circumstances.
              </p>
              <button
                onClick={onOpenTerms}
                className="text-[#C6FF3D] underline underline-offset-2 text-[11px] font-mono hover:text-[#b5f524]"
              >
                Read Terms & Conditions
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3F0E8]/60 font-mono">
          <p>© 2026 Proton Solutions. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Gemini Agentic Coding Hackathon 2026</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#073B3A] text-[#C6FF3D] hover:bg-[#0a4c4b] transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
