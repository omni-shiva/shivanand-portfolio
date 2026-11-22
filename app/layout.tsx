import type { Metadata } from "next";
import "./base.css";

const title = "Shivanand Kumar — Data & AI Services";
const description = "Build reliable data and AI infrastructure, connect systems and improve operations. Data engineering and applied AI services for manufacturing, supply chain and service teams.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivanandkumar.in"),
  alternates: { canonical: "/" },
  title,
  description,
  applicationName: "Shivanand Kumar — Portfolio & Services",
  authors: [{ name: "Shivanand Kumar", url: "https://shivanandkumar.in/" }],
  verification: { google: "o0qvKwbp99kYmQG3wkL8xT5ofg_MDeba9eRAPCvGZtg" },
  icons: {
    icon: [{ url: "/brand/sk-mark.svg", type: "image/svg+xml" }, { url: "/brand/sk-mark-32.png", sizes: "32x32", type: "image/png" }],
    shortcut: "/brand/sk-mark.svg",
    apple: [{ url: "/brand/sk-mark-180.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: ["Shivanand Kumar", "Data engineering", "Applied AI", "Workflow automation", "Data platforms", "Operational analytics", "Supply chain analytics", "Databricks", "Data quality"],
  openGraph: {
    title, description, type: "website", url: "https://shivanandkumar.in/",
    siteName: "Shivanand Kumar — Portfolio & Services",
    images: [{ url: "/og-services-2026-11-v2.png", width: 1200, height: 630, alt: "Build reliable data and AI infrastructure. Optimize your operations. Shivanand Kumar." }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-services-2026-11-v2.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
