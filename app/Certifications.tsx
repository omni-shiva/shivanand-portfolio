// Source: owner's LinkedIn credential list, recorded on 10 September 2026.
// Course certificates and assessments, not professional licences or production evidence.
export const credentials = [
  { title: "Evaluating AI Agents", issuer: "DeepLearning.AI", issued: "Aug 2026", date: "2026-08", url: "https://www.deeplearning.ai/accomplishments/eb02173d-7b7e-4288-8f54-d042fd4d861d" },
  { title: "Functions, Tools and Agents with LangChain", issuer: "DeepLearning.AI", issued: "Aug 2026", date: "2026-08", url: "https://www.deeplearning.ai/accomplishments/46a3f9b8-9b91-46d0-873f-b3b9d1ea6fbb" },
  { title: "Building toward Computer Use with Anthropic", issuer: "DeepLearning.AI", issued: "Aug 2026", date: "2026-08", url: "https://www.deeplearning.ai/accomplishments/a7bb91d9-1436-474b-88ac-33182565c6e5" },
  { title: "Agentic AI", issuer: "DeepLearning.AI", issued: "Aug 2026", date: "2026-08", url: "https://www.deeplearning.ai/certificates/9ad009d9-2bad-4c8c-a5ba-0ca92344d6ef" },
  { title: "AI for Everyone", issuer: "DeepLearning.AI", issued: "Aug 2026", date: "2026-08", url: "https://www.deeplearning.ai/certificates/ea6a4445-8b62-4f87-b04a-886486c07e07" },
  { title: "AI Agents in LangGraph", issuer: "DeepLearning.AI", issued: "Aug 2026", date: "2026-08", url: "https://www.deeplearning.ai/accomplishments/93206869-2ad7-4d99-8d61-f96cec9f7999" },
  { title: "AI Prompting for Everyone", issuer: "DeepLearning.AI", issued: "Aug 2026", date: "2026-08", url: "https://learn.deeplearning.ai/certificates/afbc23c7-b9ee-4960-91ba-5961486a978a" },
  { title: "Building Systems with the ChatGPT API", issuer: "DeepLearning.AI", issued: "Aug 2026", date: "2026-08", url: "https://learn.deeplearning.ai/accomplishments/4a5edb45-bb5c-4697-b07d-b2d3795de4c1" },
  { title: "Advanced Learning Algorithms", issuer: "DeepLearning.AI", issued: "Jun 2026", date: "2026-06", url: "https://www.coursera.org/account/accomplishments/records/1OLH40IORGB6" },
  { title: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI", issued: "Jan 2026", date: "2026-01", url: "https://www.coursera.org/account/accomplishments/records/UXXXGLDSXRSL" },
  { title: "Google AI Essentials", issuer: "Google", issued: "Dec 2025", date: "2025-12", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/XU1HPR7D39OX" },
  { title: "SQL (Intermediate)", issuer: "HackerRank", issued: "Aug 2022", date: "2022-08", url: "https://www.hackerrank.com/certificates/736ac4f4fb4e" },
  { title: "Google Data Analytics Professional Certificate", issuer: "Google", issued: "Jul 2022", date: "2022-07", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/YESTY2TH8AEW" },
];

export default function Certifications() {
  return (
    <section className="credentials-section section-shell" id="certifications" aria-labelledby="credentials-title">
      <div className="section-intro">
        <div>
          <p className="section-kicker">Continued learning</p>
          <h2 id="credentials-title">Courses &amp; Certificates</h2>
        </div>
        <p>Course certificates and skills assessments in AI, data and analytics, separate from my professional experience.</p>
      </div>
      <ul className="credentials-grid">
        {credentials.map((credential) => (
          <li key={credential.url}>
            <p className="credential-meta">{credential.issuer} · <time dateTime={credential.date}>{credential.issued}</time></p>
            <h3>{credential.title}</h3>
            <a href={credential.url} target="_blank" rel="noopener noreferrer" aria-label={`View credential: ${credential.title} (opens in a new tab)`}>
              View credential <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
