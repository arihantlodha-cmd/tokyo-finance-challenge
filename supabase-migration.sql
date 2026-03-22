-- Migration: add slug, quiz_questions, extra date fields

-- Add slug column
ALTER TABLE competitions ADD COLUMN IF NOT EXISTS slug text;
ALTER TABLE competitions ADD COLUMN IF NOT EXISTS registration_opens timestamptz;
ALTER TABLE competitions ADD COLUMN IF NOT EXISTS registration_closes timestamptz;
ALTER TABLE competitions ADD COLUMN IF NOT EXISTS results_date timestamptz;

-- Backfill slugs from existing titles
UPDATE competitions
SET slug = lower(regexp_replace(regexp_replace(title, '[^a-zA-Z0-9\s]', '', 'g'), '\s+', '-', 'g'))
WHERE slug IS NULL;

-- Add unique constraint
DO $$ BEGIN
  ALTER TABLE competitions ADD CONSTRAINT competitions_slug_unique UNIQUE (slug);
EXCEPTION WHEN duplicate_table THEN NULL; END $$;

-- Add confirmation_sent to registrations
ALTER TABLE registrations ADD COLUMN IF NOT EXISTS confirmation_sent boolean DEFAULT false;

-- Quiz questions table
CREATE TABLE IF NOT EXISTS quiz_questions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  competition_id uuid REFERENCES competitions(id) ON DELETE CASCADE,
  question_number integer NOT NULL,
  question_text text NOT NULL,
  option_a text NOT NULL,
  option_b text NOT NULL,
  option_c text NOT NULL,
  option_d text NOT NULL,
  correct_answer text NOT NULL CHECK (correct_answer IN ('A', 'B', 'C', 'D')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "quiz_questions_public_read" ON quiz_questions;
DROP POLICY IF EXISTS "quiz_questions_admin_all" ON quiz_questions;
CREATE POLICY "quiz_questions_public_read" ON quiz_questions FOR SELECT USING (true);
CREATE POLICY "quiz_questions_admin_all" ON quiz_questions FOR ALL USING (true);

-- Supabase Storage bucket for submissions (run separately if needed)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('submissions', 'submissions', true)
-- ON CONFLICT DO NOTHING;
