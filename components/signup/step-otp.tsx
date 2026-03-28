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
              className="w-14 h-14 text-center text-2xl font-bold border border-white/10 rounded-xl bg-white/5 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:shadow-[0_0_0_2px_#D32F2F33] transition-all duration-200 backdrop-blur-sm shadow-sm hover:shadow-red-glow"
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
        className="w-full py-3 text-base font-semibold rounded-xl bg-gradient-to-br from-red-600 to-red-500 text-white shadow-lg shadow-red-500/10 hover:scale-[1.02] hover:shadow-red-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/40 disabled:opacity-60 disabled:shadow-none disabled:cursor-not-allowed"
      >
        {isLoading ? 'Verifying...' : 'Verify Code'}
      </Button>

      <button
        onClick={onResend}
        disabled={isLoading || timeLeft > 240}
        className="w-full py-2 text-sm font-medium rounded-lg text-red-500 hover:text-white hover:bg-red-500/90 transition-all duration-200 disabled:text-muted-foreground disabled:bg-transparent disabled:cursor-not-allowed"
      >
        {timeLeft > 240 ? `Resend in ${Math.floor((300 - timeLeft) / 60)} min` : 'Resend Code'}
      </button>
    </div>
  );
}
