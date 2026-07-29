import type { Metadata } from "next";
import "./globals.css";

const title = "Shivanand Kumar | Senior Data Engineer & Agentic AI";
const description =
  "Senior Data Engineer building reliable data platforms and controlled Agentic AI automation with SQL, Python, Databricks, PySpark and evaluation-first engineering.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivanandkumar.in"),
  alternates: {
    canonical: "/",
  },
  title,
  description,
  applicationName: "Shivanand Kumar Portfolio",
  authors: [{ name: "Shivanand Kumar" }],
  keywords: [
    "Shivanand Kumar",
    "Senior Data Engineer",
    "Agentic AI",
    "Databricks",
    "SQL",
    "Python",
    "PySpark",
    "RAG",
    "LLM Evaluation",
    "Data Platform Engineer",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://shivanandkumar.in",
    siteName: "Shivanand Kumar Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Shivanand Kumar — Senior Data Engineer and Agentic AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
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
