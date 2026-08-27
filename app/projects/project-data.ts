const repositoryBase =
  "https://github.com/omni-shiva/shiva-applied-agentic/tree/main/projects";
const repositoryFileBase =
  "https://github.com/omni-shiva/shiva-applied-agentic/blob/main/projects";
const constraintEvalRepository =
  "https://github.com/omni-shiva/constraint-aware-coding-agent-evals";

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
    statusLabel: "Independent build · Synthetic data · CI passing",
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
      "Qdrant runbook retrieval with evidence and citations",
      "Bounded planner rounds with deterministic final safety checks",
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
      { value: "11", label: "tests passed" },
      { value: "97%", label: "test coverage" },
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
      title: "Synthetic Data and Print Recommendation Agent",
      href: "/projects/synthetic-data-print-recommendation-agent/",
    },
  },
  {
    slug: "synthetic-data-print-recommendation-agent",
    cardLabel: "Synthetic data · Decision support",
    statusLabel: "Independent build · Synthetic data · CI passing",
    title: "Synthetic Data and Print Recommendation Agent",
    summary:
      "Measures data scarcity, generates controlled document variations and compares 1x, 10x and 100x scaling on a separately versioned synthetic holdout with disjoint IDs.",
    outputHeadline:
      "Structured print settings with confidence, evidence and a human-review decision.",
    lede:
      "An evaluation-first project for a data-scarcity problem: create useful variation without treating more synthetic rows as proof of better recommendations.",
    problem:
      "Limited labelled documents make it difficult to cover varied categories, layouts and quality needs. Naive generation can simply amplify bias or duplicate the generator's assumptions.",
    role:
      "I built the scarcity analysis, controlled generator, feature pipeline, local recommender, API, synthetic holdout evaluation, safety rules, tests and CI workflow.",
    capabilities: [
      "Coverage and rare-segment scarcity analysis",
      "Deterministic controlled generation at 1x, 10x and 100x",
      "Document feature engineering and structured recommendations",
      "Synthetic holdout evaluation isolated by document ID",
      "Diversity, duplicate, rare-group and saturation checks",
      "Human review for low-confidence and boundary cases",
    ],
    architecture: [
      "Measure gaps in the small synthetic seed corpus",
      "Generate controlled variations across missing document strata",
      "Engineer bounded document and quality features",
      "Recommend structured settings with evidence and confidence",
      "Compare scales on a separately versioned synthetic holdout with disjoint IDs",
    ],
    metrics: [
      { value: "12", label: "synthetic holdout cases" },
      { value: "10×", label: "best evaluated scale" },
      { value: "100×", label: "saturation detected" },
    ],
    boundaryMetric: { value: "Human", label: "review-required flag" },
    output: `{
  "document_id": "incoming_brochure_001",
  "recommended_settings": {
    "color_mode": "color",
    "quality_mode": "high"
  },
  "evidence_document_ids": ["…"],
  "confidence": "scored",
  "execution_performed": false
}`,
    outputNote:
      "Abbreviated verified response shape from the brochure test. Separate policy-boundary tests confirm that ambiguous inputs are held for human review and printing is never executed.",
    boundary:
      "Every document profile and label is synthetic. The repository contains no employer documents, print rules, source code or confidential architecture, and the service cannot operate a printer.",
    limitations: [
      "The 12 holdout records use disjoint IDs, but their expected settings come from the same documented synthetic policy world. Results test controlled scale and saturation, not out-of-policy or expert-labelled generalization.",
      "Synthetic holdout performance does not establish real-world print quality or business outcomes.",
      "The service uses structured document metadata rather than raw PDF rendering or printer telemetry.",
      "A real deployment would require expert-labelled data, printer constraints, user feedback and drift monitoring.",
    ],
    repoUrl: `${repositoryBase}/synthetic-data-print-recommendation-agent`,
    readmeUrl: `${repositoryFileBase}/synthetic-data-print-recommendation-agent/README.md`,
    architectureUrl: `${repositoryFileBase}/synthetic-data-print-recommendation-agent/docs/architecture.md`,
    evaluationUrl: `${repositoryFileBase}/synthetic-data-print-recommendation-agent/docs/evaluation.md`,
    ciUrl: "https://github.com/omni-shiva/shiva-applied-agentic/actions/workflows/ci.yml",
    nextProject: {
      title: "Constraint-Aware Coding Agent Evaluation Lab",
      href: "/projects/constraint-aware-coding-agent-evals/",
    },
  },
  {
    slug: "constraint-aware-coding-agent-evals",
    cardLabel: "Independent Open-Source Project",
    statusLabel: "Independent Open-Source Project · Fully synthetic · CI passing",
    title: "Constraint-Aware Coding Agent Evaluation Lab",
    summary:
      "A fully synthetic Python lab that separates ordinary functional correctness from six independently observed runtime behavior constraints.",
    outputHeadline:
      "Both synthetic candidates pass ordinary tests; focused probes separate 6/6 from 2/6 compliance.",
    lede:
      "A reproducible evaluation-engineering project that tests returned product values and implementation behavior as separate axes, using only independently authored synthetic scenarios, candidates and evidence.",
    problem:
      "Passing ordinary tests proves selected outputs, but it may miss unsafe behavior around one-shot iterables, object identity, input mutation, time snapshots, injected dependencies and stable ordering.",
    role:
      "I designed and built the scenario format, standard-library evaluator, focused runtime probes, accepted and adversarial validation fixtures, dual-axis grading, reproducible reports, release scanner, manifest checks, tests and CI.",
    capabilities: [
      "Python 3.11+ standard-library evaluation runtime and command-line interface",
      "Six independently evaluated runtime behavior constraints",
      "Fourteen accepted and twelve isolated adversarial implementation fixtures",
      "Nineteen functional expectation checks and two decoupling fixtures",
      "Byte-reproducible JSON and Markdown comparison reports",
      "Public-release scanning and an 84-file SHA-256 manifest",
    ],
    architecture: [
      "Validate the fully synthetic scenario, paths and evidence map",
      "Materialize each authored candidate in a temporary workspace",
      "Run the same ordinary functional tests for both candidates",
      "Observe six behavior constraints through focused runtime probes",
      "Grade both axes independently and generate reproducible evidence",
    ],
    metrics: [
      { value: "16", label: "project tests passed" },
      { value: "45", label: "evaluator checks passed" },
      { value: "66.7 pp", label: "compliance separation" },
    ],
    boundaryMetric: { value: "6/6 vs 2/6", label: "synthetic constraint results" },
    output: `{
  "synthetic_reference": {
    "functional_tests": "PASS",
    "constraint_compliance": "6/6"
  },
  "synthetic_comparison": {
    "functional_tests": "PASS",
    "constraint_compliance": "2/6"
  },
  "compliance_separation": "66.7 percentage points"
}`,
    outputNote:
      "Abbreviated verified result derived from the reproducible example report. Both authored candidates pass the same ordinary functional tests; the focused probes expose four behavior violations in the comparison candidate.",
    boundary:
      "Independent Open-Source Project. It is fully synthetic and independently authored, with no employer or client work, confidential tasks, prompts, tests, trajectories or datasets. It is not a production deployment, a real benchmark submission, an accepted third-party contribution or evidence about any commercial model.",
    limitations: [
      "This is a small deterministic teaching example, not a production benchmark or a claim about real-world model performance.",
      "The candidates were authored to exercise evaluation paths; results must not be generalized to external repositories, agents or models.",
      "Temporary workspaces provide file separation, not a security sandbox. Only trusted synthetic fixtures should be evaluated.",
      "The release scanner checks configured patterns in publishable text files; it does not replace credential rotation or repository-host history cleanup after an accidental disclosure.",
    ],
    repoUrl: constraintEvalRepository,
    readmeUrl: `${constraintEvalRepository}/blob/main/README.md`,
    architectureUrl: `${constraintEvalRepository}/blob/main/docs/architecture.md`,
    evaluationUrl: `${constraintEvalRepository}/blob/main/docs/methodology.md`,
    reportUrl: `${constraintEvalRepository}/blob/main/reports/example/report.md`,
    ciUrl: `${constraintEvalRepository}/actions/workflows/tests.yml`,
    nextProject: {
      title: "Data Platform Reliability Agent",
      href: "/projects/data-platform-reliability-agent/",
    },
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<string, PortfolioProject>;
