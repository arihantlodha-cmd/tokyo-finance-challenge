import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sample Submission | Tokyo Finance Challenge",
  description: "See what a stock pitch submission looks like — a real example to guide your own entry.",
};

const S = {
  label: { fontSize: 11, fontWeight: 600 as const, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: "#aaa" },
  h2: { fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 700 as const, color: "#000", letterSpacing: "-0.02em" },
  divider: { border: "none" as const, borderTop: "1px solid rgba(0,0,0,0.08)" as const, margin: 0 },
  body: { fontSize: 14, color: "#666", lineHeight: 1.8 as const },
};

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 40 }}>
    <div style={{ ...S.label, marginBottom: 16 }}>{label}</div>
    {children}
  </div>
);

export default function SamplePage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={S.label}>Example Submission</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, color: "#000", letterSpacing: "-0.03em", marginTop: 16, marginBottom: 16 }}>
            Sample Stock Pitch
          </h1>
          <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7, maxWidth: 540 }}>
            This is a sample submission to show you what we&apos;re looking for. Your pitch doesn&apos;t need to be this long — this is an example, not a template. Write what you think matters.
          </p>
          <div style={{ marginTop: 20, padding: "12px 16px", background: "#f5f5f5", borderRadius: 6, display: "inline-block" }}>
            <span style={{ fontSize: 13, color: "#999" }}>Company: </span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>Nintendo Co., Ltd. (7974.T) — BUY</span>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={{ padding: "48px 0" }}>

          <Section label="1. Company Overview">
            <p style={S.body}>
              Nintendo is a Japanese video game company headquartered in Kyoto. It develops, manufactures, and markets hardware and software under the Nintendo Switch platform. The company is listed on the Tokyo Stock Exchange Prime Market (ticker: 7974).
            </p>
            <p style={{ ...S.body, marginTop: 12 }}>
              Nintendo&apos;s core business is the Nintendo Switch console and its game library — titles like Mario, Zelda, and Pokémon. Unlike Sony or Microsoft, Nintendo competes on unique gameplay experiences rather than raw hardware performance. This lets them maintain high software margins (over 70%) and strong franchise loyalty.
            </p>
          </Section>

          <Section label="2. Why I Think It's a Buy">
            <p style={S.body}>
              My thesis is simple: Nintendo is undervalued because the market is pricing in declining Switch sales without accounting for the upcoming Switch 2 launch cycle.
            </p>
            <ul style={{ paddingLeft: 20, marginTop: 12 }}>
              {[
                "The Switch launched in 2017. A successor console is widely expected in 2024–2025. Every prior Nintendo console transition has triggered a major re-rating.",
                "Nintendo has ¥1.4 trillion in net cash on its balance sheet — roughly 30% of its market cap. This is a floor on downside and signals management can sustain dividends and buybacks.",
                "Franchise value is durable. Mario Kart 8 Deluxe (2017) still sells over 1 million units per quarter in 2024. There is no competitor with comparable IP depth.",
                "The movie strategy (Super Mario Bros. Movie grossed $1.3B in 2023) opens a new revenue stream that the market hasn't fully priced.",
              ].map((pt, i) => (
                <li key={i} style={{ ...S.body, marginBottom: 8, paddingLeft: 4 }}>{pt}</li>
              ))}
            </ul>
          </Section>

          <Section label="3. Basic Valuation">
            <p style={S.body}>
              I used a simple P/E comparison. Nintendo currently trades at ~18x forward earnings. Comparable gaming/entertainment companies (Sony, Activision pre-acquisition, EA) trade at 22–28x. Even at the low end of peers, Nintendo should be worth ~22x, implying ~20% upside from current levels.
            </p>
            <p style={{ ...S.body, marginTop: 12 }}>
              I also looked at EV/EBITDA: Nintendo at ~12x vs. peers at 16–20x. Same conclusion — it screens cheap relative to franchise quality.
            </p>
            <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, border: "1px solid rgba(0,0,0,0.08)", borderRadius: 8, overflow: "hidden" }}>
              {[
                { label: "Current P/E", value: "18x" },
                { label: "Peer Avg P/E", value: "24x" },
                { label: "Implied Upside", value: "~20%" },
              ].map((item, i) => (
                <div key={item.label} style={{ padding: "16px 20px", background: i === 0 ? "#f5f5f5" : "#fafafa", borderRight: i < 2 ? "1px solid rgba(0,0,0,0.07)" : "none" }}>
                  <div style={{ ...S.label, marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#000", letterSpacing: "-0.02em" }}>{item.value}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section label="4. Key Risks">
            <ul style={{ paddingLeft: 20 }}>
              {[
                "Switch 2 could disappoint on launch — a weak hardware cycle would hurt near-term earnings significantly.",
                "Mobile gaming expansion has underperformed. Nintendo has struggled to monetize mobile as well as peers.",
                "FX risk: Nintendo earns most revenue outside Japan, so a strong yen hurts reported earnings.",
                "Key franchise fatigue — Mario and Zelda are evergreen, but what happens if consumer tastes shift?",
              ].map((risk, i) => (
                <li key={i} style={{ ...S.body, marginBottom: 8, paddingLeft: 4 }}>{risk}</li>
              ))}
            </ul>
          </Section>

          <Section label="5. Conclusion">
            <p style={S.body}>
              Nintendo trades at a discount to peers despite superior IP, a clean balance sheet, and a major product cycle coming. I rate it a <strong>BUY</strong> with a 12-month price target of ¥9,500 (from ~¥7,800 at time of writing), based on 22x forward earnings.
            </p>
            <p style={{ ...S.body, marginTop: 12 }}>
              The biggest risk to my thesis is a weak Switch 2 launch. If that happens, I&apos;d reassess. But the cash position limits downside, and the franchise portfolio has proven durable for 40+ years.
            </p>
          </Section>

        </div>

        <hr style={S.divider} />

        {/* Bottom note */}
        <div style={{ padding: "40px 0" }}>
          <div style={{ padding: "28px 32px", background: "#f7f7f7", borderRadius: 8, border: "1px solid rgba(0,0,0,0.07)" }}>
            <div style={{ ...S.label, marginBottom: 12 }}>What made this a decent pitch</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Clear thesis in one sentence — \"The market is mispricing the Switch 2 cycle.\"",
                "Simple valuation — just P/E comparison, no DCF required",
                "Honest about risks — didn't just talk up the stock",
                "Uses real numbers — ¥1.4T cash, $1.3B movie gross, etc.",
                "Short and direct — no filler, no jargon",
              ].map((pt, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#bbb", fontSize: 14, flexShrink: 0, marginTop: 1 }}>—</span>
                  <span style={{ fontSize: 14, color: "#666" }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/" className="btn-primary" style={{ fontSize: 13, padding: "10px 20px" }}>
              Enter the competition
            </Link>
            <Link href="/faq" className="btn-secondary" style={{ fontSize: 13, padding: "10px 18px" }}>
              Read the FAQ
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
