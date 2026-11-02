import type { Metadata } from "next";
import Link from "next/link";

const destination = "/projects/data-platform-reliability-agent/";
export const metadata: Metadata = {
  title: "Project moved | Shivanand Kumar",
  description: "Continue to the Data Platform Reliability Agent project.",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function RetiredLearningPage() {
  return (
    <main className="not-found-page">
      <meta httpEquiv="refresh" content={"0;url=" + destination} />
      <p className="section-kicker">Continue to the current project</p>
      <h1>Data Platform Reliability Agent</h1>
      <p>This page has moved to the current independent project.</p>
      <Link className="button button-primary" href={destination}>Open project →</Link>
    </main>
  );
}
