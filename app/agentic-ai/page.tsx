
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GradientText } from '@/components/ui/gradient-text';
import { GlowCard } from '@/components/ui/glow-card';
import { AGENTIC_AI_AGENTS } from '@/lib/constants/modules';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import '@/styles/agentic-ai-responsive.css';
import '@/styles/agentic-ai-rag-responsive.css';
import '@/styles/agentic-ai-orchestration-responsive.css';

import '@/styles/agentic-ai-use-cases-responsive.css';


export default function AgenticAIPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Header />


      {/* Premium Hero Section */}
      <section style={{
        padding: '120px 0 80px',
        background: 'var(--bg-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '140%',
          height: '100%',
          background: 'radial-gradient(ellipse at center top, rgba(211,47,47,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container-vitto" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(211,47,47,0.08)',
            borderRadius: '24px',
            marginBottom: '24px',
            border: '1px solid rgba(211,47,47,0.15)',
          }}>
            <CheckCircle2 size={16} style={{ color: 'var(--red)' }} />
            <span style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--red)',
              letterSpacing: '0.05em',
            }}>
              ENTERPRISE SOLUTIONS
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '24px',
            lineHeight: 1.1,
          }}>
            Autonomous <GradientText>AI Agents</GradientText> for Banking
          </h1>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(16px, 2vw, 22px)',
            color: 'var(--text-secondary)',
            marginBottom: '48px',
            lineHeight: 1.6,
            maxWidth: '720px',
            margin: '0 auto 48px',
          }}>
            Pre-built agents for loan processing, customer service, and fraud detection. Multi-step workflows with tool calling, decision logic, and external system integration.
          </p>
        </div>
      </section>

      {/* Agents - Premium Responsive Grid */}
      <section style={{
        padding: '80px 0',
        background: 'var(--bg-base)',
      }}>
        <div className="container-vitto">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}>
              Explore All AI Agents
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Each agent is a complete autonomous system trained on BFSI workflows. Deploy independently or combine for complex orchestrations.
            </p>
          </div>

          <div
            className="agents-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '32px',
            }}
          >
            {AGENTIC_AI_AGENTS.map((agent, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  background: 'var(--bg-surface)',
                  borderRadius: 16,
                  border: '1px solid var(--border-dim)',
                  padding: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 24px rgba(10,24,51,0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 16 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(211,47,47,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <CheckCircle2 style={{ width: 22, height: 22, color: 'var(--red)' }} />
                  </div>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--red)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>AI Agent</span>
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                }}>{agent.name}</h3>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}>{agent.description}</p>
                <div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--red)',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}>Capabilities</div>
                  {agent.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '4px' }}>
                      <CheckCircle2 style={{ width: 16, height: 16, color: 'var(--red)', flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAG Architecture */}
      <section style={{
        padding: '96px 0',
        borderBottom: '1px solid var(--border-dim)',
        background: 'var(--bg-surface)'
      }}>
        <div className="container-vitto">
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}>
              RAG Pipeline: Grounded Answers
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              color: 'var(--text-secondary)'
            }}>
              Retrieval-Augmented Generation connects your agents to company knowledge bases, policy documents, and real-time data.
            </p>
          </div>

          <div
            className="rag-pipeline-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginBottom: '48px'
            }}
          >
            {[
              {
                step: '1',
                title: 'Query Received',
                description: 'Customer asks a question or agent needs context.'
              },
              {
                step: '2',
                title: 'Knowledge Search',
                description: 'RAG searches your document store and data warehouse.'
              },
              {
                step: '3',
                title: 'Augmented Generation',
                description: 'Model generates response with relevant context injected.'
              },
              {
                step: '4',
                title: 'Sourced Answer',
                description: 'Response includes citations and references to source data.'
              }
            ].map((item, index) => (
              <GlowCard key={index}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--red)', marginBottom: '8px' }}>{item.step}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{item.description}</p>
              </GlowCard>
            ))}
          </div>

          <div style={{
            border: '1px solid var(--border-dim)',
            borderRadius: '16px',
            padding: '48px',
            background: 'var(--bg-base)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '32px', textAlign: 'center' }}>
              RAG Pipeline Diagram
            </h3>
            <div
              style={{
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                margin: '0 -24px',
                padding: '0 24px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'nowrap',
                  minHeight: 90,
                  minWidth: 600,
                  width: '100%',
                  maxWidth: '100%',
                }}
              >
                {/* Diagram Steps with arrows */}
                {[
                  { label: 'Query', color: 'var(--red)', bg: 'rgba(211,47,47,0.08)', border: '1.5px solid var(--red)' },
                  { label: 'Vector DB Search', color: 'var(--text-primary)', bg: 'var(--bg-surface)', border: '1.5px solid var(--border-dim)' },
                  { label: 'Chunk Retrieval', color: 'var(--text-primary)', bg: 'var(--bg-surface)', border: '1.5px solid var(--border-dim)' },
                  { label: 'Context Injection', color: 'var(--text-primary)', bg: 'var(--bg-surface)', border: '1.5px solid var(--border-dim)' },
                  { label: 'Grounded Response', color: 'var(--red)', bg: 'rgba(211,47,47,0.08)', border: '1.5px solid var(--red)' }
                ].map((step, i, arr) => (
                  <span key={step.label + '-' + i} style={{ display: 'contents' }}>
                    <div
                      style={{
                        background: step.bg,
                        color: step.color,
                        borderRadius: '8px',
                        padding: 'clamp(10px,2vw,14px) clamp(18px,4vw,32px)',
                        fontWeight: 600,
                        fontSize: 'clamp(13px,2vw,15px)',
                        fontFamily: 'Inter, sans-serif',
                        border: step.border,
                        minWidth: 120,
                        maxWidth: 220,
                        textAlign: 'center',
                        boxShadow: '0 2px 12px 0 rgba(10,24,51,0.04)',
                        zIndex: 1,
                        flex: '0 0 auto',
                        whiteSpace: 'nowrap',
                        margin: '0 2px',
                      }}
                    >
                      {step.label}
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        key={step.label + '-arrow'}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: 0,
                          width: 32,
                          zIndex: 0,
                          flex: '0 0 auto',
                        }}
                      >
                        <svg
                          width="32"
                          height="20"
                          viewBox="0 0 40 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ minWidth: 24 }}
                        >
                          <path
                            d="M4 12h32m0 0l-6-6m6 6l-6 6"
                            stroke="var(--red)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Orchestration */}
      <section style={{
        padding: '96px 0',
        borderBottom: '1px solid var(--border-dim)',
        background: 'var(--bg-base)'
      }}>
        <div className="container-vitto">
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '48px'
          }}>
            Multi-Agent Orchestration
          </h2>

          <div className="orchestration-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            <GlowCard>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>Sequential Workflows</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Agent A processes data, Agent B makes decisions, Agent C executes actions. Perfect for loan processing workflows.
              </p>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div>✓ Agent 1: Document Classification</div>
                <div>✓ Agent 2: Risk Assessment</div>
                <div>✓ Agent 3: Approval/Denial</div>
              </div>
            </GlowCard>

            <GlowCard>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>Parallel Processing</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Multiple agents work simultaneously on different aspects. Perfect for customer service queries.
              </p>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div>✓ Agent 1: Account Lookup (parallel)</div>
                <div>✓ Agent 2: Transaction Search (parallel)</div>
                <div>✓ Agent 3: Policy Check (parallel)</div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{
        padding: '96px 0',
        borderTop: '1px solid var(--border-dim)',
        background: 'var(--bg-surface)'
      }}>
        <div className="container-vitto">
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '48px'
          }}>
            Banking Use Cases
          </h2>

          <div className="use-cases-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {[
              {
                title: 'Loan Processing',
                details: [
                  'Automated application review',
                  'Document verification',
                  'Risk scoring',
                  'Approval workflow'
                ]
              },
              {
                title: 'Customer Service',
                details: [
                  'Multi-channel support (Chat, Phone)',
                  'Account lookups & transactions',
                  'Issue resolution & escalation',
                  'Product recommendations'
                ]
              },
              {
                title: 'Fraud Detection',
                details: [
                  'Real-time transaction monitoring',
                  'Pattern recognition',
                  'Alert generation',
                  'Investigation support'
                ]
              },
              {
                title: 'Collections',
                details: [
                  'Payment negotiation',
                  'Compliance scoring',
                  'Outreach optimization',
                  'Recovery prediction'
                ]
              }
            ].map((useCase, index) => (
              <GlowCard key={index} delay={index * 0.1}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>{useCase.title}</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {useCase.details.map((detail, detailIndex) => (
                    <li key={detailIndex} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 style={{ width: 16, height: 16, color: 'var(--red)', flexShrink: 0 }} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (matches Home/Platform/Automation CTA style) */}
      <section style={{
        padding: '96px 0',
        background: 'linear-gradient(120deg, #0a1833 60%, #6B0000 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Gradient and pattern overlays for depth */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'radial-gradient(ellipse at 70% 20%, rgba(255,255,255,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)',
          pointerEvents: 'none',
        }} />

        <div className="container-vitto" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '24px'
          }}>
            GET STARTED
          </div>

          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '48px',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: 'white',
            marginBottom: '20px',
            lineHeight: 1.15,
            textShadow: '0 2px 16px rgba(10,24,51,0.18)'
          }}>
            Deploy intelligent agents at scale
          </h2>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '40px',
            maxWidth: '520px',
            margin: '0 auto 40px'
          }}>
            Pre-built agents for banking. Customize with RAG pipelines and external integrations. Go live in weeks.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/signup">
              <button style={{
                background: 'white',
                color: '#0a1833',
                padding: '14px 32px',
                borderRadius: '8px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                border: 'none',
                boxShadow: '0 2px 12px 0 rgba(10,24,51,0.08)',
                cursor: 'pointer'
              }}>
                Book a Demo →
              </button>
            </Link>
            <Link href="/agentic-ai">
              <button style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '8px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                border: '2px solid rgba(255,255,255,0.18)',
                boxShadow: '0 2px 12px 0 rgba(10,24,51,0.04)',
                cursor: 'pointer',
                backdropFilter: 'blur(2px)'
              }}>
                View Agents
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
