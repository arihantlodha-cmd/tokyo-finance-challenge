import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { competitions, formatDate, typeLabel } from "@/lib/data";
import CountdownTimer from "@/components/custom/CountdownTimer";

export const metadata: Metadata = {
  title: "International Finance Challenge — Monthly Finance Competitions for High School Students",
  description: "Free monthly stock pitch, economics quiz, and case competitions for high school students worldwide. 100+ participants from 13 countries.",
  openGraph: {
    title: "International Finance Challenge",
    description: "Free international finance competition for high school students. 100+ participants from 13 countries.",
  },
};

const mono: React.CSSProperties = { fontFamily: "var(--font-mono)" };
const serif: React.CSSProperties = { fontFamily: "var(--font-serif)" };

const SectionLabel = ({ num, text }: { num: string; text: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
    <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.1em" }}>{num} /</span>
    <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{text}</span>
    <div style={{ flex: 1, height: 1, background: "var(--border)", maxWidth: 80 }} />
  </div>
);

const COUNTRIES = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇰🇷", name: "South Korea" },
  { flag: "🇮🇳", name: "India" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇵🇭", name: "Philippines" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇲🇾", name: "Malaysia" },
  { flag: "🇰🇿", name: "Kazakhstan" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇮🇩", name: "Indonesia" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇲🇲", name: "Myanmar" },
  { flag: "🇦🇺", name: "Australia" },
];

