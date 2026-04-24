"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc7axySi9nBk-w8kpLOLZuwZduDYjuGY_5XJIpZhTlb_gRI9Q/viewform?usp=dialog";

export default function SubmissionPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("popup_dismissed")) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  if (!visible) return null;

  function dismiss() {
    sessionStorage.setItem("popup_dismissed", "1");
    setVisible(false);
  }

  return (
    <div
      onClick={dismiss}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "rgba(0,0,0,0.7)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
        backdropFilter: "blur(3px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#111",
          border: "1px solid #2a2a2a",
          maxWidth: 460,
          width: "100%",
          padding: "40px 36px 36px",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={dismiss}
          style={{
            position: "absolute", top: 16, right: 16,
            background: "none", border: "none", cursor: "pointer",
            color: "#555", padding: 4, display: "flex",
          }}
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Live badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "4px 10px", marginBottom: 24,
          border: "1px solid #2a2a2a",
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: "50%",
            background: "#C8102E", display: "inline-block",
            animation: "pulse 2s infinite",
          }} />
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 10,
            letterSpacing: "0.15em", color: "#666",
            textTransform: "uppercase",
          }}>
            Submissions open · April 2026
          </span>
        </div>

        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 10,
          letterSpacing: "0.12em", color: "#555",
          textTransform: "uppercase", marginBottom: 12,
        }}>
          April 2026 Stock Pitch Challenge
        </div>

        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(28px, 6vw, 38px)",
          fontWeight: 400, color: "#F0F0F0",
          lineHeight: 1.05, letterSpacing: "-0.03em",
          marginBottom: 12,
        }}>
          Submissions are<br />now open.
        </h2>

        <div style={{ width: 36, height: 2, background: "#C8102E", marginBottom: 20 }} />

        <p style={{
          fontSize: 14, color: "#888",
          lineHeight: 1.75, marginBottom: 28,
          fontFamily: "var(--font-mono)",
        }}>
          Registered? Submit your stock pitch PDF before April 30.
          Not registered yet? Sign up — it takes 2 minutes and it&apos;s free.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 20px",
              background: "#C8102E", color: "#fff",
              textDecoration: "none",
              fontFamily: "var(--font-mono)", fontSize: 12,
              letterSpacing: "0.04em", fontWeight: 700,
              border: "1px solid #C8102E",
            }}
          >
            Register Free <ArrowRight size={13} />
          </a>
          <button
            onClick={dismiss}
            style={{
              display: "inline-flex", alignItems: "center",
              padding: "12px 20px",
              background: "none",
              color: "#555",
              fontFamily: "var(--font-mono)", fontSize: 12,
              letterSpacing: "0.04em",
              border: "1px solid #2a2a2a",
              cursor: "pointer",
            }}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
