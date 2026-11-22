import React from 'react';
import { Bot, Terminal, Shield, Zap, Users, CheckCircle, Award, Workflow, HeartHandshake, Globe, Trophy, Code2 } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

export const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: <Bot className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Agentic AI Challenges",
      description: "Engineer autonomous multi-agent loops, reasoning tools, and proactive problem solvers using modern AI paradigms."
    },
    {
      icon: <Workflow className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Multi-Agent System Development",
      description: "Build coordinated swarms where specialized subagents collaborate to plan, execute, and verify complex goals."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#F2B544]" />,
      title: "Real-World Social Problem Solving",
      description: "Tackle authentic grassroots challenges in rural education, agriculture, primary health, and community welfare."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#F2B544]" />,
      title: "ROOTS & RISE Collaboration",
      description: "Collaborate on authentic grassroots problem themes framed by ROOTS & RISE Foundation across 142 Gram Panchayats."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Social Impact Innovation",
      description: "Pioneer low-bandwidth, vernacular-first, and highly accessible AI tools engineered for rural Indian contexts."
    },
    {
      icon: <Terminal className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Technical Mentorship",
      description: "Receive architectural guidance and code reviews from senior engineers and AI researchers at Proton Solutions."
    },
    {
      icon: <Globe className="w-6 h-6 text-[#C6FF3D]" />,
      title: "100% Online Participation",
      description: "Collaborate remotely from any campus, home, or office with cloud check-ins and Google Form submissions."
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#FFD700]" />,
      title: "₹24,000 Cash Prizes",
      description: "Transparent, merit-based rewards directly credited: 🥇 ₹10,000, 🥈 ₹8,000, 🥉 ₹6,000 without delays."
    },
    {
      icon: <Award className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Official Certificates",
      description: "Every participant who submits a complete, functional project receives an official verified digital certificate."
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Finalist Project Showcases",
      description: "Top teams present live on December 9 via Google Meet to industry evaluators and receive community spotlights."
    }
  ];

  const participantCategories = [
    {
      title: "University & College Students",
      desc: "Undergraduate and postgraduate students eager to test their programming caliber and bolster their resumes with agentic AI and social-impact projects."
    },
    {
      title: "Full-Stack & Backend Developers",
      desc: "Engineers looking to integrate autonomous reasoning and LLM-driven workflows into modern web, cloud, and CLI applications."
    },
    {
      title: "AI Enthusiasts & Researchers",
      desc: "Innovators exploring multi-agent orchestrations, MCP servers, prompt engineering, and tool-calling models for real-world impact."
    },
    {
      title: "Solo Hackers & Dynamic Teams",
      desc: "Register as an independent solo developer or form an agile squad of up to 4 members to split engineering and design loads."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Register on Unstop",
      desc: "Visit our official Unstop event portal to create your solo or team registration (up to 4 members)."
    },
    {
      step: "02",
      title: "Pay ₹250 on Unstop",
      desc: "Complete the non-refundable registration fee of ₹250 per participant securely through Unstop."
    },
    {
      step: "03",
      title: "Submit Google Form",
      desc: "Complete the official Proton Solutions Google Form with your team roster, university, and Unstop details."
    },
    {
      step: "04",
      title: "Verification & Pass",
      desc: "Organizing team verifies records and sends official confirmation and challenge access to your registered email."
    }
  ];

  return (
    <section className="py-24 relative bg-[#052928] border-t border-[#F3F0E8]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 1: Event Highlights */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073B3A] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono font-bold mb-4 tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>KEY PILLARS OF EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
            Event Highlights
          </h2>
          <p className="text-[#F3F0E8]/80 text-base sm:text-lg">
            A high-intensity coding experience combining frontier autonomous AI development with real-world community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-24">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl glass-teal border border-[#F3F0E8]/10 hover:border-[#C6FF3D]/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0a3534] border border-[#C6FF3D]/30 flex items-center justify-center mb-5 group-hover:border-[#C6FF3D]">
                  {h.icon}
                </div>
                <h3 className="text-lg font-bold text-[#F3F0E8] mb-2 font-display leading-tight">{h.title}</h3>
                <p className="text-xs text-[#F3F0E8]/75 leading-relaxed">{h.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Who Can Participate */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073B3A] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono font-bold mb-4 tracking-wider uppercase">
              <Users className="w-3.5 h-3.5" />
              <span>ELIGIBILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
              Who Can Participate?
            </h2>
            <p className="text-[#F3F0E8]/80 text-base">
              The hackathon is open to innovators across all experience levels who have a passion for autonomous coding and human problem solving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {participantCategories.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#073B3A]/80 border border-[#F3F0E8]/10 hover:border-[#C6FF3D]/40 transition-all"
              >
                <div className="text-xs font-mono text-[#C6FF3D] mb-3">CAT_0{idx + 1}</div>
                <h4 className="text-lg font-bold text-[#F3F0E8] mb-2 font-display">{item.title}</h4>
                <p className="text-xs text-[#F3F0E8]/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Registration Process */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073B3A] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono font-bold mb-4 tracking-wider uppercase">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>SIMPLE 4-STEP ONBOARDING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
              Registration Process
            </h2>
            <p className="text-[#F3F0E8]/80 text-base">
              From application on Unstop to verified hackathon entry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-teal border border-[#F3F0E8]/10 hover:border-[#C6FF3D]/40 transition-all relative"
              >
                <span className="text-4xl font-mono font-black text-[#C6FF3D]/30 block mb-3">
                  {st.step}
                </span>
                <h4 className="text-lg font-bold text-[#F3F0E8] mb-2 font-display">{st.title}</h4>
                <p className="text-xs text-[#F3F0E8]/75 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
