"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { competitions, pastResults, typeLabel, formatDate } from "@/lib/data";

const S = {
  label: { fontSize: 11, fontWeight: 600 as const, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: "#aaa" },
  divider: { border: "none" as const, borderTop: "1px solid rgba(0,0,0,0.07)" as const, margin: 0 },
};

const statusMap = {
  open:      { label: "Open for Registration", color: "#000" },
  active:    { label: "Active",                color: "#000" },
  upcoming:  { label: "Upcoming",              color: "#aaa" },
  completed: { label: "Completed",             color: "#bbb" },
};

export default function ArchivePage() {
  const current = competitions.filter(c => c.status === "open" || c.status === "active");
  const upcoming = competitions.filter(c => c.status === "upcoming");
  const medals = ["🥇", "🥈", "🥉"];

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "64px 24px" }}>

        <div style={{ marginBottom: 56 }}>
          <div style={S.label}>Archive</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 800, color: "#000", marginTop: 16, letterSpacing: "-0.03em" }}>
            All Competitions
          </h1>
        </div>

        {/* Current */}
        {current.length > 0 && (
          <div style={{ marginBottom: 56 }}>
            <div style={{ ...S.label, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#000", display: "inline-block" }} />
              Now Open
            </div>
            {current.map(c => (
              <div key={c.slug} style={{ border: "1px solid rgba(0,0,0,0.12)", borderRadius: 10, padding: "32px", background: "#f7f7f7", marginBottom: 12 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }}>
                  <div>
                    <div style={{ ...S.label, marginBottom: 10 }}>{typeLabel(c.type)}</div>
                    <h2 style={{ fontSize: 22, fontWeight: 700, color: "#000", marginBottom: 8, letterSpacing: "-0.02em" }}>{c.title}</h2>
                    <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.65, marginBottom: 20, maxWidth: 520 }}>{c.description}</p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)", gap: "0 32px", marginBottom: 24 }}>
                      {[
                        { l: "Reg closes", v: formatDate(c.registrationClose) },
                        { l: "Deadline", v: formatDate(c.submissionDeadline) },
                        { l: "Results", v: formatDate(c.resultsDate) },
                        { l: "Registered", v: `${c.participantCount} / ${c.maxParticipants}` },
                      ].map(item => (
                        <div key={item.l}>
                          <div style={{ ...S.label, marginBottom: 4 }}>{item.l}</div>
                          <div style={{ color: "#888", fontSize: 13 }}>{item.v}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: 10 }}>
                      <a href={c.registerUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "9px 20px", fontSize: 13 }}>
                        Register Now <ArrowRight size={13} />
                      </a>
                      <Link href={`/competitions/${c.slug}`} className="btn-secondary" style={{ padding: "9px 18px", fontSize: 13 }}>
                        Full details
                      </Link>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 100 }}>
                    {[
                      { p: "1st", v: c.prizes.first },
                      { p: "2nd", v: c.prizes.second },
                      { p: "3rd", v: c.prizes.third },
                    ].map(p => (
                      <div key={p.p} style={{ textAlign: "right", padding: "6px 0" }}>
                        <div style={{ ...S.label }}>{p.p}</div>
                        <div style={{ color: "#777", fontWeight: 700, fontSize: 16 }}>{p.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <hr style={S.divider} />

        {/* Upcoming */}
        {upcoming.length > 0 && (
          <div style={{ marginTop: 48, marginBottom: 56 }}>
            <div style={{ ...S.label, marginBottom: 20 }}>Upcoming</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 1, border: "1px solid rgba(0,0,0,0.08)", borderRadius: 10, overflow: "hidden" }}>
              {upcoming.map((c, i) => (
                <div key={c.slug} style={{
                  padding: "28px 24px",
                  borderRight: i < upcoming.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  background: "#f7f7f7",
                }}>
                  <div style={{ ...S.label, marginBottom: 8 }}>{typeLabel(c.type)}</div>
                  <div style={{ color: "#000", fontWeight: 700, fontSize: 17, marginBottom: 6, letterSpacing: "-0.01em" }}>{c.title}</div>
                  <p style={{ color: "#aaa", fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>{c.description}</p>
                  <div style={{ ...S.label, marginBottom: 4 }}>Registration opens</div>
                  <div style={{ color: "#999", fontSize: 13, marginBottom: 16 }}>{formatDate(c.registrationOpen)}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ color: "#777", fontWeight: 700 }}>{c.prizes.first} <span style={{ color: "#ccc", fontWeight: 400, fontSize: 12 }}>1st prize</span></div>
                    <Link href={`/competitions/${c.slug}`} style={{ color: "#bbb", fontSize: 13, textDecoration: "none" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#777"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#bbb"; }}
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <hr style={S.divider} />

        {/* Past results */}
        <div style={{ marginTop: 48 }}>
          <div style={{ ...S.label, marginBottom: 20 }}>Past Results</div>

          {pastResults.length === 0 ? (
            <p style={{ color: "#bbb", fontSize: 14 }}>No results published yet.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {pastResults.map(r => (
                <div key={r.slug} style={{ border: "1px solid rgba(0,0,0,0.07)", borderRadius: 10, overflow: "hidden" }}>
                  <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(0,0,0,0.07)", background: "#f7f7f7", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ ...S.label, marginBottom: 4 }}>{typeLabel(r.type)} · {formatDate(r.date)}</div>
                      <div style={{ color: "#333", fontWeight: 600, fontSize: 16 }}>{r.competition}</div>
                    </div>
                    <span style={{ ...S.label, padding: "3px 8px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 4, color: "#ccc" }}>Completed</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                    {r.winners.map((w, i) => (
                      <div key={w.rank} style={{
                        padding: "20px 24px",
                        borderRight: i < 2 ? "1px solid rgba(0,0,0,0.07)" : "none",
                        background: "#fbfbfb",
                      }}>
                        <div style={{ marginBottom: 8, fontSize: 20 }}>{medals[i]}</div>
                        <div style={{ color: "#444", fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{w.team}</div>
                        <div style={{ color: "#bbb", fontSize: 12, marginBottom: 6 }}>{w.school}</div>
                        <div style={{ color: "#aaa", fontSize: 12, fontWeight: 600 }}>{w.prize}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
