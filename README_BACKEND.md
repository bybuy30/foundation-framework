Backend for HydroNest (local dev)

1. Copy `server/.env.example` to `server/.env` and set `MONGO_URI` and `JWT_SECRET`.
2. Start server: `npm run server` from project root (script installs server deps then runs `npm run dev`).
3. API endpoints (dev server runs by default on port 4000):
   - POST /api/auth/register { name, email, password, age, gender } -> { token }
   - POST /api/auth/login { email, password } -> { token }
   - GET /api/health -> { ok: true }

Notes:
- Authentication logs are stored in `AuthLog` collection (login/register attempts with success flag and message).
- Tokens are JWTs. For production, use secure cookies and refresh-token strategy.
