<div align="center">
  <h1>Vitto — AI-First Banking Infrastructure</h1>
  <p><i>Next.js 16 Frontend</i></p>
  <p>
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs&logoColor=white" />
    <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white" />
  </p>
</div>

---

## Prerequisites

- Node.js 18+
- pnpm

---

## Quick Start

### 1. Clone and install

```bash
git clone https://github.com/fl4nk3r-h/Vitto-Site.git
cd Vitto-Site
pnpm install
```

### 2. Configure environment

Copy `.env.example` to `.env.local` and set your backend API URL:

```bash
cp .env.example .env.local
# Edit .env.local and set NEXT_PUBLIC_API_URL=https://your-backend.example.com
```

### 3. Run the frontend

```bash
pnpm dev
```

The app will be available at <http://localhost:3000>

---

## Connecting to the Backend

This frontend expects a deployed backend API. Set `NEXT_PUBLIC_API_URL` in your `.env.local` to the backend's base URL (e.g., `https://your-backend.example.com`).

All API calls are made directly to this backend.

---

## Deployment (Vercel Recommended)

Deploy this frontend to [Vercel](https://vercel.com/) for best results. In your Vercel project settings, set the `NEXT_PUBLIC_API_URL` environment variable to your backend's URL.

No serverless functions or custom backend code are included in this repo—this is a pure frontend app.

---

## Documentation

See the [docs/](docs/) directory for detailed setup, environment, and integration documentation.

---

## License

Proprietary — Vitto Technologies
