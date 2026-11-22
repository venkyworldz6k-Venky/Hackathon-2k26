import React from 'react';
import { HeartHandshake, Globe, Mail, MapPin, ShieldAlert, Award, FileText, CheckCircle2, Info } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

export const NgoPartner: React.FC = () => {
  const { ngoPartner } = HACKATHON_CONFIG;

  return (
    <section id="ngo-partner" className="py-24 relative bg-[#052928] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F2B544]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073B3A] border border-[#F2B544]/40 text-[#F2B544] text-xs font-mono font-bold mb-4 tracking-wider uppercase">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>COMMUNITY PARTNER PROFILE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#F3F0E8] font-display tracking-tight mb-4">
            About Our NGO Partner
          </h2>

          <p className="text-[#F3F0E8]/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Discover the mission, vision, and grassroots programmes driven by our collaboration partner, connecting technological innovation directly with communities on the ground.
          </p>
        </div>

        {/* Main NGO Dossier Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#073B3A] border-2 border-[#F2B544]/40 shadow-2xl p-6 sm:p-10 mb-12">
          {/* Header Row: Partner Identity & Registration Badge */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#F3F0E8]/10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#052928] border border-[#F2B544]/60 flex items-center justify-center text-[#F2B544] shadow-md flex-shrink-0">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#F2B544] uppercase tracking-wider block">
                  OFFICIAL COLLABORATION PARTNER
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#F3F0E8] font-display">
                  {ngoPartner.name}
                </h3>
                <p className="text-xs font-mono text-[#F3F0E8]/60 mt-0.5">{ngoPartner.tagline}</p>
              </div>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[#052928] border border-[#F2B544]/30 text-xs font-mono text-[#F2B544]">
              <span>STATUS: <strong>PARTNERSHIP PENDING FINAL RATIFICATION</strong></span>
            </div>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 rounded-2xl bg-[#052928] border border-[#F3F0E8]/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#C6FF3D] uppercase font-bold tracking-wider block mb-2">
                  ORGANIZATIONAL MISSION
                </span>
                <p className="text-xs sm:text-sm text-[#F3F0E8]/85 leading-relaxed font-medium">
                  {ngoPartner.mission}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F3F0E8]/10 text-[11px] font-mono text-[#F3F0E8]/50">
                * To be finalized upon mutual partner signoff
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#052928] border border-[#F3F0E8]/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#F2B544] uppercase font-bold tracking-wider block mb-2">
                  ORGANIZATIONAL VISION
                </span>
                <p className="text-xs sm:text-sm text-[#F3F0E8]/85 leading-relaxed font-medium">
                  {ngoPartner.vision}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F3F0E8]/10 text-[11px] font-mono text-[#F3F0E8]/50">
                * Grassroots Empowerment & Social Inclusion
              </div>
            </div>
          </div>

          {/* Rural Development Initiatives & Community Programmes */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-[#F3F0E8] font-display mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F2B544]" />
              <span>Community Initiatives & Focus Programmes</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ngoPartner.initiatives.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#052928] border border-[#F3F0E8]/10 hover:border-[#F2B544]/50 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F2B544] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-bold text-[#F3F0E8] mb-1">{item.title}</h5>
                      <p className="text-xs text-[#F3F0E8]/75 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification & Compliance Metadata Box */}
          <div className="p-5 rounded-2xl bg-[#04201f] border border-[#F3F0E8]/15 space-y-3 text-xs text-[#F3F0E8]/80 font-mono">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#F3F0E8]/10">
              <span className="text-[#F2B544] font-bold">Registration & Governance:</span>
              <span className="text-[#F3F0E8]/70">{ngoPartner.registrationInfo}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#F3F0E8]/10">
              <span className="text-[#F2B544] font-bold">Areas of Operation:</span>
              <span className="text-[#F3F0E8]/70">{ngoPartner.areasOfOperation}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-[#F2B544] font-bold">Partner Official Website:</span>
              <a
                href={ngoPartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C6FF3D] hover:underline flex items-center gap-1"
              >
                <span>{ngoPartner.website} (Placeholder)</span>
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Ethical Transparency Note */}
        <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-[#073B3A] border border-[#F3F0E8]/15 flex items-start gap-3 text-xs text-[#F3F0E8]/80">
          <Info className="w-4 h-4 text-[#C6FF3D] flex-shrink-0 mt-0.5" />
          <p>
            <strong>Compliance Note:</strong> In accordance with ethical hackathon guidelines, all NGO branding, registration numbers, certificates, and operational scopes remain placeholder-managed until formal ratification and validation. No unverified claims or achievements are made on this website.
          </p>
        </div>
      </div>
    </section>
  );
};
