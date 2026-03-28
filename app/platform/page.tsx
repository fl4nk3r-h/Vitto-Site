"use client";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GradientText } from '@/components/ui/gradient-text';
import { GlowCard } from '@/components/ui/glow-card';

import { ComparisonTable } from '@/components/comparison-table';
import { AI_FIRST_MODULES } from '@/lib/constants/modules';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import '@/styles/hero-bg-grid.css';
import '@/styles/system-status-bar.css';
import '@/styles/platform-responsive.css';
import React from 'react';
// Responsive Module Card with Read More for mobile
function ModuleCard({ module }) {
  const [expanded, setExpanded] = React.useState(false);
  const descRef = React.useRef(null);
  const [isTruncated, setIsTruncated] = React.useState(false);

  React.useEffect(() => {
    if (descRef.current) {
      setIsTruncated(descRef.current.scrollHeight > descRef.current.clientHeight);
    }
  }, [expanded]);

  const IconComponent = Icons[module.icon as keyof typeof Icons];
  const SafeIcon =
    typeof IconComponent === 'function' && !("iconNode" in IconComponent)
      ? IconComponent
      : Icons.Zap;

  return (
    <GlowCard>
      <SafeIcon style={{ width: 32, height: 32, color: 'var(--red)', marginBottom: 16 }} />
      <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>{module.title}</h3>
      <p
        ref={descRef}
        className={expanded ? 'platform-module-description expanded' : 'platform-module-description'}
        style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}
      >
        {module.description}
      </p>
      {/* Show Read more only on mobile and if truncated */}
      <span
        className="platform-readmore"
        style={{ display: (isTruncated || expanded) ? 'inline-block' : 'none' }}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? 'Show less' : 'Read more'}
      </span>
      <div style={{ borderTop: '1px solid var(--border-dim)', paddingTop: '16px' }}>
        <p style={{ fontSize: '12px', color: 'var(--red)' }}>{module.details}</p>
      </div>
    </GlowCard>
  );
}

const comparisonRows = [
  {
    aspect: 'Training Data',
    slm: 'BFSI-specific (10+ years)',
    llm: 'General internet data'
  },
  {
    aspect: 'Latency',
    slm: '< 200ms',
    llm: '500ms - 2s'
  },
  {
    aspect: 'Cost per Request',
    slm: '$0.0001',
    llm: '$0.01 - $0.10'
  },
  {
    aspect: 'Compliance Built-In',
    slm: true,
    llm: false
  },
  {
    aspect: 'Data Residency',
    slm: true,
    llm: false
  },
  {
    aspect: 'Audit Trails',
    slm: true,
    llm: false
  }
];


export default function PlatformPage() {
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
            <Icons.Sparkles size={16} style={{ color: 'var(--red)' }} />
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
            The <GradientText>AI-First</GradientText> Platform for Banking
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
            Six core modules, each designed to solve a critical layer of banking AI infrastructure. Domain-trained, compliance-built, production-ready.
          </p>

          {/* Enhanced System Status Bar */}
          <div className="platform-status-bar">
            {/* Network */}
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icons.Wifi size={18} style={{ color: '#43a047', marginRight: 4 }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#43a047', display: 'inline-block', marginRight: 6 }} />
              Network:
              <span style={{ fontWeight: 700, marginLeft: 4 }}>Production-Ready</span>
            </span>
            {/* Latency */}
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icons.Timer size={18} style={{ color: '#fb8c00', marginRight: 4 }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#fb8c00', display: 'inline-block', marginRight: 6 }} />
              Latency:
              <span style={{ fontWeight: 700, marginLeft: 4 }}>&lt;200ms</span>
            </span>
            {/* Compliance */}
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icons.ShieldCheck size={18} style={{ color: '#1976d2', marginRight: 4 }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#1976d2', display: 'inline-block', marginRight: 6 }} />
              Compliance:
              <span style={{ fontWeight: 700, marginLeft: 4 }}>SOC2/GDPR</span>
            </span>
          </div>
        </div>
      </section>


      {/* Modules Grid */}
      <section style={{ padding: '96px 0', borderBottom: '1px solid var(--border-dim)', background: 'var(--bg-base)' }}>
        <div className="container-vitto">
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '48px' }}>
            Six Core Modules
          </h2>
          <div className="platform-modules-grid">
            {AI_FIRST_MODULES.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </div>
      </section>

      {/* SLM vs LLM Comparison */}
      <section style={{ padding: '96px 0', borderBottom: '1px solid var(--border-dim)', background: 'var(--bg-surface)' }}>
        <div className="container-vitto">
          <div style={{ maxWidth: 720, marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
              Domain-Trained SLM vs Generic LLM
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: 'var(--text-secondary)' }}>
              Why small language models trained on BFSI data outperform generic large models for banking.
            </p>
          </div>
          <div style={{ border: '1px solid var(--border-dim)', borderRadius: '12px', padding: '32px', overflow: 'hidden', background: 'var(--bg-base)' }}>
            <ComparisonTable
              rows={comparisonRows}
              leftLabel="Domain-Trained SLM"
              rightLabel="Generic LLM"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section style={{ padding: '96px 0', background: 'var(--bg-base)' }}>
        <div className="container-vitto">
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '48px' }}>
            Why Choose Vitto
          </h2>
          <div className="platform-benefits-grid">
            {[
              {
                title: 'Production-Ready',
                description: 'No training. Deploy your first model in hours, not months.'
              },
              {
                title: 'Regulatory Compliant',
                description: 'Audit trails, data governance, and compliance reporting built-in from day one.'
              },
              {
                title: 'Banking-Focused',
                description: 'Models trained on BFSI workflows, regulations, and operational patterns.'
              },
              {
                title: '29+ Operational Modules',
                description: 'Data pipelines, model management, monitoring, compliance, and integration layers.'
              },
              {
                title: '99.99% Uptime SLA',
                description: 'Enterprise-grade reliability with automatic scaling and failover.'
              },
              {
                title: '15-Min Integration',
                description: 'Pre-built connectors for core banking, CRM, and data warehouse systems.'
              }
            ].map((benefit, index) => (
              <GlowCard key={index} delay={index * 0.1}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>{benefit.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{benefit.description}</p>
              </GlowCard>
            ))}
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
            Ready to go AI-native?
          </h2>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '40px',
            maxWidth: '520px',
            margin: '0 auto 40px'
          }}>
            Explore the platform and see how it transforms your banking AI.
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
            <Link href="/platform">
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
                View Platform
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
