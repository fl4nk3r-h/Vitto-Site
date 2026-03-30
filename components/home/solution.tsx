'use client';

import { Brain, Layers, ShieldCheck } from 'lucide-react';

const DIFFERENTIATORS = [
  {
    title: 'Domain-trained Models',
    desc: 'Models trained on BFSI workflows and lending outcomes—not generic internet data. Built for underwriting, fraud, and collections.'
  },
  {
    title: 'Unified Architecture',
    desc: 'A single data spine and API surface across the lending lifecycle—so decisioning and operations never drift apart.'
  },
  {
    title: 'Explainability',
    desc: 'Every recommendation is traceable: features, policy rules, and reasoning outputs that can be audited and reviewed.'
  }
];

const differentiatorIcons = [Brain, Layers, ShieldCheck] as const;

export function Solution() {
  return (
    <section style={{
      padding: '96px 0',
      borderTop: '1px solid var(--border-dim)',
      background: 'var(--bg-base)'
    }}>
      <div className="container-vitto">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '55% 42%',
          gap: '80px',
          alignItems: 'center'
        }}>

          {/* LEFT */}
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--red)',
              marginBottom: '16px'
            }}>
              THE SOLUTION
            </div>

            <h2 className="text-h2 gradient-text" style={{ marginBottom: '24px' }}>
              AI-native decisioning meets full stack operational automation
            </h2>

            <p className="text-body" style={{ marginBottom: '48px', maxWidth: '480px' }}>
              Vitto is built as infrastructure, not a bundle of point tools. Decisioning, policy, and workflow automation run on one integrated platform—so credit teams can move faster without losing control.
            </p>
          </div>

          {/* RIGHT — Feature list with icons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = differentiatorIcons[i] ?? ShieldCheck;
              return (
                <div
                  key={d.title}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-mid)',
                    borderRadius: '12px',
                    padding: '20px 20px',
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    transition: 'all 220ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--red-border)';
                    e.currentTarget.style.boxShadow = '0 0 20px var(--red-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-mid)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: 'rgba(211,47,47,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(211,47,47,0.18)',
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--red)' }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '6px',
                      }}
                    >
                      {d.title}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                      }}
                    >
                      {d.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
