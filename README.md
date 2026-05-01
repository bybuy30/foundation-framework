# HydroNest

HydroNest is a modern web application for hydration products, featuring a React-based frontend with TypeScript and a Node.js backend with Express and MongoDB.

## Features

- User authentication (register/login)
- Product catalog with filters
- Wishlist functionality
- Recipe listings
- Influencer reviews
- Subscription plans
- Contact form

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- GSAP for animations

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- JWT authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or bun
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hydronest-project
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Set up the backend:
   ```bash
   cd server
   npm install
   ```

4. Create environment file:
   Copy `server/.env.example` to `server/.env` and set:
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secure secret for JWT tokens

5. Start the development servers:
   ```bash
   # Frontend (from root)
   npm run dev

   # Backend (from root)
   npm run server
   ```

The frontend will run on `http://localhost:5173` and backend on `http://localhost:4000`.

## API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/health` - Health check
- `GET /api/wishlist` - Get user wishlist (protected)
- `POST /api/wishlist` - Add to wishlist (protected)
- `DELETE /api/wishlist/:id` - Remove from wishlist (protected)
- `POST /api/contact` - Submit contact form

## Project Structure

```
hydronest-project/
├── src/                    # Frontend source
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── sections/          # Section components
│   ├── data/              # Static data
│   └── lib/               # Utilities
├── server/                # Backend source
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── models/        # MongoDB models
│   │   └── middleware/    # Express middleware
│   └── package.json
├── public/                # Static assets
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary.