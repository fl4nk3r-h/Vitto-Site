
'use client';

const PROBLEMS = [
  {
    num: '01',
    title: "Data lives in four systems that don't talk.",
    description: "Your LOS knows origination. Your LMS knows repayment. Your CRM knows the customer. No model ever sees the full borrower picture — which means every credit decision is made with incomplete information."
  },
  {
    num: '02',
    title: "Retrofitted AI sees only what legacy exposes.",
    description: "Vendors add an AI module on top of a 15-year-old core. That module can only access data the legacy system surfaces — rarely the real-time operational data that accurate credit assessment requires."
  },
  {
    num: '03',
    title: "Collections teams work from yesterday's data.",
    description: "Propensity scoring happens in spreadsheets. Contact prioritisation is manual. By the time a delinquent borrower is flagged, the optimal recovery window has usually closed."
  },
  {
    num: '04',
    title: "Rule engines that need engineers to change a threshold.",
    description: "Static credit policies set once and rarely revised. When portfolio behaviour shifts — and it always does — the rules don't. The credit team absorbs the delta."
  }
];

export function Problems() {
  return (
    <section style={{
      padding: '96px 0',
      borderTop: '1px solid var(--border-dim)',
      background: 'var(--bg-surface)'
    }}>
      <div className="container-vitto">
        {/* Section label */}
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--red)',
          marginBottom: '16px'
        }}>
          THE REALITY
        </div>

        {/* Heading */}
        <h2 className="text-h2 gradient-text" style={{ marginBottom: '16px', maxWidth: '640px' }}>
          Today's lending tech was built for a different era.
        </h2>
        <p className="text-body" style={{ maxWidth: '560px', marginBottom: '64px' }}>
          Most BFSI institutions run on infrastructure designed in the early 2000s — 
          patched, re-patched, and now carrying the weight of a decade of workarounds.
        </p>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px'
        }}>
          {PROBLEMS.map((p, i) => (
            <div key={i} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
              {/* Big faded number */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '16px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '96px',
                fontWeight: 800,
                color: 'rgba(255,255,255,0.03)',
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none'
              }}>
                {p.num}
              </div>

              {/* Number badge */}
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--red)',
                marginBottom: '16px',
                letterSpacing: '0.05em'
              }}>
                {p.num}
              </div>

              <h3 style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '12px',
                lineHeight: 1.4
              }}>
                {p.title}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7
              }}>
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
