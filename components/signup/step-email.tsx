'use client';

import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

interface StepEmailProps {
  email: string;
  onEmailChange: (email: string) => void;
  onNext: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function StepEmail({ email, onEmailChange, onNext, isLoading, error }: StepEmailProps) {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="fade-in-up space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Business Email
        </label>
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none transition-colors duration-200 group-focus-within:text-red-500" />
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="you@company.com"
            className="w-full pl-12 pr-4 py-3 text-base border border-white/10 rounded-xl bg-white/5 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:shadow-[0_0_0_2px_#D32F2F33] transition-all duration-200 backdrop-blur-sm shadow-sm hover:shadow-red-glow"
            disabled={isLoading}
            autoComplete="email"
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-destructive">
            {error}
          </p>
        )}
      </div>

      <Button
        onClick={onNext}
        disabled={!isValidEmail || isLoading}
        className="w-full py-3 text-base font-semibold rounded-xl bg-gradient-to-br from-red-600 to-red-500 text-white shadow-lg shadow-red-500/10 hover:scale-[1.02] hover:shadow-red-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/40 disabled:opacity-60 disabled:shadow-none disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending OTP...' : 'Continue'}
      </Button>
    </div>
  );
}
