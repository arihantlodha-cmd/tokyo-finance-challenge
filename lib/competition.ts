import { getSupabase } from "./supabase";
import type { Competition } from "./types";

// Look up competition by slug OR id (backwards compat)
export async function getCompetition(slugOrId: string): Promise<Competition | null> {
  const sb = getSupabase();
  // Try slug first
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: bySlug } = await (sb.from("competitions") as any)
    .select("*").eq("slug", slugOrId).single();
  if (bySlug) return bySlug as Competition;

  // Fall back to id
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: byId } = await (sb.from("competitions") as any)
    .select("*").eq("id", slugOrId).single();
  return (byId as Competition) ?? null;
}

export function competitionPath(c: Competition) {
  return `/competitions/${c.slug ?? c.id}`;
}
