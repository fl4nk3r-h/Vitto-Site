'use client';

import Link from 'next/link';

export function CTA() {
  return (
    <section style={{
      padding: '96px 0',
      background: '#D32F2F',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Gradient and pattern overlays for depth */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        background: 'radial-gradient(ellipse at 70% 20%, rgba(255,255,255,0.14) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 12px)',
        pointerEvents: 'none',
      }} />

      <div className="container-vitto" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.75)',
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
          textShadow: '0 2px 16px rgba(0,0,0,0.18)'
        }}>
          Discover the key to grow your business
        </h2>

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '18px',
          color: 'rgba(255,255,255,0.85)',
          marginBottom: '40px',
          maxWidth: '480px',
          margin: '0 auto 40px'
        }}>
          Book a demo to see how Vitto replaces fragmented lending stacks with one AI-first infrastructure.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/signup">
            <button style={{
              background: 'white',
              color: '#D32F2F',
              padding: '14px 32px',
              borderRadius: '8px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              border: 'none',
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.14)',
              cursor: 'pointer'
            }}>
              Book a Demo
            </button>
          </Link>
          <Link href="/about">
            <button style={{
              background: 'rgba(255,255,255,0.14)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '8px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              border: '2px solid rgba(255,255,255,0.28)',
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)',
              cursor: 'pointer',
              backdropFilter: 'blur(2px)'
            }}>
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
