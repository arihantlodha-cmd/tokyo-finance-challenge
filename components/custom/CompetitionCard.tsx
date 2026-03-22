"use client";

import Link from "next/link";
import { Calendar, Users, Trophy, ArrowRight } from "lucide-react";
import type { Competition } from "@/lib/types";
import { formatDate, getDaysLeft, statusColor, typeLabel } from "@/lib/utils";

export default function CompetitionCard({ competition, participantCount = 0 }: {
  competition: Competition;
  participantCount?: number;
}) {
  const daysLeft = getDaysLeft(competition.submission_deadline);

  return (
    <Link href={`/competitions/${competition.id}`} style={{ textDecoration: "none" }}>
      <div style={{
        background: "rgba(0,0,0,0.04)",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 16,
        padding: 24,
        cursor: "pointer",
        transition: "all 0.2s",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "rgba(0,0,0,0.07)";
          e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(99,102,241,0.15)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "rgba(0,0,0,0.04)";
          e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#8b5cf6", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {typeLabel(competition.type)}
            </span>
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 17, marginTop: 4, lineHeight: 1.3 }}>
              {competition.title}
            </h3>
          </div>
          <span style={{ fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 9999, flexShrink: 0 }}
            className={statusColor(competition.status)}>
            {competition.status.charAt(0).toUpperCase() + competition.status.slice(1)}
          </span>
        </div>

        {/* Description */}
        <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.65, flex: 1 }}>
          {competition.description.slice(0, 120)}{competition.description.length > 120 ? "…" : ""}
        </p>

        {/* Prize */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(99,102,241,0.1)", borderRadius: 8, padding: "8px 12px" }}>
          <Trophy size={13} style={{ color: "#a78bfa" }} />
          <span style={{ color: "#a78bfa", fontSize: 13, fontWeight: 600 }}>1st: {competition.prize_1st}</span>
        </div>

        {/* Meta */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#64748b", fontSize: 12 }}>
              <Calendar size={11} />
              {daysLeft > 0 ? `${daysLeft}d left` : "Closed"}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#64748b", fontSize: 12 }}>
              <Users size={11} />
              {participantCount}/{competition.max_participants}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#6366f1", fontSize: 12, fontWeight: 600 }}>
            View details <ArrowRight size={11} />
          </div>
        </div>
      </div>
    </Link>
  );
}
