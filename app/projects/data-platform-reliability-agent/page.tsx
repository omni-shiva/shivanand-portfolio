import type { Metadata } from "next";
import ProjectDetail from "../ProjectDetail";
import { projectsBySlug } from "../project-data";

const project = projectsBySlug["data-platform-reliability-agent"];

export const metadata: Metadata = {
  title: `${project.title} | Shivanand Kumar`,
  description: project.lede,
  alternates: { canonical: `/projects/${project.slug}/` },
};

export default function DataPlatformReliabilityAgentPage() {
  return <ProjectDetail project={project} />;
}

