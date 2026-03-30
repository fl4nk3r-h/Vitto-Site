# Vitto Frontend Documentation

## Overview

This documentation covers setup, environment configuration, deployment, and integration for the Vitto Next.js frontend. This project is a pure frontend and communicates with a separate backend API.

---

## 1. Project Structure

- `app/` — Next.js app directory (pages, layouts, routes)
- `components/` — Reusable React components
- `public/` — Static assets
- `styles/` — CSS and Tailwind styles
- `lib/`, `hooks/` — Utility functions and custom hooks
- `docs/` — Project documentation (this folder)

---

## 2. Environment Variables

- `NEXT_PUBLIC_API_URL` — **Required.** The base URL of your backend API. Must be set in Vercel project settings for production, and in `.env.local` for local development.

Example `.env.local`:

```
NEXT_PUBLIC_API_URL=https://your-backend.example.com/
```

---

## 3. Local Development

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy `.env.example` to `.env.local` and set your backend URL.
3. Start the dev server:

   ```bash
   pnpm dev
   ```

4. Visit [http://localhost:3000](http://localhost:3000)

---

## 4. Deployment (Vercel)

- Push your repo to GitHub.
- Import the repo into [Vercel](https://vercel.com/).
- In Vercel dashboard, set the `NEXT_PUBLIC_API_URL` environment variable to your backend's URL.
- Deploy. Vercel will handle build and hosting automatically.

**Note:** No backend/serverless functions are included in this repo. All API calls go to your external backend.

---

## 5. API Integration

- All API calls use the value of `NEXT_PUBLIC_API_URL` as the base URL.
- Update this variable in Vercel or `.env.local` if your backend URL changes.
- No local `/api/` routes exist in this frontend.

Reference docs:
- `docs/api-integration.md`
- `docs/homepage-deliverable-2.md`

---

## 6. Customization & Extending

- Add new pages in `app/`.
- Add or update components in `components/`.
- Use Tailwind CSS for styling (see `tailwind.config.mjs`).
- Use environment variables for any additional public config (prefix with `NEXT_PUBLIC_`).

---

## 7. Troubleshooting

- **API errors:** Check that `NEXT_PUBLIC_API_URL` is set correctly and your backend is reachable.
- **Build errors:** Ensure Node.js 18+ and pnpm are used. Check for missing dependencies.
- **Styling issues:** Ensure Tailwind CSS is configured and imported in `app/globals.css`.

---

## 8. Contact & License

- For support, contact Vitto Technologies.
- License: Proprietary — Vitto Technologies
