/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

const title = "PII Masking Lab | Learning Notebook | Shivanand Kumar";
const description = "A small synthetic-data learning lab: inspect sensitive-data detection, validate candidates, mask in Python and measure missed or unnecessary masking.";
const url = "https://shivanandkumar.in/learning/pii-masking-lab/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [] },
  twitter: { card: "summary", title, description, images: [] },
};

const entityTypes = [
  { name: "Address", type: "ADDRESS", meaning: "A person's home or delivery location.", boundary: "Not a general city mention.", example: "42 Example Lane, Sample City" },
  { name: "Email", type: "EMAIL", meaning: "A contact email, including clearly written-out forms.", boundary: "Detection must preserve the exact source text.", example: "alex@example.com" },
  { name: "Phone", type: "PHONE", meaning: "A phone or mobile contact number.", boundary: "Include its country code and separators.", example: "+1 202-555-0147" },
  { name: "Bank account", type: "BANK_ACCOUNT", meaning: "An account identifier in a banking or refund context.", boundary: "Not a bank name or account balance.", example: "DEMO-ACCT-001" },
  { name: "Payment card", type: "PAYMENT_CARD", meaning: "A full debit or credit card number.", boundary: "Not an explicitly identified order reference.", example: "4242 4242 4242 4242" },
];

