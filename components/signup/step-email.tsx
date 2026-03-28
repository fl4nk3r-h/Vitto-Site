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
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="you@company.com"
            className="w-full pl-10 pr-4 py-2 border border-border/40 rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            disabled={isLoading}
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
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {isLoading ? 'Sending OTP...' : '        Continue'}
      </Button>
    </div>
  );
}
