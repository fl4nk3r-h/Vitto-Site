'use client';

const STATS = [
  { number: '< 2s', label: 'Average credit decision time', sub: 'Down from 3–5 days with manual underwriting' },
  { number: '40%', label: 'Reduction in early NPA signals missed', sub: 'Via predictive delinquency scoring' },
  { number: '3×', label: 'Recovery rate improvement', sub: 'On bucket 0–30 DPD with AI prioritisation' },
  { number: '60+', label: 'Pre-built integrations', sub: 'Bureaus, eSign, NACH, DigiLocker, payment rails' }
];

export function Stats() {
  return (
    <section style={{
      padding: '96px 0',
      borderTop: '1px solid var(--border-dim)',
      background: 'var(--bg-base)'
    }}>
      <div className="container-vitto">

        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--red)',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          MEASURED OUTCOMES
        </div>

        <h2 className="text-h2 gradient-text" style={{
          marginBottom: '64px',
          textAlign: 'center'
        }}>
          Numbers that show up in your P&L.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          border: '1px solid var(--border-dim)',
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'var(--bg-card)'
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: '40px 32px',
              borderRight: i < 3 ? '1px solid var(--border-dim)' : 'none',
              textAlign: 'center'
            }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '52px',
                fontWeight: 700,
                color: 'var(--red)',
                marginBottom: '12px',
                lineHeight: 1
              }}>
                {s.number}
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '8px',
                lineHeight: 1.4
              }}>
                {s.label}
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'var(--text-muted)',
                lineHeight: 1.5
              }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
