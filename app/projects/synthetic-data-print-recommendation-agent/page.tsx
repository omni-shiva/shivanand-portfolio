import type { Metadata } from "next";
import ProjectDetail from "../ProjectDetail";
import { projectsBySlug } from "../project-data";

const project = projectsBySlug["synthetic-data-print-recommendation-agent"];
const metaDescription =
  "Independent decision-support project with controlled 1x/10x/100x generation and a separately versioned 12-case synthetic holdout with disjoint IDs.";

export const metadata: Metadata = {
  title: `${project.title} | Shivanand Kumar`,
  description: metaDescription,
  alternates: { canonical: `/projects/${project.slug}/` },
  openGraph: {
    title: `${project.title} | Shivanand Kumar`,
    description: metaDescription,
    url: `https://shivanandkumar.in/projects/${project.slug}/`,
    type: "website",
    images: ["/og-data-applied-ai.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${project.title} | Shivanand Kumar`,
    description: metaDescription,
    images: ["/og-data-applied-ai.png"],
  },
};

export default function SyntheticDataPrintRecommendationAgentPage() {
  return <ProjectDetail project={project} />;
}
