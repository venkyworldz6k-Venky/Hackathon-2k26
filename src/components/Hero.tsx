import React, { useState, useEffect } from 'react';
import { ArrowRight, Trophy, Sparkles, Globe, ShieldAlert, Cpu, Bot, Code2, Zap } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onExploreClick }) => {
  // Target: Registration Closes November 30, 2026 23:59:59 IST
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 11,
    minutes: 24,
    seconds: 30,
  });

  useEffect(() => {
    const targetDate = new Date('2026-11-30T23:59:59+05:30').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-radial-gradient">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C6FF3D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0b4d4c]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#C6FF3D]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="hidden xl:block absolute left-12 top-1/3 p-3.5 rounded-2xl glass-teal border border-[#C6FF3D]/20 animate-float shadow-teal-glow">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C6FF3D]/10 flex items-center justify-center text-[#C6FF3D]">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-mono text-[#C6FF3D]">AI_AGENT_PIPELINE</p>
            <p className="text-xs text-[#F3F0E8] font-bold">Autonomous Execution</p>
          </div>
        </div>
      </div>

      <div className="hidden xl:block absolute right-12 top-1/2 p-3.5 rounded-2xl glass-teal border border-[#F3F0E8]/10 animate-float [animation-delay:2s]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0e4140] flex items-center justify-center text-[#F3F0E8]">
            <Code2 className="w-5 h-5 text-[#C6FF3D]" />
          </div>
          <div>
            <p className="text-[11px] font-mono text-[#F3F0E8]/70">GEMINI_MULTIMODAL</p>
            <p className="text-xs text-[#F3F0E8] font-bold">Subagent Swarms</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a3534]/90 border border-[#C6FF3D]/30 mb-8 backdrop-blur-sm">
          <Zap className="w-3.5 h-3.5 text-[#C6FF3D] animate-pulse" />
          <span className="text-xs sm:text-sm font-mono tracking-widest font-bold text-[#C6FF3D] uppercase">
            PROTON SOLUTIONS PRESENTS
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F3F0E8] mb-6 leading-[1.08] font-display">
          GEMINI AGENTIC <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3F0E8] via-[#C6FF3D] to-[#F3F0E8] drop-shadow-sm">
            CODING HACKATHON
          </span>{' '}
          <span className="inline-block text-[#C6FF3D] font-mono">2026</span>
        </h1>

        <p className="text-lg sm:text-2xl text-[#F3F0E8]/90 font-medium max-w-3xl mx-auto mb-10 tracking-wide font-sans">
          &ldquo;Build Intelligent. Think Autonomous. Create the Future.&rdquo;
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10">
          <div className="p-4 rounded-xl glass-teal border border-[#F3F0E8]/10 flex items-center justify-center gap-3 group hover:border-[#C6FF3D]/40 transition-all">
            <div className="w-9 h-9 rounded-lg bg-[#C6FF3D]/10 flex items-center justify-center text-[#C6FF3D]">
              <Globe className="w-5 h-5 text-[#C6FF3D]" />
            </div>
            <div className="text-left">
              <span className="text-[11px] font-mono uppercase text-[#F3F0E8]/60 block leading-tight">Format</span>
              <span className="text-sm sm:text-base font-bold text-[#F3F0E8]">100% Online Hackathon</span>
            </div>
          </div>

          <div className="p-4 rounded-xl glass-teal border border-[#C6FF3D]/30 flex items-center justify-center gap-3 group hover:border-[#C6FF3D] transition-all bg-[#0a3534]/60">
            <div className="w-9 h-9 rounded-lg bg-[#C6FF3D]/20 flex items-center justify-center text-[#C6FF3D]">
              <Cpu className="w-5 h-5 text-[#C6FF3D]" />
            </div>
            <div className="text-left">
              <span className="text-[11px] font-mono uppercase text-[#C6FF3D] block leading-tight font-semibold">Entry Pass</span>
              <span className="text-sm sm:text-base font-bold text-[#F3F0E8]">
                Fee: <span className="text-[#C6FF3D] font-mono">₹250</span>
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl glass-teal border border-[#FFD700]/30 flex items-center justify-center gap-3 group hover:border-[#FFD700]/70 transition-all bg-[#FFD700]/5">
            <div className="w-9 h-9 rounded-lg bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700]">
              <Trophy className="w-5 h-5 text-[#FFD700]" />
            </div>
            <div className="text-left">
              <span className="text-[11px] font-mono uppercase text-[#FFD700] block leading-tight font-semibold">Grand Prize Pool</span>
              <span className="text-sm sm:text-base font-bold text-[#F3F0E8]">
                Total: <span className="text-[#FFD700] font-mono">₹24,000</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold rounded-xl bg-[#C6FF3D] text-[#073B3A] hover:bg-[#b5f524] transition-all duration-200 shadow-neon hover:shadow-neon-lg flex items-center justify-center gap-3 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#073B3A]" />
            <span>Register Now</span>
            <ArrowRight className="w-5 h-5 text-[#073B3A]" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold rounded-xl text-[#F3F0E8] border border-[#F3F0E8]/30 hover:border-[#C6FF3D] hover:text-[#C6FF3D] hover:bg-[#073B3A]/80 transition-all duration-200 cursor-pointer"
          >
            Explore Event
          </button>
        </div>

        {/* Live Registration Countdown Timer */}
        <div className="max-w-xl mx-auto p-5 rounded-2xl glass-teal border border-[#C6FF3D]/40 shadow-neon">
          <p className="text-xs font-mono tracking-widest text-[#C6FF3D] uppercase mb-3 font-bold flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-ping" />
            REGISTRATION CLOSES NOV 30, 2026 (11:59 PM IST)
          </p>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-[#052928] p-2 sm:p-3 rounded-lg border border-[#F3F0E8]/10">
              <span className="block text-xl sm:text-3xl font-mono font-bold text-[#C6FF3D]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#F3F0E8]/60 uppercase font-mono">Days</span>
            </div>
            <div className="bg-[#052928] p-2 sm:p-3 rounded-lg border border-[#F3F0E8]/10">
              <span className="block text-xl sm:text-3xl font-mono font-bold text-[#C6FF3D]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#F3F0E8]/60 uppercase font-mono">Hours</span>
            </div>
            <div className="bg-[#052928] p-2 sm:p-3 rounded-lg border border-[#F3F0E8]/10">
              <span className="block text-xl sm:text-3xl font-mono font-bold text-[#C6FF3D]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#F3F0E8]/60 uppercase font-mono">Mins</span>
            </div>
            <div className="bg-[#052928] p-2 sm:p-3 rounded-lg border border-[#F3F0E8]/10">
              <span className="block text-xl sm:text-3xl font-mono font-bold text-[#C6FF3D]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#F3F0E8]/60 uppercase font-mono">Secs</span>
            </div>
          </div>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 text-xs text-[#F3F0E8]/60 font-mono">
          <ShieldAlert className="w-3.5 h-3.5 text-[#C6FF3D]" />
          <span>Registration Fee of ₹250 is strictly non-refundable • Terms & Conditions Apply</span>
        </div>
      </div>
    </section>
  );
};
