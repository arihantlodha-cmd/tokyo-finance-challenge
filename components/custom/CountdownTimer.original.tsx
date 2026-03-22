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
    <span style={{ color: "#aaa", fontSize: 13 }}>Deadline passed</span>
  );

  const urgent = days < 1;

  const unit = (val: number, label: string) => (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 32, fontWeight: 800, color: urgent ? "#222" : "#000", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.04em", lineHeight: 1 }}>
        {pad(val)}
      </div>
      <div style={{ fontSize: 10, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{label}</div>
    </div>
  );

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
      {unit(days, "days")}
      <span style={{ color: "#ccc", fontSize: 28, marginTop: 2, lineHeight: 1, fontWeight: 300 }}>:</span>
      {unit(hours, "hrs")}
      <span style={{ color: "#ccc", fontSize: 28, marginTop: 2, lineHeight: 1, fontWeight: 300 }}>:</span>
      {unit(minutes, "min")}
      <span style={{ color: "#ccc", fontSize: 28, marginTop: 2, lineHeight: 1, fontWeight: 300 }}>:</span>
      {unit(seconds, "sec")}
    </div>
  );
}
