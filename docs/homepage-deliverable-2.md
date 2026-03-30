# Deliverable 2 — Homepage (Implementation Notes)

This repo implements the Deliverable 2 homepage as a functional React/Next.js page composed from section components.

Homepage entry:
- `app/page.tsx`

Sections:
- **Section A — Hero**: `components/home/hero.tsx`
  - Primary positioning: “AI-First Infrastructure for Modern Financial Services”
  - CTAs: “Book a Demo” → `/signup`, “Explore Platform” → `/platform`
  - Dashboard preview: embedded “Credit Ops · Live” preview card (placeholder-style)
- **Section B — The Problem** (“The Reality of Today’s Lending Technology”): `components/home/problems.tsx`
  - Numbered cards covering:
    - Fragmented Systems
    - Non-AI Native Vendors
    - Reactive Collections
    - Static Rule Engines
- **Section C — The Solution** (“AI-native decisioning meets full stack operational automation”): `components/home/solution.tsx`
  - Two-column layout:
    - Left: product narrative
    - Right: feature list with icons (Domain-trained Models, Unified Architecture, Explainability)
- **Section D — The AI Layer (6 Modules)**: `components/home/modules.tsx`
  - 3×2 module grid
  - Each card includes module name, short technical description, and an “Explore” link → `/platform`
- **Section E — Business Impact**: `components/home/stats.tsx`
  - 4 measurable impact stats
- **Section F — Social Proof**: `components/home/testimonials.tsx`
  - Partner logo row (placeholder text badges)
  - Two testimonial cards (quote, name, designation, institution)
- **Section G — CTA Banner**: `components/home/cta.tsx`
  - Copy: “Discover the key to grow your business”
  - Buttons: “Book a Demo” → `/signup`, “Learn More” → `/about`
- **Section H — Footer**: `components/footer.tsx`
  - Logo + tagline + newsletter signup
  - Navigation columns: Pages, Platform, Partners
  - Social links + copyright

