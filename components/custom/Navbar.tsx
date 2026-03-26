"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { competitions } from "@/lib/data";

const links = [
  { href: "/", label: "Competition" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const current = competitions.find(c => c.status === "open" || c.status === "active");

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(12,12,12,0.92)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 58 }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 28, borderRadius: 3,
            background: "#F0F0F0",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 10, fontWeight: 900, color: "#0C0C0C", letterSpacing: "0.04em", fontFamily: "var(--font-mono)" }}>IFC</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#F0F0F0", letterSpacing: "-0.02em" }}>International Finance Challenge</span>
        </Link>

        {/* Desktop */}
        <div className="nav-desktop" style={{ alignItems: "center", gap: 32 }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: isActive(l.href) ? "#F0F0F0" : "#555",
              fontSize: 13, fontWeight: 500, textDecoration: "none",
              transition: "color 0.15s",
              letterSpacing: "0.01em",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#F0F0F0"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = isActive(l.href) ? "#F0F0F0" : "#555"; }}
            >
              {l.label}
            </Link>
          ))}
          {current && (
            <a href={current.registerUrl} target="_blank" rel="noopener noreferrer"
              style={{
                padding: "6px 16px", fontSize: 12, fontWeight: 600,
                background: "#C8102E", color: "#fff", textDecoration: "none",
                borderRadius: 3, letterSpacing: "0.02em", transition: "opacity 0.15s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              Register Free
            </a>
          )}
        </div>

        {/* Mobile */}
        <button className="nav-mobile" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#555", cursor: "pointer" }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div style={{ borderTop: "1px solid var(--border)", background: "#0C0C0C", padding: "16px 24px 20px", display: "flex", flexDirection: "column", gap: 0 }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              color: "#666", fontSize: 15, textDecoration: "none", padding: "12px 0",
              borderBottom: "1px solid var(--border)",
            }}>
              {l.label}
            </Link>
          ))}
          {current && (
            <a href={current.registerUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
              style={{
                marginTop: 16, padding: "12px 0", textAlign: "center",
                background: "#C8102E", color: "#fff", textDecoration: "none",
                borderRadius: 3, fontSize: 14, fontWeight: 600,
              }}>
              Register Free
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
