"use client";
import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import '@/styles/collections-responsive.css';
import { GradientText } from '@/components/ui/gradient-text';
import { GlowCard } from '@/components/ui/glow-card';
import { CheckCircle2, TrendingUp, Sparkles, Target, Zap, Link2, ClipboardList, Palette, Globe } from 'lucide-react';
import Link from 'next/link';

const COLLECTIONS = [
  {
    title: 'Commercial Banking',
    description: 'Loan origination, credit decisions, and relationship management for large enterprises.',
    modules: [
      'Loan Processing Agent',
      'Risk Assessment Model',
      'Document Classification',
      'Compliance Validator',
      'Fraud Detection'
    ],
    impact: {
      processing: '85% faster',
      accuracy: '94% accuracy',
      cost: '70% reduction'
    },
    gradient: 'linear-gradient(135deg, rgba(211,47,47,0.1) 0%, rgba(139,0,0,0.05) 100%)'
  },
  {
    title: 'Retail Banking',
    description: 'Customer service, product recommendations, and financial advice automation.',
    modules: [
      'Customer Service Agent',
      'Product Recommendation Engine',
      'Account Analyzer',
      'Dispute Resolution',
      'Know-Your-Customer (KYC) Agent'
    ],
    impact: {
      processing: '24/7 availability',
      accuracy: '96% satisfaction',
      cost: '60% reduction'
    },
    gradient: 'linear-gradient(135deg, rgba(10,24,51,0.08) 0%, rgba(10,24,51,0.03) 100%)'
  },
  {
    title: 'Risk & Compliance',
    description: 'AML screening, regulatory reporting, and audit trail management.',
    modules: [
      'AML Screening Agent',
      'Regulatory Reporting',
      'Audit Logging System',
      'Policy Validation',
      'Compliance Monitoring'
    ],
    impact: {
      processing: '99.9% detection',
      accuracy: '100% audit coverage',
      cost: '50% reduction'
    },
    gradient: 'linear-gradient(135deg, rgba(211,47,47,0.1) 0%, rgba(139,0,0,0.05) 100%)'
  },
  {
    title: 'Collections & Recovery',
    description: 'Payment negotiation, delinquency prediction, and recovery optimization.',
    modules: [
      'Collections Agent',
      'Payment Predictor',
      'Delinquency Scorer',
      'Outreach Optimizer',
      'Dispute Analyzer'
    ],
    impact: {
      processing: '3x faster',
      accuracy: '92% prediction',
      cost: '65% reduction'
    },
    gradient: 'linear-gradient(135deg, rgba(10,24,51,0.08) 0%, rgba(10,24,51,0.03) 100%)'
  },
  {
    title: 'Trade Finance',
    description: 'Document processing, letter of credit automation, and trade compliance.',
    modules: [
      'Document Analyzer',
      'LC Issuer Agent',
      'Trade Compliance Checker',
      'Invoice Processor',
      'Settlement Monitor'
    ],
    impact: {
      processing: '90% automation',
      accuracy: '99% correctness',
      cost: '75% reduction'
    },
    gradient: 'linear-gradient(135deg, rgba(211,47,47,0.1) 0%, rgba(139,0,0,0.05) 100%)'
  },
  {
    title: 'Mortgage Services',
    description: 'Application processing, appraisal review, and underwriting automation.',
    modules: [
      'Mortgage Agent',
      'Appraisal Analyzer',
      'Underwriting Assistant',
      'Document Verifier',
      'Compliance Checker'
    ],
    impact: {
      processing: '80% faster',
      accuracy: '95% accuracy',
      cost: '72% reduction'
    },
    gradient: 'linear-gradient(135deg, rgba(10,24,51,0.08) 0%, rgba(10,24,51,0.03) 100%)'
  }
];

