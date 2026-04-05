"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { competitions, pastResults, typeLabel, formatDate } from "@/lib/data";

const mono: React.CSSProperties = { fontFamily: "var(--font-mono)" };
const serif: React.CSSProperties = { fontFamily: "var(--font-serif)" };

const SectionLabel = ({ num, text }: { num: string; text: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
    <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.1em" }}>{num} /</span>
    <span style={{ ...mono, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{text}</span>
    <div style={{ flex: 1, height: 1, background: "var(--border)", maxWidth: 80 }} />
  </div>
);

const medals = ["🥇", "🥈", "🥉"];

export default function ArchivePage() {
  const current = competitions.filter(c => c.status === "open" || c.status === "active");
  const upcoming = competitions.filter(c => c.status === "upcoming");

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "100px 24px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ ...mono, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 28 }}>
            Archive
          </div>
          <h1 style={{
            ...serif,
            fontSize: "clamp(48px, 9vw, 100px)",
            fontWeight: 400,
            color: "#F2F2F2",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}>
            All competitions.
          </h1>
        </div>

        {/* ── NOW OPEN ── */}
        {current.length > 0 && (
          <section style={{ marginBottom: 72 }}>
            <SectionLabel num="01" text="Now Open" />
            {current.map(c => (
              <div key={c.slug} style={{
                border: "1px solid var(--border)",
                borderRadius: 2,
                background: "var(--bg-raised)",
                overflow: "hidden",
              }}>
                {/* Top bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 28px", borderBottom: "1px solid var(--border)" }}>
                  <span className="pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
                  <span style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C8102E" }}>
                    Open for Registration
                  </span>
                </div>
                <div style={{ padding: "36px 28px" }}>
                  <div style={{ ...mono, fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
                    {typeLabel(c.type)}
                  </div>
                  <h2 style={{
                    ...serif,
                    fontSize: "clamp(24px, 4vw, 44px)",
                    fontWeight: 400,
                    color: "#F2F2F2",
                    letterSpacing: "-0.025em",
                    marginBottom: 16,
                  }}>
                    {c.title}
                  </h2>
                  <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.8, maxWidth: 560, marginBottom: 32 }}>
                    {c.description}
                  </p>

                  {/* Dates grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 0, marginBottom: 32, borderTop: "1px solid var(--border)" }}>
                    {[
                      { l: "Reg. closes", v: formatDate(c.registrationClose) },
                      { l: "Submission", v: formatDate(c.submissionDeadline) },
                      { l: "Results", v: formatDate(c.resultsDate) },
                      { l: "Registered", v: `${c.participantCount} students` },
                    ].map((item, i) => (
                      <div key={item.l} style={{ padding: "20px 0 20px", paddingRight: 24, borderRight: i < 3 ? "1px solid var(--border)" : "none", paddingLeft: i > 0 ? 24 : 0 }}>
                        <div style={{ ...mono, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 8 }}>{item.l}</div>
                        <div style={{ ...mono, fontSize: 14, fontWeight: 700, color: "#F2F2F2" }}>{item.v}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <a href={c.registerUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 14, padding: "12px 24px" }}>
                      Register Free <ArrowRight size={14} />
                    </a>
                    <Link href={`/competitions/${c.slug}`} className="btn-secondary" style={{ fontSize: 14, padding: "12px 20px" }}>
                      Full details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* ── UPCOMING ── */}
        {upcoming.length > 0 && (
          <section style={{ marginBottom: 72, borderTop: "1px solid var(--border)", paddingTop: 72 }}>
            <SectionLabel num="02" text="Upcoming" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 1, background: "var(--border)" }}>
              {upcoming.map(c => (
                <div key={c.slug} style={{ background: "var(--bg-raised)", padding: "32px 28px" }}>
                  <div style={{ ...mono, fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
                    {typeLabel(c.type)}
                  </div>
                  <div style={{ fontWeight: 700, color: "#F2F2F2", fontSize: 18, marginBottom: 12, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    {c.title}
                  </div>
                  <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 20 }}>{c.description}</p>
                  <div style={{ ...mono, fontSize: 11, color: "var(--text-3)", marginBottom: 16 }}>
                    Opens {formatDate(c.registrationOpen)}
                  </div>
                  <Link href={`/competitions/${c.slug}`} style={{ ...mono, fontSize: 12, color: "var(--text-2)", textDecoration: "none", letterSpacing: "0.04em" }}>
                    Details →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── PAST RESULTS ── */}
        <section style={{ borderTop: "1px solid var(--border)", paddingTop: 72 }}>
          <SectionLabel num="03" text="Past Results" />

          {pastResults.length === 0 ? (
            <p style={{ fontSize: 17, color: "var(--text-2)" }}>No results published yet.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {pastResults.map(r => (
                <div key={r.slug} style={{ border: "1px solid var(--border)", borderRadius: 2, overflow: "hidden" }}>
                  {/* Header */}
                  <div style={{
                    padding: "20px 28px",
                    borderBottom: "1px solid var(--border)",
                    background: "var(--bg-raised)",
                    display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
                  }}>
                    <div>
                      <div style={{ ...mono, fontSize: 10, color: "var(--text-3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
                        {typeLabel(r.type)} · {formatDate(r.date)}
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 700, color: "#F2F2F2", letterSpacing: "-0.02em" }}>{r.competition}</div>
                    </div>
                    <div style={{
                      ...mono, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase",
                      padding: "4px 10px", border: "1px solid var(--border)", borderRadius: 2, color: "var(--text-3)",
                    }}>
                      Completed
                    </div>
                  </div>
                  {/* Winners */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", background: "var(--border)", gap: 1 }}>
                    {r.winners.map((w, i) => (
                      <div key={w.rank} style={{ background: "var(--bg)", padding: "28px 24px" }}>
                        <div style={{ fontSize: 24, marginBottom: 12 }}>{medals[i]}</div>
                        <div style={{ fontWeight: 700, color: "#F2F2F2", fontSize: 16, marginBottom: 4, letterSpacing: "-0.01em" }}>{w.team}</div>
                        <div style={{ ...mono, fontSize: 11, color: "var(--text-3)", marginBottom: 0 }}>{w.school}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
