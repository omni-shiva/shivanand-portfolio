import { readFileSync } from "node:fs";
import { join } from "node:path";
import HomeInteractions from "./components/HomeInteractions";
import "./homepage.css";

// Static editorial markup retains the approved layout. Next exports the full
// content for search engines, while the small client component wires controls.
const homeMarkup = readFileSync(join(process.cwd(), "app/homepage.html"), "utf8");
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
      <div className="services-home final-site" dangerouslySetInnerHTML={{ __html: homeMarkup }} />
      <HomeInteractions />
    </>
  );
}
