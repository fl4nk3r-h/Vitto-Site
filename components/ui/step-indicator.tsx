'use client';


import { CheckCircle2 } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

export function StepIndicator({ currentStep, totalSteps, labels = [] }: StepIndicatorProps) {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Progress Line (background) */}
      <div className="relative w-full max-w-[480px] flex items-center justify-between h-16">
        {/* Progress Line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2.5px] bg-gradient-to-r from-white/10 via-white/20 to-white/5 rounded-full z-0" />
        {/* Animated Active Progress */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[2.5px] rounded-full z-10 transition-all duration-300"
          style={{
            width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
            background: 'linear-gradient(90deg, #ef4444 0%, #f87171 100%)',
            boxShadow: '0 0 8px 0 rgba(211,47,47,0.18)'
          }}
        />
        {/* Step Circles */}
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          const isUpcoming = stepNumber > currentStep;
          return (
            <div key={index} className="relative z-20 flex flex-col items-center" style={{ flex: 1 }}>
              <div
                className={[
                  'flex items-center justify-center rounded-full font-bold text-base transition-all duration-300 relative',
                  'h-10 w-10',
                  isActive
                    ? 'bg-gradient-to-br from-red-500 to-red-400 text-white border-2 border-red-500 shadow-[0_2px_8px_0_rgba(211,47,47,0.10)]'
                    : isCompleted
                      ? 'bg-red-500 text-white border-2 border-red-500 shadow-[0_1px_4px_0_rgba(211,47,47,0.08)]'
                      : 'bg-white/5 border border-white/15 text-white/60',
                  isActive ? 'ring-2 ring-red-500/30' : '',
                ].join(' ')}
                style={{
                  boxShadow: isActive
                    ? '0 0 0 2px rgba(239,68,68,0.18), 0 2px 8px 0 rgba(211,47,47,0.10)'
                    : isCompleted
                      ? '0 1px 4px 0 rgba(211,47,47,0.08)'
                      : '0 1px 4px 0 rgba(255,255,255,0.04)',
                  transition: 'all 0.25s cubic-bezier(.4,0,.2,1)'
                }}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  stepNumber
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* Step Labels */}
      {labels.length > 0 && (
        <div className="mt-2 flex justify-between gap-2 w-full max-w-[480px] mx-auto">
          {labels.map((label, index) => (
            <div key={index} className="flex-1 text-center text-xs text-muted-foreground/80 font-medium select-none pt-1" style={{ minWidth: 0 }}>
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
