"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(0,0,0,0.08)", background: "#fff", padding: "40px 24px 32px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 40 }}>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 30, height: 26, borderRadius: 5, background: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px" }}>
                <span style={{ fontSize: 10, fontWeight: 900, color: "#fff", letterSpacing: "0.02em" }}>TFC</span>
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#000" }}>Tokyo Finance Challenge</span>
            </div>
            <p style={{ color: "#bbb", fontSize: 13, lineHeight: 1.7, maxWidth: 280 }}>
              Monthly finance competitions for high school students. Free to enter, real prizes.
            </p>
            <a href="mailto:arihant97@smis.ac.jp" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, color: "#aaa", fontSize: 13, textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#777"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#aaa"; }}
            >
              <Mail size={12} /> arihant97@smis.ac.jp
            </a>
          </div>

          <div>
            <p style={{ color: "#ccc", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Navigate</p>
            {[["Competition", "/"], ["Archive", "/archive"], ["About", "/about"], ["FAQ", "/faq"]].map(([label, href]) => (
              <Link key={label} href={href} style={{ display: "block", color: "#bbb", fontSize: 13, textDecoration: "none", marginBottom: 10 }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#777"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#bbb"; }}
              >
                {label}
              </Link>
            ))}
          </div>

          <div>
            <p style={{ color: "#ccc", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Contact</p>
            <p style={{ color: "#bbb", fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>
              Questions? Email us and we&apos;ll reply within 24 hours.
            </p>
            <a href="mailto:arihant97@smis.ac.jp" style={{ color: "#999", fontSize: 13, textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#555"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#999"; }}
            >
              arihant97@smis.ac.jp
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <p style={{ color: "#ccc", fontSize: 12 }}>© 2026 Tokyo Finance Challenge. All rights reserved.</p>
          <p style={{ color: "#ddd", fontSize: 12 }}>Monthly finance competitions for high school students.</p>
        </div>
      </div>
    </footer>
  );
}
