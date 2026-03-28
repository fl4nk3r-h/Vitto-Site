'use client';

const DIFFERENTIATORS = [
  {
    title: 'Domain-Trained Models',
    desc: 'Credit risk models trained on BFSI-specific data from Indian lending markets — not ImageNet fine-tunes or generic NLP benchmarks.'
  },
  {
    title: 'Unified Data Architecture',
    desc: 'One platform, one API surface, one operational database across all lending stages. No ETL pipelines between modules.'
  },
  {
    title: 'Explainable by Design',
    desc: "Every AI decision generates a reasoning trace — built to meet RBI's emerging explainability requirements for algorithmic lending."
  }
];

const PIPELINE = [
  { label: 'ACQUIRE', sub: 'Lead Management · Partner Onboarding' },
  { label: 'UNDERWRITE', sub: 'KYC · ML Scoring · Rule Engine' },
  { label: 'DISBURSE', sub: 'eSign · Disbursement Engine' },
  { label: 'MANAGE', sub: 'LMS · Insurance · Loan Closure' },
  { label: 'COLLECT', sub: 'AI Prioritisation · Omni-channel' }
];

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
              THE VITTO APPROACH
            </div>

            <h2 className="text-h2 gradient-text" style={{ marginBottom: '24px' }}>
              One infrastructure.<br />Every stage of the<br />lending lifecycle.
            </h2>

            <p className="text-body" style={{ marginBottom: '48px', maxWidth: '480px' }}>
              Vitto is not a collection of point solutions bolted together. 
              It is a unified decisioning and automation layer — where acquisition, 
              underwriting, disbursement, collections, and closure share a single 
              data spine and a single AI brain.
            </p>

            {/* Differentiators */}
            {DIFFERENTIATORS.map((d, i) => (
              <div key={i} style={{
                borderTop: '1px solid var(--border-dim)',
                padding: '20px 0',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--red)',
                  marginTop: '7px',
                  flexShrink: 0
                }} />
                <div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    {d.title}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {d.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Pipeline */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
            {PIPELINE.map((step, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-mid)',
                  borderRadius: '10px',
                  padding: '16px 24px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'all 220ms ease'
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--red-border)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px var(--red-glow)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-mid)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--bg-elevated)',
                    border: '2px solid var(--red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--red)',
                    flexShrink: 0
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '0.05em'
                    }}>
                      {step.label}
                    </div>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      marginTop: '2px'
                    }}>
                      {step.sub}
                    </div>
                  </div>
                </div>

                {/* Connector line */}
                {i < PIPELINE.length - 1 && (
                  <div style={{
                    width: '2px',
                    height: '24px',
                    background: 'linear-gradient(to bottom, var(--red), var(--border-dim))',
                    flexShrink: 0
                  }} />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
