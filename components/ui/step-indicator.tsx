'use client';

import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

export function StepIndicator({ currentStep, totalSteps, labels = [] }: StepIndicatorProps) {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 480,
        margin: '0 auto',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 1
      }}>
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div key={index} style={{ display: 'flex', flex: 1, alignItems: 'center', position: 'relative' }}>
              <div
                style={{
                  display: 'flex',
                  height: 44,
                  width: 44,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  fontWeight: 700,
                  fontSize: 20,
                  background: isActive
                    ? 'var(--red)'
                    : isCompleted
                      ? 'rgba(211,47,47,0.12)'
                      : 'var(--border-dim)',
                  color: isActive
                    ? 'white'
                    : isCompleted
                      ? 'var(--red)'
                      : 'var(--text-secondary)',
                  border: isActive ? '3px solid var(--red)' : isCompleted ? '2px solid var(--red)' : '2px solid var(--border-dim)',
                  boxShadow: isActive ? '0 2px 16px 0 rgba(211,47,47,0.18)' : undefined,
                  transition: 'all 0.3s',
                  zIndex: 2
                }}
              >
                {stepNumber}
              </div>

              {index < totalSteps - 1 && (
                <div
                  style={{
                    height: 6,
                    flex: 1,
                    margin: '0 8px',
                    background: isCompleted ? 'var(--red)' : 'var(--border-dim)',
                    borderRadius: 3,
                    transition: 'background 0.3s',
                    zIndex: 1
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {labels.length > 0 && (
        <div style={{
          marginTop: 18,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 8,
          width: '100%',
          maxWidth: 480,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          {labels.map((label, index) => (
            <div key={index} style={{ flex: 1, textAlign: 'center', fontSize: 15, color: 'var(--text-secondary)', fontWeight: 500 }}>
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
