"use client";

import type { Result } from "@/lib/types";

const medals = ["🥇", "🥈", "🥉"];

export default function LeaderboardTable({ results }: { results: Result[] }) {
  if (!results.length) {
    return (
      <div style={{ textAlign: "center", padding: "48px 24px", color: "#475569" }}>
        Results not yet published.
      </div>
    );
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
            {["Rank", "Participant / Team", "School", "Score", "Prize"].map(h => (
              <th key={h} style={{ padding: "12px 16px", color: "#64748b", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "left" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => {
            const isTop3 = r.rank <= 3;
            return (
              <tr key={r.id} style={{
                borderBottom: "1px solid rgba(0,0,0,0.05)",
                background: isTop3 ? "rgba(99,102,241,0.05)" : "transparent",
                transition: "background 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.03)")}
                onMouseLeave={e => (e.currentTarget.style.background = isTop3 ? "rgba(99,102,241,0.05)" : "transparent")}
              >
                <td style={{ padding: "14px 16px" }}>
                  <span style={{ fontSize: 18 }}>{medals[i] ?? ""}</span>
                  <span style={{ color: isTop3 ? "#a78bfa" : "#64748b", fontWeight: 700, marginLeft: 6, fontSize: 15 }}>
                    #{r.rank}
                  </span>
                </td>
                <td style={{ padding: "14px 16px", color: "#f1f5f9", fontWeight: 600, fontSize: 15 }}>
                  {r.registration?.team_name || r.registration?.participant_name || "—"}
                </td>
                <td style={{ padding: "14px 16px", color: "#94a3b8", fontSize: 14 }}>
                  {r.registration?.school || "—"}
                </td>
                <td style={{ padding: "14px 16px", color: "#f1f5f9", fontWeight: 700, fontSize: 15 }}>
                  {r.score ?? "—"}
                </td>
                <td style={{ padding: "14px 16px" }}>
                  {r.prize ? (
                    <span style={{ fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 9999, background: "rgba(99,102,241,0.2)", color: "#a78bfa", border: "1px solid rgba(99,102,241,0.3)" }}>
                      {r.prize}
                    </span>
                  ) : "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
