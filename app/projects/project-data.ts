const repositoryBase =
  "https://github.com/omni-shiva/shiva-applied-agentic/tree/main/projects";
const repositoryFileBase =
  "https://github.com/omni-shiva/shiva-applied-agentic/blob/main/projects";
export type PortfolioProject = {
  slug: string;
  cardLabel: string;
  statusLabel: string;
  title: string;
  summary: string;
  outputHeadline: string;
  lede: string;
  problem: string;
  role: string;
  capabilities: string[];
  architecture: string[];
  metrics: Array<{ value: string; label: string }>;
  boundaryMetric: { value: string; label: string };
  output: string;
  outputNote: string;
  boundary: string;
  limitations: string[];
  repoUrl: string;
  readmeUrl: string;
  architectureUrl: string;
  evaluationUrl: string;
  reportUrl?: string;
  ciUrl: string;
  nextProject: { title: string; href: string };
};

export const projects: PortfolioProject[] = [
  {
    slug: "data-platform-reliability-agent",
    cardLabel: "Data platform · Agentic AI",
    statusLabel: "Independent project · Synthetic data · Read-only decision support",
    title: "Data Platform Reliability Agent",
    summary:
      "A tool-using reliability agent with an optional OpenAI planner that investigates synthetic pipeline incidents and proposes, but never executes, remediation.",
    outputHeadline:
      "Evidence-grounded incident diagnosis with citations, tool trace and an approval gate.",
    lede:
      "A reproducible, deterministic-first reliability agent that turns synthetic events, contracts and runbooks into a bounded diagnosis; the optional LLM planner is not part of the current evaluation.",
    problem:
      "Pipeline incidents are rarely solved by one error message. Engineers need run history, schema context, operating guidance and a clear line between diagnosis and execution.",
    role:
      "I designed and built the agent, API contracts, read-only tool layer, synthetic data, retrieval, safety controls, evaluation suite, tests and CI workflow.",
    capabilities: [
      "FastAPI and strict Pydantic request/response contracts",
      "Tenant-scoped SQL events and cross-tenant negative tests",
      "Contract comparison for missing and unexpected fields",
      "Local Qdrant runbook retrieval with 256-dimensional feature-hashed embeddings",
      "Cosine-similarity search with keyword-based rescoring",
      "Optional OpenAI Responses API planner with deterministic fallback",
      "Approval-only remediation previews with no execution path",
    ],
    architecture: [
      "Validate the incident request and authorized tenant scope",
      "Query synthetic pipeline events and inspect the expected contract",
      "Retrieve the most relevant operational runbook",
      "Synthesize evidence, likely causes, confidence and citations",
      "Require human approval for any proposed state-changing action",
    ],
    metrics: [
      { value: "25/25", label: "offline regression cases passed" },
      { value: "256", label: "feature-hash embedding dimensions" },
      { value: "Read-only", label: "decision support" },
    ],
    boundaryMetric: { value: "Human", label: "approval boundary" },
    output: `{
  "severity": "high",
  "issue_summary": "SCHEMA_MISMATCH",
  "tools_used": [
    "query_pipeline_events",
    "inspect_pipeline_contract",
    "search_runbooks"
  ],
  "approval_required": true,
  "execution_performed": false
}`,
    outputNote:
      "Abbreviated verified response from the schema-change test. The full response also includes direct evidence, citations, confidence, recommendations and the complete tool trace.",
    boundary:
      "This is an independent portfolio implementation built from public career themes and entirely synthetic pipelines, tenants, events, contracts and runbooks. It is not employer production code or architecture.",
    limitations: [
      "The 25-case suite is a deterministic offline application-regression gate. It does not evaluate the optional LLM planner, model prompts or tool-call quality.",
      "Required-tool checks confirm trace contents, and evidence-grounded checks confirm non-empty evidence and citations; they do not establish planner-selection quality, retrieval correctness or citation faithfulness.",
      "The default feature-hash embeddings are deterministic and reproducible, but they are not evidence of production-grade semantic retrieval quality.",
      "The demo accepts tenant scope in the request; a real service must derive authorization from verified identity and policy controls.",
      "The repository is a local, read-only demonstration using synthetic data. It does not execute remediation or claim production deployment.",
    ],
    repoUrl: `${repositoryBase}/data-platform-reliability-agent`,
    readmeUrl: `${repositoryFileBase}/data-platform-reliability-agent/README.md`,
    architectureUrl: `${repositoryFileBase}/data-platform-reliability-agent/docs/architecture.md`,
    evaluationUrl: `${repositoryFileBase}/data-platform-reliability-agent/docs/evaluation.md`,
    ciUrl: "https://github.com/omni-shiva/shiva-applied-agentic/actions/workflows/ci.yml",
    nextProject: {
      title: "PII Masking Lab · Learning notebook",
      href: "/learning/pii-masking-lab/",
    },
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<string, PortfolioProject>;
