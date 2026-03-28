# Vitto - AI-First Banking Infrastructure

A production-ready website and platform for Vitto's AI-first banking infrastructure solution.

## Overview

Vitto is an AI-native platform designed from the ground up for banking and financial services. It provides:

- **6 Core Modules**: SLM Core, RAG Pipeline, Agent Orchestration, Compliance Framework, Real-time Monitoring, Enterprise Integration
- **29+ Operational Modules**: Organized across 5 layers: Data Foundation, Model Layer, Integration Layer, Compliance & Security, Observability
- **3 Pre-built Agents**: Loan Processing, Customer Service, Fraud Detection
- **6 Industry Collections**: Solutions for Commercial Banking, Retail, Risk & Compliance, Collections, Trade Finance, Mortgage Services

## Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Animations**: Framer Motion
- **Components**: Custom components + shadcn/ui
- **Form Handling**: React Hook Form + custom validation

### Backend
- **Framework**: Next.js API Routes
- **Authentication**: OTP-based (send-otp, verify-otp)
- **Storage**: Mock in-memory stores (ready for PostgreSQL + MongoDB)
- **Validation**: Input validation on all endpoints

## Project Structure

```
app/
├── page.tsx                 # Homepage with 8 sections
├── platform/               # AI-First Platform details
├── automation/             # 29+ Operational Modules
├── agentic-ai/            # Autonomous Agents & RAG
├── collections/           # Industry Solutions
├── contact/               # Contact Page
├── signup/                # 3-Step Sign-Up Flow
└── api/
    ├── auth/
    │   ├── send-otp/      # Generate & send OTP
    │   └── verify-otp/    # Verify OTP & create session
    └── leads/             # Store lead data
components/
├── header.tsx             # Navigation
├── footer.tsx             # Footer
├── home/                  # Homepage sections
├── signup/                # Sign-up form steps
├── ui/                    # Custom UI components
└── comparison-table.tsx   # SLM vs LLM comparison
lib/
├── constants/             # Modules, navigation, testimonials
├── hooks/                 # useOTP, useFormValidation, useScrollAnimation
└── utils.ts              # Utility functions
```

## Key Features

### Homepage
- Hero section with CTA
- 4 Problem cards highlighting limitations of retrofit AI
- Solution overview with 4 key differentiators
- 6 Core Modules showcase
- Stats section (92% faster, 99.99% uptime, 50+ models, 15-min integration)
- Testimonials from leading Indian banks
- Call-to-action section

### Inner Pages
- **Platform**: Deep dive into 6 modules + SLM vs LLM comparison table
- **Automation**: All 29 operational modules organized into 5 layers
- **Agentic AI**: Pre-built agents, RAG pipeline diagram, multi-agent orchestration
- **Collections**: 6 industry solutions with pre-configured modules and impact metrics

### Sign-Up Flow
- **Step 1**: Email entry with OTP request
- **Step 2**: OTP verification (6-digit code, 5-min expiry, resend option)
- **Step 3**: Organization details (name, type, city, phone, loan book size)
- **Success**: Confirmation page with next steps

### Design System
- **Colors**: Dark navy (#0D0D1A) + red (#D32F2F) + grays
- **Typography**: Geist (sans) font family
- **Animations**: Fade-in, fade-in-up, scroll-triggered animations
- **Responsive**: Mobile-first, fully responsive design

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/vitto.git
cd vitto
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables (if needed):
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### Authentication
- `POST /api/auth/send-otp` - Send OTP to email
  - Body: `{ email: string }`
  - Response: `{ success: true, message: string, otp?: string (dev only) }`

- `POST /api/auth/verify-otp` - Verify OTP and create session
  - Body: `{ email: string, otp: string }`
  - Response: `{ success: true, sessionToken: string }`

### Leads
- `POST /api/leads` - Create lead with organization details
  - Headers: `Authorization: Bearer {sessionToken}`
  - Body: `{ institutionName, institutionType, city, phoneNumber, loanBookSize }`
  - Response: `{ success: true, lead: Lead }`

- `GET /api/leads?id={leadId}` - Fetch lead details
  - Headers: `Authorization: Bearer {sessionToken}`
  - Response: `Lead`

## Development Notes

### Mock Data & Services
Currently, the backend uses in-memory stores for:
- OTP sessions (10-min TTL)
- Session tokens (24-hour TTL)
- Lead records

### For Production Deployment
Replace with:
- **PostgreSQL** for leads storage
- **MongoDB** for OTP sessions (with TTL index)
- **Redis** for session management
- Real email service (SendGrid, AWS SES) for OTP delivery

### Custom Hooks
- `useOTP()` - OTP input handling with auto-focus
- `useFormValidation()` - Form state, validation, and submission
- `useScrollAnimation()` - Intersection observer for scroll animations

### UI Components
- `GradientText` - Text with gradient (primary to accent)
- `GlowCard` - Card with hover glow effect
- `StepIndicator` - Multi-step form indicator
- `ComparisonTable` - SLM vs LLM comparison

## Deployment

### Vercel (Recommended)
```bash
pnpm build
vercel deploy
```

### Self-Hosted
```bash
pnpm build
pnpm start
```

## API Documentation

### Example: Complete Sign-Up Flow

```bash
# Step 1: Send OTP
curl -X POST http://localhost:3000/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{ "email": "user@company.com" }'

# Response (dev only includes OTP):
# { "success": true, "message": "OTP sent successfully", "otp": "123456" }

# Step 2: Verify OTP
curl -X POST http://localhost:3000/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{ "email": "user@company.com", "otp": "123456" }'

# Response:
# { "success": true, "sessionToken": "abc123..." }

# Step 3: Create Lead
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer abc123..." \
  -d '{
    "institutionName": "ICICI Bank",
    "institutionType": "Bank",
    "city": "Mumbai",
    "phoneNumber": "+91 9876543210",
    "loanBookSize": "1000-5000 Cr"
  }'

# Response:
# { "success": true, "lead": { "id": "lead_...", ... } }
```

## Performance Metrics

- **Lighthouse**: 90+ on all metrics
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Time to Interactive**: < 3s on 3G
- **Bundle Size**: Optimized with code splitting

## Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Guidelines for contributing to the Vitto website:
1. Create a feature branch
2. Follow the existing code style
3. Test all changes locally
4. Submit a pull request

## License

Proprietary - Vitto Technologies

## Support

For issues or questions:
- Email: hello@vitto.ai
- Phone: +91 98765 43210
- Visit: [vitto.ai](https://vitto.ai)

---

Built with Next.js, React, and Tailwind CSS. Designed for banking, built for the future.
