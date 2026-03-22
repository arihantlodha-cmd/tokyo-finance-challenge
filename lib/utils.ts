import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function formatDateTime(date: string) {
  return new Date(date).toLocaleString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

export function getDaysLeft(deadline: string) {
  const diff = new Date(deadline).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function statusColor(status: string) {
  switch (status) {
    case "upcoming":  return "bg-blue-500/20 text-blue-300 border border-blue-500/30";
    case "active":    return "bg-green-500/20 text-green-300 border border-green-500/30";
    case "judging":   return "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30";
    case "completed": return "bg-slate-500/20 text-slate-300 border border-slate-500/30";
    default: return "bg-slate-500/20 text-slate-300";
  }
}

export function typeLabel(type: string) {
  switch (type) {
    case "stock_pitch":       return "Stock Pitch";
    case "econ_quiz":         return "Economics Quiz";
    case "case_competition":  return "Case Competition";
    default: return type;
  }
}
