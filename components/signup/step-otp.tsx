'use client';

import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface StepOTPProps {
  email: string;
  otp: string[];
  onOtpChange: (index: number, value: string) => void;
  onOtpKeyDown: (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void;
  onVerify: () => Promise<void>;
  onResend: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function StepOTP({
  email,
  otp,
  onOtpChange,
  onOtpKeyDown,
  onVerify,
  onResend,
  isLoading,
  error
}: StepOTPProps) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const isComplete = otp.every(digit => digit !== '');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fade-in-up space-y-6">
      <div>
        <p className="text-sm text-muted-foreground mb-4">
          We&apos;ve sent a 6-digit code to <span className="font-semibold text-foreground">{email}</span>
        </p>

        <div className="flex justify-between gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => onOtpChange(index, e.target.value)}
              onKeyDown={(e) => onOtpKeyDown(index, e)}
              className="w-12 h-12 text-center text-2xl font-bold border border-border/40 rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              disabled={isLoading}
              autoFocus={index === 0}
            />
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Code expires in {minutes}:{seconds.toString().padStart(2, '0')}
        </div>

        {error && (
          <p className="mt-2 text-sm text-destructive text-center">
            {error}
          </p>
        )}
      </div>

      <Button
        onClick={onVerify}
        disabled={!isComplete || isLoading}
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {isLoading ? 'Verifying...' : 'Verify Code'}
      </Button>

      <button
        onClick={onResend}
        disabled={isLoading || timeLeft > 240}
        className="w-full py-2 text-sm text-accent hover:text-accent/80 disabled:text-muted-foreground transition-colors"
      >
        {timeLeft > 240 ? `Resend in ${Math.floor((300 - timeLeft) / 60)} min` : 'Resend Code'}
      </button>
    </div>
  );
}
