'use client';

import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{
      background: '#04040F',
      borderTop: '1px solid var(--border-dim)',
      paddingTop: '96px',
      paddingBottom: '48px'
    }}>
      <div className="container-vitto px-4 md:px-0">
        {/* Top Section - 4 Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '48px'
        }}>
          {/* Col 1 - Brand */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 800,
              marginBottom: '16px',
              color: 'white'
            }}>
              <img
                src="/partner-logos/vitto-icon.png"
                alt="Vitto Logo"
                style={{ width: 36, height: 36, borderRadius: 8, background: 'white', display: 'block' }}
              />
              <span>VITTO</span>
            </div>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '13px',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              AI-Native Digital Credit Infrastructure
            </p>

            {/* Newsletter */}
            <div>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '12px',
                marginBottom: '12px'
              }}>
                Stay updated on AI in BFSI
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  minWidth: 0,
                }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    flex: '1 1 160px',
                    minWidth: 0,
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-mid)',
                    borderRadius: '6px',
                    color: 'var(--text-primary)',
                    padding: '10px 16px',
                    fontSize: '13px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
                <button
                  className="btn-primary"
                  style={{
                    padding: '10px 16px',
                    flex: '0 0 auto',
                    minWidth: 120,
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Col 2 - Pages */}
          <div>
            <h4 style={{
              color: 'var(--text-primary)',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '16px',
              textTransform: 'uppercase',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              Pages
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About / Why Vitto', href: '/about' },
                { label: 'Contact / Request Demo', href: '/contact' },
                { label: 'Self Sign-Up', href: '/signup' },
              ].map((item) => (
                <li key={item.label} style={{ marginBottom: '12px' }}>
                  <Link href={item.href} style={{
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '13px',
                    transition: 'color 200ms'
                  }} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Platform */}
          <div>
            <h4 style={{
              color: 'var(--text-primary)',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '16px',
              textTransform: 'uppercase',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              Platform
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'AI-First Platform', href: '/platform' },
                { label: 'Full Stack Automation', href: '/automation' },
                { label: 'Collections Intelligence', href: '/collections' },
                { label: 'Agentic AI', href: '/agentic-ai' },
                { label: 'API Infrastructure', href: '/api' },
              ].map((item) => (
                <li key={item.label} style={{ marginBottom: '12px' }}>
                  <Link href={item.href} style={{
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '13px',
                    transition: 'color 200ms'
                  }} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Partners */}
          <div>
            <h4 style={{
              color: 'var(--text-primary)',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '16px',
              textTransform: 'uppercase',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              Partners
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['CIBIL', 'Experian', 'CRIF', 'DigiLocker', 'Razorpay'].map((name) => (
                <li key={name} style={{ marginBottom: '12px' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{name}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '8px', marginTop: '18px' }}>
              <a
                href="https://linkedin.com/company/vittoai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '28px',
                  height: '28px',
                  background: 'var(--bg-elevated)',
                  border: 'none',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  transition: 'color 200ms'
                }}
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://twitter.com/vittoai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '28px',
                  height: '28px',
                  background: 'var(--bg-elevated)',
                  border: 'none',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  transition: 'color 200ms'
                }}
                className="social-icon"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div style={{
          borderTop: '1px solid var(--border-dim)',
          paddingTop: '20px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: 'var(--text-muted)',
          gap: '16px'
        }}>
          <p>© 2026 Vitto Technologies Pvt. Ltd.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/privacy-policy" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms-of-service" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--text-primary);
        }
        .social-icon:hover {
          color: var(--text-primary);
          background: var(--bg-card);
        }
      `}</style>
    </footer>
  );
}
