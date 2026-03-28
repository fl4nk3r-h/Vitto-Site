'use client';


import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b" style={{
      backgroundColor: 'rgba(7, 7, 26, 0.90)',
      backdropFilter: 'blur(20px)',
      borderBottomColor: 'var(--border-dim)'
    }}>
      <div className="container-vitto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <img
            src="/partner-logos/vitto-icon.png"
            alt="Vitto Logo"
            style={{ width: 28, height: 28, borderRadius: 6, marginRight: 8, background: 'white' }}
          />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '0.02em'
          }}>
            VITTO
          </span>
          <span style={{
            width: '8px',
            height: '8px',
            backgroundColor: 'var(--red)',
            borderRadius: '50%',
            animation: 'pulse-dot 2s infinite',
            display: 'inline-block'
          }} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Platform', 'Automation', 'Agentic AI', 'Collections', 'API', 'About'].map((item, idx) => (
            <Link
              key={item + '-' + idx}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="nav-link"
              style={{
                fontSize: '14px',
                color: '#94a3b8',
                textDecoration: 'none',
                borderRadius: '6px',
                padding: '6px 10px',
                position: 'relative',
                transition: 'all 0.25s ease',
                display: 'block',
              }}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Link href="/signup">
          <button className="hidden lg:block btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>
            Book a Demo
          </button>
        </Link>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            className="fixed inset-0 top-16 z-[100] flex flex-col gap-4 p-6 bg-[var(--bg-base)] overflow-y-auto lg:hidden"
            style={{
              borderBottomColor: 'var(--border-dim)',
              borderBottom: '1px solid var(--border-dim)',
              minHeight: 'calc(100vh - 4rem)',
              maxHeight: 'calc(100vh - 4rem)'
            }}
          >
            {['Platform', 'Automation', 'Agentic AI', 'Collections', 'API', 'About'].map((item, idx) => (
              <Link
                key={item + '-' + idx}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '16px',
                  padding: '12px 0'
                }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link href="/signup">
              <button className="btn-primary w-full mt-4">
                Book a Demo
              </button>
            </Link>


          </nav>
        )}
      </div>
      <style>{`
        .nav-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
          border-radius: 6px;
        }
        .nav-link:hover .nav-underline {
          opacity: 1;
          scale: 1;
        }
        .nav-underline {
          opacity: 0;
          scale: 0.75;
          transform-origin: center;
        }
      `}</style>
    </header>
  );
}
