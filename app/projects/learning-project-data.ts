export type LearningProject = {
  slug: string;
  title: string;
  topic: string;
  status: string;
  summary: string;
  skills: string[];
  note: string;
  href?: string;
};

// Learning evidence is deliberately separate from the flagship and employer production work.
// Add verified entries here; navigation derives its size from this collection.
export const learningProjects: LearningProject[] = [
  {
    slug: "pii-masking-lab",
    href: "/learning/pii-masking-lab/",
    title: "PII Masking Lab",
    topic: "LLM engineering · Structured extraction",
    status: "Local notebook · Practice pending",
    summary:
      "Explore sensitive-data masking in free-text support tickets: define entity types, validate candidate matches, replace them in Python and measure what the rules miss.",
    skills: ["Python", "JSON schema", "Regex baseline", "Evaluation"],
    note:
      "24 synthetic tickets · 24 automated tests passed. Live LLM evaluation and hands-on practice are still pending. No production privacy claim.",
  },
];
