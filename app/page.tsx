import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { competitions, formatDate, typeLabel } from "@/lib/data";
import CountdownTimer from "@/components/custom/CountdownTimer";

export const metadata: Metadata = {
  title: "International Finance Challenge — Monthly Finance Competitions for High School Students",
  description: "Free monthly stock pitch, economics quiz, and case competitions for high school students worldwide. 37 participants from 7 countries. Real cash prizes.",
  openGraph: {
    title: "International Finance Challenge",
    description: "Free international finance competition for high school students. 37 participants from 7 countries.",
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
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇮🇳", name: "India" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇵🇭", name: "Philippines" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇲🇾", name: "Malaysia" },
  { flag: "🇮🇩", name: "Indonesia" },
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

        {/* Social proof line */}
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 28, alignItems: "center" }}>
          <span style={{ ...mono, fontSize: 11, color: "var(--text-2)", letterSpacing: "0.04em" }}>
            <span style={{ color: "#F0F0F0", fontWeight: 700 }}>37</span> participants
          </span>
          <span style={{ width: 1, height: 12, background: "var(--border)" }} />
          <span style={{ ...mono, fontSize: 11, color: "var(--text-2)", letterSpacing: "0.04em" }}>
            <span style={{ color: "#F0F0F0", fontWeight: 700 }}>7</span> countries
          </span>
          <span style={{ width: 1, height: 12, background: "var(--border)" }} />
          <span style={{ ...mono, fontSize: 11, color: "var(--text-2)", letterSpacing: "0.04em" }}>
            <span style={{ color: "#F0F0F0", fontWeight: 700 }}>17+</span> cities
          </span>
          <span style={{ width: 1, height: 12, background: "var(--border)" }} />
          <span style={{ ...mono, fontSize: 11, color: "#C8102E", letterSpacing: "0.04em" }}>
            Only {spotsLeft} spots left
          </span>
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
            <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.8, marginBottom: 36, maxWidth: 420 }}>
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
            <div style={{ ...mono, fontSize: 9, letterSpacing: "0.14em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: 14 }}>
              Submission countdown
            </div>
            <CountdownTimer deadline={comp.submissionDeadline + "T23:59:59"} />
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid-stats">
          {[
            { label: "Participants",          value: "37" },
            { label: "Countries",             value: "7" },
            { label: "1st Prize",             value: comp.prizes.first },
            { label: "Reg. closes",           value: formatDate(comp.registrationClose) },
          ].map((item) => (
            <div key={item.label} className="stat-cell">
              <div style={{ ...mono, fontSize: 9, letterSpacing: "0.12em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: 10 }}>
                {item.label}
              </div>
              <div style={{ ...mono, fontSize: 15, fontWeight: 700, color: "#F0F0F0", letterSpacing: "-0.01em" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOCIAL PROOF: COUNTRIES ── */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ ...mono, fontSize: 9, letterSpacing: "0.14em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: 20 }}>
            Participants from
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {COUNTRIES.map(c => (
              <div key={c.name} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 14px",
                border: "1px solid var(--border)",
                borderRadius: 2,
                background: "var(--bg-raised)",
              }}>
                <span style={{ fontSize: 16 }}>{c.flag}</span>
                <span style={{ ...mono, fontSize: 11, color: "var(--text-2)", letterSpacing: "0.04em" }}>{c.name}</span>
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
              <div style={{ ...mono, fontSize: 9, letterSpacing: "0.14em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: 16 }}>
                The pitch
              </div>
              <p style={{ fontSize: 22, color: "#F0F0F0", lineHeight: 1.4, letterSpacing: "-0.02em", fontWeight: 600 }}>
                Real finance experience.<br />
                <span style={{ color: "var(--text-3)", textDecoration: "line-through", fontWeight: 400, fontSize: 18 }}>$5,000 summer programs.</span>
                <span style={{ color: "#C8102E" }}> ¥0.</span>
              </p>
            </div>
            <div style={{ flex: 2, minWidth: 260 }}>
              <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.85 }}>
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
                body: "Submit your PDF by the deadline. Top 3 finalists present live to finance professionals. Winners receive cash prizes.",
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
                <div style={{ ...mono, fontSize: 10, color: "var(--text-3)", letterSpacing: "0.1em", marginBottom: 20 }}>
                  {f.num}
                </div>
                <div style={{ fontWeight: 700, color: "#F0F0F0", fontSize: 15, marginBottom: 10, letterSpacing: "-0.02em" }}>
                  {f.title}
                </div>
                <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7 }}>{f.body}</p>
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
              <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.85 }}>
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
                <div style={{ ...mono, fontSize: 10, color: "var(--text-3)", letterSpacing: "0.1em", marginBottom: 20 }}>
                  {f.num}
                </div>
                <div style={{ fontWeight: 700, color: "#F0F0F0", fontSize: 15, marginBottom: 10, letterSpacing: "-0.02em" }}>
                  {f.title}
                </div>
                <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7 }}>{f.body}</p>
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
                  <div style={{ ...mono, fontSize: 10, color: "var(--text-3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                    {typeLabel(c.type)}
                  </div>
                  <div style={{ fontWeight: 700, color: "#F0F0F0", fontSize: 16, marginBottom: 10, letterSpacing: "-0.02em" }}>
                    {c.title}
                  </div>
                  <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.65, marginBottom: 16 }}>{c.description}</p>
                  <div style={{ ...mono, fontSize: 11, color: "var(--text-3)" }}>
                    Opens {formatDate(c.registrationOpen)} · {c.prizes.first} first
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
              { n: "03", title: "Cash prizes.", body: "¥10,000 first prize. ¥5,000 second. ¥3,000 third. Real money, transferred after results." },
              { n: "04", title: "Zero barrier to entry.", body: "Free. No finance background needed. AI tools welcome. Takes as long as you want to spend on it." },
            ].map((item) => (
              <div key={item.title} className="grid-why-row">
                <div style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.1em", paddingTop: 2 }}>{item.n}</div>
                <div style={{ fontWeight: 700, color: "#F0F0F0", fontSize: 15, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{item.title}</div>
                <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
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
            <Link href="/archive" className="btn-secondary" style={{ fontSize: 14, padding: "14px 28px" }}>
              View all competitions
            </Link>
          </div>
          <p style={{ marginTop: 24, ...mono, fontSize: 11, color: "var(--text-3)" }}>
            Questions? <a href="mailto:arihant97@smis.ac.jp" style={{ color: "var(--text-2)", textDecoration: "none" }}>arihant97@smis.ac.jp</a>
          </p>
        </div>
      </section>

    </div>
  );
}
