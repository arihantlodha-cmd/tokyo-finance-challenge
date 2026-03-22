"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { competitions } from "@/lib/data";
import ThemeToggle from "@/components/custom/ThemeToggle";

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
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(0,0,0,0.08)",
    }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 28, borderRadius: 6, background: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px" }}>
            <span style={{ fontSize: 11, fontWeight: 900, color: "#fff", letterSpacing: "0.02em" }}>TFC</span>
          </div>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#000", letterSpacing: "-0.02em" }}>Tokyo Finance Challenge</span>
        </Link>

        {/* Desktop */}
        <div className="nav-desktop" style={{ alignItems: "center", gap: 32 }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: isActive(l.href) ? "#000" : "#999",
              fontSize: 14, fontWeight: 500, textDecoration: "none",
              transition: "color 0.15s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#000"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = isActive(l.href) ? "#000" : "#999"; }}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          {current && (
            <a href={current.registerUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "7px 18px", fontSize: 13 }}>
              Register Now
            </a>
          )}
        </div>

        {/* Mobile */}
        <button className="nav-mobile" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#999", cursor: "pointer" }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", background: "#fff", padding: "16px 24px 20px", display: "flex", flexDirection: "column", gap: 0 }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              color: "#777", fontSize: 15, textDecoration: "none", padding: "12px 0",
              borderBottom: "1px solid rgba(0,0,0,0.05)",
            }}>
              {l.label}
            </Link>
          ))}
          {current && (
            <a href={current.registerUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-primary" style={{ marginTop: 16, justifyContent: "center" }}>
              Register Now — Free
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
