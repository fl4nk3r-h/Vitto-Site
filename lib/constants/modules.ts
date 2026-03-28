export const AI_FIRST_MODULES = [
  {
    id: 'slm-core',
    title: 'SLM Core',
    description: 'Domain-trained small language models optimized for banking operations',
    icon: 'Brain',
    details: 'Smaller, faster models trained specifically on BFSI use cases. Reduced latency with institutional-grade accuracy.'
  },
  {
    id: 'rag-pipeline',
    title: 'RAG Pipeline',
    description: 'Retrieval-augmented generation for grounded, contextual responses',
    icon: 'Network',
    details: 'Connect to your data sources, knowledge bases, and compliance documents for accurate, sourced answers.'
  },
  {
    id: 'agent-orchestration',
    title: 'Agent Orchestration',
    description: 'Multi-step workflows with tool calling and external integrations',
    icon: 'Zap',
    details: 'Build complex workflows that coordinate multiple systems, APIs, and decision trees.'
  },
  {
    id: 'compliance-framework',
    title: 'Compliance Framework',
    description: 'Built-in audit trails, data governance, and regulatory adherence',
    icon: 'Shield',
    details: 'Automatic compliance tracking for BFSI regulations, audit logging, and data residency controls.'
  },
  {
    id: 'real-time-monitoring',
    title: 'Real-Time Monitoring',
    description: 'Model performance, latency, and anomaly detection',
    icon: 'Eye',
    details: 'Production monitoring dashboard with alerts for model drift, latency spikes, and system anomalies.'
  },
  {
    id: 'enterprise-integration',
    title: 'Enterprise Integration',
    description: 'Seamless APIs and webhooks for existing banking systems',
    icon: 'Link',
    details: 'RESTful APIs, webhooks, and native connectors for core banking, CRM, and data warehouse systems.'
  }
];

export const OPERATIONAL_MODULES = [
  {
    layer: 'Data Foundation',
    modules: [
      { name: 'Data Ingestion', description: 'Real-time data pipelines from core banking systems' },
      { name: 'Data Validation', description: 'Automated quality checks and anomaly detection' },
      { name: 'Data Governance', description: 'Compliance-first data management and lineage' },
      { name: 'Data Warehouse', description: 'Optimized storage for analytics and model training' },
      { name: 'Data Security', description: 'Encryption, access controls, and data masking' }
    ]
  },
  {
    layer: 'Model Layer',
    modules: [
      { name: 'Model Registry', description: 'Version control and deployment management' },
      { name: 'Model Training', description: 'Fine-tuning pipelines for domain adaptation' },
      { name: 'Model Evaluation', description: 'Performance benchmarking and comparison' },
      { name: 'Model Inference', description: 'Batch and real-time prediction serving' },
      { name: 'Model Monitoring', description: 'Drift detection and performance degradation alerts' }
    ]
  },
  {
    layer: 'Integration Layer',
    modules: [
      { name: 'API Gateway', description: 'Request routing, rate limiting, authentication' },
      { name: 'Webhook Management', description: 'Event-driven integrations with external systems' },
      { name: 'Cache Layer', description: 'Distributed caching for reduced latency' },
      { name: 'Load Balancing', description: 'Automatic scaling and traffic distribution' },
      { name: 'Circuit Breaker', description: 'Graceful degradation and failover mechanisms' }
    ]
  },
  {
    layer: 'Compliance & Security',
    modules: [
      { name: 'Audit Logging', description: 'Immutable logs of all system access and changes' },
      { name: 'Role-Based Access', description: 'Granular permissions and segregation of duties' },
      { name: 'Data Residency', description: 'Geo-bound storage for regulatory compliance' },
      { name: 'Encryption Engine', description: 'End-to-end encryption with key management' },
      { name: 'Compliance Reporting', description: 'Automated regulatory compliance documentation' }
    ]
  },
  {
    layer: 'Observability',
    modules: [
      { name: 'Distributed Tracing', description: 'Request tracking across microservices' },
      { name: 'Metrics Collection', description: 'Real-time system and application metrics' },
      { name: 'Log Aggregation', description: 'Centralized logging with search and filtering' },
      { name: 'Alerting System', description: 'Intelligent alerts with escalation policies' },
      { name: 'Dashboarding', description: 'Real-time visualization of system health' }
    ]
  }
];

export const AGENTIC_AI_AGENTS = [
  {
    name: 'Loan Processing Agent',
    description: 'Automates loan application review, document verification, and approval workflows',
    capabilities: ['Document parsing', 'Risk assessment', 'Regulatory compliance check', 'Approval routing']
  },
  {
    name: 'Customer Service Agent',
    description: 'Handles customer inquiries, account lookups, transaction assistance, and issue resolution',
    capabilities: ['Query understanding', 'Account lookup', 'Transaction search', 'Issue escalation']
  },
  {
    name: 'Fraud Detection Agent',
    description: 'Monitors transactions in real-time, identifies suspicious patterns, and triggers investigations',
    capabilities: ['Pattern detection', 'Risk scoring', 'Alert generation', 'Investigation workflow']
  }
];
