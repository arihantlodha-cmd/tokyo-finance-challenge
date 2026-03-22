"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: "none",
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 6,
        cursor: "pointer",
        padding: "5px 10px",
        fontSize: 13,
        color: "#888",
        display: "flex",
        alignItems: "center",
        gap: 5,
        transition: "all 0.15s",
      }}
    >
      {dark ? "☀ Light" : "◑ Dark"}
    </button>
  );
}
