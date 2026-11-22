import React from 'react';
import { Sparkles, Brain, Users, Rocket, HeartHandshake, Terminal, ShieldCheck, ArrowRight } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

export const About: React.FC = () => {
  const { technologyOrganizer, ngoPartner } = HACKATHON_CONFIG;

  return (
    <section id="about" className="py-24 relative bg-[#052928] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#176B52]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-80 h-80 bg-[#C6FF3D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: "About Gemini Agentic 2026" */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073B3A] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono font-bold mb-4 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C6FF3D]" />
            <span>MISSION & COLLABORATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#F3F0E8] font-display tracking-tight mb-6">
            About Gemini Agentic 2026
          </h2>

          <p className="text-[#F3F0E8]/85 text-base sm:text-lg leading-relaxed">
            {HACKATHON_CONFIG.collaborationDescription}
          </p>
        </div>

        {/* 2-Column Overview: Technology Mission & Social Impact Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Technology Mission & Autonomous Innovation */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#073B3A] border border-[#C6FF3D]/25 shadow-xl flex flex-col justify-between group hover:border-[#C6FF3D]/60 transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#052928] border border-[#C6FF3D]/40 flex items-center justify-center text-[#C6FF3D] mb-6">
                <Brain className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono text-[#C6FF3D] uppercase font-bold tracking-wider block mb-1">
                ENGINEERING FRONTIER
              </span>
              <h3 className="text-2xl font-black text-[#F3F0E8] mb-4 font-display">
                The Autonomous Agent Paradigm
              </h3>

              <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed mb-4">
                The Gemini Agentic Coding Hackathon 2026 challenges builders to advance beyond static LLM prompting. Participants construct autonomous multi-agent loops, reasoning pipelines, and tool-calling swarms that perceive context, plan complex steps, self-correct bugs, and complete multi-stage goals autonomously.
              </p>

              <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed">
                By building on Gemini’s multimodal foundation models and native tool execution, innovators explore how autonomous systems can automate real-world engineering workflows, software synthesis, and data reasoning.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F3F0E8]/10 flex items-center justify-between text-xs font-mono text-[#C6FF3D]">
              <span>100% ONLINE HACKATHON</span>
              <span>SOLO & TEAMS UP TO 4</span>
            </div>
          </div>

          {/* Card 2: Social Impact Objectives & Grassroots Relevance */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#073B3A] border border-[#F2B544]/30 shadow-xl flex flex-col justify-between group hover:border-[#F2B544]/60 transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#052928] border border-[#F2B544]/50 flex items-center justify-center text-[#F2B544] mb-6">
                <HeartHandshake className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono text-[#F2B544] uppercase font-bold tracking-wider block mb-1">
                SOCIAL RESPONSIBILITY
              </span>
              <h3 className="text-2xl font-black text-[#F3F0E8] mb-4 font-display">
                Technology for Meaningful Social Impact
              </h3>

              <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed mb-4">
                Technology finds its highest value when applied to solve real human hardship. Through our strategic collaboration with <strong>{ngoPartner.name}</strong>, we anchor coding challenges in authentic community necessities—including rural healthcare information, vernacular education, farm resilience, and public welfare access.
              </p>

              <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed">
                Innovators are encouraged to design systems that are affordable, resilient under low bandwidth, and accessible to non-English-speaking rural citizens, bridging India’s digital and economic divides.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F3F0E8]/10 flex items-center justify-between text-xs font-mono text-[#F2B544]">
              <span>GRASSROOTS RELEVANCE</span>
              <span>ETHICAL EVALUATION</span>
            </div>
          </div>
        </div>

        {/* Separate Organization Profile Cards */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-[#C6FF3D] uppercase tracking-widest font-bold block mb-1">
              ORGANIZATIONAL STRUCTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F3F0E8] font-display">
              Leadership & Organizing Partners
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Organization 1: Proton Solutions */}
            <div className="p-8 rounded-3xl bg-[#073B3A] border border-[#F3F0E8]/15 hover:border-[#C6FF3D] transition-all flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#073B3A] bg-[#C6FF3D] px-2.5 py-1 rounded-md">
                    TECHNOLOGY ORGANISER
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#052928] border border-[#C6FF3D]/40 flex items-center justify-center text-[#C6FF3D]">
                    <Terminal className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="text-2xl font-black text-[#F3F0E8] font-display mb-2 group-hover:text-[#C6FF3D] transition-colors">
                  {technologyOrganizer.name}
                </h4>
                <p className="text-xs font-mono text-[#C6FF3D] mb-4">{technologyOrganizer.tagline}</p>

                <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed mb-6 font-medium">
                  {technologyOrganizer.description}
                </p>

                <div className="space-y-1.5 text-xs text-[#F3F0E8]/75 mb-6">
                  <p className="font-mono text-[11px] text-[#C6FF3D] font-bold uppercase mb-2">Scope of Responsibility:</p>
                  <p className="flex items-start gap-1.5"><span>•</span><span>Hackathon infrastructure & cloud environments</span></p>
                  <p className="flex items-start gap-1.5"><span>•</span><span>Agentic AI technical problem statement design</span></p>
                  <p className="flex items-start gap-1.5"><span>•</span><span>Codebase evaluation & architecture auditing</span></p>
                  <p className="flex items-start gap-1.5"><span>•</span><span>Prize distribution of guaranteed ₹24,000 cash pool</span></p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F3F0E8]/10 text-xs font-mono text-[#F3F0E8]/60 flex items-center justify-between">
                <span>{technologyOrganizer.contactEmail}</span>
                <span className="text-[#C6FF3D]">Technical Lead</span>
              </div>
            </div>

            {/* Organization 2: NGO Partner */}
            <div className="p-8 rounded-3xl bg-[#073B3A] border border-[#F3F0E8]/15 hover:border-[#F2B544] transition-all flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#073B3A] bg-[#F2B544] px-2.5 py-1 rounded-md">
                    COLLABORATION PARTNER
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#052928] border border-[#F2B544]/40 flex items-center justify-center text-[#F2B544]">
                    <HeartHandshake className="w-5 h-5 text-[#F2B544]" />
                  </div>
                </div>

                <h4 className="text-2xl font-black text-[#F3F0E8] font-display mb-2 group-hover:text-[#F2B544] transition-colors">
                  {ngoPartner.name}
                </h4>
                <p className="text-xs font-mono text-[#F2B544] mb-4">{ngoPartner.tagline}</p>

                <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed mb-6 font-medium">
                  {ngoPartner.description}
                </p>

                <div className="space-y-1.5 text-xs text-[#F3F0E8]/75 mb-6">
                  <p className="font-mono text-[11px] text-[#F2B544] font-bold uppercase mb-2">Scope of Responsibility:</p>
                  <p className="flex items-start gap-1.5"><span>•</span><span>Social-impact collaboration & community challenge advisory</span></p>
                  <p className="flex items-start gap-1.5"><span>•</span><span>Grassroots developmental guidance for project teams</span></p>
                  <p className="flex items-start gap-1.5"><span>•</span><span>Reviewing social relevance and ethical usability</span></p>
                  <p className="flex items-start gap-1.5"><span>•</span><span>Impact reporting support upon mutual formal agreement</span></p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F3F0E8]/10 text-xs font-mono text-[#F3F0E8]/60 flex items-center justify-between">
                <span className="italic">Verification pending official MoU</span>
                <span className="text-[#F2B544]">Grassroots Partner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Callout Footer */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#073B3A] via-[#176B52] to-[#073B3A] border border-[#C6FF3D]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-neon">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#C6FF3D] flex items-center justify-center text-[#073B3A] flex-shrink-0 font-bold">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#F3F0E8] mb-1 font-display">
                Calling All Innovators & Developers
              </h4>
              <p className="text-sm text-[#F3F0E8]/80 max-w-2xl">
                We invite students, college tech clubs, independent developers, freelance coders, AI practitioners, and civic innovators to engineer solutions that make a genuine difference.
              </p>
            </div>
          </div>

          <a
            href="#register"
            className="px-6 py-3 rounded-xl bg-[#C6FF3D] text-[#073B3A] font-bold text-sm hover:bg-[#b5f524] transition-all whitespace-nowrap shadow-md"
          >
            Join The Challenge
          </a>
        </div>
      </div>
    </section>
  );
};
