export interface PrizeItem {
  place: string;
  rank: number;
  title: string;
  amount: string;
  amountNumber: number;
  badge: string;
  tagline: string;
  accent: 'gold' | 'silver' | 'bronze';
  perks: string[];
}

export interface TimelineEvent {
  phaseNumber: string;
  title: string;
  date: string;
  time: string;
  description: string;
  status: 'upcoming' | 'active' | 'completed' | 'editable';
  badge: string;
  highlightType?: 'live-registration' | 'challenge-24h' | 'finale' | 'standard';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Payment' | 'Participation' | 'Submissions';
}
