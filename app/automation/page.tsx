
import { Header } from '@/components/header';
import '@/styles/automation-hero.css';
import '@/styles/automation-responsive.css';
import { Footer } from '@/components/footer';
import { GradientText } from '@/components/ui/gradient-text';
import { GlowCard } from '@/components/ui/glow-card';
import { OPERATIONAL_MODULES } from '@/lib/constants/modules';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Layers, Database, Zap, Shield, Eye, Sparkles, Cloud, Server, FileText, Lock, BarChart3, Cpu, Settings, Globe, Key, Activity, Users, Folder, Wifi, Bell, Code2, Monitor, BookOpen, MessageCircle, Sliders, Terminal, TrendingUp, ClipboardList, Calendar, PieChart, AlertTriangle, CheckCircle2 } from 'lucide-react';

const layerIcons = {
  'Data Foundation': Database,
  'Model Layer': Zap,
  'Integration Layer': Layers,
  'Compliance & Security': Shield,
  'Observability': Eye
};

// A pool of Lucide icons for module cards (visually appealing, varied)
const moduleIcons = [
  Cloud, Server, FileText, Lock, BarChart3, Cpu, Settings, Globe, Key, Activity, Users, Folder, Wifi, Bell, Code2, Monitor, BookOpen, MessageCircle, Sliders, Terminal, TrendingUp, ClipboardList, Calendar, PieChart, AlertTriangle, CheckCircle2
];


export default function AutomationPage() {
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
            <Sparkles size={16} style={{ color: 'var(--red)' }} />
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
            29+ <GradientText>Operational Modules</GradientText> for Full-Stack Banking Automation
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
            Five intelligent layers: Data Foundation, Model Management, Integration, Compliance, and Observability. Build your complete AI infrastructure with composable, production-ready modules.
          </p>
        </div>
      </section>

      {/* Operational Layers - Premium Responsive Grid (Separated by Layer) */}
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
              Explore All Automation Modules
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Mix and match modules from every layer to build your own custom automation stack.
            </p>
          </div>

          {OPERATIONAL_MODULES.map((layer, layerIndex) => (
            <div key={layer.layer} style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 24 }}>
                {(() => {
                  const IconComponent = layerIcons[layer.layer as keyof typeof layerIcons] || Zap;
                  return (
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
                      <IconComponent style={{ width: 22, height: 22, color: 'var(--red)' }} />
                    </div>
                  );
                })()}
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--red)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  margin: 0
                }}>{layer.layer}</h3>
              </div>
              <div
                className="automation-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                  gap: '32px',
                }}
              >
                {layer.modules.map((module, idx) => {
                  // Pick a visually distinct icon for each module
                  const Icon = moduleIcons[(layerIndex * 10 + idx) % moduleIcons.length];
                  return (
                    <div
                      key={layer.layer + '-' + idx}
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
                        overflow: 'hidden',
                        minWidth: 0,
                        minHeight: 0
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: 18 }}>
                        <div style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'rgba(211,47,47,0.10)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 2px 8px 0 rgba(211,47,47,0.06)'
                        }}>
                          <Icon style={{ width: 22, height: 22, color: 'var(--red)' }} />
                        </div>
                        <h4 style={{
                          fontSize: '17px',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          margin: 0,
                          letterSpacing: '-0.01em',
                          flex: 1,
                          minWidth: 0,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>{module.name}</h4>
                      </div>
                      <p style={{
                        fontSize: '15px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: 0,
                        minWidth: 0,
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word'
                      }}>{module.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Overview */}
      <section style={{ padding: '96px 0', background: 'var(--bg-surface)' }}>
        <div className="container-vitto">
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '48px', textAlign: 'center' }}>
            How the Layers Work Together
          </h2>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                title: 'Data flows from your systems into the Data Foundation',
                description: 'Ingestion, validation, governance, and secure storage powered by 5 core modules.'
              },
              {
                title: 'Models train and serve predictions via the Model Layer',
                description: 'Registry, training pipelines, evaluation, inference, and monitoring—all automated.'
              },
              {
                title: 'Integrations connect everything via the Integration Layer',
                description: 'APIs, webhooks, caching, load balancing, and failover mechanisms ensure reliability.'
              },
              {
                title: 'Compliance & Security enforces BFSI standards automatically',
                description: 'Audit logging, access controls, data residency, encryption, and regulatory reporting.'
              },
              {
                title: 'Observability gives you real-time visibility into everything',
                description: 'Distributed tracing, metrics, logs, alerts, and dashboards for complete transparency.'
              }
            ].map((step, index) => (
              <GlowCard key={index}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(211,47,47,0.08)', color: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px', flexShrink: 0 }}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>{step.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{step.description}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Module Composition Example */}
      <section style={{ padding: '96px 0', borderTop: '1px solid var(--border-dim)', background: 'var(--bg-surface)' }}>
        <div className="container-vitto">
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '48px' }}>
            Real-World Example: Loan Processing Automation
          </h2>
          <div className="automation-example-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            <GlowCard>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>Modules Used</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: 8, height: 8, background: 'var(--red)', borderRadius: '50%', display: 'inline-block' }} />Data Ingestion (upload application documents)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: 8, height: 8, background: 'var(--red)', borderRadius: '50%', display: 'inline-block' }} />Model Inference (extract info & assess risk)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: 8, height: 8, background: 'var(--red)', borderRadius: '50%', display: 'inline-block' }} />API Gateway (expose to core banking)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: 8, height: 8, background: 'var(--red)', borderRadius: '50%', display: 'inline-block' }} />Audit Logging (compliance & regulatory)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: 8, height: 8, background: 'var(--red)', borderRadius: '50%', display: 'inline-block' }} />Monitoring (detect failures early)</li>
              </ul>
            </GlowCard>
            <GlowCard>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>Results</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '14px' }}>
                <div>
                  <p style={{ color: 'var(--red)', fontWeight: 700, fontSize: '20px', marginBottom: '4px' }}>92%</p>
                  <p style={{ color: 'var(--text-secondary)' }}>Faster than manual review</p>
                </div>
                <div>
                  <p style={{ color: 'var(--red)', fontWeight: 700, fontSize: '20px', marginBottom: '4px' }}>99.9%</p>
                  <p style={{ color: 'var(--text-secondary)' }}>Accuracy in document extraction</p>
                </div>
                <div>
                  <p style={{ color: 'var(--red)', fontWeight: 700, fontSize: '20px', marginBottom: '4px' }}>100%</p>
                  <p style={{ color: 'var(--text-secondary)' }}>Audit trail coverage</p>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* CTA (matches Home CTA style) */}
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
            Build your automation layer today
          </h2>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '40px',
            maxWidth: '520px',
            margin: '0 auto 40px'
          }}>
            Combine modules to solve your specific banking AI challenges. Production-ready in days, not months.
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
            <Link href="/automation">
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
                View Automation
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
