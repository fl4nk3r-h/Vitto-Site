import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GradientText } from '@/components/ui/gradient-text';

import Link from 'next/link';

import { Sparkles, Shield, Layers, Zap, Rocket, Cloud, Users, HeartHandshake } from 'lucide-react';
import '@/styles/about-responsive.css';

export default function AboutPage() {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
            <Header />

            {/* Hero with blueprint overlay and premium headline */}
            <section style={{
                padding: '96px 0',
                borderBottom: '1px solid var(--border-dim)',
                background: 'var(--bg-surface)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Blueprint grid overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px)',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    background: 'radial-gradient(ellipse at 70% 20%, rgba(255,255,255,0.07) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div className="container-vitto" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '48px',
                        fontWeight: 700,
                        letterSpacing: '-0.05em',
                        color: 'var(--text-primary)',
                        marginBottom: '24px',
                        lineHeight: 1.15,
                        textShadow: '0 2px 16px rgba(10,24,51,0.10)'
                    }}>
                        About <GradientText>Vitto</GradientText>
                    </h1>
                    <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '20px',
                        color: 'var(--text-secondary)',
                        marginBottom: '40px',
                        lineHeight: 1.6
                    }}>
                        Vitto is a next-generation fintech SaaS platform empowering banks and financial institutions to launch, automate, and scale digital products with unprecedented speed and security.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section style={{ padding: '96px 0', borderBottom: '1px solid var(--border-dim)', background: 'var(--bg-base)' }}>
                <div className="container-vitto" style={{ maxWidth: 900 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <div style={{ flex: 1, minWidth: 320 }}>
                            <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--red)', marginBottom: '16px', fontFamily: 'Inter, sans-serif' }}>Our Mission</h2>
                            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                To accelerate digital transformation in banking by providing modular, secure, and AI-powered solutions that drive efficiency, compliance, and customer delight.
                            </p>
                        </div>
                        <div style={{ flex: 1, minWidth: 320 }}>
                            <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--red)', marginBottom: '16px', fontFamily: 'Inter, sans-serif' }}>Our Vision</h2>
                            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                To be the global standard for composable banking technology, enabling every institution to innovate at fintech speed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Vitto */}
            <section style={{ padding: '96px 0', borderBottom: '1px solid var(--border-dim)', background: 'var(--bg-surface)' }}>
                <div className="container-vitto" style={{ maxWidth: 1000 }}>
                    <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '48px', textAlign: 'center' }}>
                        Why Choose Vitto?
                    </h2>
                    <div
                        className="about-why-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '32px',
                            margin: 0
                        }}
                    >
                        {[
                            {
                                title: 'AI-Driven Automation',
                                description: 'Automate complex workflows, from onboarding to compliance, with intelligent agents and RAG pipelines.',
                                icon: Sparkles
                            },
                            {
                                title: 'Bank-Grade Security',
                                description: 'Enterprise security, audit trails, and compliance built-in. Trusted by leading banks.',
                                icon: Shield
                            },
                            {
                                title: 'Modular & Composable',
                                description: 'Mix, match, and extend modules to fit your unique business needs. No vendor lock-in.',
                                icon: Layers
                            },
                            {
                                title: 'Lightning Fast Deployment',
                                description: 'Go live in weeks, not months. Pre-built solutions and one-click deployment.',
                                icon: Rocket
                            },
                            {
                                title: 'Scalable & Resilient',
                                description: 'Cloud-native, multi-region, and high-availability architecture for mission-critical workloads.',
                                icon: Cloud
                            },
                            {
                                title: 'Customer-Centric Design',
                                description: 'Intuitive interfaces and personalized experiences for both staff and end-customers.',
                                icon: HeartHandshake
                            }
                        ].map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={idx}
                                    style={{
                                        background: 'var(--bg-base)',
                                        borderRadius: '16px',
                                        boxShadow: '0 2px 24px 0 rgba(10,24,51,0.06)',
                                        padding: '32px',
                                        border: '1px solid var(--border-dim)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        minWidth: 0,
                                        overflow: 'hidden',
                                    }}
                                >
                                    <div style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        background: 'rgba(211,47,47,0.10)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: 18,
                                        boxShadow: '0 2px 8px 0 rgba(211,47,47,0.06)'
                                    }}>
                                        <Icon style={{ width: 22, height: 22, color: 'var(--red)' }} />
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px', marginTop: 0 }}>{feature.title}</h3>
                                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA (premium style) */}
            <section style={{
                padding: '96px 0',
                background: 'linear-gradient(120deg, #0a1833 60%, #6B0000 100%)',
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
                        Experience the Future of Banking
                    </h2>

                    <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '18px',
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: '40px',
                        maxWidth: '520px',
                        margin: '0 auto 40px'
                    }}>
                        Discover how Vitto can transform your digital banking journey. Book a demo or get started today.
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
                                Explore Platform
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
