/**
 * Configuration for Gemini Agentic Coding Hackathon 2026
 * Organized by Proton Solutions in Collaboration with [OFFICIAL NGO NAME]
 * 
 * Centralized Event, Partner, Social Impact & Governance Configuration
 */

export const HACKATHON_CONFIG = {
  // Event Metadata
  eventName: "Gemini Agentic Coding Hackathon 2026",
  shortName: "Gemini Agentic 2026",
  tagline: "Build Intelligent. Think Autonomous. Create a Better Tomorrow.",
  heroHeading: "Build Intelligent. Create Impact. Change Tomorrow.",
  heroSupportingText: "Join Gemini Agentic Coding Hackathon 2026, where autonomous AI meets real-world challenges. Collaborate, innovate and develop intelligent solutions that can contribute to a better society.",
  badgeLabel: "Technology Meets Social Impact",
  format: "100% Online",
  collaborationDescription: "An AI innovation initiative organised by Proton Solutions in collaboration with [OFFICIAL NGO NAME], bringing together developers, students and innovators to build intelligent technology solutions while contributing to meaningful social impact.",

  // Organizational Partners
  technologyOrganizer: {
    name: "Proton Solutions",
    role: "Technology Organiser",
    tagline: "Pioneering Autonomous Systems & Developer Innovation",
    description: "Proton Solutions is a next-generation technology organization focused on cultivating cutting-edge engineering talent and accelerating innovation in artificial intelligence, cloud systems, and autonomous computing.",
    responsibilities: [
      "Hackathon planning and execution",
      "Technical infrastructure and cloud environment",
      "Problem statements and technical challenges",
      "Participant communication and support desk",
      "Technical evaluation and code auditing",
      "Project mentoring by senior AI engineers",
      "Submission management and judging coordination"
    ],
    contactEmail: "hackathon@protonsolutions.tech",
    website: "https://protonsolutions.tech"
  },

  ngoPartner: {
    name: "[OFFICIAL NGO NAME]",
    shortName: "[NGO Partner]",
    role: "Official Collaboration Partner",
    tagline: "Grassroots Community Development & Social Empowerment",
    description: "[OFFICIAL NGO NAME] is a grassroots non-profit organisation committed to driving sustainable community empowerment, rural education, accessible healthcare, and socio-economic resilience across underserved regions.",
    mission: "To eliminate socio-economic and digital disparities across rural communities by fostering inclusive education, sustainable livelihoods, and accessible healthcare through ethical partnerships.",
    vision: "An equitable future where rural and underprivileged populations are empowered with self-reliance, modern tools, and community-driven social infrastructure.",
    registrationInfo: "[Pending Formal Verification & Document Ratification - Registration / Darpan ID: NGO-REG-XXXXX-PENDING]",
    website: "https://example-ngo-partner.org",
    contactEmail: "ngo-collaboration@protonsolutions.tech",
    areasOfOperation: "[Pan-India Grassroots Outreach • State and District Chapters to be Specified upon Formal Agreement]",
    responsibilities: [
      "Social-impact collaboration and domain advisory",
      "Providing relevant community challenges and real-world contexts",
      "Social development and grassroots guidance",
      "Community engagement where formally agreed",
      "Reviewing the social relevance and ethical impact of projects",
      "Supporting impact reporting and field validation where agreed"
    ],
    initiatives: [
      {
        title: "Rural Development & Agri-Livelihoods",
        description: "Supporting smallholder farmers, local water conservation, sustainable farming practices, and rural micro-enterprises."
      },
      {
        title: "Vernacular Education & Digital Literacy",
        description: "Enabling foundational learning, regional-language digital education, and vocational skills for underprivileged youth."
      },
      {
        title: "Primary Healthcare Accessibility",
        description: "Connecting remote hamlets with preventive health awareness, primary triage support, and maternal health guidance."
      },
      {
        title: "Women & Youth Community Empowerment",
        description: "Fostering Self-Help Groups (SHGs), craft cooperatives, and digital platforms to generate local economic opportunities."
      }
    ]
  },

  // Social Impact Section Metadata ("Technology With a Purpose")
  socialImpact: {
    sectionTitle: "Technology With a Purpose",
    sectionSubtitle: "Bridging AI Innovation with Real-World Community Needs",
    description: "We believe technology should solve meaningful problems. Through our collaboration with [OFFICIAL NGO NAME], we aim to encourage innovators to explore how AI and autonomous systems can support rural communities, improve access to opportunities and contribute to sustainable development.",
    focusAreas: [
      {
        id: "rural-development",
        number: "01",
        title: "Rural Development",
        tagline: "Agri-Tech & Sustainable Infrastructure",
        description: "Empowering farmers and rural cooperatives with autonomous market intelligence, weather resilience agents, and water distribution management.",
        impactGoal: "Enhancing farm yield and supply-chain efficiency for grassroots agricultural communities.",
        image: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "education-learning",
        number: "02",
        title: "Education and Learning",
        tagline: "Vernacular & Accessible AI Tutoring",
        description: "Democratizing foundational education with autonomous bilingual tutors, audio-first learning companions, and personalized learning aids for first-generation learners.",
        impactGoal: "Bridging the rural-urban learning divide through low-bandwidth intelligent educational tools.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "healthcare-accessibility",
        number: "03",
        title: "Healthcare Accessibility",
        tagline: "Community Health & Primary Triage",
        description: "Equipping ASHA and community health workers with AI triage assistants, vernacular health communication bots, and vaccine tracking agent networks.",
        impactGoal: "Reducing maternal and pediatric diagnostic delays in primary health centres across remote areas.",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "community-empowerment",
        number: "04",
        title: "Community Empowerment",
        tagline: "Artisan Markets & Welfare Access",
        description: "Building autonomous systems that connect rural artisans directly to fair trade buyers and streamline civic grievance redressal with government welfare schemes.",
        impactGoal: "Unlocking direct economic dignity and citizen entitlement access without predatory middlemen.",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  // Hackathon Track: AI for Social Good (Suggested Themes)
  socialGoodTracks: [
    {
      id: "track-1",
      number: "01",
      title: "AI-Powered Rural Education Assistance",
      description: "Autonomous voice-first and vernacular multi-agent tutors that explain complex STEM concepts in native regional languages without requiring high-speed broadband.",
      techFocus: "Gemini Multimodal • Offline Vector Retrieval • Audio In/Out Agent Loops",
      communityImpact: "Helps rural students learn at their own pace in their mother tongue."
    },
    {
      id: "track-2",
      number: "02",
      title: "Smart Agricultural Support & Advisory",
      description: "Proactive crop pest diagnosis and weather risk warning agents that analyze smartphone photos and satellite forecasts to advise marginal farmers in real time.",
      techFocus: "Gemini Vision • Soil Data Integration • Action Planning Swarms",
      communityImpact: "Protects harvest yields and minimizes pesticide expenditure for family farms."
    },
    {
      id: "track-3",
      number: "03",
      title: "Rural Healthcare Information & Triage",
      description: "Intelligent symptom-checking workflows designed for primary health volunteers, alerting medical authorities to potential seasonal outbreaks.",
      techFocus: "Agentic Tool Use • Medical Knowledge Graphs • Structured Triage APIs",
      communityImpact: "Speeds up early treatment detection in areas with acute doctor shortages."
    },
    {
      id: "track-4",
      number: "04",
      title: "AI-Based Livelihood & Skill Matching",
      description: "Autonomous skill mapping and vernacular resume builders matching rural youth and informal workers with verified local employment and vocational opportunities.",
      techFocus: "Multi-Agent Profiling • Conversational Extraction • Geo-spatial Job Routing",
      communityImpact: "Connects informal workers directly to fair, dignified work opportunities."
    },
    {
      id: "track-5",
      number: "05",
      title: "Community Resource & Water Management",
      description: "Sensor-data and drone-imagery reasoning agents that optimize community water tanks, canal releases, and village energy micro-grids during droughts.",
      techFocus: "Autonomous Time-Series Reasoning • Alert Dispatch • Predictive Maintenance",
      communityImpact: "Preserves critical drinking and irrigation water in drought-vulnerable villages."
    },
    {
      id: "track-6",
      number: "06",
      title: "Digital Access to Government Welfare Schemes",
      description: "Bilingual entitlement navigators that guide illiterate and elderly citizens through documentation requirements for scholarships, pensions, and housing subsidies.",
      techFocus: "Agentic Document Parsing • Multilingual Speech • Form Auto-Filling Agents",
      communityImpact: "Ensures government subsidies reach legitimate beneficiaries without broker exploitation."
    }
  ],

  // Transparency & Financial Governance ("Your Participation. A Bigger Purpose.")
  transparency: {
    sectionTitle: "Your Participation. A Bigger Purpose.",
    sectionSubtitle: "Ethical Financial Stewardship & Transparent Collaboration",
    summary: "Proton Solutions and [OFFICIAL NGO NAME] believe in 100% financial openness. Here is how your ₹250 registration fee is structured and governed across technical operations, prizes, and social impact.",
    disclaimer: "Legal Notice: The ₹250 registration fee is an event participation fee collected exclusively through Unstop and is NOT a tax-deductible charitable donation. Any financial contribution to [OFFICIAL NGO NAME] from operational surplus will be disclosed in the post-hackathon Impact and Transparency Report following formal mutual agreement.",
    financialBreakdown: [
      {
        item: "Total Registration Revenue",
        share: "₹250 per participant",
        description: "Collected 100% via the official Unstop payment gateway."
      },
      {
        item: "Platform & Gateway Charges",
        share: "Actual Unstop Gateway Fees",
        description: "Payment gateway processing, GST, and Unstop hosting commissions."
      },
      {
        item: "Guaranteed Prize Pool",
        share: "₹24,000 Total Allocation",
        description: "Credited directly to top 3 winning engineering teams: ₹10k, ₹8k, ₹6k."
      },
      {
        item: "Technical & Organizing Expenses",
        share: "Core Infrastructure Costs",
        description: "Cloud compute, LLM API tokens for testing, evaluation tooling & Meet servers."
      },
      {
        item: "NGO Social Contribution",
        share: "[Subject to Formal MoU Agreement]",
        description: "Operational surplus allocated to grassroots initiatives upon formal signoff."
      },
      {
        item: "Final Transfer Confirmation",
        share: "Public Impact Report",
        description: "Published transparently on this portal with audited transfer receipts."
      }
    ]
  },

  // Registration & Payment Details
  registrationFee: 250,
  currency: "INR",
  currencySymbol: "₹",
  totalPrizePool: "₹24,000",
  totalPrizeNumber: 24000,
  
  // Non-refundable policy notice
  refundPolicyText: "The registration fee is strictly non-refundable. Once payment is completed on Unstop, participants cannot request a refund. Terms and Conditions Apply.",
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
      badge: "OPENS NOV 23",
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
      description: "Official problem statements, community challenge instructions, technical guidelines, and evaluation criteria shared with selected participants via email.",
      status: "upcoming" as const,
      badge: "PROBLEM STATEMENTS",
      highlightType: "standard" as const,
    },
    {
      phaseNumber: "04",
      title: "24-HOUR CODING HACKATHON",
      date: "December 4–5, 2026",
      time: "Start: Dec 4, 10:00 AM IST • End: Dec 5, 10:00 AM IST",
      description: "Competition Duration: 24 Hours non-stop. Build innovative AI solutions using Gemini, Agentic AI concepts, and social-impact workflows into functional prototypes.",
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
        "Social Impact Innovation Spotlight feature",
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

  // Terms and Conditions (10 Binding Conditions)
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
      question: "What is the role of the NGO collaboration partner?",
      answer: "The hackathon is organized by Proton Solutions in collaboration with [OFFICIAL NGO NAME]. The NGO partner collaborates to provide real-world community development perspectives, social-impact problem themes, and guidance on the grassroots relevance of participant solutions.",
      category: "General"
    },
    {
      id: "faq-3",
      question: "What is the registration fee and where do I pay?",
      answer: "The registration fee is ₹250 per participant. All registration payments must be completed exclusively through the official Unstop platform. The website does not collect payments directly.",
      category: "Payment"
    },
    {
      id: "faq-4",
      question: "Is the registration fee a charitable donation?",
      answer: "No. The ₹250 fee is an event participation fee that covers hackathon operations, Unstop platform charges, and the ₹24,000 prize pool. It is strictly non-refundable and not a direct tax-exempt donation. Any agreed contribution to the NGO will be published transparently in our post-event report.",
      category: "Payment"
    },
    {
      id: "faq-5",
      question: "Who can participate?",
      answer: "The hackathon is open to students, developers, software engineers, AI researchers, innovators, and technology enthusiasts. You can participate individually (solo) or in a team of up to 4 members.",
      category: "Participation"
    },
    {
      id: "faq-6",
      question: "How can I register?",
      answer: "Visit our official Unstop event page, complete registration and pay the ₹250 fee. After paying on Unstop, fill out the official Proton Solutions Google Form with your team and technical details. Our team will verify both records and send confirmation via email.",
      category: "Participation"
    },
    {
      id: "faq-7",
      question: "What is the 'AI for Social Good' track?",
      answer: "It is a dedicated challenge category encouraging participants to build autonomous agent solutions that address rural education, agricultural sustainability, community healthcare, and local livelihoods. Official problem statements will be released on December 3, 2026.",
      category: "Submissions"
    },
    {
      id: "faq-8",
      question: "What are the prizes?",
      answer: "The total prize pool is ₹24,000 distributed as follows: First Prize: ₹10,000, Second Prize: ₹8,000, and Third Prize: ₹6,000, alongside official trophies, certificates, and mentorship opportunities.",
      category: "General"
    },
    {
      id: "faq-9",
      question: "How will winners be announced?",
      answer: "Winners will be determined by our expert jury based on technical innovation, agent autonomy, architecture, and presentation quality. Final results will be announced live on December 9, 2026 at 5:00 PM IST via Google Meet and our official WhatsApp Channel.",
      category: "Submissions"
    },
    {
      id: "faq-10",
      question: "Where can I contact the organizers?",
      answer: "You can reach Proton Solutions directly at support@protonsolutions.tech or via our official WhatsApp community channel and contact section on this website.",
      category: "General"
    }
  ],

  // Contact Information
  contact: {
    email: "contact@protonsolutions.tech",
    supportEmail: "hackathon@protonsolutions.tech",
    ngoCollaborationEmail: "ngo-collaboration@protonsolutions.tech",
    phone: "+91 98765 43210",
    headquarters: "Bengaluru, Karnataka, India",
    workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST"
  }
};
