export type CompetitionStatus = "draft" | "open" | "active" | "judging" | "completed";
export type CompetitionType = "stock_pitch" | "econ_quiz" | "case_competition";
export type RegistrationStatus = "registered" | "submitted" | "disqualified";

export interface Competition {
  id: string;
  title: string;
  slug: string | null;
  description: string;
  type: CompetitionType;
  start_date: string;
  end_date: string;
  submission_deadline: string;
  registration_opens: string | null;
  registration_closes: string | null;
  results_date: string | null;
  prize_1st: string;
  prize_2nd: string;
  prize_3rd: string;
  max_participants: number;
  status: CompetitionStatus;
  rules: string;
  created_at: string;
}

export interface Registration {
  id: string;
  competition_id: string;
  participant_name: string;
  participant_email: string;
  school: string;
  grade: string;
  team_name: string | null;
  team_members: string[] | null;
  registered_at: string;
  status: RegistrationStatus;
  confirmation_sent: boolean;
}

export interface Submission {
  id: string;
  registration_id: string;
  competition_id: string;
  submission_file_url: string | null;
  submission_text: string | null;
  answers: Record<string, string> | null;
  submitted_at: string;
  score: number | null;
  judge_comments: string | null;
}

export interface Result {
  id: string;
  competition_id: string;
  registration_id: string;
  rank: number;
  score: number;
  prize: string | null;
  announced_at: string;
  registration?: Registration;
}

export interface QuizQuestion {
  id: string;
  competition_id: string;
  question_number: number;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: "A" | "B" | "C" | "D";
}
