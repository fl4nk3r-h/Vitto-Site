'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StepIndicator } from '@/components/ui/step-indicator';
import { StepEmail } from '@/components/signup/step-email';
import { StepOTP } from '@/components/signup/step-otp';
import { StepOrganization } from '@/components/signup/step-organization';
import { useState } from 'react';

import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useOTP } from '@/lib/hooks/useOTP';

type Step = 'email' | 'otp' | 'organization' | 'success';

export default function SignUpPage() {
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { otp, handleChange: handleOtpChange, handleKeyDown: handleOtpKeyDown } = useOTP();
  const [formData, setFormData] = useState({
    institutionName: '',
    institutionType: '',
    city: '',
    phoneNumber: '',
    loanBookSize: ''
  });

  const handleSendOTP = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error('Failed to send OTP');
      }

      setStep('otp');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error('Failed to resend OTP');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to resend OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const otpString = otp.join('');
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: otpString })
      });

      if (!response.ok) {
        throw new Error('Invalid OTP');
      }

      const data = await response.json();
      setSessionToken(data.sessionToken);
      setStep('organization');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to verify OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCreateAccount = async () => {
    if (!sessionToken) {
      setError('Session expired. Please start over.');
      setStep('email');
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`
        },
        body: JSON.stringify({
          email,
          institutionName: formData.institutionName,
          institutionType: formData.institutionType,
          city: formData.city,
          phoneNumber: formData.phoneNumber,
          loanBookSize: formData.loanBookSize
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create account');
      }

      setStep('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  const getStepNumber = () => {
    switch (step) {
      case 'email': return 1;
      case 'otp': return 2;
      case 'organization': return 3;
      case 'success': return 4;
      default: return 1;
    }
  };


  return (
    <main className="relative min-h-screen bg-navy-900 flex flex-col">
      {/* Background gradient, radial glow, and grid overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#181A20] via-[#0a1833] to-[#2d0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(211,47,47,0.13)_0%,transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'repeating-linear-gradient(0deg,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_40px),repeating-linear-gradient(90deg,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_40px)'}} />
        {/* Radial highlight behind card */}
        <div className="absolute left-1/2 top-[32%] -translate-x-1/2 -z-10 w-[520px] h-[340px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10)_0%,rgba(211,47,47,0.10)_60%,transparent_100%)] blur-2xl opacity-80" />
      </div>
      <Header />

      <section className="py-16 border-b border-border bg-transparent flex flex-col items-center">
        <div className="w-full max-w-[520px] px-4 mx-auto">


          {/* Content */}
          {step === 'success' ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                <CheckCircle2 style={{ width: 64, height: 64, color: 'var(--red)' }} />
              </div>
              <h1 style={{ fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16 }}>
                Welcome to Vitto!
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: 32 }}>
                Your account has been created successfully. A confirmation email has been sent to <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{email}</span>.
              </p>

              <div style={{ background: 'rgba(107,0,0,0.06)', border: '1px solid var(--border-dim)', borderRadius: 12, padding: 24, marginBottom: 32, textAlign: 'left' }}>
                <h3 style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 16 }}>What's Next?</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, color: 'var(--text-secondary)', paddingLeft: 0, listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ color: 'var(--red)', fontWeight: 700 }}>1</span>
                    <span>Check your email for your account confirmation</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ color: 'var(--red)', fontWeight: 700 }}>2</span>
                    <span>Log in to the Vitto dashboard</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ color: 'var(--red)', fontWeight: 700 }}>3</span>
                    <span>Start your free trial with access to all 6 core modules</span>
                  </li>
                </ul>
              </div>

              <Link href="/">
                <button style={{
                  background: 'white',
                  color: 'var(--red)',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Return to Home
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 bg-gradient-to-br from-white via-red-200 to-red-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
                Join Vitto
              </h1>
              <p className="text-base sm:text-lg mb-12 text-muted-foreground font-medium max-w-xl mx-auto text-center">
                {step === 'email' && 'Start your free trial of our AI-first banking infrastructure.'}
                {step === 'otp' && 'Verify your email with the code we sent.'}
                {step === 'organization' && 'Tell us about your institution.'}
              </p>

              {/* Step Content - Glassmorphism Card with integrated progress */}
              <div className="relative bg-white/10 border border-white/20 rounded-2xl shadow-xl shadow-black/30 backdrop-blur-[12px] px-6 py-8 sm:px-10 sm:py-10 transition-all duration-300 group focus-within:shadow-red-glow focus-within:border-red-500/60" style={{boxShadow:'0 4px 32px 0 rgba(211,47,47,0.10), 0 2px 16px 0 rgba(211,47,47,0.10)'}}>
                <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{background:'linear-gradient(120deg,rgba(255,255,255,0.08) 0%,rgba(211,47,47,0.10) 100%)',zIndex:0}} />
                <div className="relative z-10">
                  {/* Progress indicator inside card */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-muted-foreground mb-2 text-left">
                      Step {getStepNumber()} of 3
                    </div>
                    <div className="w-full h-2 rounded bg-white/10 overflow-hidden">
                      <div
                        className="h-2 rounded bg-gradient-to-r from-red-500 to-red-400 transition-all duration-300"
                        style={{ width: `${Math.min((getStepNumber() - 1) / 2 * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                  {/* Step form content */}
                  {step === 'email' && (
                    <StepEmail
                      email={email}
                      onEmailChange={setEmail}
                      onNext={handleSendOTP}
                      isLoading={isLoading}
                      error={error}
                    />
                  )}

                  {step === 'otp' && (
                    <StepOTP
                      email={email}
                      otp={otp}
                      onOtpChange={handleOtpChange}
                      onOtpKeyDown={handleOtpKeyDown}
                      onVerify={handleVerifyOTP}
                      onResend={handleResendOTP}
                      isLoading={isLoading}
                      error={error}
                    />
                  )}

                  {step === 'organization' && (
                    <StepOrganization
                      formData={formData}
                      onChange={handleFormChange}
                      onSubmit={handleCreateAccount}
                      isLoading={isLoading}
                      error={error}
                    />
                  )}
                </div>
              </div>

              {/* Back Link */}
              {(step === 'otp' || step === 'organization') && (
                <button
                  onClick={() => {
                    if (step === 'otp') {
                      setStep('email');
                    } else {
                      setStep('otp');
                    }
                    setError(null);
                  }}
                  style={{
                    marginTop: 16,
                    fontSize: 14,
                    color: 'var(--text-secondary)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseOut={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  ← Back
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      {step !== 'success' && (
        <section className="py-16 bg-transparent">
          <div className="container-vitto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                {
                  title: '6 Core Modules',
                  description: 'SLM Core, RAG, Agents, Compliance, Monitoring, Integration'
                },
                {
                  title: '29+ Operational Features',
                  description: 'Data, Models, Integration, Compliance, Observability layers'
                },
                {
                  title: 'Production-Ready',
                  description: 'Deploy in hours. BFSI compliant. 99.99% uptime SLA'
                }
              ].map((benefit, index) => (
                <div key={index} className="rounded-xl bg-white/5 border border-white/10 p-6 shadow-md shadow-red-500/5 flex flex-col items-start transition-all duration-200 hover:shadow-red-glow group">
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-red-500 transition-colors duration-200">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground/90">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
