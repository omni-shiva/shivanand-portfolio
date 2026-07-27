import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const title = "Shivanand Kumar | Senior Data Engineer & Agentic AI";
  const description =
    "Senior Data Engineer building reliable data platforms and controlled Agentic AI automation with SQL, Python, Databricks and AWS.";

  return {
    metadataBase: baseUrl,
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
      "Data Platform Engineer",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: baseUrl,
      images: [{ url: new URL("/og.png", baseUrl).toString(), width: 1536, height: 1024 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og.png", baseUrl).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