// Premium Collection Card Component
function CollectionCard({ collection, index }: { collection: typeof COLLECTIONS[0], index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div
        style={{
          position: 'absolute',
          inset: -2,
          background: 'linear-gradient(135deg, rgba(211,47,47,0.4), rgba(139,0,0,0.2))',
          borderRadius: 20,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          filter: 'blur(12px)',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          background: 'var(--bg-surface)',
          borderRadius: 16,
          border: '1px solid var(--border-dim)',
          padding: '32px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: isHovered
            ? '0 24px 48px rgba(211,47,47,0.15), 0 8px 16px rgba(10,24,51,0.1)'
            : '0 4px 24px rgba(10,24,51,0.08)',
          zIndex: 1,
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 120,
            background: collection.gradient,
            borderRadius: '16px 16px 0 0',
            opacity: 0.6,
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              background: 'rgba(211,47,47,0.08)',
              borderRadius: '8px',
              marginBottom: '16px',
            }}>
              <Sparkles size={14} style={{ color: 'var(--red)' }} />
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--red)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Industry Solution
              </span>
            </div>

            <h3 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}>
              {collection.title}
            </h3>

            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}>
              {collection.description}
            </p>
          </div>

          {/* Modules Section */}
          <div style={{
            flex: 1,
            borderTop: '2px solid var(--border-dim)',
            paddingTop: '24px',
            marginTop: '24px',
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--red)',
              textTransform: 'uppercase',
              marginBottom: '16px',
              letterSpacing: '0.1em',
            }}>
              Included Modules
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '24px',
            }}>
              {collection.modules.map((module, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 0',
                  }}
                >
                  <div style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: 'rgba(211,47,47,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <CheckCircle2 size={12} style={{ color: 'var(--red)' }} />
                  </div>
                  <span style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                  }}>
                    {module}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(211,47,47,0.05) 0%, rgba(139,0,0,0.02) 100%)',
            borderRadius: '12px',
            padding: '20px',
            border: '1px solid rgba(211,47,47,0.1)',
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--red)',
              textTransform: 'uppercase',
              marginBottom: '12px',
              letterSpacing: '0.1em',
            }}>
              Typical Impact
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              {Object.entries(collection.impact).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <TrendingUp size={16} style={{ color: 'var(--red)', flexShrink: 0 }} />
                  <span style={{
                    fontSize: '14px',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                  }}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>
                  <span style={{
                    fontSize: '14px',
                    color: 'var(--red)',
                    fontWeight: 700,
                  }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Responsive Features Component
function ResponsiveFeatures() {
  const features = [
    {
      title: 'Mix & Match Modules',
      description: 'Use all modules from a collection or pick and choose to build your own custom solution.',
      icon: Target,
    },
    {
      title: 'Custom Workflows',
      description: 'Define your own approval chains, escalation logic, and decision rules tailored to your processes.',
      icon: Zap,
    },
    {
      title: 'Data Integrations',
      description: 'Connect seamlessly to your core banking, CRM, and data warehouse systems.',
      icon: Link2,
    },
    {
      title: 'Policy Configuration',
      description: 'Encode your lending policies, risk parameters, and compliance rules with precision.',
      icon: ClipboardList,
    },
    {
      title: 'Model Fine-Tuning',
      description: 'Adapt domain models to your specific data and use cases for optimal performance.',
      icon: Palette,
    },
    {
      title: 'Extended Deployment',
      description: 'Multi-region, high-availability, or edge deployment options for global reach.',
      icon: Globe,
    }
  ];

  // Global icon style for feature emojis
  const iconStyle = {
    fontSize: '32px',
    marginBottom: '16px',
    color: '#D32F2F', // Use primary red
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
  };

  return (
    <div
      className="features-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
      }}
    >
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} index={index} iconStyle={iconStyle} />
      ))}
    </div>
  );
}

