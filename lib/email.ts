import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "Tokyo Finance Challenge <noreply@compedge.app>";

export async function sendRegistrationConfirmation({
  to, name, competitionTitle, submissionDeadline, competitionSlug,
}: {
  to: string; name: string; competitionTitle: string;
  submissionDeadline: string; competitionSlug: string;
}) {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.startsWith("re_placeholder")) return;

  const deadline = new Date(submissionDeadline).toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  await resend.emails.send({
    from: FROM,
    to,
    subject: `You're registered for ${competitionTitle}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0f172a;color:#f1f5f9;padding:32px;border-radius:12px;">
        <h1 style="font-size:24px;font-weight:800;margin-bottom:8px;">You're in, ${name}! 🎉</h1>
        <p style="color:#94a3b8;margin-bottom:24px;">You've successfully registered for <strong style="color:#a78bfa">${competitionTitle}</strong>.</p>
        <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:16px;margin-bottom:24px;">
          <p style="margin:0 0 8px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.06em;">Submission Deadline</p>
          <p style="margin:0;font-weight:700;font-size:16px;color:#f1f5f9;">${deadline}</p>
        </div>
        <p style="color:#94a3b8;font-size:14px;">When the competition opens, visit your submission page to upload your entry before the deadline.</p>
        <a href="https://compedge-competitions.vercel.app/competitions/${competitionSlug}/submit"
          style="display:inline-block;margin-top:20px;padding:12px 24px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;text-decoration:none;border-radius:8px;font-weight:700;font-size:14px;">
          Go to Submission Page →
        </a>
        <p style="color:#475569;font-size:12px;margin-top:32px;">© 2026 Tokyo Finance Challenge · Monthly finance competitions for high school students</p>
      </div>
    `,
  });
}

export async function sendSubmissionConfirmation({
  to, name, competitionTitle, submittedAt,
}: {
  to: string; name: string; competitionTitle: string; submittedAt: string;
}) {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.startsWith("re_placeholder")) return;

  const time = new Date(submittedAt).toLocaleString("en-US", {
    year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit",
  });

  await resend.emails.send({
    from: FROM,
    to,
    subject: `Submission received for ${competitionTitle}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0f172a;color:#f1f5f9;padding:32px;border-radius:12px;">
        <h1 style="font-size:24px;font-weight:800;margin-bottom:8px;">Submission received ✅</h1>
        <p style="color:#94a3b8;margin-bottom:24px;">Hi ${name}, we've received your entry for <strong style="color:#a78bfa">${competitionTitle}</strong>.</p>
        <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:16px;margin-bottom:24px;">
          <p style="margin:0 0 4px;color:#64748b;font-size:12px;text-transform:uppercase;">Submitted at</p>
          <p style="margin:0;font-weight:600;color:#f1f5f9;">${time}</p>
        </div>
        <p style="color:#94a3b8;font-size:14px;">Our judges will review all submissions after the deadline. Results will be announced on the competition page.</p>
        <p style="color:#475569;font-size:12px;margin-top:32px;">© 2026 Tokyo Finance Challenge</p>
      </div>
    `,
  });
}

export async function sendResultsAnnouncement({
  to, name, competitionTitle, rank, prize, leaderboardSlug,
}: {
  to: string; name: string; competitionTitle: string;
  rank: number; prize?: string; leaderboardSlug: string;
}) {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.startsWith("re_placeholder")) return;

  const isWinner = rank <= 3;
  await resend.emails.send({
    from: FROM,
    to,
    subject: `Results are in for ${competitionTitle}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0f172a;color:#f1f5f9;padding:32px;border-radius:12px;">
        <h1 style="font-size:24px;font-weight:800;margin-bottom:8px;">${isWinner ? "🏆 Congratulations!" : "Results are in!"}</h1>
        <p style="color:#94a3b8;margin-bottom:24px;">Hi ${name}, the results for <strong style="color:#a78bfa">${competitionTitle}</strong> have been published.</p>
        <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:16px;margin-bottom:24px;">
          <p style="margin:0 0 4px;color:#64748b;font-size:12px;">Your rank</p>
          <p style="margin:0;font-weight:800;font-size:28px;color:${rank === 1 ? "#fde047" : rank === 2 ? "#cbd5e1" : rank === 3 ? "#fdba74" : "#94a3b8"};">#${rank}</p>
          ${prize ? `<p style="margin:8px 0 0;color:#a78bfa;font-weight:700;">${prize}</p>` : ""}
        </div>
        <a href="https://compedge-competitions.vercel.app/competitions/${leaderboardSlug}/leaderboard"
          style="display:inline-block;padding:12px 24px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;text-decoration:none;border-radius:8px;font-weight:700;font-size:14px;">
          View Full Leaderboard →
        </a>
        <p style="color:#475569;font-size:12px;margin-top:32px;">© 2026 Tokyo Finance Challenge</p>
      </div>
    `,
  });
}
