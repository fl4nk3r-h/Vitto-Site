'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Hero() {
  const [time, setTime] = useState('14:32:07');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let start = 0;
    const end = 2847;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center" style={{
      background: `
        radial-gradient(ellipse 60% 50% at 75% 50%, rgba(198,40,40,0.07) 0%, transparent 70%),
        radial-gradient(ellipse 40% 40% at 20% 80%, rgba(100,100,255,0.04) 0%, transparent 60%),
        var(--bg-base)
      `
    }}>
      {/* Dot grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      <div className="container-vitto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Tag */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--red)',
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--red)',
                borderRadius: '50%',
                animation: 'pulse-dot 2s infinite'
              }} />
              LIVE · AI-NATIVE CREDIT INFRASTRUCTURE
            </div>

            {/* H1 */}
            <h1 className="text-h1 gradient-text" style={{
              animation: 'fadeInUp 0.8s ease-out 0.1s both'
            }}>
              The Modern Standard for Credit Decisioning.
            </h1>

            {/* Subtitle */}
            <p className="text-body max-w-lg" style={{
              animation: 'fadeInUp 0.8s ease-out 0.2s both'
            }}>
              Vitto replaces your fragmented LOS, LMS, and Collections stack with a single AI-native infrastructure — purpose-built for Banks, NBFCs, and Microfinance Institutions. Not retrofitted. Not patched. Built from scratch.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4" style={{
              animation: 'fadeInUp 0.8s ease-out 0.3s both'
            }}>
              <Link href="/signup">
                <button className="btn-primary">
                  Book a Demo →
                </button>
              </Link>
              <Link href="/platform">
              <button className="btn-ghost">
                Explore Platform
              </button>
              </Link>
            </div>

            {/* Trust Bar */}
            <div style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
              marginTop: '32px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              color: 'var(--text-muted)',
              animation: 'fadeInUp 0.8s ease-out 0.4s both',
              flexWrap: 'wrap'
            }}>
              <span>🔒 SOC 2 Type II</span>
              <span>·</span>
              <span>RBI-Aligned Explainability</span>
              <span>·</span>
              <span>12+ Institutions Live</span>
            </div>
          </div>

          {/* Right Column - Dashboard Card */}
          <div className="relative" style={{
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-mid)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px var(--border-dim), inset 0 1px 0 rgba(255,255,255,0.05)'
            }}>
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  fontWeight: 600,
                  color: 'var(--green)'
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'var(--green)',
                    borderRadius: '50%',
                    animation: 'pulse-dot 1s infinite'
                  }} />
                  CREDIT OPS · LIVE
                </div>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  color: 'var(--text-muted)'
                }}>
                  {time}
                </div>
              </div>

              {/* Divider */}
              <div style={{
                height: '1px',
                backgroundColor: 'var(--border-dim)',
                margin: '16px 0'
              }} />

              {/* Metrics */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 0
              }}>
                {/* Col 1 */}
                <div style={{ borderRight: '1px solid var(--border-dim)', paddingRight: '16px' }}>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '9px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '8px'
                  }}>
                    Decisions Today
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    {count.toLocaleString()}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--green)'
                  }}>
                    ↑ 12% vs yesterday
                  </div>
                </div>

                {/* Col 2 */}
                <div style={{ borderRight: '1px solid var(--border-dim)', paddingLeft: '16px', paddingRight: '16px' }}>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '9px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '8px'
                  }}>
                    Avg Latency
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: 'var(--red)',
                    marginBottom: '4px'
                  }}>
                    1.2s
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    color: 'var(--text-muted)',
                    marginBottom: '4px'
                  }}>
                    ────────████░░
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--green)'
                  }}>
                    ↓ 0.4s this week
                  </div>
                </div>

                {/* Col 3 */}
                <div style={{ paddingLeft: '16px' }}>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '9px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '8px'
                  }}>
                    Portfolio Risk
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    2.1%
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--green)'
                  }}>
                    ↓ 0.3% MoM
                  </div>
                </div>
              </div>

              {/* Mini Chart */}
              <div style={{ marginTop: '20px', display: 'flex', alignItems: 'flex-end', gap: '4px', height: '60px' }}>
                {[60, 40, 50, 70, 45, 65, 100].map((height, i) => (
                  <div key={i} style={{
                    flex: 1,
                    height: `${height}%`,
                    backgroundColor: i === 6 ? 'var(--red)' : 'rgba(198, 40, 40, 0.4)',
                    borderRadius: '3px 3px 0 0'
                  }} />
                ))}
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '9px',
                color: 'var(--text-muted)',
                marginTop: '8px'
              }}>
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                  <span key={day + '-' + idx}>{day}</span>
                ))}
              </div>

              {/* Module Pills */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                marginTop: '16px'
              }}>
                {['ML Model', 'Rule Engine', 'Fraud Intel', 'Collections AI', 'Agentic AI'].map((pill) => (
                  <div key={pill} style={{
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-dim)',
                    borderRadius: '4px',
                    padding: '4px 10px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '9px',
                    color: 'var(--text-secondary)'
                  }}>
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
