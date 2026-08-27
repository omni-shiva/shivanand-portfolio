import type { Metadata } from "next";
import ProjectDetail from "../ProjectDetail";
import { projectsBySlug } from "../project-data";

const project = projectsBySlug["constraint-aware-coding-agent-evals"];
const metaDescription =
  "Independent Open-Source Project: a fully synthetic Python evaluation lab separating functional correctness from six runtime behavior constraints with reproducible evidence.";

export const metadata: Metadata = {
  title: `${project.title} | Shivanand Kumar`,
  description: metaDescription,
  alternates: { canonical: `/projects/${project.slug}/` },
  openGraph: {
    title: `${project.title} | Shivanand Kumar`,
    description: metaDescription,
    url: `https://shivanandkumar.in/projects/${project.slug}/`,
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: `${project.title} | Shivanand Kumar`,
    description: metaDescription,
    images: [],
  },
};

export default function ConstraintAwareCodingAgentEvalsPage() {
  return <ProjectDetail project={project} />;
}
