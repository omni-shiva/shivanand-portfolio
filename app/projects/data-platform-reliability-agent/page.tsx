import type { Metadata } from "next";
import ProjectDetail from "../ProjectDetail";
import { projectsBySlug } from "../project-data";

const project = projectsBySlug["data-platform-reliability-agent"];
const metaDescription =
  "Independent reliability agent using FastAPI, Qdrant retrieval, tenant-scoped tools, 25 deterministic offline evaluation cases and approval-only remediation.";

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

export default function DataPlatformReliabilityAgentPage() {
  return <ProjectDetail project={project} />;
}