export default function HomePage() {
  const open = competitions.find(c => c.status === "open" || c.status === "active");
  const upcoming = competitions.filter(c => c.status === "upcoming");
  const comp = open ?? competitions[0];

  const spotsLeft = comp.maxParticipants - comp.participantCount;

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* ── HERO ── */}
      <section className="hero-pad" style={{ maxWidth: 1080, margin: "0 auto", position: "relative" }}>

        {/* Live badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "5px 12px", marginBottom: 24,
          border: "1px solid var(--border)",
          borderRadius: 2,
        }}>
          <span className="pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
          <span style={{ ...mono, fontSize: 10, letterSpacing: "0.15em", color: "var(--text-3)", textTransform: "uppercase" }}>
            Open Now · {typeLabel(comp.type)} · April 2026
          </span>
        </div>

        {/* Big stat numbers */}
        <div style={{ display: "flex", gap: 0, marginBottom: 36, flexWrap: "wrap" }}>
          {[
            { value: "100+", label: "students registered" },
            { value: "13", label: "countries" },
            { value: "42", label: "cities worldwide" },
          ].map((item, i) => (
            <div key={item.label} style={{
              padding: i === 0 ? "0 36px 0 0" : "0 36px",
              borderLeft: i > 0 ? "1px solid var(--border)" : "none",
            }}>
              <div style={{ ...mono, fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 700, color: "#F0F0F0", letterSpacing: "-0.04em", lineHeight: 1 }}>
                {item.value}
              </div>
              <div style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.06em", marginTop: 6 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main headline */}
        <h1 style={{
          ...serif,
          fontSize: "clamp(40px, 8.5vw, 100px)",
          fontWeight: 400,
          color: "#F0F0F0",
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
          marginBottom: 20,
          maxWidth: 820,
        }}>
          {comp.title}
        </h1>

        {/* Sub-headline */}
        <p style={{ ...mono, fontSize: 12, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 28 }}>
          Free international finance competition for high school students
        </p>

        {/* Crimson rule */}
        <div style={{ width: 44, height: 2, background: "#C8102E", marginBottom: 40 }} />

        {/* Split: description + CTAs / countdown */}
        <div className="grid-hero">
          <div>
            <p style={{ fontSize: 18, color: "var(--text-2)", lineHeight: 1.85, marginBottom: 36, maxWidth: 420 }}>
              {comp.description}
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href={comp.registerUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13 }}>
                Register Free — 2 min <ArrowRight size={14} />
              </a>
              <Link href="/sample" className="btn-secondary" style={{ fontSize: 13 }}>
                See sample
              </Link>
              <Link href={`/competitions/${comp.slug}`} style={{
                fontSize: 12, color: "var(--text-3)", textDecoration: "none",
                display: "flex", alignItems: "center", gap: 5, padding: "12px 0",
                ...mono, letterSpacing: "0.04em",
              }}>
                Full details →
              </Link>
            </div>
          </div>

          <div>
            <div style={{ ...mono, fontSize: 11, letterSpacing: "0.12em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: 14 }}>
              Submission countdown
            </div>
            <CountdownTimer deadline={comp.submissionDeadline + "T23:59:59"} />
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid-stats">
          {[
            { label: "Participants",          value: "100+" },
            { label: "Teams",                 value: "56" },
            { label: "Schools",               value: "46" },
            { label: "Countries",             value: "13" },
            { label: "Cities",                value: "42" },
            { label: "Reg. closes",           value: formatDate(comp.registrationClose) },
          ].map((item) => (
            <div key={item.label} className="stat-cell">
              <div style={{ ...mono, fontSize: 11, letterSpacing: "0.1em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: 10 }}>
                {item.label}
              </div>
              <div style={{ ...mono, fontSize: 17, fontWeight: 700, color: "#F0F0F0", letterSpacing: "-0.01em" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOCIAL PROOF: COUNTRIES MARQUEE ── */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "36px 0" }}>
        <div style={{ ...mono, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-3)", textAlign: "center", marginBottom: 20 }}>
          Students from these countries
        </div>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...COUNTRIES, ...COUNTRIES].map((c, i) => (
              <div key={i} style={{
                display: "inline-flex", alignItems: "center",
                padding: "0 48px",
                borderRight: "1px solid var(--border)",
                flexShrink: 0,
              }}>
                <span style={{ ...mono, fontSize: 18, fontWeight: 600, color: "#F0F0F0", letterSpacing: "0.08em", whiteSpace: "nowrap", textTransform: "uppercase" }}>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE ALTERNATIVE HOOK ── */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ ...mono, fontSize: 11, letterSpacing: "0.12em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: 16 }}>
                The pitch
              </div>
              <p style={{ fontSize: 22, color: "#F0F0F0", lineHeight: 1.4, letterSpacing: "-0.02em", fontWeight: 600 }}>
                Real finance experience.<br />
                <span style={{ color: "var(--text-3)", textDecoration: "line-through", fontWeight: 400, fontSize: 18 }}>$5,000 summer programs.</span>
                <span style={{ color: "#C8102E" }}> ¥0.</span>
              </p>
            </div>
            <div style={{ flex: 2, minWidth: 260 }}>
              <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.85 }}>
                Elite summer finance programs cost thousands of dollars and require connections to access.
                IFC is completely free, open to every high school student globally, and gives you the same
                real-world experience — stock pitches, case competitions, and judging by finance professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SectionLabel num="01" text="How it works" />

          <h2 style={{
            ...serif,
            fontSize: "clamp(26px, 3.5vw, 44px)",
            fontWeight: 400, color: "#F0F0F0",
            lineHeight: 1.1, letterSpacing: "-0.02em",
            marginBottom: 48,
          }}>
            Three steps.
          </h2>

          <div className="grid-cards-3">
            {[
              {
                num: "01",
                title: "Register",
                body: "Fill in the Google Form. Takes under 2 minutes. No cost, no finance background needed.",
              },
              {
                num: "02",
                title: "Research & build",
                body: "Pick a TSE-listed company, analyze it, and write your investment thesis. AI tools welcome. Take as long as you want.",
              },
              {
                num: "03",
                title: "Submit & win",
                body: "Submit your PDF by the deadline. Top 3 finalists present live to a panel of finance professionals.",
              },
            ].map((f, i) => (
              <div key={f.title} style={{
                padding: "32px 28px",
                background: "var(--bg-raised)",
                borderTop: "1px solid var(--border)",
                borderRight: i < 2 ? "1px solid var(--border)" : "none",
                borderBottom: "1px solid var(--border)",
                borderLeft: i === 0 ? "1px solid var(--border)" : "none",
              }}>
                <div style={{ ...mono, fontSize: 12, color: "var(--text-3)", letterSpacing: "0.08em", marginBottom: 20 }}>
                  {f.num}
                </div>
                <div style={{ fontWeight: 700, color: "#F0F0F0", fontSize: 15, marginBottom: 10, letterSpacing: "-0.02em" }}>
                  {f.title}
                </div>
                <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.75 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SectionLabel num="02" text="About" />

          <div className="grid-about">
            <div>
              <h2 style={{
                ...serif,
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 400, color: "#F0F0F0",
                lineHeight: 1.1, letterSpacing: "-0.02em",
              }}>
                Monthly finance competitions for high school students.
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.85 }}>
                Every month, a different challenge — stock pitches, economics quizzes, case competitions. Free to enter, open to all high school students worldwide. AI tools welcome. No finance background needed.
              </p>
            </div>
          </div>

          {/* Three format cards */}
          <div className="grid-cards-3">
            {[
              { num: "01", title: "Stock Pitch", body: "Pick a TSE-listed company and build a data-backed investment thesis." },
              { num: "02", title: "Economics Quiz", body: "Macro, micro, and market knowledge. Timed online format." },
              { num: "03", title: "Case Competition", body: "Solve a real-world business or investment problem." },
            ].map((f, i) => (
              <div key={f.title} style={{
                padding: "32px 28px",
                background: "var(--bg-raised)",
                borderTop: "1px solid var(--border)",
                borderRight: i < 2 ? "1px solid var(--border)" : "none",
                borderBottom: "1px solid var(--border)",
                borderLeft: i === 0 ? "1px solid var(--border)" : "none",
              }}>
                <div style={{ ...mono, fontSize: 12, color: "var(--text-3)", letterSpacing: "0.08em", marginBottom: 20 }}>
                  {f.num}
                </div>
                <div style={{ fontWeight: 700, color: "#F0F0F0", fontSize: 15, marginBottom: 10, letterSpacing: "-0.02em" }}>
                  {f.title}
                </div>
                <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.75 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING ── */}
      {upcoming.length > 0 && (
        <section className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <SectionLabel num="03" text="Coming Up" />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
              {upcoming.map((c, i) => (
                <div key={c.slug} style={{
                  padding: "32px 28px",
                  background: "var(--bg-raised)",
                  border: "1px solid var(--border)",
                  borderLeft: i > 0 ? "none" : "1px solid var(--border)",
                }}>
                  <div style={{ ...mono, fontSize: 12, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
                    {typeLabel(c.type)}
                  </div>
                  <div style={{ fontWeight: 700, color: "#F0F0F0", fontSize: 16, marginBottom: 10, letterSpacing: "-0.02em" }}>
                    {c.title}
                  </div>
                  <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 16 }}>{c.description}</p>
                  <div style={{ ...mono, fontSize: 11, color: "var(--text-3)" }}>
                    Opens {formatDate(c.registrationOpen)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHY ENTER ── */}
      <section className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SectionLabel num="04" text="Why Enter" />

          <h2 style={{
            ...serif,
            fontSize: "clamp(26px, 3.5vw, 44px)",
            fontWeight: 400, color: "#F0F0F0",
            lineHeight: 1.1, letterSpacing: "-0.02em",
            marginBottom: 48,
          }}>
            What you get out of it.
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { n: "01", title: "Real experience.", body: "Stock pitches and case work are what junior analysts actually do. This is the real thing, not a simulation." },
              { n: "02", title: "Strong uni application talking point.", body: "A finance competition is a compelling addition to any business, economics, or finance application." },
              { n: "03", title: "Real experience.", body: "Build a proper investment thesis or case study — the kind of work that actually matters for finance applications." },
              { n: "04", title: "Zero barrier to entry.", body: "Free. No finance background needed. AI tools welcome. Takes as long as you want to spend on it." },
            ].map((item) => (
              <div key={item.title} className="grid-why-row">
                <div style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.1em", paddingTop: 2 }}>{item.n}</div>
                <div style={{ fontWeight: 700, color: "#F0F0F0", fontSize: 15, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{item.title}</div>
                <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </div>
      </section>

      {/* ── REDDIT SOCIAL PROOF ── */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ ...mono, fontSize: 9, letterSpacing: "0.14em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: 24 }}>
            As seen on
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              {
                sub: "r/summerprogramresults",
                title: "Monthly finance competitions (free alternative to expensive summer programs)",
                url: "https://www.reddit.com/r/summerprogramresults/comments/1rubzle/monthly_finance_competitions_free_alternative_to/",
              },
              {
                sub: "r/highschool",
                title: "Free international stock pitch competition (open to all high school students)",
                url: "https://www.reddit.com/r/highschool/comments/1ruxnij/free_international_stock_pitch_competition_10000/",
              },
            ].map(post => (
              <a key={post.sub} href={post.url} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 20,
                padding: "20px 24px",
                border: "1px solid var(--border)",
                borderRadius: 3,
                background: "var(--bg-raised)",
                textDecoration: "none",
                transition: "border-color 0.15s",
              }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="10" cy="10" r="10" fill="#FF4500"/>
                  <path d="M16.67 10a1.46 1.46 0 00-2.47-1 7.12 7.12 0 00-3.85-1.23l.65-3.08 2.13.45a1 1 0 101.06-1 1 1 0 00-.96.68l-2.38-.5a.17.17 0 00-.2.13l-.73 3.44a7.14 7.14 0 00-3.84 1.23 1.46 1.46 0 10-1.61 2.39 2.87 2.87 0 000 .37c0 1.88 2.19 3.41 4.89 3.41s4.89-1.53 4.89-3.41a2.87 2.87 0 000-.37 1.46 1.46 0 00.37-1zm-9.07 1.18a1 1 0 111 1 1 1 0 01-1-1zm5.55 2.64a3.45 3.45 0 01-2.4.73 3.45 3.45 0 01-2.4-.73.17.17 0 01.24-.24 3.13 3.13 0 002.16.58 3.13 3.13 0 002.16-.58.17.17 0 01.24.24zm-.11-1.64a1 1 0 111-1 1 1 0 01-1 1z" fill="white"/>
                </svg>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ ...mono, fontSize: 11, color: "#FF6534", letterSpacing: "0.04em", marginBottom: 4 }}>{post.sub}</div>
                  <div style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.4 }}>{post.title}</div>
                </div>
                <ArrowRight size={14} style={{ color: "var(--text-3)", flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "80px 24px 100px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: 16 }}>
            Get started
          </div>

          {/* Urgency line */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <span className="pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
            <span style={{ ...mono, fontSize: 11, color: "var(--text-2)", letterSpacing: "0.04em" }}>
              Registration closes {formatDate(comp.registrationClose)} · Only {spotsLeft} spots remaining
            </span>
          </div>

          <h2 style={{
            ...serif,
            fontSize: "clamp(44px, 9vw, 108px)",
            fontWeight: 400,
            color: "#F0F0F0",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            marginBottom: 48,
          }}>
            Free.<br />Open now.
          </h2>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            {open && (
              <a href={open.registerUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 14, padding: "14px 32px" }}>
                Register Now — Free <ArrowRight size={15} />
              </a>
            )}
          </div>
          <p style={{ marginTop: 24, ...mono, fontSize: 11, color: "var(--text-3)" }}>
            Questions? <a href="mailto:arihant97@smis.ac.jp" style={{ color: "var(--text-2)", textDecoration: "none" }}>arihant97@smis.ac.jp</a>
          </p>
        </div>
      </section>

    </div>
  );
}
