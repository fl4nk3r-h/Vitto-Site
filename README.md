<div align="center">
  <h1>Vitto — AI-First Banking Infrastructure</h1>
  <p><i>Monorepo: Next.js frontend + Node.js/Express backend</i></p>
  <p>
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs&logoColor=white" />
    <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" />
    <img alt="Express" src="https://img.shields.io/badge/Express-4-black?logo=express&logoColor=white" />
    <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-14-336791?logo=postgresql&logoColor=white" />
    <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-6-47A248?logo=mongodb&logoColor=white" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white" />
  </p>
</div>

---

## Structure

```
vitto/                          ← monorepo root
├── frontend/                   ← Next.js 16 app
│   ├── app/                    ← pages and API routes (thin wrappers, proxied to backend)
│   ├── components/
│   └── ...
├── backend/                    ← Node.js + Express API
│   ├── src/
│   │   ├── index.ts            ← server entry point
│   │   ├── routes/             ← auth.ts, leads.ts
│   │   ├── middleware/         ← auth.ts (JWT), validate.ts
│   │   ├── models/             ← OTPSession.ts (Mongoose + TTL)
│   │   └── db/                 ← postgres.ts, mongo.ts
│   ├── migrations/
│   │   └── 001_create_leads.ts ← PostgreSQL schema + indexes
│   └── vitto-api.postman_collection.json
└── package.json                ← workspace root
```

---

## Prerequisites

- Node.js 18+
- pnpm
- PostgreSQL 14+
- MongoDB 6+

---

## Quick Start

### 1. Clone and install

```bash
git clone https://github.com/fl4nk3r-h/Vitto-Site.git
cd Vitto-Site
pnpm install          # installs both workspaces
```

### 2. Configure environment

```bash
# Frontend
cp frontend/.env.example frontend/.env.local

# Backend
cp backend/.env.example backend/.env
# Edit backend/.env with your PostgreSQL and MongoDB credentials
```

### 3. Run database migration

```bash
pnpm --filter backend migrate
```

This creates the `leads` table in PostgreSQL with indexes and an auto-update trigger on `updated_at`.

### 4. Start both servers

```bash
pnpm dev
```

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:4000 |

Or run separately:

```bash
pnpm dev:frontend
pnpm dev:backend
```

---

## Architecture

The frontend and backend are independent deployable units.

```
Browser → Next.js (Vercel)  →  Express API (Render)  →  PostgreSQL
                                                      →  MongoDB (OTP TTL)
```

The Next.js API routes in `frontend/app/api/` are intentionally kept as thin pass-throughs or can be removed entirely — all business logic lives in the Express backend.

**Why separate backend instead of Next.js API routes only:**
The assignment explicitly requires Node.js + Express, PostgreSQL with migrations, and MongoDB with a TTL index. These are not Next.js-native constructs. The Express backend gives us proper connection pooling, a migration system, Mongoose TTL indexes, and JWT middleware — none of which are idiomatic in Next.js API routes.

---

## Databases

### PostgreSQL — lead storage

Managed via `backend/migrations/`. Schema:

```sql
leads (
  id                VARCHAR(64)   PRIMARY KEY,   -- UUID
  email             VARCHAR(255)  NOT NULL,
  phone             VARCHAR(20),
  institution_name  VARCHAR(255)  NOT NULL,
  institution_type  VARCHAR(50)   NOT NULL,      -- Bank | NBFC | MFI | ...
  city              VARCHAR(100)  NOT NULL,
  loan_book_size    VARCHAR(50)   NOT NULL,
  status            VARCHAR(20)   DEFAULT 'pending',
  created_at        TIMESTAMPTZ   DEFAULT NOW(),
  updated_at        TIMESTAMPTZ   DEFAULT NOW()
)
```

### MongoDB — OTP sessions

Mongoose model with `expires: 600` on the `createdAt` field — MongoDB's TTL mechanism automatically deletes documents 10 minutes after creation. No manual cleanup required.

---

## API Endpoints

Full documentation and example request/response bodies: `backend/README.md`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/health` | — | Server health check |
| `POST` | `/api/auth/send-otp` | — | Generate OTP, store in MongoDB |
| `POST` | `/api/auth/verify-otp` | — | Verify OTP, return JWT |
| `POST` | `/api/leads` | JWT | Create lead in PostgreSQL |
| `GET` | `/api/leads/:id` | JWT | Fetch lead by ID |

Import `backend/vitto-api.postman_collection.json` into Postman to test all endpoints. The collection auto-captures the OTP and session token between requests.

---

## Deployment

### Frontend — Vercel

```bash
cd frontend
vercel deploy
```

Set `NEXT_PUBLIC_API_URL=https://your-backend.render.com` in Vercel environment variables.

### Backend — Render

1. Connect the `backend/` directory as a new Web Service on Render
2. Set build command: `pnpm install && pnpm build`
3. Set start command: `pnpm start`
4. Add all environment variables from `backend/.env.example`
5. Run migration once after first deploy: `pnpm migrate`

---

## License

Proprietary — Vitto Technologies
