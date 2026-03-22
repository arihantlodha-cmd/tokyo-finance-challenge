export type CompetitionStatus = "open" | "upcoming" | "active" | "completed";
export type CompetitionType = "stock_pitch" | "econ_quiz" | "case_competition";

export interface Competition {
  slug: string;
  title: string;
  type: CompetitionType;
  status: CompetitionStatus;
  description: string;
  longDescription: string;
  registrationOpen: string;
  registrationClose: string;
  submissionDeadline: string;
  resultsDate: string;
  prizes: { first: string; second: string; third: string };
  participantCount: number;
  maxParticipants: number;
  registerUrl: string;
  submitUrl: string;
  rules: string[];
  judgingCriteria: { label: string; weight: string }[];
  faqs: { q: string; a: string }[];
}

export interface PastResult {
  competition: string;
  slug: string;
  date: string;
  type: CompetitionType;
  winners: { rank: number; team: string; school: string; prize: string }[];
}

// ─── COMPETITIONS ────────────────────────────────────────────────────────────

export const competitions: Competition[] = [
  {
    slug: "april-2026-stock-pitch",
    title: "April 2026 Stock Pitch Challenge",
    type: "stock_pitch",
    status: "open",
    description:
      "Analyze any Japanese company listed on the TSE and build a compelling investment thesis. Top 3 teams present live to a panel of finance professionals.",
    longDescription: `The April 2026 Stock Pitch Challenge invites high school students to step into the shoes of professional equity analysts. Pick any company listed on the Tokyo Stock Exchange, conduct in-depth research, and craft a data-backed investment thesis arguing why the stock is undervalued or a compelling long-term buy.

Top 3 finalists will be invited to present their pitch live via Zoom to a panel of judges with real-world finance experience — including equity analysts and investment professionals.

This is your chance to build real analytical skills, stand out in future finance applications, and win cash prizes. No finance background required — just curiosity, rigor, and a great argument.`,
    registrationOpen: "2026-03-15",
    registrationClose: "2026-04-10",
    submissionDeadline: "2026-04-30",
    resultsDate: "2026-05-05",
    prizes: { first: "¥10,000", second: "¥5,000", third: "¥3,000" },
    participantCount: 24,
    maxParticipants: 50,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc7axySi9nBk-w8kpLOLZuwZduDYjuGY_5XJIpZhTlb_gRI9Q/viewform?usp=dialog",
    submitUrl: "https://forms.google.com/SUBMIT_APRIL_2026",
    rules: [
      "Open to all high school students (grades 9–12)",
      "Teams of 1–4 members. Solo entries fully welcome.",
      "Pick any company listed on the Tokyo Stock Exchange (TSE)",
      "Submit a PDF investment thesis — no set page minimum, keep it as long as you need",
      "Cover the basics: what the company does, why you think it's a good (or bad) investment, and key risks",
      "AI tools are allowed and encouraged — use them to research, write, and improve your work",
      "No finance background needed. We judge clarity of thinking, not technical jargon.",
      "Late submissions will not be accepted",
    ],
    judgingCriteria: [
      { label: "Analysis Depth", weight: "40%" },
      { label: "Presentation Clarity", weight: "30%" },
      { label: "Originality of Thesis", weight: "20%" },
      { label: "Adherence to Guidelines", weight: "10%" },
    ],
    faqs: [
      { q: "Can I pitch any company?", a: "Any company listed on the Tokyo Stock Exchange (TSE). This includes all segments: Prime, Standard, and Growth." },
      { q: "What if I have no finance background?", a: "No prior finance knowledge required. We judge effort, logic, and clarity — not your ability to use Bloomberg terminals." },
      { q: "Can I work alone?", a: "Yes, solo entries are fully welcome. You don't need a team." },
      { q: "What format should the PDF be?", a: "Standard A4 or US Letter, any font, 5–20 pages. Include your team name and competition name on the cover page." },
      { q: "How do I submit?", a: "Click the 'Submit Your Entry' button and fill in the Google Form with your PDF link (Google Drive or similar)." },
    ],
  },
  {
    slug: "may-2026-econ-quiz",
    title: "May 2026 Economics Quiz Championship",
    type: "econ_quiz",
    status: "upcoming",
    description:
      "Test your economics knowledge across microeconomics, macroeconomics, and current events. Top scorers qualify for the finals.",
    longDescription: `The May 2026 Economics Quiz Championship is a fast-paced, 40-question multiple choice exam covering micro and macroeconomics, global markets, and current financial events.

Compete individually and see how your economics knowledge stacks up against students worldwide. The top 10 scorers qualify for a timed final round, with the top 3 taking home cash prizes.

Registration opens April 15, 2026.`,
    registrationOpen: "2026-04-15",
    registrationClose: "2026-05-10",
    submissionDeadline: "2026-05-20",
    resultsDate: "2026-05-25",
    prizes: { first: "¥8,000", second: "¥4,000", third: "¥2,000" },
    participantCount: 0,
    maxParticipants: 100,
    registerUrl: "https://forms.google.com/REGISTER_MAY_2026",
    submitUrl: "https://forms.google.com/SUBMIT_MAY_2026",
    rules: [
      "Individual competition only (no teams)",
      "Open to high school students grades 9–12",
      "40 multiple choice questions, 30-minute time limit",
      "No notes, textbooks, or outside resources allowed",
      "Top 10 scorers advance to a timed final round",
      "In the event of a tie, the faster submission wins",
    ],
    judgingCriteria: [
      { label: "Number of Correct Answers", weight: "80%" },
      { label: "Completion Speed (tiebreaker)", weight: "20%" },
    ],
    faqs: [
      { q: "What topics are covered?", a: "Microeconomics (supply/demand, market structures), macroeconomics (GDP, inflation, monetary policy), international trade, and current economic events." },
      { q: "How do I access the quiz?", a: "After registering, you'll receive a link to the online quiz form on the day of the competition." },
      { q: "Can I use notes?", a: "No. This is a closed-book competition." },
    ],
  },
  {
    slug: "june-2026-case-competition",
    title: "June 2026 Tech Case Competition",
    type: "case_competition",
    status: "upcoming",
    description:
      "Analyze a real-world business challenge facing a major Asian tech company. Propose a strategic solution backed by data.",
    longDescription: `The June 2026 Tech Case Competition presents teams with a real business challenge from a leading Asian tech company. Your job is to analyze the problem, research the competitive landscape, and propose a strategic recommendation backed by data and financial analysis.

Case details will be released on June 1. Teams have 14 days to prepare and submit their written solution.

Registration opens May 20, 2026.`,
    registrationOpen: "2026-05-20",
    registrationClose: "2026-06-05",
    submissionDeadline: "2026-06-20",
    resultsDate: "2026-06-28",
    prizes: { first: "¥12,000", second: "¥6,000", third: "¥3,000" },
    participantCount: 0,
    maxParticipants: 40,
    registerUrl: "https://forms.google.com/REGISTER_JUNE_2026",
    submitUrl: "https://forms.google.com/SUBMIT_JUNE_2026",
    rules: [
      "Teams of 2–4 members required (no solo entries)",
      "Open to high school students grades 9–12",
      "Case packet released June 1 — keep details confidential",
      "Submit written solution (PDF, max 30 pages) via Google Form",
      "Optional: include Excel models or supporting exhibits",
      "Top 3 teams present live to judges via Zoom",
    ],
    judgingCriteria: [
      { label: "Problem Diagnosis", weight: "25%" },
      { label: "Solution Quality & Feasibility", weight: "35%" },
      { label: "Financial Analysis", weight: "25%" },
      { label: "Presentation", weight: "15%" },
    ],
    faqs: [
      { q: "Will the case be a real company?", a: "Yes, the case is based on a real publicly traded Asian tech company, though the specific challenge may be hypothetical." },
      { q: "Can I use AI tools?", a: "You may use AI tools for research assistance, but all analysis and writing must be your own. Disclose any AI usage in your submission." },
    ],
  },
];

