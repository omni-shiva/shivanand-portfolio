import type { Metadata } from "next";
import ProjectDetail from "../ProjectDetail";
import { projectsBySlug } from "../project-data";

const project = projectsBySlug["synthetic-data-print-recommendation-agent"];

export const metadata: Metadata = {
  title: `${project.title} | Shivanand Kumar`,
  description: project.lede,
  alternates: { canonical: `/projects/${project.slug}/` },
};

export default function SyntheticDataPrintRecommendationAgentPage() {
  return <ProjectDetail project={project} />;
}

