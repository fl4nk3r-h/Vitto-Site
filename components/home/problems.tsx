
'use client';

const PROBLEMS = [
  {
    num: '01',
    title: "Fragmented Systems",
    description: "Siloed LOS, LMS, and CRM with no unified data layer. Your credit models never see the full borrower context across origination, servicing, and collections."
  },
  {
    num: '02',
    title: "Non-AI Native Vendors",
    description: "AI bolted on top of legacy systems. The “AI layer” can only access what the old core exposes—missing real-time operational signals required for accurate decisioning."
  },
  {
    num: '03',
    title: "Reactive Collections",
    description: "No predictive capability and manual prioritisation. Teams chase arrears after they happen, not before they materialise—reducing recovery rates and increasing cost-to-collect."
  },
  {
    num: '04',
    title: "Static Rule Engines",
    description: "Rules that don't learn or adapt. Policy tweaks require engineering cycles, and thresholds lag behind portfolio behaviour—creating avoidable risk and operational drag."
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
          The Reality of Today's Lending Technology
        </h2>
        <p className="text-body" style={{ maxWidth: '560px', marginBottom: '64px' }}>
          Most institutions run critical lending operations across multiple vendors and legacy cores. The result is incomplete data, slow iteration, and decisioning that cannot be trusted at scale.
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
