'use client';

import React, { useRef } from 'react';

const PARTNERS = [
  'CIBIL',
  'Experian',
  'CRIF',
  'DigiLocker',
  'Perfios',
  'Setu',
  'NACH',
  'Razorpay',
];

const TESTIMONIALS = [
  {
    quote:
      'We reduced decision time from days to seconds without losing policy control. The explainability trace made internal approvals easier, not harder.',
    name: 'Head of Credit',
    designation: 'Credit Risk',
    institution: 'Mid-market NBFC',
  },
  {
    quote:
      'Collections moved from reactive calling to prioritised outreach. Propensity scoring and channel selection materially improved bucket 0–30 recoveries.',
    name: 'VP, Collections',
    designation: 'Retail & SME',
    institution: 'Regional Bank',
  },
];

export function Testimonials() {
  const logosRowRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-24 bg-[#020617] font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center text-xs font-semibold uppercase tracking-widest text-red-500 mb-10">
          Trusted By
        </div>

        <div
          ref={logosRowRef}
          className="flex flex-wrap gap-3 mb-16 justify-center"
          style={{ userSelect: 'none' }}
        >
          {PARTNERS.map((name) => (
            <div
              key={name}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10 transition-colors"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name + t.institution}
              className="relative flex flex-col rounded-2xl p-8 bg-white/5 border border-white/10 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:border-red-500/30 transition-all duration-200"
              style={{
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
              }}
            >
              <p className="text-slate-200 text-base leading-relaxed font-medium mb-6">
                “{t.quote}”
              </p>

              <div className="mt-auto flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-500/60 to-white/10 border border-white/10 flex items-center justify-center text-white font-semibold">
                  {t.name
                    .split(' ')
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join('')
                    .toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-white text-base">{t.name}</div>
                  <div className="text-sm text-slate-300">
                    {t.designation} · {t.institution}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
