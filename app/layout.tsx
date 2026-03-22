import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const dmSerif = DM_Serif_Display({ variable: "--font-serif", weight: "400", subsets: ["latin"] });
const spaceMono = Space_Mono({ variable: "--font-mono", weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tokyo Finance Challenge — Monthly Finance Competitions",
  description: "Monthly stock pitch, economics quiz, and case competitions for high school students. Free to enter.",
  openGraph: {
    title: "Tokyo Finance Challenge",
    description: "Monthly finance competitions for high school students. Free.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${dmSerif.variable} ${spaceMono.variable}`}>
      <body style={{ background: "#0C0C0C", color: "#F0F0F0", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
