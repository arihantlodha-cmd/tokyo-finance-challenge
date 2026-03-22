-- CompEdge Competition Platform Schema
-- Run this in Supabase SQL Editor

-- COMPETITIONS
create table if not exists competitions (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  type text not null check (type in ('stock_pitch', 'econ_quiz', 'case_competition')),
  start_date timestamptz not null,
  end_date timestamptz not null,
  submission_deadline timestamptz not null,
  prize_1st text not null,
  prize_2nd text not null,
  prize_3rd text not null,
  max_participants integer not null default 50,
  status text not null default 'upcoming' check (status in ('upcoming', 'active', 'judging', 'completed')),
  rules text not null default '',
  created_at timestamptz default now()
);

-- REGISTRATIONS
create table if not exists registrations (
  id uuid default gen_random_uuid() primary key,
  competition_id uuid references competitions(id) on delete cascade,
  participant_name text not null,
  participant_email text not null,
  school text not null,
  grade text not null,
  team_name text,
  team_members text[],
  registered_at timestamptz default now(),
  status text not null default 'registered' check (status in ('registered', 'submitted', 'disqualified')),
  unique(competition_id, participant_email)
);

-- SUBMISSIONS
create table if not exists submissions (
  id uuid default gen_random_uuid() primary key,
  registration_id uuid references registrations(id) on delete cascade,
  competition_id uuid references competitions(id) on delete cascade,
  submission_file_url text,
  submission_text text,
  answers jsonb,
  submitted_at timestamptz default now(),
  score integer,
  judge_comments text
);

-- RESULTS
create table if not exists results (
  id uuid default gen_random_uuid() primary key,
  competition_id uuid references competitions(id) on delete cascade,
  registration_id uuid references registrations(id) on delete cascade,
  rank integer not null,
  score integer not null default 0,
  prize text,
  announced_at timestamptz default now()
);

-- RLS POLICIES
alter table competitions enable row level security;
alter table registrations enable row level security;
alter table submissions enable row level security;
alter table results enable row level security;

-- Public read for competitions and results
create policy "competitions_public_read" on competitions for select using (true);
create policy "results_public_read" on results for select using (true);

-- Public insert for registrations and submissions (anyone can register)
create policy "registrations_public_read" on registrations for select using (true);
create policy "registrations_public_insert" on registrations for insert with check (true);
create policy "registrations_public_update" on registrations for update using (true);

create policy "submissions_public_read" on submissions for select using (true);
create policy "submissions_public_insert" on submissions for insert with check (true);
create policy "submissions_public_update" on submissions for update using (true);

-- Results management (open for now, tighten later)
create policy "results_public_insert" on results for insert with check (true);
create policy "results_public_delete" on results for delete using (true);

-- Admin full access
create policy "competitions_admin_all" on competitions for all using (true);

-- INITIAL DATA: April 2026 Stock Pitch Challenge
insert into competitions (
  title, description, type,
  start_date, end_date, submission_deadline,
  prize_1st, prize_2nd, prize_3rd,
  max_participants, status, rules
) values (
  'April 2026 Stock Pitch Challenge',
  'Pick any Japanese company (TSE-listed) and build your investment thesis. Present why it is undervalued or a compelling long-term buy. Top 3 teams present live to a panel of finance professionals.',
  'stock_pitch',
  '2026-04-01 00:00:00+00',
  '2026-04-30 23:59:59+00',
  '2026-04-28 23:59:59+00',
  '¥10,000',
  '¥5,000',
  '¥3,000',
  50,
  'upcoming',
  E'1. All participants must be current high school or college students.\n2. Submissions must cover a company listed on the Tokyo Stock Exchange (TSE).\n3. Teams of 1-3 members are allowed. Solo entries are welcome.\n4. Submission must include: investment thesis, valuation analysis (DCF or comps), and key risks.\n5. PDF submissions only, maximum 20 pages.\n6. Plagiarism or AI-generated content without disclosure will result in disqualification.\n7. Top 3 finalists will be invited to present live via Zoom to judges.\n8. Judges'' decisions are final.'
) on conflict do nothing;
