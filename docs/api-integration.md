# Vitto Backend API Integration Guide

**Base URL**

`https://vitto-backend-wnjm.onrender.com`

Frontend reads this from `NEXT_PUBLIC_API_URL` (see `docs/frontend.md`).

---

## 1) Authentication & OTP Flow

### a) Request OTP

- Endpoint: `POST /api/auth/send-otp`
- Body:
  ```json
  {
    "email": "user@example.com"
  }
  ```
- Response (demo/assignment):
  ```json
  {
    "success": true,
    "message": "OTP sent successfully",
    "otp": "123456"
  }
  ```

Notes:
- For assignment/demo purposes, OTP is returned in the response.
- The frontend shows the returned OTP via a popup alert in `app/signup/page.tsx`.

### b) Verify OTP

- Endpoint: `POST /api/auth/verify-otp`
- Body:
  ```json
  {
    "email": "user@example.com",
    "otp": "123456"
  }
  ```
- Response:
  ```json
  {
    "success": true,
    "sessionToken": "<JWT_TOKEN>",
    "message": "OTP verified successfully"
  }
  ```

Notes:
- Store `sessionToken` in memory or storage.
- Send it as `Authorization: Bearer <sessionToken>` for authenticated requests.

---

## 2) Leads (Institution Sign-Up)

### a) Create Lead

- Endpoint: `POST /api/leads`
- Headers:
  - `Authorization: Bearer <sessionToken>`
- Body:
  ```json
  {
    "institutionName": "ABC Bank",
    "institutionType": "Bank",
    "city": "Mumbai",
    "phoneNumber": "+911234567890",
    "loanBookSize": "< 100 Cr"
  }
  ```
- Response:
  ```json
  {
    "success": true,
    "message": "Account created successfully. Our team will reach out within 24 hours.",
    "lead": {
      "id": "...",
      "email": "user@example.com",
      "phoneNumber": "+911234567890",
      "institutionName": "ABC Bank",
      "institutionType": "Bank",
      "city": "Mumbai",
      "loanBookSize": "< 100 Cr",
      "status": "pending",
      "createdAt": "...",
      "updatedAt": "..."
    }
  }
  ```

### b) Get Lead by ID

- Endpoint: `GET /api/leads/:id`
- Headers:
  - `Authorization: Bearer <sessionToken>`
- Response:
  ```json
  {
    "id": "...",
    "email": "user@example.com",
    "phoneNumber": "+911234567890",
    "institutionName": "ABC Bank",
    "institutionType": "Bank",
    "city": "Mumbai",
    "loanBookSize": "< 100 Cr",
    "status": "pending",
    "createdAt": "...",
    "updatedAt": "..."
  }
  ```

---

## 3) Health Check

- Endpoint: `GET /health`
- Response:
  ```json
  {
    "status": "ok",
    "timestamp": "..."
  }
  ```

---

## 4) Error Handling

Errors return JSON with an `error` field and an appropriate HTTP status.

Example:
```json
{
  "error": "Invalid OTP"
}
```

