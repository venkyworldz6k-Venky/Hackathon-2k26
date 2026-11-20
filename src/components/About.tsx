import React from 'react';
import { Sparkles, Brain, Users, Rocket } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#052928] border-t border-[#F3F0E8]/10 overflow-hidden">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#073B3A] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-80 h-80 bg-[#C6FF3D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#073B3A] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER THE FUTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-6">
            Pioneering the Next Era of <br />
            <span className="text-[#C6FF3D]">Agentic Intelligence</span>
          </h2>
          <p className="text-[#F3F0E8]/80 text-base sm:text-lg leading-relaxed">
            The <strong className="text-[#F3F0E8]">Gemini Agentic Coding Hackathon 2026</strong> is an elite online
            coding competition organized by <strong className="text-[#C6FF3D]">Proton Solutions</strong>, bringing
            together visionary programmers, students, and engineers to engineer multi-agent systems, autonomous workflows,
            and intelligent coding tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 sm:p-10 rounded-2xl glass-teal border border-[#F3F0E8]/15 hover:border-[#C6FF3D]/40 transition-all shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#F3F0E8] mb-4 font-display">
                About The Hackathon
              </h3>
              <p className="text-[#F3F0E8]/80 leading-relaxed mb-5">
                The Gemini Agentic Coding Hackathon 2026 is designed for innovators eager to explore the frontier of
                AI-powered development. Instead of writing static scripts, participants will construct autonomous agents
                capable of perception, reasoning, decision-making, and self-directed problem-solving.
              </p>
              <p className="text-[#F3F0E8]/80 leading-relaxed mb-6">
                Whether you are exploring subagent swarms, self-correcting test runners, intelligent code synthesizers,
                or automated research agents, this hackathon gives you the platform to push coding boundaries.
              </p>
            </div>

            <div className="pt-6 border-t border-[#F3F0E8]/10 flex items-center gap-4 text-xs font-mono text-[#C6FF3D]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-ping" />
                100% ONLINE FORMAT
              </span>
              <span>•</span>
              <span>OPEN TO SOLO & TEAMS</span>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl glass-teal border border-[#F3F0E8]/15 hover:border-[#C6FF3D]/40 transition-all shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0b4d4c] border border-[#F3F0E8]/20 flex items-center justify-center text-[#F3F0E8] mb-6">
                <Rocket className="w-6 h-6 text-[#C6FF3D]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F3F0E8] mb-4 font-display">
                About Proton Solutions
              </h3>
              <p className="text-[#F3F0E8]/80 leading-relaxed mb-5">
                <strong className="text-[#F3F0E8]">Proton Solutions</strong> is a next-generation technology organization
                focused on cultivating cutting-edge talent and accelerating innovation in artificial intelligence, cloud
                systems, and autonomous computing.
              </p>
              <p className="text-[#F3F0E8]/80 leading-relaxed mb-6">
                Our mission is to empower developers, university innovators, and tech builders with industry-level
                challenges, fair and rigorous merit-based evaluations, transparent prize distributions, and opportunities
                to connect with premier tech ecosystems.
              </p>
            </div>

            <div className="pt-6 border-t border-[#F3F0E8]/10 flex items-center justify-between text-xs font-mono text-[#F3F0E8]/70">
              <span>ORGANIZER CREDIBILITY</span>
              <span className="text-[#C6FF3D] font-bold">100% MERIT EVALUATED</span>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#073B3A] via-[#0a4c4b] to-[#073B3A] border border-[#C6FF3D]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-neon">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#C6FF3D] flex items-center justify-center text-[#073B3A] flex-shrink-0 font-bold">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#F3F0E8] mb-1 font-display">
                Calling All Innovators & Developers
              </h4>
              <p className="text-sm text-[#F3F0E8]/80 max-w-2xl">
                We invite students, college tech clubs, independent developers, freelance coders, AI practitioners,
                and tech enthusiasts to showcase their ingenuity and compete for ₹24,000 in cash prizes.
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
