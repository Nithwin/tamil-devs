export interface Feature {
  icon: string;
  title: string;
  desc: string;
  color: string;
  badge?: string;
}

export interface Role {
  emoji: string;
  label: string;
  color: string;
  category: "experience" | "domain" | "emerging";
}

export interface ChannelCategory {
  cat: string;
  description: string;
  items: string[];
}

export interface StatItem {
  number: string;
  label: string;
  detail?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const stats: StatItem[] = [
  { number: "30+", label: "Dedicated Channels", detail: "Carefully categorized" },
  { number: "20+", label: "Career & Tech Roles", detail: "Self-assignable" },
  { number: "100%", label: "Free to Join", detail: "Zero paywalls ever" },
  { number: "∞", label: "Tamil Dev Connections", detail: "Worldwide network" },
];

export const features: Feature[] = [
  {
    icon: "📄",
    title: "Resume Review & Roast",
    desc: "Submit your resume as a forum post and get line-by-line feedback from senior engineers. Harsh or gentle — your choice.",
    color: "#06b6d4",
    badge: "Popular Forum",
  },
  {
    icon: "👀",
    title: "Code PR Reviews",
    desc: "Submit your GitHub PRs, architecture diagrams, or code snippets for constructive peer reviews in a dedicated forum.",
    color: "#7c3aed",
    badge: "Peer Feedback",
  },
  {
    icon: "🎙️",
    title: "Mock Voice Interviews",
    desc: "Practice real technical DSA and System Design mock interviews in dedicated voice rooms with fellow Tamil engineers.",
    color: "#ec4899",
    badge: "Voice Rooms",
  },
  {
    icon: "✨",
    title: "Vibe Coding & AI Tools",
    desc: "Share Cursor rules, Claude Code prompts, Windsurf configs, and Bolt.new demos. Build faster with AI.",
    color: "#f59e0b",
    badge: "AI Native",
  },
  {
    icon: "💼",
    title: "Jobs, Referrals & Gigs",
    desc: "Verified job openings, internal referrals, US/EU remote contracts, and freelancing advice all in one place.",
    color: "#10b981",
    badge: "Career Growth",
  },
  {
    icon: "🚀",
    title: "Startups & Indie Hacking",
    desc: "Pitch your SaaS ideas, showcase MVPs, find co-founders, and get your first 100 Tamil early adopters.",
    color: "#f97316",
    badge: "Builders",
  },
];

export const roles: Role[] = [
  { emoji: "👑", label: "Senior / Tech Lead", color: "#f59e0b", category: "experience" },
  { emoji: "💼", label: "Experienced Dev", color: "#10b981", category: "experience" },
  { emoji: "🚀", label: "Fresher / Job Seeker", color: "#06b6d4", category: "experience" },
  { emoji: "🎓", label: "Student / Learner", color: "#7c3aed", category: "experience" },
  { emoji: "💻", label: "Full-Stack Dev", color: "#06b6d4", category: "domain" },
  { emoji: "⚙️", label: "Backend & APIs", color: "#64748b", category: "domain" },
  { emoji: "🎨", label: "Frontend & UI/UX", color: "#ec4899", category: "domain" },
  { emoji: "⚡", label: "Systems & Low-Level", color: "#f97316", category: "domain" },
  { emoji: "☁️", label: "Cloud & DevOps", color: "#38bdf8", category: "domain" },
  { emoji: "🤖", label: "GenAI & LLM", color: "#a855f7", category: "emerging" },
  { emoji: "🧠", label: "AI / ML & Data", color: "#eab308", category: "emerging" },
  { emoji: "🔌", label: "Embedded & IoT", color: "#14b8a6", category: "domain" },
  { emoji: "🌐", label: "Open Source", color: "#818cf8", category: "domain" },
  { emoji: "🔐", label: "Cybersecurity", color: "#22c55e", category: "domain" },
];

export const channelCategories: ChannelCategory[] = [
  {
    cat: "📢 Information & Welcome",
    description: "Start here to read guidelines and claim your tech roles.",
    items: [
      "📜┃rules-and-guidelines",
      "📢┃announcements",
      "👋┃introductions",
      "🎭┃select-roles",
      "💡┃community-suggestions",
    ],
  },
  {
    cat: "💬 Community Lounge",
    description: "Hangout, showcase your latest creations, and chat casually.",
    items: [
      "💬┃general-chat",
      "💡┃project-showcase",
      "📢┃creators-and-promotions",
      "📄┃resume-review-and-roast 📌",
      "☕┃chill-and-memes",
    ],
  },
  {
    cat: "💼 Careers & Opportunities",
    description: "Referrals, hiring opportunities, and freelance contracts.",
    items: [
      "💼┃jobs-and-referrals",
      "🙋┃looking-for-work",
      "💻┃freelance-and-contracts",
      "🚀┃startups-and-saas",
    ],
  },
  {
    cat: "💻 Core Engineering",
    description: "Deep dive discussions across tech stacks, debugging, and DSA.",
    items: [
      "💻┃fullstack-dev",
      "⚙️┃backend-and-apis",
      "🎨┃frontend-and-uiux",
      "⚡┃systems-and-lowlevel",
      "☁️┃cloud-devops-security",
      "👀┃code-review 📌",
      "🧮┃dsa-and-interviews",
      "🆘┃code-help-and-debug",
    ],
  },
  {
    cat: "🔬 AI, Hardware & Future Tech",
    description: "Build cutting-edge products with LLMs, agents, and IoT devices.",
    items: [
      "✨┃vibe-coding-and-tools",
      "🤖┃genai-and-llms",
      "🧠┃ai-ml-and-data",
      "🔌┃hardware-and-iot",
      "🌐┃open-source-learn-collab",
    ],
  },
  {
    cat: "🎙️ Voice & Interviews",
    description: "Live mock interview rooms, chill spaces, and co-working stages.",
    items: [
      "☕ Chill Lounge 🔊",
      "💻 Silent Study & Co-Working 🔊",
      "🎙️ Mock Interview Room 1 🔊",
      "🎙️ Mock Interview Room 2 🔊",
      "🏟️ Tech Talk Stage 🔊",
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Do I have to speak only Tamil in the community?",
    answer:
      "Not at all! Both English and Tamil (Tanglish or pure Tamil) are warmly welcomed. Communicate in whatever language you feel most comfortable discussing technical problems and sharing ideas.",
  },
  {
    question: "Is this community free to join?",
    answer:
      "Yes, 100% free forever. There are no paid tiers, hidden subscriptions, or paywalled channels. All resources, mock interviews, and resume reviews are community-driven.",
  },
  {
    question: "Who can join Tamil Devs?",
    answer:
      "Anyone interested in tech! We have engineering students, fresh graduates, experienced software developers, tech leads, startup founders, and freelancers from Tamil Nadu and across the globe.",
  },
  {
    question: "How do resume reviews and mock interviews work?",
    answer:
      "We have dedicated forum channels where you can upload your resume (with private info redacted) to receive feedback from senior professionals. For mock interviews, you can schedule peer sessions in our dedicated voice channels.",
  },
  {
    question: "Can I share job openings or hire developers?",
    answer:
      "Yes! Our #jobs-and-referrals and #freelance-and-contracts channels are specifically designed for posting verified jobs, company referrals, and freelance gigs.",
  },
];
