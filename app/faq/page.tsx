"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const S = {
  label: { fontSize: 11, fontWeight: 600 as const, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: "#aaa" },
};

const categories = [
  {
    label: "Registration",
    faqs: [
      { q: "Who can participate?", a: "Any high school student (grades 9–12) can participate individually or in teams of up to 4 members. Students from any school or country are welcome." },
      { q: "How do I register?", a: "Click the 'Register Now' button on the competition page. It links to a Google Form where you enter your details. Takes under 2 minutes and is completely free." },
      { q: "Is there a participation fee?", a: "No. All Tokyo Finance Challenge competitions are completely free to enter. There are no hidden charges." },
      { q: "Can I join multiple competitions?", a: "Yes. Each competition is independent. You can register and compete in as many as you like." },
      { q: "Can I change my team after registering?", a: "Email us at arihant97@smis.ac.jp before the submission deadline and we'll update your registration." },
    ],
  },
  {
    label: "Competition",
    faqs: [
      { q: "What if I miss the submission deadline?", a: "Late submissions are not accepted. The deadline is strictly enforced to be fair to all participants. Set reminders early." },
      { q: "How is judging done?", a: "Judges are finance professionals who score submissions independently. Criteria vary by competition type and are listed on each competition page." },
      { q: "What format should submissions be?", a: "PDF for stock pitches and case competitions. For the economics quiz, you complete an online form. Specific requirements are on the competition page." },
      { q: "Are AI tools allowed?", a: "Yes — fully. Use ChatGPT, Claude, whatever helps. We want to see your thinking and conclusions, not how manually you did the research." },
      { q: "Can teams have members from different schools?", a: "Yes. Team members can be from different schools. List all members on the registration form." },
    ],
  },
  {
    label: "Results",
    faqs: [
      { q: "When are results announced?", a: "Results are published on the Archive page and emailed to all participants on the date listed in the competition details." },
      { q: "Are there certificates?", a: "Top 3 finishers receive digital certificates of achievement. We're working on certificates for all participants." },
      { q: "Will my results be made public?", a: "Top 3 results are published on the Archive page. Full leaderboards may be published for some competitions — this is noted in the rules." },
    ],
  },
  {
    label: "Technical",
    faqs: [
      { q: "The Google Form link isn't working.", a: "Email us at arihant97@smis.ac.jp and we'll send the direct link. Forms are only active during the relevant registration or submission window." },
      { q: "I didn't get a confirmation after registering.", a: "Registrations are logged immediately when the form is submitted. Email us with your name and competition title to confirm your entry." },
      { q: "Can I update my submission after submitting?", a: "You can re-submit via the same form before the deadline. Only your most recent submission will be reviewed." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16,
      }}>
        <span style={{ color: "#444", fontWeight: 500, fontSize: 14, lineHeight: 1.4 }}>{q}</span>
        {open ? <Minus size={14} style={{ color: "#bbb", flexShrink: 0 }} /> : <Plus size={14} style={{ color: "#bbb", flexShrink: 0 }} />}
      </button>
      {open && (
        <div style={{ paddingBottom: 18 }}>
          <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.75 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>

        <div style={{ marginBottom: 56 }}>
          <div style={S.label}>FAQ</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 800, color: "#000", letterSpacing: "-0.03em", marginTop: 16, marginBottom: 12 }}>
            Frequently asked questions
          </h1>
          <p style={{ color: "#aaa", fontSize: 14 }}>
            Still have questions?{" "}
            <a href="mailto:arihant97@smis.ac.jp" style={{ color: "#888", textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#555"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#888"; }}
            >
              Email us
            </a>.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {categories.map((cat, ci) => (
            <div key={cat.label} style={{
              borderTop: ci === 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
              borderBottom: "1px solid rgba(0,0,0,0.07)",
              padding: "40px 0",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 48, alignItems: "start" }}>
                <div style={{ ...S.label, paddingTop: 4 }}>{cat.label}</div>
                <div>
                  {cat.faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, padding: "32px", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 8, background: "#f7f7f7" }}>
          <p style={{ color: "#777", fontWeight: 600, fontSize: 15, marginBottom: 6 }}>Didn&apos;t find your answer?</p>
          <p style={{ color: "#bbb", fontSize: 14, marginBottom: 16 }}>Email us and we&apos;ll respond within 24 hours.</p>
          <a href="mailto:arihant97@smis.ac.jp" className="btn-primary" style={{ padding: "10px 22px", fontSize: 13 }}>
            arihant97@smis.ac.jp
          </a>
        </div>
      </div>
    </div>
  );
}
