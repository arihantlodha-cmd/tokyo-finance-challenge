import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { competitions, formatDate, typeLabel } from "@/lib/data";
import CountdownTimer from "@/components/custom/CountdownTimer";

export const metadata: Metadata = {
  title: "Tokyo Finance Challenge — Monthly Finance Competitions for High School Students",
  description: "Monthly stock pitch, economics quiz, and case competitions for high school students. Free to enter. Real prizes.",
  openGraph: {
    title: "Tokyo Finance Challenge",
    description: "Monthly finance competitions for high school students. Free.",
  },
};

const S = {
  label: { fontSize: 11, fontWeight: 600 as const, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: "#aaa" },
  divider: { border: "none" as const, borderTop: "1px solid rgba(0,0,0,0.07)" as const, margin: 0 },
};

export default function HomePage() {
  const open = competitions.find(c => c.status === "open" || c.status === "active");
  const upcoming = competitions.filter(c => c.status === "upcoming");
  const comp = open ?? competitions[0];

  return (
    <div style={{ background: "#fff" }}>

      {/* ── CURRENT CHALLENGE (hero) ── */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 24px 72px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#000", display: "inline-block" }} />
          <div style={S.label}>Open now · {typeLabel(comp.type)}</div>
        </div>

        <h1 style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 900, color: "#000", lineHeight: 1, letterSpacing: "-0.04em", marginBottom: 20, maxWidth: 760 }}>
          {comp.title}
        </h1>

        <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "#777", lineHeight: 1.7, maxWidth: 540, marginBottom: 36 }}>
          {comp.description}
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
          <a href={comp.registerUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px" }}>
            Register Free <ArrowRight size={15} />
          </a>
          <Link href="/sample" className="btn-secondary" style={{ fontSize: 15, padding: "13px 24px" }}>
            See sample submission
          </Link>
          <Link href={`/competitions/${comp.slug}`} style={{ fontSize: 14, color: "#bbb", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, padding: "13px 0" }}>
            Full details →
          </Link>
        </div>

        {/* Stats + countdown */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center", borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 32 }}>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[
              { label: "Reg. closes", value: formatDate(comp.registrationClose) },
              { label: "Submission deadline", value: formatDate(comp.submissionDeadline) },
              { label: "1st Prize", value: comp.prizes.first },
              { label: "Spots left", value: `${comp.maxParticipants - comp.participantCount} / ${comp.maxParticipants}` },
            ].map(item => (
              <div key={item.label}>
                <div style={S.label}>{item.label}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#000", marginTop: 5 }}>{item.value}</div>
              </div>
            ))}
          </div>
          <CountdownTimer deadline={comp.submissionDeadline + "T23:59:59"} />
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── WHAT IS TFC ── */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 24px" }}>
        <div style={S.label}>About Tokyo Finance Challenge</div>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, color: "#000", letterSpacing: "-0.03em", marginTop: 16, marginBottom: 16, maxWidth: 600 }}>
          Monthly finance competitions for high school students.
        </h2>
        <p style={{ fontSize: 15, color: "#888", lineHeight: 1.8, maxWidth: 580, marginBottom: 48 }}>
          Every month, a different challenge — stock pitches, economics quizzes, case competitions. Free to enter, open to all high school students. AI tools welcome. No finance background needed.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12, overflow: "hidden" }}>
          {[
            { icon: "📊", title: "Stock Pitch", body: "Pick a TSE-listed company and argue whether it's worth buying." },
            { icon: "📐", title: "Economics Quiz", body: "Macro, micro, and market knowledge. Timed online format." },
            { icon: "💼", title: "Case Competition", body: "Solve a real-world business or investment problem." },
          ].map((f, i) => (
            <div key={f.title} style={{
              padding: "28px 24px", background: "#f8f8f8",
              borderRight: i < 2 ? "1px solid rgba(0,0,0,0.07)" : "none",
            }}>
              <div style={{ fontSize: 24, marginBottom: 14 }}>{f.icon}</div>
              <div style={{ fontWeight: 700, color: "#000", fontSize: 15, marginBottom: 8 }}>{f.title}</div>
              <p style={{ fontSize: 13, color: "#999", lineHeight: 1.65 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── UPCOMING ── */}
      {upcoming.length > 0 && (
        <section style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ ...S.label, marginBottom: 24 }}>Coming up</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 1, border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12, overflow: "hidden" }}>
            {upcoming.map((c, i) => (
              <div key={c.slug} style={{
                padding: "28px 24px", background: "#f8f8f8",
                borderRight: i < upcoming.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
              }}>
                <div style={S.label}>{typeLabel(c.type)}</div>
                <div style={{ fontWeight: 700, color: "#000", fontSize: 16, marginTop: 8, marginBottom: 8, letterSpacing: "-0.01em" }}>{c.title}</div>
                <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6, marginBottom: 14 }}>{c.description}</p>
                <div style={{ fontSize: 12, color: "#ccc" }}>Opens {formatDate(c.registrationOpen)} · {c.prizes.first} first prize</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <hr style={S.divider} />

      {/* ── WHY ENTER ── */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 24px" }}>
        <div style={S.label}>Why enter</div>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, color: "#000", letterSpacing: "-0.03em", marginTop: 16, marginBottom: 40 }}>
          What you get out of it.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12, overflow: "hidden" }}>
          {[
            { title: "Real experience", body: "Stock pitches and case work are what junior analysts actually do. This is the real thing, not a simulation." },
            { title: "Strong uni application talking point", body: "A finance competition is a compelling addition to any business, economics, or finance application." },
            { title: "Cash prizes", body: "¥10,000 first prize. ¥5,000 second. ¥3,000 third. Real money, transferred after results." },
            { title: "Zero barrier to entry", body: "Free. No finance background needed. AI tools welcome. Takes as long as you want to spend on it." },
          ].map((item, i) => (
            <div key={item.title} style={{
              padding: "28px 32px", background: "#f8f8f8",
              borderRight: i % 2 === 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
              borderBottom: i < 2 ? "1px solid rgba(0,0,0,0.07)" : "none",
            }}>
              <div style={{ fontWeight: 700, color: "#000", fontSize: 15, marginBottom: 8 }}>{item.title}</div>
              <p style={{ fontSize: 13, color: "#999", lineHeight: 1.7 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── BOTTOM CTA ── */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 24px 120px", textAlign: "center" }}>
        <div style={S.label}>Get started</div>
        <h2 style={{ fontSize: "clamp(32px, 5.5vw, 64px)", fontWeight: 900, color: "#000", letterSpacing: "-0.04em", marginTop: 20, marginBottom: 16, lineHeight: 1 }}>
          Free. Open now.
        </h2>
        <p style={{ fontSize: 15, color: "#aaa", marginBottom: 32, maxWidth: 360, margin: "0 auto 32px" }}>
          Registration for the April stock pitch closes April 10.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          {open && (
            <a href={open.registerUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px" }}>
              Register Now — Free <ArrowRight size={15} />
            </a>
          )}
          <Link href="/archive" className="btn-secondary" style={{ fontSize: 15, padding: "13px 24px" }}>
            View all competitions
          </Link>
        </div>
        <p style={{ marginTop: 20, fontSize: 13, color: "#ccc" }}>
          Questions? <a href="mailto:arihant97@smis.ac.jp" style={{ color: "#bbb", textDecoration: "none" }}>arihant97@smis.ac.jp</a>
        </p>
      </section>

    </div>
  );
}
