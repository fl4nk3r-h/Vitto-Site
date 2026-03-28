import { useState, useCallback } from 'react';

export function useOTP(length: number = 6) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback((index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    if (!/^\d*$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }

    setError(null);
  }, [otp, length]);

  const handleKeyDown = useCallback((index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }, [otp]);

  const getOtpString = useCallback(() => {
    return otp.join('');
  }, [otp]);

  const isComplete = otp.every(digit => digit !== '');

  const reset = useCallback(() => {
    setOtp(new Array(length).fill(''));
    setError(null);
  }, [length]);

  return {
    otp,
    error,
    isLoading,
    setError,
    setIsLoading,
    handleChange,
    handleKeyDown,
    getOtpString,
    isComplete,
    reset
  };
}
