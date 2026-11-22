import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ maxWidth: 720, margin: "12vh auto", padding: 32, fontFamily: "Arial, sans-serif", color: "#132d27", lineHeight: 1.6 }}>
      <p>404 · Page not found</p>
      <h1>This page is not available.</h1>
      <p>Explore services, independent projects and professional background on the homepage.</p>
      <Link href="/" style={{ display: "inline-block", background: "#132d27", color: "#fffdf8", padding: "12px 20px" }}>Back to the homepage</Link>
    </main>
  );
}
