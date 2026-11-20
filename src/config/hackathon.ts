/**
 * Configuration for Gemini Agentic Coding Hackathon 2026
 * Organized by Proton Solutions
 * 
 * Official Registration & Event Config
 */

export const HACKATHON_CONFIG = {
  // Event Metadata
  eventName: "Gemini Agentic Coding Hackathon 2026",
  organizer: "Proton Solutions",
  tagline: "Build Intelligent. Think Autonomous. Create the Future.",
  format: "100% Online",
  
  // Registration & Payment Details
  registrationFee: 250,
  currency: "INR",
  currencySymbol: "₹",
  totalPrizePool: "₹24,000",
  totalPrizeNumber: 24000,
  
  // Non-refundable policy notice
  refundPolicyText: "The registration fee is strictly non-refundable. Once payment is completed, participants cannot request a refund. Terms and Conditions Apply.",
  refundNoticeHeadline: "IMPORTANT NOTICE: Registration fees are non-refundable. Please review all event details before making your payment. Terms and Conditions Apply.",

  // Official Channel & Registration Links (Configurable)
  placeholders: {
    unstopEventUrl: "https://unstop.com/hackathons/gemini-agentic-coding-hackathon-2026-proton-solutions",
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-EXAMPLE-PROTON-GEMINI-2026/viewform",
    whatsappChannelUrl: "https://whatsapp.com/channel/0029VbDpw0m1iUxbAtgMO71Z",
    discordServerUrl: "#",
    githubOrgUrl: "#",
  },

  // Payment System Information
  payment: {
    platform: "Unstop",
    registrationFee: 250,
    currency: "INR",
    currencySymbol: "₹",
    policy: "All registrations and payments must be completed through Unstop. Non-refundable subject to applicable law.",
  },

  // Official Six-Phase Event Timeline (Indian Standard Time - IST)
  importantDates: [
    {
      phaseNumber: "01",
      title: "REGISTRATION OPEN",
      date: "November 23, 2026",
      time: "Portal Live • 100% Online",
      description: "Registration opens for individuals and teams of up to 4 members. Fee: ₹250 per participant on Unstop. Complete registration and payment before the deadline.",
      status: "active" as const,
      badge: "LIVE NOW",
      highlightType: "live-registration" as const,
    },
    {
      phaseNumber: "02",
      title: "REGISTRATION CLOSING & VERIFICATION",
      date: "November 30 – December 2, 2026",
      time: "Closes Nov 30 at 11:59 PM IST",
      description: "Registration closes Nov 30 at 11:59 PM IST. Organizing team verifies info & payments on Unstop and Google Form submissions. Confirmation sent via email.",
      status: "upcoming" as const,
      badge: "CLOSING & VERIFICATION",
      highlightType: "standard" as const,
    },
    {
      phaseNumber: "03",
      title: "PROBLEM STATEMENT ANNOUNCEMENT",
      date: "December 3, 2026",
      time: "10:00 AM IST",
      description: "Official problem statements and challenge instructions shared with selected participants through email, along with guidelines, requirements, and evaluation criteria.",
      status: "upcoming" as const,
      badge: "PROBLEM STATEMENTS",
      highlightType: "standard" as const,
    },
    {
      phaseNumber: "04",
      title: "24-HOUR CODING HACKATHON",
      date: "December 4–5, 2026",
      time: "Start: Dec 4, 10:00 AM IST • End: Dec 5, 10:00 AM IST",
      description: "Competition Duration: 24 Hours non-stop. Build innovative AI solutions using Gemini, Agentic AI concepts, and intelligent automation into functional prototypes.",
      status: "upcoming" as const,
      badge: "⚡ 24-HOUR CODING HACKATHON",
      highlightType: "challenge-24h" as const,
    },
    {
      phaseNumber: "05",
      title: "PROJECT SUBMISSION & FINALIST SELECTION",
      date: "December 5–8, 2026",
      time: "Submission via Google Form",
      description: "Submit complete project via Google Form (GitHub Repo, PPT, technical docs, architecture, implementation details, and demo video). Shortlisted finalists invited via email.",
      status: "upcoming" as const,
      badge: "SUBMISSION & SHORTLISTING",
      highlightType: "standard" as const,
    },
    {
      phaseNumber: "06",
      title: "ONLINE PRESENTATION & GRAND FINALE",
      date: "December 9, 2026",
      time: "5:00 PM IST via Google Meet",
      description: "Shortlisted finalists present projects online through Google Meet. Final winner selection & ₹24,000 prize distribution: 🥇 1st ₹10,000, 🥈 2nd ₹8,000, 🥉 3rd ₹6,000.",
      status: "upcoming" as const,
      badge: "GRAND FINALE (GOOGLE MEET)",
      highlightType: "finale" as const,
    },
  ],

  // Prizes
  prizes: [
    {
      place: "FIRST PRIZE",
      rank: 1,
      title: "Grand Champion",
      amount: "₹10,000",
      amountNumber: 10000,
      badge: "🥇 1ST PLACE",
      tagline: "Top Autonomous Agent Solution",
      accent: "gold" as const,
      perks: [
        "Cash Prize of ₹10,000 directly to bank account",
        "Official Proton Solutions Winner Trophy & Certificate",
        "Exclusive interview for AI Engineering internship / roles",
        "Featured project showcase on Proton Solutions official network"
      ]
    },
    {
      place: "SECOND PRIZE",
      rank: 2,
      title: "Runner-Up",
      amount: "₹8,000",
      amountNumber: 8000,
      badge: "🥈 2ND PLACE",
      tagline: "Outstanding Agent Architecture",
      accent: "silver" as const,
      perks: [
        "Cash Prize of ₹8,000 directly to bank account",
        "Official Runner-Up Certificate of Excellence",
        "Direct Mentorship Session with AI Tech Leads",
        "Featured spotlight on Proton Solutions Community"
      ]
    },
    {
      place: "THIRD PRIZE",
      rank: 3,
      title: "Second Runner-Up",
      amount: "₹6,000",
      amountNumber: 6000,
      badge: "🥉 3RD PLACE",
      tagline: "Innovative Problem Solving",
      accent: "bronze" as const,
      perks: [
        "Cash Prize of ₹6,000 directly to bank account",
        "Official Certificate of Innovation & Excellence",
        "Technical Feedback & Code Review from Senior Evaluators",
        "Proton Solutions Community Developer Badge"
      ]
    }
  ],

  // Terms and Conditions (10 Verbatim Mandates)
  termsAndConditions: [
    "The registration fee is ₹250 per participant.",
    "The registration fee is strictly non-refundable under all circumstances, subject to applicable law.",
    "Participants must provide accurate registration information.",
    "Participants must follow the hackathon guidelines and event instructions.",
    "Any plagiarism, cheating, impersonation, or unfair practices may result in disqualification.",
    "Participants must submit their projects before the announced deadline.",
    "The organizers reserve the right to verify submissions and determine winners according to the published judging criteria.",
    "The hackathon will be conducted entirely online.",
    "Any changes to the event schedule or rules will be communicated through official channels.",
    "Participation is subject to these Terms and Conditions."
  ],

  // Frequently Asked Questions
  faqs: [
    {
      id: "faq-1",
      question: "Is this hackathon online or offline?",
      answer: "The Gemini Agentic Coding Hackathon 2026 is 100% online. You can participate from anywhere in the world from the comfort of your home, campus, or office with an internet connection.",
      category: "General"
    },
    {
      id: "faq-2",
      question: "What is the registration fee?",
      answer: "The registration fee is ₹250 per participant. All registration payments must be completed through the official Unstop platform.",
      category: "Payment"
    },
    {
      id: "faq-3",
      question: "Is the registration fee refundable?",
      answer: "No. The registration fee is strictly non-refundable under all circumstances, subject to applicable law. Once payment is completed on Unstop, participants cannot request a refund. Please review all event details carefully before registering.",
      category: "Payment"
    },
    {
      id: "faq-4",
      question: "Who can participate?",
      answer: "The hackathon is open to students, developers, software engineers, AI researchers, innovators, and technology enthusiasts. You can participate individually (solo) or in a team of up to 4 members.",
      category: "Participation"
    },
    {
      id: "faq-5",
      question: "How can I register?",
      answer: "Visit our official Unstop event page, complete registration and pay the ₹250 fee. After paying on Unstop, fill out the official Proton Solutions Google Form with your team and technical details. Our team will verify both records and send confirmation via email.",
      category: "Participation"
    },
    {
      id: "faq-6",
      question: "What are the prizes?",
      answer: "The total prize pool is ₹24,000 distributed as follows: First Prize: ₹10,000, Second Prize: ₹8,000, and Third Prize: ₹6,000, alongside official trophies, certificates, and mentorship opportunities.",
      category: "General"
    },
    {
      id: "faq-7",
      question: "How will winners be announced?",
      answer: "Winners will be determined by our expert jury based on technical innovation, agent autonomy, architecture, and presentation quality. Final results will be announced live on December 9, 2026 at 5:00 PM IST via Google Meet and our official WhatsApp Channel.",
      category: "Submissions"
    },
    {
      id: "faq-8",
      question: "Where can I contact the organizers?",
      answer: "You can reach Proton Solutions directly at support@protonsolutions.tech or via our official WhatsApp community channel and contact section on this website.",
      category: "General"
    }
  ],

  // Contact Information
  contact: {
    email: "contact@protonsolutions.tech",
    supportEmail: "hackathon@protonsolutions.tech",
    phone: "+91 98765 43210",
    headquarters: "Bengaluru, Karnataka, India",
    workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST"
  }
};
