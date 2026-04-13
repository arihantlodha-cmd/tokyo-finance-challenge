import type { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About | International Finance Challenge",
  description: "About International Finance Challenge and our mission to bring real finance competition to high school students.",
};

const S = {
  label: { fontSize: 11, fontWeight: 600 as const, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: "#aaa" },
  h2: { fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700 as const, color: "#000", letterSpacing: "-0.02em" },
  divider: { border: "none" as const, borderTop: "1px solid rgba(0,0,0,0.07)" as const, margin: 0 },
};

const values = [
  { title: "Practical over theoretical", body: "Every competition is based on real companies, real data, and problems that matter in the real world." },
  { title: "Free, always", body: "No fees, no subscriptions, no catch. Every high school student deserves access to this kind of challenge." },
  { title: "Pan-Asian focus", body: "We center Japanese and Asian markets — TSE-listed companies, regional economics, and Asia-focused cases." },
  { title: "Rigor over prestige", body: "We judge on analysis quality and original thinking, not on which school you attend." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "64px 24px" }}>

        {/* Mission */}
        <section style={{ marginBottom: 72 }}>
          <div style={S.label}>Mission</div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, color: "#000", letterSpacing: "-0.03em", marginTop: 20, marginBottom: 28, maxWidth: 700 }}>
            Real finance experience.<br />Free for every student.
          </h1>
          <div style={{ maxWidth: 620 }}>
            <p style={{ color: "#999", fontSize: 17, lineHeight: 1.85, marginBottom: 18 }}>
              International Finance Challenge was created to close the gap between classroom finance education and the real world. High school students everywhere — regardless of school, background, or resources — deserve access to the kind of competitive, practical experience that builds genuine finance skills.
            </p>
            <p style={{ color: "#aaa", fontSize: 17, lineHeight: 1.85, marginBottom: 18 }}>
              Through monthly competitions — stock pitches, economics quizzes, case competitions — we give students a structured way to apply what they learn, get feedback from industry professionals, and build a track record before university.
            </p>
            <p style={{ color: "#bbb", fontSize: 17, lineHeight: 1.85 }}>
              Our competitions are modeled after real-world processes: equity research, consulting case work, economics analysis. The skills you build here are the same ones that matter at KWHS, IEO, and eventually in your career.
            </p>
          </div>
        </section>

        <hr style={S.divider} />

        {/* Values */}
        <section style={{ padding: "64px 0" }}>
          <div style={S.label}>What we believe</div>
          <h2 style={{ ...S.h2, marginTop: 16, marginBottom: 40 }}>Our values</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, border: "1px solid rgba(0,0,0,0.08)", borderRadius: 10, overflow: "hidden" }}>
            {values.map((v, i) => (
              <div key={v.title} style={{
                padding: "28px 28px",
                borderRight: i % 2 === 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                borderBottom: i < 2 ? "1px solid rgba(0,0,0,0.07)" : "none",
                background: "#f7f7f7",
              }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                  <Check size={14} style={{ color: "#aaa", marginTop: 3, flexShrink: 0 }} />
                  <h3 style={{ color: "#333", fontWeight: 600, fontSize: 15 }}>{v.title}</h3>
                </div>
                <p style={{ color: "#aaa", fontSize: 15, lineHeight: 1.75, paddingLeft: 24 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <hr style={S.divider} />

        {/* Contact */}
        <section style={{ padding: "64px 0" }}>
          <div style={S.label}>Contact</div>
          <h2 style={{ ...S.h2, marginTop: 16, marginBottom: 32 }}>Get in touch</h2>
          <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 10, padding: "28px 28px", background: "#f7f7f7" }}>
            <a href="mailto:arihant97@smis.ac.jp" style={{ display: "block", color: "#777", fontSize: 15, textDecoration: "none", marginBottom: 6 }}>
              arihant97@smis.ac.jp
            </a>
            <p style={{ color: "#bbb", fontSize: 15 }}>We reply within 24 hours.</p>
          </div>
        </section>

      </div>
    </div>
  );
}