export default function PiiMaskingLab() {
  return (
    <main className="learning-detail-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Shivanand Kumar, portfolio home">
          <img className="brand-mark" src="/shivanand-logo-180.png" alt="" />
          <span>Shivanand Kumar</span>
        </a>
        <nav aria-label="Primary navigation">
          <a className="nav-mobile-link" href="/#projects">Projects</a>
          <a className="nav-cta" href="/#learning-projects">Learning projects</a>
        </nav>
      </header>

      <div className="section-shell learning-detail-shell">
        <nav className="learning-breadcrumb" aria-label="Breadcrumb">
          <a href="/#projects">Projects</a><span aria-hidden="true">/</span>
          <a href="/#learning-projects">Learning projects</a><span aria-hidden="true">/</span>
          <span aria-current="page">PII Masking Lab</span>
        </nav>

        <header className="learning-detail-intro">
          <p className="section-kicker">The learning notebook · LLM engineering</p>
          <h1>PII Masking Lab</h1>
          <p>A support summary should explain the problem, without exposing the person.</p>
          <span className="learning-status">Learning experiment · Synthetic data · Offline baseline</span>
          <div className="learning-actions">
            <a className="button button-primary" href="/learning/pii-masking-lab.zip" download>Download notebook &amp; code ↓</a>
            <a href="/learning/synthetic_support_tickets.csv" download>Download sample CSV ↓</a>
            <a href="#walkthrough">Read the walkthrough ↓</a>
          </div>
          <p className="learning-detail-scope">24 fictional support tickets. Five columns. Only <code>issue_summary</code> is changed; the ticket metadata is preserved. This is a focused practice lab, not a production privacy filter.</p>
          <p className="learning-definition"><strong>What does masking mean?</strong> PII means personally identifiable information. Here, masking replaces a detected sensitive value with a label such as <code>[EMAIL]</code>, while retaining the useful issue description.</p>
        </header>

        <section className="learning-detail-section" id="walkthrough" aria-labelledby="walkthrough-heading">
          <h2 id="walkthrough-heading">Detect → validate → mask → evaluate</h2>
          <p>Rules or an optional LLM propose candidate entities. Python checks the allowed types and exact text matches, rejects conflicting overlaps, then replaces spans from right to left. Valid JSON alone does not prove that detection is correct.</p>
          <div className="learning-walkthrough-grid">
            <div className="learning-detail-panel">
              <h3><span className="learning-example-number">01</span> Before · fictional support issue</h3>
              <p className="learning-quoted-example">Device restarts during setup. Deliver to 42 Example Lane, Sample City. Email alex@example.com or call +1 202-555-0147. Refund details: bank account DEMO-ACCT-001; card 4242 4242 4242 4242.</p>
              <p className="learning-note">Keep the device problem. Identify the contact, address and payment details separately.</p>
            </div>
            <aside className="learning-evidence" aria-label="Authored five-type masking example">
              <p className="learning-panel-label"><span className="learning-example-number">02</span> After · five validated candidates</p>
              <p className="learning-quoted-example">Device restarts during setup. Deliver to <code>[ADDRESS]</code>. Email <code>[EMAIL]</code> or call <code>[PHONE]</code>. Refund details: bank account <code>[BANK_ACCOUNT]</code>; card <code>[PAYMENT_CARD]</code>.</p>
              <p className="learning-caveat">This is the deterministic replacement example, not a live LLM response. The regex-only baseline misses the address.</p>
            </aside>
          </div>

          <h3 className="learning-table-heading">What each mask means</h3>
          <p className="learning-table-description">Five entity types, with the exact replacement used by the notebook.</p>
          <p className="learning-table-mobile-hint">Scroll the table sideways to see all four columns.</p>
          <div className="learning-table-scroll" role="region" aria-label="Entity definitions and replacement tokens" tabIndex={0}>
            <table className="learning-type-table">
              <caption>All examples are fictional or test values. These definitions guide candidate detection; they do not prove that the detector finds every value.</caption>
              <colgroup><col className="learning-col-entity" /><col className="learning-col-meaning" /><col className="learning-col-example" /><col className="learning-col-mask" /></colgroup>
              <thead><tr><th scope="col">Entity</th><th scope="col">What it means</th><th scope="col">Original example</th><th scope="col">Masked value</th></tr></thead>
              <tbody>{entityTypes.map(({ name, type, meaning, boundary, example }) => (
                <tr key={type}>
                  <th scope="row">{name}</th>
                  <td>{meaning}<span className="learning-type-boundary">{boundary}</span></td>
                  <td className="learning-original-value">{example}</td>
                  <td><code className="learning-mask-token">[{type}]</code></td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </section>

        <section className="learning-detail-section" aria-labelledby="results-heading">
          <h2 id="results-heading">What actually ran</h2>
          <div className="learning-measurements">
            <div><strong>17 / 25</strong><span>Sensitive occurrences found</span></div>
            <div><strong>8</strong><span>Sensitive occurrences missed</span></div>
            <div><strong>1</strong><span>Non-sensitive value flagged</span></div>
          </div>
          <p>These are rule-based results on 24 authored teaching fixtures, not an LLM score. The baseline has no address detector, misses written-out emails, and mistakes one order reference for a card number. A valid checksum does not establish meaning.</p>
          <p>Assistant-run verification on 6 September 2026: 13 notebook code cells executed offline and 24 automated tests passed with the optional SDK installed. Without it, one SDK contract test is skipped. Live LLM evaluation and my hands-on practice remain pending.</p>
        </section>

        <section className="learning-detail-section learning-practice-section" aria-labelledby="practice-heading">
          <h2 id="practice-heading">Try it, then challenge it</h2>
          <ol>
            <li>Download and unzip the complete project. Open <code>pii_masking_walkthrough.ipynb</code> in Jupyter, following the included README.</li>
            <li>Keep <code>RUN_LLM = False</code> for the first run. No model key or API call is needed for the default notebook.</li>
            <li>Inspect DEMO-001, DEMO-013 and DEMO-020. Explain the missed address, written-out email and over-masked order number before changing the code.</li>
          </ol>
          <p>Optional model calls require explicit opt-in, a model choice and an API key, and may incur charges. Use only the synthetic samples. Never send real personal data to a service that is not approved to process it.</p>
          <p className="learning-detail-boundary">Built with AI assistance for learning. No employer or client data. No model training, production deployment or privacy certification. Masking is not encryption, and a clean pattern re-scan is not proof of privacy.</p>
          <a className="learning-back-link" href="/#learning-projects">← Back to learning projects</a>
        </section>
      </div>
    </main>
  );
}
