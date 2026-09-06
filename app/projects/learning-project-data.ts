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

// Learning evidence is deliberately separate from the three public flagship builds.
// Browser Summary is user-reported work in progress, not a verified release.
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
  {
    slug: "browser-summary",
    title: "Browser Summary",
    topic: "LLM engineering · Week 1 learning",
    status: "In progress · Repository pending",
    summary:
      "A website-summary learning project. The completed notebook, example output and source link still need to be added before it can be presented as a finished build.",
    skills: ["Web content", "Prompt design", "Summarization"],
    note:
      "Work in progress, based on my study plan. Completion and a public repository have not yet been verified.",
  },
];
