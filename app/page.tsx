import { readFileSync } from "node:fs";
import { join } from "node:path";
import CircularHomepage from "./components/CircularHomepage";
import "./homepage.css";
import "./circular-homepage.css";

// The approved circular interface is server rendered. Existing project and
// experience content remains static, with client-side controls for exploration.
const homeMarkup = readFileSync(join(process.cwd(), "app/homepage.html"), "utf8");
const footerStart = homeMarkup.indexOf("<footer");
const legacyMarkup = homeMarkup.slice(0, footerStart);
const footerMarkup = homeMarkup.slice(footerStart);
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shivanand Kumar",
  url: "https://shivanandkumar.in/",
  jobTitle: "Data & Applied AI Engineer",
  description: "Data engineering, applied AI and operational analytics, with experience at HP and Amazon.",
  sameAs: ["https://www.linkedin.com/in/shivachauhan/", "https://github.com/omni-shiva"],
  knowsAbout: ["Data engineering", "Data quality", "Applied AI", "Workflow automation", "Supply chain analytics"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <link rel="preload" as="image" href="/assets/circular/hero-forest.webp" />
      <CircularHomepage legacyMarkup={legacyMarkup} footerMarkup={footerMarkup} />
    </>
  );
}
