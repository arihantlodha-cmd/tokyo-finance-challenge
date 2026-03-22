"use client";

import { useEffect, useState } from "react";

function pad(n: number) { return String(n).padStart(2, "0"); }

export default function CountdownTimer({ deadline }: { deadline: string }) {
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    const calc = () => setDiff(Math.max(0, new Date(deadline).getTime() - Date.now()));
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [deadline]);

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (diff === 0) return (
    <span style={{ color: "var(--text-3)", fontSize: 13, fontFamily: "var(--font-mono)" }}>Deadline passed</span>
  );

  const urgent = days < 1;

  const unit = (val: number, label: string) => (
    <div style={{ textAlign: "center" }}>
      <div style={{
        fontSize: 36,
        fontWeight: 700,
        color: urgent ? "#C8102E" : "#F0F0F0",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-0.04em",
        lineHeight: 1,
        fontFamily: "var(--font-mono)",
      }}>
        {pad(val)}
      </div>
      <div style={{ fontSize: 9, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 6, fontFamily: "var(--font-mono)" }}>
        {label}
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
      {unit(days, "days")}
      <span style={{ color: "var(--text-3)", fontSize: 28, marginTop: 2, lineHeight: 1, fontWeight: 300, fontFamily: "var(--font-mono)" }}>:</span>
      {unit(hours, "hrs")}
      <span style={{ color: "var(--text-3)", fontSize: 28, marginTop: 2, lineHeight: 1, fontWeight: 300, fontFamily: "var(--font-mono)" }}>:</span>
      {unit(minutes, "min")}
      <span style={{ color: "var(--text-3)", fontSize: 28, marginTop: 2, lineHeight: 1, fontWeight: 300, fontFamily: "var(--font-mono)" }}>:</span>
      {unit(seconds, "sec")}
    </div>
  );
}
