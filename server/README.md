HydroNest server

Quick start (local development):

1. Copy .env.example -> .env and set MONGO_URI and JWT_SECRET

2. Install deps:
   cd server
   npm install

3. Start dev server:
   npm run dev

API Endpoints:
- POST /api/auth/register { email, password, age, gender } -> { token }
- POST /api/auth/login { email, password } -> { token }
- GET /api/health -> { ok: true }

Notes:
- Auth attempts are logged to `AuthLog` collection in MongoDB
- Tokens are JWTs (7 day expiry). You should secure them using HttpOnly cookies in production or other safe storage.
