# Vitto AI-First Platform — Technical Module Overview

This document provides an in-depth, technical explanation of Vitto's six AI modules, with a special focus on the Agentic AI system for BFSI (Banking, Financial Services, and Insurance).

---

## 1. SLM Core

- **What it is:** Domain-trained Small Language Models (SLMs) optimized for banking operations.
- **Technical Details:**
  - Trained on 10+ years of BFSI data: credit policy, regulatory filings, loan documents, and customer interactions.
  - Model size: 0.5B–3B parameters for low-latency, on-prem or VPC deployment.
  - Supports explainable outputs (token-level attribution, rationale extraction).
  - Fine-tuned for compliance, risk, and auditability.

## 2. RAG Pipeline

- **What it is:** Retrieval-Augmented Generation for grounded, contextual responses.
- **Technical Details:**
  - Hybrid search (BM25 + dense vector) over knowledge bases, policy docs, and case law.
  - RAG pipeline injects retrieved passages into SLM prompt for source-grounded answers.
  - Supports document-level and paragraph-level citation in responses.
  - Used for credit policy Q&A, regulatory compliance, and audit support.

## 3. Agent Orchestration

- **What it is:** Multi-step workflow engine for chaining AI agents and external tools.
- **Technical Details:**
  - Supports tool calling (API, DB, webhooks) and decision logic (if/else, scoring).
  - Orchestrates SLM, RAG, and external systems (core banking, CRM, collections).
  - Enables complex flows: loan origination, collections, underwriting, KYC.

## 4. Compliance Framework

- **What it is:** Built-in audit trails, data governance, and regulatory adherence.
- **Technical Details:**
  - Immutable audit logging for all model inferences and agent actions.
  - Data residency enforcement (geo-fencing, storage policies).
  - Automated compliance reporting (e.g., RBI, MAS, GDPR).
  - Role-based access and encryption at rest/in transit.

## 5. Real-Time Monitoring

- **What it is:** Model performance, latency, and anomaly detection.
- **Technical Details:**
  - Tracks latency, throughput, error rates, and drift metrics for each model/agent.
  - Anomaly detection on input/output distributions and system health.
  - Real-time dashboard with alerting and escalation policies.

## 6. Enterprise Integration

- **What it is:** Seamless APIs and webhooks for banking system integration.
- **Technical Details:**
  - RESTful APIs for all modules (OpenAPI spec, JWT auth, RBAC).
  - Webhook support for event-driven workflows (e.g., loan approval, collections trigger).
  - Native connectors for core banking, CRM, and data warehouse systems.

---

## Agentic AI in BFSI: Technical Deep Dive

### How Agentic AI Works in BFSI

- **Architecture:**
  - Combines SLM (domain-trained) with RAG pipeline for policy-grounded answers.
  - Each agent is a workflow: user input → RAG retrieval → SLM reasoning → tool/API calls → response.
  - All actions are logged for compliance and audit.
- **Example:**
  - Underwriter asks: "Is this loan eligible under policy X?"
  - Agent retrieves policy X, parses eligibility, and returns a cited, explainable answer.

### Why Generic ChatGPT/Public LLMs Are Insufficient

- Trained on general internet data, not BFSI-specific regulations or credit policy.
- Cannot guarantee compliance, auditability, or data residency.
- Prone to hallucinations and non-citable answers.
- No support for on-prem/VPC deployment or custom audit logging.

### Why Domain-Trained SLMs Matter

- **Explainability:** Token-level attribution, rationale extraction, and source citation.
- **Policy Compliance:** Trained on real credit policy, regulatory filings, and internal docs.
- **Hallucination Control:** RAG pipeline ensures answers are grounded in actual policy, not model "guesswork".
- **Auditability:** All inferences and actions are logged and can be reviewed.

### Three Example AI Agents

#### 1. Borrower Agent (Self-Service Queries)

- Handles customer questions about loan eligibility, document requirements, and application status.
- Uses RAG to cite policy documents in responses.
- Example: "What documents do I need for a home loan?"

#### 2. Field Agent (Assisted Collections)

- Assists field staff with payment negotiation, delinquency prediction, and compliance checks.
- Integrates with collections CRM and payment systems.
- Example: "What is the best time to contact this borrower?"

#### 3. Underwriter Agent (Policy Q&A)

- Answers underwriter questions about credit policy, risk scoring, and regulatory compliance.
- Provides cited, explainable answers with policy references.
- Example: "Can I approve this loan with a CIBIL score of 650?"

---

> For more details, see the `/platform` and `/agentic-ai` pages in the app, or contact the Vitto engineering team.
