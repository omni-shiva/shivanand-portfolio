import type { Metadata } from "next";
import "./globals.css";

const title = "Shivanand Kumar | Data & Applied AI Engineer";
const description =
  "Data & Applied AI Engineer specializing in Generative AI and Agentic AI, grounded in Databricks, Spark, Python, SQL and production data engineering.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivanandkumar.in"),
  alternates: {
    canonical: "/",
  },
  title,
  description,
  applicationName: "Shivanand Kumar Portfolio",
  authors: [{ name: "Shivanand Kumar", url: "https://shivanandkumar.in/" }],
  keywords: [
    "Shivanand Kumar",
    "Data and Applied AI Engineer",
    "Applied AI Engineer",
    "Generative AI Engineer",
    "GenAI Engineer",
    "Agentic AI Engineer",
    "Data and AI Engineer",
    "Generative AI",
    "Agentic AI",
    "Databricks",
    "Apache Spark",
    "SQL",
    "Python",
    "PySpark",
    "RAG",
    "LLM Evaluation",
    "Data Engineering",
    "Bengaluru India",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://shivanandkumar.in",
    siteName: "Shivanand Kumar Portfolio",
    images: [
      {
        url: "/og-data-applied-ai.png",
        width: 1200,
        height: 630,
        alt: "Shivanand Kumar, Data and Applied AI Engineer specializing in GenAI and Agentic AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-data-applied-ai.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
