'use client';

const MODULES = [
  {
    tag: 'INGESTION LAYER',
    title: 'Data-Based Assessment',
    desc: 'Multi-bureau pull, bank statement analysis, GST data, and alternative signals — normalised into a unified borrower feature vector.',
    icon: '⬡'
  },
  {
    tag: 'PREDICTION LAYER',
    title: 'ML Model Engine',
    desc: 'Ensemble models for PD, LGD, and EAD — continuously retrained on live portfolio performance. Domain-specific, not benchmark-tuned.',
    icon: '◈'
  },
  {
    tag: 'POLICY LAYER',
    title: 'Rule Engine & Decisioning',
    desc: 'Configurable policy rules above ML scores — adjustable by credit managers without engineering intervention.',
    icon: '◻'
  },
  {
    tag: 'RISK LAYER',
    title: 'Fraud Intelligence',
    desc: 'Identity fraud, document tampering, and network fraud detection using graph-based relationship models — real-time, before disbursement.',
    icon: '◬'
  },
  {
    tag: 'RECOVERY LAYER',
    title: 'Collections Intelligence',
    desc: 'Propensity-to-pay scoring, optimal contact-time prediction, and channel selection — fully automated and self-improving.',
    icon: '◎'
  },
  {
    tag: 'INTELLIGENCE LAYER',
    title: 'Agentic AI Layer',
    desc: 'Domain-trained SLM powering Borrower Agent, Field Agent, and Underwriter Agent. Not a public LLM wrapper — a credit-domain operative.',
    icon: '◉',
    featured: true
  }
];

export function Modules() {
  return (
    <section style={{
      padding: '96px 0',
      borderTop: '1px solid var(--border-dim)',
      background: 'var(--bg-surface)'
    }}>
      <div className="container-vitto">

        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--red)',
          marginBottom: '16px'
        }}>
          THE AI LAYER
        </div>

        <h2 className="text-h2 gradient-text" style={{ marginBottom: '16px' }}>
          Six modules. One unified intelligence.
        </h2>
        <p className="text-body" style={{ maxWidth: '520px', marginBottom: '64px' }}>
          Each module independently deployable. Together, the only end-to-end 
          AI credit brain built natively for Indian lending.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}>
          {MODULES.map((m, i) => (
            <div key={i} className="card" style={m.featured ? {
              background: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(198,40,40,0.06) 100%)',
              border: '1px solid var(--red-border)',
              position: 'relative'
            } : { position: 'relative' }}>

              {m.featured && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'var(--red)',
                  color: 'white',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '9px',
                  fontWeight: 700,
                  padding: '3px 8px',
                  borderRadius: '4px',
                  letterSpacing: '0.05em'
                }}>
                  NEW
                </div>
              )}

              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                fontWeight: 600,
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                {m.tag}
              </div>

              <div style={{
                fontSize: '28px',
                marginBottom: '12px',
                color: 'var(--red)'
              }}>
                {m.icon}
              </div>

              <h3 style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                {m.title}
              </h3>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                {m.desc}
              </p>

              <div style={{
                borderTop: '1px solid var(--border-dim)',
                paddingTop: '16px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'var(--red)',
                cursor: 'pointer'
              }}>
                Explore module →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
