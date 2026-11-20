import React from 'react';
import { Bot, Terminal, Shield, Zap, Users, CheckCircle, Award, Workflow } from 'lucide-react';

export const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: <Bot className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Agentic AI Challenges",
      description: "Build autonomous multi-agent loops, reasoning tools, and proactive problem solvers using modern AI paradigms."
    },
    {
      icon: <Workflow className="w-6 h-6 text-[#C6FF3D]" />,
      title: "100% Online Flexibility",
      description: "Collaborate with peers remotely from any location with uninterrupted online check-ins and cloud submission."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Expert Mentorship",
      description: "Interact with senior engineers and AI researchers from Proton Solutions for architectural guidance."
    },
    {
      icon: <Award className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Direct Cash Prizes",
      description: "₹24,000 cash pool awarded directly to top 3 winners with transparent judging criteria and no delays."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Verified Certification",
      description: "Every participant with a completed project receives an official digital Certificate of Participation."
    },
    {
      icon: <Terminal className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Talent Scouting",
      description: "Top performers get fast-tracked for technical internships, contributor roles, and advisory networks."
    }
  ];

  const participantCategories = [
    {
      title: "University & College Students",
      desc: "Undergraduate and postgraduate students keen to prove their programming caliber and bolster their resumes with agentic AI projects."
    },
    {
      title: "Full-Stack & Backend Developers",
      desc: "Engineers looking to integrate autonomous reasoning and LLM-driven intelligence into modern web, cloud, and CLI applications."
    },
    {
      title: "AI Enthusiasts & Researchers",
      desc: "Innovators exploring multi-agent orchestrations, MCP servers, prompt engineering, and tool-calling models."
    },
    {
      title: "Solo Hackers & Dynamic Teams",
      desc: "Register as an independent solo developer or form an agile squad of up to 4 members to split engineering loads."
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#073B3A] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>KEY PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
            Event Highlights
          </h2>
          <p className="text-[#F3F0E8]/80 text-base sm:text-lg">
            Everything you need for an intense, inspiring, and career-boosting hackathon experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl glass-teal border border-[#F3F0E8]/10 hover:border-[#C6FF3D]/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0a3534] border border-[#C6FF3D]/30 flex items-center justify-center mb-5 group-hover:border-[#C6FF3D]">
                {h.icon}
              </div>
              <h3 className="text-xl font-bold text-[#F3F0E8] mb-2 font-display">{h.title}</h3>
              <p className="text-sm text-[#F3F0E8]/75 leading-relaxed">{h.description}</p>
            </div>
          ))}
        </div>

        {/* Section 2: Who Can Participate */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#073B3A] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>ELIGIBILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
              Who Can Participate?
            </h2>
            <p className="text-[#F3F0E8]/80 text-base">
              The hackathon is designed for builders across all experience levels who have a passion for autonomous coding and problem solving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {participantCategories.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#073B3A]/80 border border-[#F3F0E8]/10 hover:border-[#C6FF3D]/40 transition-all"
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#073B3A] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono mb-4">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>SIMPLE 4-STEP JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
              Registration Process
            </h2>
            <p className="text-[#F3F0E8]/80 text-base">
              From application to verified entry in less than two minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl glass-teal border border-[#F3F0E8]/10 hover:border-[#C6FF3D]/40 transition-all relative"
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
