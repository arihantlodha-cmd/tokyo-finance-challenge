"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "#0C0C0C", padding: "48px 24px 36px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="grid-footer">

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 30, height: 26, borderRadius: 3,
                background: "#F0F0F0",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 10, fontWeight: 900, color: "#0C0C0C", letterSpacing: "0.04em", fontFamily: "var(--font-mono)" }}>IFC</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#F0F0F0" }}>International Finance Challenge</span>
            </div>
            <p style={{ color: "var(--text-3)", fontSize: 13, lineHeight: 1.75, maxWidth: 280 }}>
              Monthly finance competitions for high school students. Free to enter, judged by finance professionals.
            </p>
            <a href="mailto:arihant97@smis.ac.jp"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, color: "var(--text-3)", fontSize: 12, textDecoration: "none", fontFamily: "var(--font-mono)", transition: "color 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#888"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-3)"; }}
            >
              <Mail size={11} /> arihant97@smis.ac.jp
            </a>
          </div>

          <div>
            <p style={{ color: "var(--text-3)", fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20, fontFamily: "var(--font-mono)" }}>Navigate</p>
            {[["Competition", "/"], ["Archive", "/archive"], ["About", "/about"], ["FAQ", "/faq"]].map(([label, href]) => (
              <Link key={label} href={href}
                style={{ display: "block", color: "var(--text-3)", fontSize: 13, textDecoration: "none", marginBottom: 10, transition: "color 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#888"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-3)"; }}
              >
                {label}
              </Link>
            ))}
          </div>

          <div>
            <p style={{ color: "var(--text-3)", fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20, fontFamily: "var(--font-mono)" }}>Contact</p>
            <p style={{ color: "var(--text-3)", fontSize: 13, lineHeight: 1.65, marginBottom: 12 }}>
              Questions? We reply within 24 hours.
            </p>
            <a href="mailto:arihant97@smis.ac.jp"
              style={{ color: "var(--text-3)", fontSize: 12, textDecoration: "none", fontFamily: "var(--font-mono)", transition: "color 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#888"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-3)"; }}
            >
              arihant97@smis.ac.jp
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <p style={{ color: "var(--text-3)", fontSize: 11, fontFamily: "var(--font-mono)" }}>© 2026 International Finance Challenge.</p>
          <p style={{ color: "var(--text-3)", fontSize: 11, fontFamily: "var(--font-mono)" }}>Monthly competitions for high school students.</p>
        </div>
      </div>
    </footer>
  );
}
