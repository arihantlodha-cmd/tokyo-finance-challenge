import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sample Submission — Sony Stock Pitch | Tokyo Finance Challenge",
  description: "See a real sample stock pitch submission: Sony Group Corporation (TYO: 6758). BUY recommendation with full thesis, financials, and risks.",
};

const mono: React.CSSProperties = { fontFamily: "var(--font-mono)" };
const serif: React.CSSProperties = { fontFamily: "var(--font-serif)" };

export default function SamplePage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* ── COVER ── */}
      <section style={{ borderBottom: "1px solid var(--border)", padding: "80px 24px 64px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
            <span style={{ ...mono, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-3)" }}>
              Tokyo Finance Challenge
            </span>
            <span style={{ color: "var(--text-3)", fontSize: 10 }}>·</span>
            <span style={{ ...mono, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-3)" }}>
              Sample Submission
            </span>
          </div>

          <h1 style={{
            ...serif,
            fontSize: "clamp(52px, 10vw, 120px)",
            fontWeight: 400,
            color: "#F0F0F0",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}>
            Sony Group<br />Corporation
          </h1>

          <p style={{ ...mono, fontSize: 13, color: "#C8A84B", letterSpacing: "0.04em", marginBottom: 48 }}>
            Investment Pitch · Tokyo Stock Exchange: 6758
          </p>

          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{
              display: "inline-flex", alignItems: "baseline", gap: 12,
              padding: "16px 28px",
              background: "rgba(200,16,46,0.1)",
              border: "1px solid rgba(200,16,46,0.3)",
              borderRadius: 3,
            }}>
              <span style={{ ...mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8102E" }}>Recommendation</span>
              <span style={{ ...serif, fontSize: 42, fontWeight: 400, color: "#C8102E", letterSpacing: "-0.02em", lineHeight: 1 }}>BUY</span>
            </div>
            <div>
              <div style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.06em", marginBottom: 4 }}>Target upside</div>
              <div style={{ ...mono, fontSize: 22, fontWeight: 700, color: "#F0F0F0" }}>~20–25%</div>
            </div>
            <div>
              <div style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.06em", marginBottom: 4 }}>Horizon</div>
              <div style={{ ...mono, fontSize: 22, fontWeight: 700, color: "#F0F0F0" }}>12 months</div>
            </div>
          </div>

          <p style={{ ...mono, fontSize: 11, color: "var(--text-3)", marginTop: 32 }}>
            For educational purposes only. Not financial advice.
          </p>
        </div>
      </section>

      {/* ── SLIDE SECTIONS ── */}
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* ── 1 / 5  Company Overview ── */}
        <section style={{ padding: "72px 24px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginBottom: 48 }}>
            <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.1em" }}>01 / 05</span>
            <h2 style={{ ...serif, fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, color: "#F0F0F0", letterSpacing: "-0.025em", lineHeight: 1 }}>
              Company Overview
            </h2>
          </div>

          {/* About */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C8A84B", marginBottom: 20 }}>
              About the company
            </div>
            <div style={{ display: "grid", gap: 0 }}>
              {[
                "Founded in 1946, headquartered in Tokyo — one of Japan's most globally recognised conglomerates",
                "Operates across entertainment, electronics, semiconductors, and financial services",
                "Present in 180+ countries with approximately 108,000 employees worldwide",
                "Market capitalisation: approximately ¥17 trillion (~$115B USD)",
              ].map((pt, i) => (
                <div key={i} style={{
                  display: "flex", gap: 20, alignItems: "flex-start",
                  padding: "16px 0",
                  borderTop: "1px solid var(--border)",
                }}>
                  <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", flexShrink: 0, paddingTop: 2 }}>—</span>
                  <span style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.7 }}>{pt}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid var(--border)" }} />
            </div>
          </div>

          {/* Business segments */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C8A84B", marginBottom: 20 }}>
              Business segments
            </div>
            <div style={{ display: "grid", gap: 0 }}>
              {[
                { seg: "Game & Network Services", desc: "PlayStation platform, PS Plus subscriptions, first-party studios" },
                { seg: "Music", desc: "One of the Big Three global labels; Sony Music, Columbia, RCA (~30% of global recorded music)" },
                { seg: "Pictures", desc: "Film & TV; controls Spider-Man, James Bond, and Jumanji distribution rights" },
                { seg: "Semiconductors", desc: "CMOS image sensors, ~50% global market share, supplying Apple and Samsung" },
                { seg: "Electronics & Financial", desc: "TVs, cameras, insurance and banking (Japan-focused)" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "200px 1fr", gap: 24,
                  padding: "18px 0",
                  borderTop: "1px solid var(--border)",
                  alignItems: "start",
                }}>
                  <span style={{ ...mono, fontSize: 12, color: "#F0F0F0", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.4 }}>{item.seg}</span>
                  <span style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.65 }}>{item.desc}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid var(--border)" }} />
            </div>
          </div>

          {/* Market position */}
          <div>
            <div style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C8A84B", marginBottom: 20 }}>
              Market position
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 1, background: "var(--border)" }}>
              {[
                { stat: "110M+", label: "PlayStation monthly active users — #1 gaming platform globally" },
                { stat: "~50%", label: "Global CMOS image sensor market share — earns revenue whoever wins smartphones" },
                { stat: "∞", label: "Content library grows more valuable each year as streaming platforms compete for licensed IP" },
              ].map((item, i) => (
                <div key={i} style={{ background: "var(--bg-raised)", padding: "28px 24px" }}>
                  <div style={{ ...mono, fontSize: 32, fontWeight: 700, color: "#F0F0F0", letterSpacing: "-0.03em", marginBottom: 10 }}>{item.stat}</div>
                  <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.65 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2 / 5  Investment Thesis ── */}
        <section style={{ padding: "72px 24px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginBottom: 48 }}>
            <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.1em" }}>02 / 05</span>
            <h2 style={{ ...serif, fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, color: "#F0F0F0", letterSpacing: "-0.025em", lineHeight: 1 }}>
              Investment Thesis
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                n: "01",
                title: "Recurring revenue from the PlayStation ecosystem",
                points: [
                  "PlayStation Plus (~50M paying members) creates predictable subscription income — structurally similar to Netflix",
                  "Digital game sales now exceed physical, meaning higher margins on every sale going forward",
                  "First-party studios produce blockbuster titles that drive both hardware and subscription growth simultaneously",
                ],
              },
              {
                n: "02",
                title: "Image sensors: a hidden growth engine inside every smartphone",
                points: [
                  "Sony holds ~50% of the global CMOS image sensor market — chips inside every iPhone and most Android flagships",
                  "Sony earns sensor revenue regardless of which phone brand wins — it supplies the whole industry, not one side",
                  "Automotive cameras and AI vision systems represent a new growth frontier worth billions over the next decade",
                ],
              },
              {
                n: "03",
                title: "Content library as a durable competitive advantage",
                points: [
                  "Owns Spider-Man, James Bond, Jumanji rights and major music catalogues including the Michael Jackson estate",
                  "Streaming platforms (Netflix, Disney+, Apple TV+) need licensed content — Sony benefits from the streaming wars",
                  "Music royalties from Spotify and YouTube provide stable, growing passive income with minimal reinvestment required",
                ],
              },
            ].map((item) => (
              <div key={item.n} style={{ borderTop: "1px solid var(--border)", padding: "36px 0" }}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 20 }}>
                  <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", paddingTop: 4, flexShrink: 0 }}>{item.n}</span>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#F0F0F0", letterSpacing: "-0.02em", lineHeight: 1.3 }}>{item.title}</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, paddingLeft: 31 }}>
                  {item.points.map((pt, i) => (
                    <div key={i} style={{ display: "flex", gap: 16, padding: "12px 0", borderTop: "1px solid var(--border)" }}>
                      <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", flexShrink: 0, paddingTop: 3 }}>—</span>
                      <span style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.7 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 28 }}>
              <p style={{ ...serif, fontSize: 22, color: "var(--text-2)", fontStyle: "italic", lineHeight: 1.5 }}>
                Sony is not a single business — it is three separate growth engines running in parallel.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3 / 5  Financials ── */}
        <section style={{ padding: "72px 24px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginBottom: 48 }}>
            <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.1em" }}>03 / 05</span>
            <h2 style={{ ...serif, fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, color: "#F0F0F0", letterSpacing: "-0.025em", lineHeight: 1 }}>
              Financials
            </h2>
          </div>

          {/* Big key numbers */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)", marginBottom: 48 }}>
            {[
              { value: "+19%", label: "Revenue growth", sub: "FY2022 → FY2024" },
              { value: "+53%", label: "Operating income", sub: "FY2022 → FY2024" },
              { value: "+24%", label: "Net income growth", sub: "FY2022 → FY2024" },
            ].map((item) => (
              <div key={item.label} style={{ background: "var(--bg-raised)", padding: "32px 28px" }}>
                <div style={{ ...mono, fontSize: 42, fontWeight: 700, color: "#F0F0F0", letterSpacing: "-0.03em", marginBottom: 8 }}>{item.value}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-2)", marginBottom: 4 }}>{item.label}</div>
                <div style={{ ...mono, fontSize: 11, color: "var(--text-3)" }}>{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C8A84B", marginBottom: 20 }}>
            Three-year summary (¥ billions)
          </div>
          <div style={{ border: "1px solid var(--border)", borderRadius: 2, overflow: "hidden" }}>
            {/* Header */}
            <div style={{
              display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
              background: "var(--bg-raised)", borderBottom: "1px solid var(--border)",
              padding: "14px 20px",
            }}>
              {["", "FY2022", "FY2023", "FY2024 est.", "Change"].map((h, i) => (
                <div key={i} style={{ ...mono, fontSize: 11, color: "var(--text-3)", textAlign: i > 0 ? "right" : "left", letterSpacing: "0.04em" }}>{h}</div>
              ))}
            </div>
            {[
              { label: "Revenue (¥B)", fy22: "10,902", fy23: "11,540", fy24: "13,020", change: "+19%", highlight: false },
              { label: "Operating income (¥B)", fy22: "882", fy23: "1,082", fy24: "1,354", change: "+53%", highlight: false },
              { label: "Operating margin", fy22: "8.1%", fy23: "9.4%", fy24: "10.4%", change: "Expanding", highlight: true },
              { label: "Net income (¥B)", fy22: "780", fy23: "900", fy24: "970", change: "+24%", highlight: false },
            ].map((row, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                padding: "18px 20px",
                borderBottom: i < 3 ? "1px solid var(--border)" : "none",
                background: i % 2 === 0 ? "var(--bg)" : "var(--bg-raised)",
              }}>
                <div style={{ fontSize: 15, color: "var(--text-2)" }}>{row.label}</div>
                <div style={{ ...mono, fontSize: 15, color: "var(--text-3)", textAlign: "right" }}>{row.fy22}</div>
                <div style={{ ...mono, fontSize: 15, color: "var(--text-3)", textAlign: "right" }}>{row.fy23}</div>
                <div style={{ ...mono, fontSize: 15, fontWeight: 700, color: "#F0F0F0", textAlign: "right" }}>{row.fy24}</div>
                <div style={{ ...mono, fontSize: 15, fontWeight: 700, color: "#C8A84B", textAlign: "right" }}>{row.change}</div>
              </div>
            ))}
          </div>

          {/* Narrative */}
          <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 0 }}>
            <div style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C8A84B", marginBottom: 16 }}>
              What the numbers tell us
            </div>
            {[
              "Revenue grew 19% in two years — driven by gaming subscriptions, music licensing, and sensor demand from Apple and Samsung",
              "Operating margin improved from 8.1% to 10.4% as more revenue now comes from high-margin digital and subscription services",
              "Net income up 24% — Sony is becoming more profitable, not just bigger",
            ].map((pt, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: "14px 0", borderTop: "1px solid var(--border)" }}>
                <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", flexShrink: 0, paddingTop: 3 }}>—</span>
                <span style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.7 }}>{pt}</span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </section>

        {/* ── 4 / 5  Key Risks ── */}
        <section style={{ padding: "72px 24px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginBottom: 48 }}>
            <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.1em" }}>04 / 05</span>
            <h2 style={{ ...serif, fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, color: "#F0F0F0", letterSpacing: "-0.025em", lineHeight: 1 }}>
              Key Risks
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              {
                n: "01",
                title: "Currency risk — Yen volatility",
                points: [
                  "Sony earns most revenue in USD and EUR but reports in Yen — a stronger Yen directly reduces reported profits",
                  "A 10% Yen appreciation can effectively wipe out a full year of margin expansion",
                  "Partially hedged, but significant exposure remains outside management's control",
                ],
              },
              {
                n: "02",
                title: "Gaming competition and console cycle timing",
                points: [
                  "Microsoft (Xbox + Game Pass) and Nintendo are well-funded competitors with loyal user bases",
                  "A delayed or poorly received PlayStation 6 launch could shift sentiment sharply",
                  "Mobile gaming continues taking share from consoles among younger demographics — a structural headwind",
                ],
              },
              {
                n: "03",
                title: "Image sensor customer concentration",
                points: [
                  "A large share of semiconductor revenue depends on Apple continuing to source sensors from Sony",
                  "Apple has been gradually developing in-house camera technology — a potential long-term threat",
                  "Samsung and Chinese competitors are investing heavily in CMOS R&D, increasing pricing pressure",
                ],
              },
            ].map((item) => (
              <div key={item.n} style={{ borderTop: "1px solid var(--border)", padding: "36px 0" }}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 20 }}>
                  <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", paddingTop: 4, flexShrink: 0 }}>{item.n}</span>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#F0F0F0", letterSpacing: "-0.02em", lineHeight: 1.3 }}>{item.title}</h3>
                </div>
                <div style={{ paddingLeft: 31 }}>
                  {item.points.map((pt, i) => (
                    <div key={i} style={{ display: "flex", gap: 16, padding: "12px 0", borderTop: "1px solid var(--border)" }}>
                      <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", flexShrink: 0, paddingTop: 3 }}>—</span>
                      <span style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.7 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 28 }}>
              <p style={{ ...serif, fontSize: 22, color: "var(--text-2)", fontStyle: "italic", lineHeight: 1.5 }}>
                None of these risks are fatal individually — together, they suggest a measured position size rather than a concentrated bet.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5 / 5  Recommendation ── */}
        <section style={{ padding: "72px 24px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginBottom: 48 }}>
            <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.1em" }}>05 / 05</span>
            <h2 style={{ ...serif, fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, color: "#F0F0F0", letterSpacing: "-0.025em", lineHeight: 1 }}>
              Recommendation
            </h2>
          </div>

          {/* Big BUY */}
          <div style={{
            padding: "48px",
            background: "rgba(200,16,46,0.07)",
            border: "1px solid rgba(200,16,46,0.2)",
            borderRadius: 2,
            marginBottom: 48,
          }}>
            <div style={{ ...mono, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C8102E", marginBottom: 12 }}>
              Final recommendation
            </div>
            <div style={{ ...serif, fontSize: "clamp(64px, 12vw, 120px)", fontWeight: 400, color: "#C8102E", lineHeight: 0.9, letterSpacing: "-0.04em", marginBottom: 16 }}>
              BUY
            </div>
            <div style={{ ...mono, fontSize: 13, color: "var(--text-3)", letterSpacing: "0.04em" }}>
              Sony Group Corporation · TYO: 6758 · 12-month horizon
            </div>
          </div>

          {/* Valuation */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C8A84B", marginBottom: 20 }}>
              Valuation check
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)", marginBottom: 20 }}>
              {[
                { label: "Sony P/E", value: "~17x" },
                { label: "S&P 500 avg", value: "~21x" },
                { label: "Consumer tech peers", value: "~22x" },
              ].map((item) => (
                <div key={item.label} style={{ background: "var(--bg-raised)", padding: "24px 20px" }}>
                  <div style={{ ...mono, fontSize: 11, color: "var(--text-3)", marginBottom: 8, letterSpacing: "0.04em" }}>{item.label}</div>
                  <div style={{ ...mono, fontSize: 28, fontWeight: 700, color: "#F0F0F0", letterSpacing: "-0.02em" }}>{item.value}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 17, color: "#C8A84B", lineHeight: 1.6, fontWeight: 600 }}>
              Sony trades at a ~20% discount to peers despite having three independent growth engines running simultaneously.
            </p>
          </div>

          {/* Summary bullets */}
          <div>
            <div style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C8A84B", marginBottom: 16 }}>
              Summary
            </div>
            {[
              "Revenue growing ~7–8% per year with margins expanding as digital services take a larger share of the mix",
              "Three distinct revenue streams mean no single product cycle can derail the entire business",
              "P/E of ~17x appears undemanding relative to peers and to Sony's improving business quality",
              "Risks are real but manageable and appear partially priced in at current levels",
            ].map((pt, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: "14px 0", borderTop: "1px solid var(--border)" }}>
                <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", flexShrink: 0, paddingTop: 3 }}>—</span>
                <span style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.7 }}>{pt}</span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </section>

        {/* ── WHAT MADE THIS GOOD ── */}
        <section style={{ padding: "64px 24px" }}>
          <div style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 24 }}>
            What made this a good pitch
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { n: "01", point: "Clear thesis in one sentence — three separate growth engines, trading at a discount" },
              { n: "02", point: "Simple valuation — P/E comparison only, no DCF needed" },
              { n: "03", point: "Honest about risks — covered currency, competition, and concentration" },
              { n: "04", point: "Uses real numbers — ¥17T market cap, 110M PS users, 50% sensor share, etc." },
              { n: "05", point: "Short and direct — no filler, no jargon, 5 slides" },
            ].map((item) => (
              <div key={item.n} style={{ display: "flex", gap: 20, padding: "16px 0", borderTop: "1px solid var(--border)", alignItems: "flex-start" }}>
                <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", flexShrink: 0, paddingTop: 3 }}>{item.n}</span>
                <span style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.65 }}>{item.point}</span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>

          <div style={{ marginTop: 48, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/" className="btn-primary" style={{ fontSize: 14, padding: "14px 28px" }}>
              Enter the competition <ArrowRight size={14} />
            </Link>
            <Link href="/faq" className="btn-secondary" style={{ fontSize: 14, padding: "14px 24px" }}>
              Read the FAQ
            </Link>
          </div>

          <p style={{ marginTop: 32, ...mono, fontSize: 11, color: "var(--text-3)" }}>
            Tokyo Finance Challenge · Sample Submission · For educational purposes only. Not financial advice.
          </p>
        </section>
      </div>

    </div>
  );
}