function FeatureCard({ feature, index, iconStyle }: { feature: any, index: number, iconStyle: React.CSSProperties }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const Icon = feature.icon;
  return (
    <div
      style={{
        position: 'relative',
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          background: 'var(--bg-surface)',
          borderRadius: '16px',
          padding: '28px',
          border: '2px solid',
          borderColor: isHovered ? 'rgba(211,47,47,0.2)' : 'var(--border-dim)',
          transition: 'all 0.3s ease',
          boxShadow: isHovered
            ? '0 12px 32px rgba(211,47,47,0.12)'
            : '0 4px 16px rgba(10,24,51,0.06)',
        }}
      >
        <Icon style={iconStyle} color="#D32F2F" size={32} />

        <h3 style={{
          fontSize: '18px',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '12px',
          letterSpacing: '-0.01em',
        }}>
          {feature.title}
        </h3>

        <p style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
        }}>
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Header />

      {/* Premium Hero Section */}
      <section style={{
        padding: '120px 0 80px',
        background: 'var(--bg-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '140%',
          height: '100%',
          background: 'radial-gradient(ellipse at center top, rgba(211,47,47,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container-vitto" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(211,47,47,0.08)',
            borderRadius: '24px',
            marginBottom: '24px',
            border: '1px solid rgba(211,47,47,0.15)',
          }}>
            <Sparkles size={16} style={{ color: 'var(--red)' }} />
            <span style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--red)',
              letterSpacing: '0.05em',
            }}>
              ENTERPRISE SOLUTIONS
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '24px',
            lineHeight: 1.1,
          }}>
            Industry-Ready
            <br />
            <GradientText>Banking Collections</GradientText>
          </h1>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(16px, 2vw, 22px)',
            color: 'var(--text-secondary)',
            marginBottom: '48px',
            lineHeight: 1.6,
            maxWidth: '720px',
            margin: '0 auto 48px',
          }}>
            Pre-configured collections of modules, agents, and workflows tailored to specific banking segments. Deploy proven solutions in days, not months.
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Link href="/signup">
              <button style={{
                background: 'linear-gradient(135deg, #D32F2F 0%, #8B0000 100%)',
                color: 'white',
                padding: '16px 36px',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                border: 'none',
                boxShadow: '0 8px 24px rgba(211,47,47,0.25)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(211,47,47,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(211,47,47,0.25)';
                }}
              >
                Explore Collections
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Grid - Premium Responsive */}
      <section style={{
        padding: '80px 0',
        background: 'var(--bg-base)',
      }}>
        <div className="container-vitto">
          <div
            className="collections-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '32px',
            }}
          >
            {COLLECTIONS.map((collection, idx) => (
              <CollectionCard key={idx} collection={collection} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Premium Timeline */}
      <section style={{
        padding: '80px 0',
        background: 'var(--bg-surface)',
      }}>
        <div className="container-vitto">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}>
              How Collections Work
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              From selection to production in four simple steps
            </p>
          </div>

          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'grid',
            gap: '24px',
          }}>
            {[
              {
                step: 1,
                title: 'Choose Your Collection',
                description: 'Select the collection that matches your business segment: Commercial Banking, Retail, Risk & Compliance, etc.'
              },
              {
                step: 2,
                title: 'Configure for Your Bank',
                description: 'Customize the included modules with your policies, workflows, and integration requirements.'
              },
              {
                step: 3,
                title: 'Deploy to Production',
                description: 'One-click deployment with built-in monitoring, compliance tracking, and observability.'
              },
              {
                step: 4,
                title: 'Measure Impact',
                description: 'Track KPIs: processing time, accuracy, cost reduction, compliance coverage, and user adoption.'
              }
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: 'var(--bg-surface)',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '2px solid var(--border-dim)',
                  boxShadow: '0 4px 16px rgba(10,24,51,0.06)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(211,47,47,0.3)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(211,47,47,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-dim)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(10,24,51,0.06)';
                }}
              >
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #D32F2F 0%, #8B0000 100%)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '24px',
                    flexShrink: 0,
                    boxShadow: '0 4px 16px rgba(211,47,47,0.3)',
                  }}>
                    {item.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                      letterSpacing: '-0.01em',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Features */}
      <section style={{
        padding: '80px 0',
        background: 'var(--bg-base)',
      }}>
        <div className="container-vitto">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}>
              Fully Customizable
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Tailor every aspect to your exact requirements
            </p>
          </div>

          <ResponsiveFeatures />
        </div>
      </section>

      {/* CTA - Home Page Style */}
      <section style={{
        padding: '96px 0',
        background: 'linear-gradient(120deg, #0a1833 60%, #6B0000 100%)',
        position: 'relative',
        overflow: 'hidden',
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
            Ready to rebuild your<br />collections infrastructure?
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

      <Footer />
    </main>
  );
}