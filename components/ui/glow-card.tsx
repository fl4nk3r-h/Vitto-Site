'use client';

import React from 'react';
import '@/styles/glow-card-premium.css';
import '@/styles/glow-card-delay.css';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  icon?: React.ReactNode;
}

export function GlowCard({ children, className = '', delay = 0, icon }: GlowCardProps) {
  // Create a dynamic class for animation delay
  const delayClass = delay ? `glow-card-delay-${Math.round(delay * 10)}` : '';
  return (
    <div
      className={`glow-card-premium fade-in-up p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 ${delayClass} ${className}`}
    >
      {icon && <div className="mb-4 text-accent">{icon}</div>}
      {children}
    </div>
  );
}
