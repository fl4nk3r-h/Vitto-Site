'use client';

import Link from 'next/link';

export function CTA() {
  return (
    <section style={{
      padding: '96px 0',
      background: 'linear-gradient(120deg, #0a1833 60%, #6B0000 100%)', // deep blue to subtle red accent
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
          Ready to rebuild your<br />lending infrastructure?
        </h2>

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '18px',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '40px',
          maxWidth: '480px',
          margin: '0 auto 40px'
        }}>
          We work with Banks, NBFCs, and MFIs.<br />Typical go-live in 6–8 weeks.
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
  );
}
