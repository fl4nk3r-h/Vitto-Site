'use client';

import React, { useEffect, useRef } from 'react';
import { Shield, BarChart2, FileCheck, Lock, Zap, CreditCard, RefreshCw, Building } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Amazing service! Vitto’s Digital Business Loan helped expand our operations efficiently.",
    author: "Devanika",
    image: "https://www.vitto.money/front/assets/img/other/testimonial5.png"
  },
  {
    quote: "Simple, transparent and quick—Vitto’s business loan transformed our growth plans. Highly recommend!",
    author: "Sushil Kumar",
    image: "https://www.vitto.money/front/assets/img/other/testimonial1.png"
  },
  {
    quote: "Vitto’s digital loan process is so convenient! Quick funding for our business needs.",
    author: "Rita Halder",
    image: "https://www.vitto.money/front/assets/img/testimonials/testi2.jpg"
  },
  {
    quote: "Vitto’s Digital Business Loan process was seamless—fast approval and funds disbursed quickly. Perfect for small business growth!",
    author: "Mamta Devi",
    image: "https://www.vitto.money/front/assets/img/other/testimonial2.png"
  },
  {
    quote: "Thanks to Vitto, we received funding within 48 hours! Ideal for businesses needing fast capital.",
    author: "Santosh Kumari",
    image: "https://www.vitto.money/front/assets/img/other/testimonial3.png"
  },
  {
    quote: "Vitto’s hassle-free loan application saved us time. Highly recommend for any small business needing quick financing.",
    author: "Kanchan",
    image: "https://www.vitto.money/front/assets/img/other/testimonial4.png"
  }
];

const PARTNER_LOGOS = [
  { name: 'CIBIL',      bg: '#003366', icon: Shield,      initials: 'CI' },
  { name: 'Experian',   bg: '#c8145a', icon: BarChart2,   initials: 'EX' },
  { name: 'CRIF',       bg: '#e07820', icon: FileCheck,   initials: 'CR' },
  { name: 'DigiLocker', bg: '#4b2aad', icon: Lock,        initials: 'DL' },
  { name: 'Perfios',    bg: '#1e3a5f', icon: Zap,         initials: 'PF' },
  { name: 'Setu',       bg: '#0a7cff', icon: CreditCard,  initials: 'ST' },
  { name: 'NACH',       bg: '#b08000', icon: RefreshCw,   initials: 'NA' },
  { name: 'Razorpay',   bg: '#0d2545', icon: Building,    initials: 'RP' },
];


export function Testimonials() {
  const logosRowRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-24 bg-[#020617] font-sans">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center text-xs font-semibold uppercase tracking-widest text-red-500 mb-10">Trusted By</div>

        {/* Partner Badges */}
        <div ref={logosRowRef} className="flex gap-4 mb-20 overflow-x-auto overflow-y-hidden scrollbar-hide justify-center" style={{maxHeight: '4rem'}}>
          {PARTNER_LOGOS.map((partner, idx) => {
            // Soft pastel backgrounds for badges
            const badgeBg = [
              'bg-blue-100/60',
              'bg-pink-100/60',
              'bg-orange-100/60',
              'bg-purple-100/60',
              'bg-green-100/60',
              'bg-cyan-100/60',
              'bg-yellow-100/60',
              'bg-indigo-100/60',
            ][idx % 8];
            return (
              <div
                key={partner.name}
                className={`flex items-center gap-2 rounded-xl min-w-[110px] h-16 px-5 py-2 font-semibold text-slate-800 text-sm shadow-sm transition-transform duration-150 cursor-pointer ${badgeBg} hover:scale-105`}
                style={{ userSelect: 'none' }}
              >
                {partner.icon && (
                  <partner.icon size={20} className="opacity-80" />
                )}
                <span className="font-medium text-slate-700">{partner.name}</span>
              </div>
            );
          })}
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center min-w-[320px] max-w-[400px] w-full rounded-2xl p-8 md:p-8 bg-white/5 border border-white/10 shadow-xl group hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/40 transition-all duration-200"
              style={{
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                transition: 'transform 0.18s, box-shadow 0.18s, border-color 0.18s',
              }}
            >
              {/* Gradient overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{background: 'linear-gradient(to bottom,rgba(0,0,0,0) 60%,rgba(2,6,23,0.18) 100%)'}} />
              {/* Avatar */}
              <img
                src={t.image}
                alt={t.author}
                className="w-14 h-14 rounded-full mb-4 object-cover border-2 border-white/20 z-10"
              />
              {/* Testimonial Text */}
              <p className="text-center text-slate-200 text-base font-medium mb-4 z-10">“{t.quote}”</p>
              {/* Name */}
              <div className="font-semibold text-white text-base z-10">{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
