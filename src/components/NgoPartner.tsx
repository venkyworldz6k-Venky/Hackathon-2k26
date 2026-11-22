import React from 'react';
import { 
  HeartHandshake, 
  Globe, 
  Mail, 
  MapPin, 
  Phone, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles,
  Users,
  Compass,
  Building2,
  FileCheck2,
  ShieldCheck
} from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

export const NgoPartner: React.FC = () => {
  const { ngoPartner } = HACKATHON_CONFIG;

  return (
    <section id="ngo-partner" className="py-24 relative bg-[#052928] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Background ambient lighting with Warm Sun and Forest Green tones */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#176B52]/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F2B544]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073B3A] border border-[#F2B544]/50 text-[#F2B544] text-xs font-mono font-bold mb-4 tracking-wider uppercase shadow-warm-glow">
            <HeartHandshake className="w-3.5 h-3.5 text-[#F2B544]" />
            <span>OFFICIAL SOCIAL IMPACT PARTNER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#F3F0E8] font-display tracking-tight mb-4">
            About {ngoPartner.name}
          </h2>

          <p className="text-[#F3F0E8]/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Connecting cutting-edge autonomous AI with verified grassroots community needs across rural and tribal India.
          </p>
        </div>

        {/* Main NGO Dossier Card */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-[#073B3A] border-2 border-[#F2B544]/40 shadow-2xl p-6 sm:p-10 mb-12 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F2B544]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row: Partner Identity & Live Verification Pill */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#F3F0E8]/10 relative z-10">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#052928] border-2 border-[#F2B544] flex items-center justify-center text-[#F2B544] shadow-warm-glow flex-shrink-0">
                <HeartHandshake className="w-8 h-8 sm:w-10 sm:h-10 text-[#F2B544]" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-[#F2B544] uppercase tracking-wider">
                    {ngoPartner.role}
                  </span>
                  <span className="text-[10px] font-mono text-[#C6FF3D] bg-[#052928] border border-[#C6FF3D]/40 px-2 py-0.5 rounded-full">
                    CIN: {ngoPartner.cin}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-[#F3F0E8] font-display">
                  {ngoPartner.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#F2B544] font-semibold mt-1">
                  "{ngoPartner.tagline}"
                </p>
              </div>
            </div>

            {/* Direct Visit Website Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <a
                href={ngoPartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#F2B544] text-[#073B3A] font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#e0a435] transition-all shadow-md group"
              >
                <span>Visit Roots & Rise Website</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Impact Snapshot Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8 relative z-10">
            <div className="p-4 rounded-2xl bg-[#052928] border border-[#F3F0E8]/10 text-center">
              <span className="block text-xl sm:text-2xl font-mono font-black text-[#C6FF3D]">142+</span>
              <span className="text-[11px] font-mono text-[#F3F0E8]/70 uppercase">Gram Panchayats</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#052928] border border-[#F3F0E8]/10 text-center">
              <span className="block text-xl sm:text-2xl font-mono font-black text-[#F2B544]">Section 80G</span>
              <span className="text-[11px] font-mono text-[#F3F0E8]/70 uppercase">Tax Certified 12A</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#052928] border border-[#F3F0E8]/10 text-center">
              <span className="block text-xl sm:text-2xl font-mono font-black text-[#C6FF3D]">4 States</span>
              <span className="text-[11px] font-mono text-[#F3F0E8]/70 uppercase">RJ • MP • OD • WB</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#052928] border border-[#F3F0E8]/10 text-center">
              <span className="block text-xl sm:text-2xl font-mono font-black text-[#F2B544]">100% Audited</span>
              <span className="text-[11px] font-mono text-[#F3F0E8]/70 uppercase">FCRA & Statutory</span>
            </div>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 relative z-10">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#052928] border border-[#C6FF3D]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="w-4 h-4 text-[#C6FF3D]" />
                  <span className="text-xs font-mono text-[#C6FF3D] uppercase font-bold tracking-wider">
                    ORGANIZATIONAL MISSION
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#F3F0E8]/90 leading-relaxed font-medium">
                  {ngoPartner.mission}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F3F0E8]/10 text-[11px] font-mono text-[#C6FF3D]/80">
                Focus: Dignified Livelihoods • Quality Education • Clean Water
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#052928] border border-[#F2B544]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#F2B544]" />
                  <span className="text-xs font-mono text-[#F2B544] uppercase font-bold tracking-wider">
                    ORGANIZATIONAL VISION
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#F3F0E8]/90 leading-relaxed font-medium">
                  {ngoPartner.vision}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F3F0E8]/10 text-[11px] font-mono text-[#F2B544]/80">
                Vision: Resilient Villages • Ecological Agriculture • Human Dignity
              </div>
            </div>
          </div>

          {/* Authentic Roots & Rise Grassroots Initiatives */}
          <div className="mb-10 relative z-10">
            <div className="flex items-center justify-between gap-4 mb-5">
              <h4 className="text-lg sm:text-xl font-bold text-[#F3F0E8] font-display flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#F2B544]" />
                <span>Active Community Programmes & Impact Fields</span>
              </h4>
              <span className="text-xs font-mono text-[#C6FF3D] hidden sm:inline">
                Real Grassroots Deployment
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ngoPartner.initiatives.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#052928] border border-[#F3F0E8]/10 hover:border-[#F2B544]/60 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold text-[#F2B544] bg-[#073B3A] px-2 py-0.5 rounded-full border border-[#F2B544]/30">
                        {item.category}
                      </span>
                      {item.stat && (
                        <span className="text-[11px] font-mono font-black text-[#C6FF3D]">
                          {item.stat}
                        </span>
                      )}
                    </div>
                    <h5 className="text-sm font-bold text-[#F3F0E8] mb-2 group-hover:text-[#F2B544] transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-xs text-[#F3F0E8]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory & Grassroots Leadership */}
          <div className="mb-10 relative z-10">
            <h4 className="text-base font-bold text-[#F3F0E8] font-display mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#C6FF3D]" />
              <span>Key Domain Advisors & Leadership</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {ngoPartner.leadership.map((leader, lIdx) => (
                <div key={lIdx} className="p-3.5 rounded-xl bg-[#052928] border border-[#F3F0E8]/10">
                  <p className="text-xs font-bold text-[#F3F0E8]">{leader.name}</p>
                  <p className="text-[10px] font-mono text-[#F2B544] font-semibold mt-0.5">{leader.role}</p>
                  <p className="text-[11px] text-[#F3F0E8]/60 mt-1 line-clamp-2">{leader.focusArea}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Legal & Field Office Contact Box */}
          <div className="p-6 rounded-2xl bg-[#04201f] border border-[#F2B544]/30 space-y-4 text-xs font-mono relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-[#F3F0E8]/10">
              <div>
                <span className="text-[#F2B544] font-bold block mb-1">REGISTERED OFFICE:</span>
                <span className="text-[#F3F0E8]/80">{ngoPartner.registeredOffice}</span>
                <span className="text-[#F3F0E8]/60 block mt-1">CIN: {ngoPartner.cin} • Section 80G / 12A Certified</span>
              </div>
              <div>
                <span className="text-[#C6FF3D] font-bold block mb-1">FIELD TRIBAL HUB:</span>
                <span className="text-[#F3F0E8]/80">{ngoPartner.tribalHub}</span>
                <span className="text-[#F3F0E8]/60 block mt-1">{ngoPartner.areasOfOperation}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#F3F0E8]/80">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#F2B544]" />
                  <span>{ngoPartner.contactEmail}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C6FF3D]" />
                  <span>{ngoPartner.phone}</span>
                </span>
              </div>
              <a
                href={ngoPartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C6FF3D] hover:underline flex items-center gap-1 font-bold"
              >
                <span>roots-and-rise-l27a.vercel.app</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Ethical Collaboration Assurance Note */}
        <div className="max-w-4xl mx-auto p-5 rounded-2xl bg-[#073B3A] border border-[#C6FF3D]/30 flex items-start gap-3.5 text-xs text-[#F3F0E8]/85 shadow-md">
          <ShieldCheck className="w-5 h-5 text-[#C6FF3D] flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Authentic NGO Collaboration:</strong> ROOTS & RISE Foundation works alongside Proton Solutions to guide hackathon participants in framing real-world problems. Participants retain 100% intellectual property ownership of their software prototypes while gaining insights into verified rural challenges.
          </div>
        </div>
      </div>
    </section>
  );
};
