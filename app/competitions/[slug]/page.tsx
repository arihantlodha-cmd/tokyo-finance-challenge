import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { competitions, getCompetition, typeLabel, formatDate } from "@/lib/data";
import CountdownTimer from "@/components/custom/CountdownTimer";

export async function generateStaticParams() {
  return competitions.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompetition(slug);
  if (!c) return {};
  return { title: `${c.title} | Tokyo Finance Challenge`, description: c.description };
}

const S = {
  label: { fontSize: 11, fontWeight: 600 as const, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: "#aaa" },
  h2: { fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700 as const, color: "#000", letterSpacing: "-0.02em" },
  divider: { border: "none" as const, borderTop: "1px solid rgba(0,0,0,0.07)" as const, margin: 0 },
};

export default async function CompetitionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCompetition(slug);
  if (!c) notFound();

  const isOpen = c.status === "open" || c.status === "active";
  const spotsLeft = c.maxParticipants - c.participantCount;

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 24px" }}>
        <Link href="/archive" style={{ color: "#bbb", fontSize: 13, textDecoration: "none", display: "inline-block", marginBottom: 36 }}>
          ← Archive
        </Link>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            <span className="tag">{typeLabel(c.type)}</span>
            <span className="tag" style={{ color: isOpen ? "#555" : "#ccc" }}>
              {isOpen ? "Open" : c.status === "upcoming" ? "Upcoming" : "Completed"}
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 800, color: "#000", letterSpacing: "-0.03em", marginBottom: 20 }}>
            {c.title}
          </h1>
          <p style={{ color: "#999", fontSize: 16, lineHeight: 1.7, maxWidth: 580 }}>{c.description}</p>

          {isOpen && (
            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={c.registerUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Register Now <ArrowRight size={15} />
              </a>
            </div>
          )}
        </div>

        <hr style={S.divider} />

        {/* Countdown + dates */}
        <div style={{ padding: "48px 0", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "16px 32px" }}>
            {[
              { l: "Registration Open", v: formatDate(c.registrationOpen) },
              { l: "Registration Closes", v: formatDate(c.registrationClose) },
              { l: "Submission Deadline", v: formatDate(c.submissionDeadline) },
              { l: "Results Date", v: formatDate(c.resultsDate) },
            ].map(item => (
              <div key={item.l}>
                <div style={S.label}>{item.l}</div>
                <div style={{ color: "#777", fontSize: 13, marginTop: 4 }}>{item.v}</div>
              </div>
            ))}
          </div>
          {isOpen && <CountdownTimer deadline={c.submissionDeadline + "T23:59:59"} />}
        </div>

        <hr style={S.divider} />

        {/* Content + sidebar */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 56, alignItems: "start", padding: "56px 0" }}>
          <div>
            <h2 style={{ ...S.h2, marginBottom: 24 }}>About this competition</h2>
            {c.longDescription.split("\n\n").map((para, i) => (
              <p key={i} style={{ color: "#999", fontSize: 14, lineHeight: 1.8, marginBottom: 18 }}>{para.trim()}</p>
            ))}

            <h3 style={{ color: "#000", fontSize: 17, fontWeight: 700, marginTop: 40, marginBottom: 18, letterSpacing: "-0.01em" }}>Rules</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {c.rules.map((rule, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <Check size={13} style={{ color: "#bbb", marginTop: 3, flexShrink: 0 }} />
                  <span style={{ color: "#aaa", fontSize: 13, lineHeight: 1.65 }}>{rule}</span>
                </div>
              ))}
            </div>

            {c.faqs.length > 0 && (
              <>
                <h3 style={{ color: "#000", fontSize: 17, fontWeight: 700, marginTop: 40, marginBottom: 18, letterSpacing: "-0.01em" }}>FAQ</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid rgba(0,0,0,0.07)", borderRadius: 8, overflow: "hidden" }}>
                  {c.faqs.map((faq, i) => (
                    <div key={i} style={{ padding: "18px 20px", borderBottom: i < c.faqs.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none", background: "#f7f7f7" }}>
                      <div style={{ color: "#333", fontWeight: 600, fontSize: 13, marginBottom: 6 }}>{faq.q}</div>
                      <p style={{ color: "#aaa", fontSize: 13, lineHeight: 1.65 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div>
            {/* Prizes */}
            <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 8, overflow: "hidden", marginBottom: 12 }}>
              <div style={{ padding: "14px 16px", background: "#f5f5f5", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={S.label}>Prizes</div>
              </div>
              {[
                { p: "1st Place", v: c.prizes.first },
                { p: "2nd Place", v: c.prizes.second },
                { p: "3rd Place", v: c.prizes.third },
              ].map((p, i) => (
                <div key={p.p} style={{ padding: "14px 16px", background: "#f9f9f9", borderBottom: i < 2 ? "1px solid rgba(0,0,0,0.05)" : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#aaa", fontSize: 13 }}>{p.p}</span>
                  <span style={{ color: "#555", fontWeight: 700, fontSize: 15 }}>{p.v}</span>
                </div>
              ))}
            </div>

            {/* Judging */}
            <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 8, overflow: "hidden", marginBottom: 12 }}>
              <div style={{ padding: "14px 16px", background: "#f5f5f5", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={S.label}>Judging Criteria</div>
              </div>
              {c.judgingCriteria.map((j, i) => (
                <div key={j.label} style={{ padding: "12px 16px", background: "#f9f9f9", borderBottom: i < c.judgingCriteria.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ color: "#999", fontSize: 13 }}>{j.label}</span>
                    <span style={{ color: "#777", fontSize: 13, fontWeight: 700 }}>{j.weight}</span>
                  </div>
                  <div style={{ height: 2, background: "rgba(0,0,0,0.05)", borderRadius: 1 }}>
                    <div style={{ height: "100%", width: j.weight, background: "#ccc", borderRadius: 1 }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Spots */}
            {isOpen && (
              <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 8, padding: "16px", background: "#f9f9f9", marginBottom: 12 }}>
                <div style={S.label}>Available Spots</div>
                <div style={{ color: "#777", fontSize: 13, marginTop: 6, marginBottom: 8 }}>{spotsLeft} of {c.maxParticipants} remaining</div>
                <div style={{ height: 3, background: "rgba(0,0,0,0.05)", borderRadius: 2 }}>
                  <div style={{ height: "100%", width: `${(c.participantCount / c.maxParticipants) * 100}%`, background: "#000", borderRadius: 2, transition: "width 0.3s" }} />
                </div>
              </div>
            )}

            {isOpen && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a href={c.registerUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: "center" }}>
                  Register — Free
                </a>
              </div>
            )}

            <div style={{ marginTop: 16, padding: "12px 0", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
              <a href="mailto:arihant97@smis.ac.jp" style={{ color: "#bbb", fontSize: 12, textDecoration: "none" }}>
                Questions? arihant97@smis.ac.jp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
