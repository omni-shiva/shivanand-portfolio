import type { MetadataRoute } from "next";
import { projects } from "./projects/project-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shivanandkumar.in/",
      changeFrequency: "monthly",
      priority: 1,
    },
    { url: "https://shivanandkumar.in/learning/pii-masking-lab/", changeFrequency: "monthly", priority: 0.7 },
    ...projects.map((project) => ({
      url: `https://shivanandkumar.in/projects/${project.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
