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
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Header />

      <section style={{
        padding: '64px 0',
        borderBottom: '1px solid var(--border-dim)',
        background: 'var(--bg-surface)'
      }}>
        <div className="container-vitto" style={{ maxWidth: 640 }}>
          {/* Step Indicator */}
          {step !== 'success' && (
            <div style={{ marginBottom: 48 }}>
              <StepIndicator
                currentStep={getStepNumber()}
                totalSteps={3}
                labels={['Email', 'Verify', 'Details']}
              />
            </div>
          )}

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
              <h1 style={{ fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                Join Vitto
              </h1>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 48 }}>
                {step === 'email' && 'Start your free trial of our AI-first banking infrastructure.'}
                {step === 'otp' && 'Verify your email with the code we sent.'}
                {step === 'organization' && 'Tell us about your institution.'}
              </p>

              {/* Step Content */}
              <div style={{ background: 'var(--bg-base)', border: '1px solid var(--border-dim)', borderRadius: 12, padding: 32 }}>
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
        <section style={{ padding: '64px 0', background: 'rgba(107,0,0,0.06)' }}>
          <div className="container-vitto">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', maxWidth: 900 }}>
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
                <div key={index}>
                  <h3 style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>{benefit.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{benefit.description}</p>
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