// ─── PAST RESULTS ─────────────────────────────────────────────────────────────

export const pastResults: PastResult[] = [
  {
    competition: "March 2026 Stock Pitch Challenge",
    slug: "march-2026-stock-pitch",
    date: "2026-03-15",
    type: "stock_pitch",
    winners: [
      { rank: 1, team: "Alpha Investors", school: "Tokyo International School", prize: "¥10,000" },
      { rank: 2, team: "Bull Market Bros", school: "American School in Japan (ASIJ)", prize: "¥5,000" },
      { rank: 3, team: "Value Seekers", school: "British School in Tokyo", prize: "¥3,000" },
    ],
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

export function getCompetition(slug: string): Competition | undefined {
  return competitions.find(c => c.slug === slug);
}

export function typeLabel(type: CompetitionType) {
  return { stock_pitch: "Stock Pitch", econ_quiz: "Economics Quiz", case_competition: "Case Competition" }[type];
}

export function typeColor(type: CompetitionType) {
  return { stock_pitch: "#3b82f6", econ_quiz: "#22c55e", case_competition: "#a855f7" }[type];
}

export function statusLabel(status: CompetitionStatus) {
  return { open: "Open", upcoming: "Upcoming", active: "Active", completed: "Completed" }[status];
}

export function statusColor(status: CompetitionStatus) {
  return { open: "#22c55e", upcoming: "#3b82f6", active: "#eab308", completed: "#64748b" }[status];
}

export function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
