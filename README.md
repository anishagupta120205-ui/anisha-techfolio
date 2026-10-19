# Anisha Gupta | MERN Portfolio

A full-stack personal portfolio built with the **MERN stack**: React (Vite) frontend, Node.js + Express REST API, and MongoDB (Mongoose) for storing contact-form messages.

**Live site:** https://YOUR-SITE.vercel.app  <!-- TODO: replace after deploying -->
**Live API:** https://YOUR-API.onrender.com  <!-- TODO: replace after deploying -->

## Features

- Animated hero with typewriter effect and CV download buttons
- About, Skills (animated bars + tooltips), Projects (filter/sort), Education & Experience timeline, Certifications & Achievements
- Contact form → Express API → MongoDB (optional Nodemailer email notification)
- Resume download in **PDF** and **Word (.docx)**, served by the Express backend (`/api/resume/pdf`, `/api/resume/docx`)
- Dark / light mode toggle (remembered across visits)
- React Router SPA, fully responsive (mobile, tablet, desktop), Framer Motion animations
- Secrets via environment variables (`.env` is git-ignored), rate-limited contact endpoint

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite, React Router, Framer Motion, CSS |
| Backend | Node.js, Express, Mongoose, Nodemailer, express-rate-limit |
| Database | MongoDB Atlas |
| Hosting | Vercel (client), Render (server) |

## Folder Structure

```
/client   React app (src/components, src/data/portfolio.js holds all content)
/server   Express API (routes, models, files = resume PDF/DOCX)
```

## Local Setup

Prerequisites: Node.js 18+ and a MongoDB Atlas connection string.

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# 1. Backend
cd server
npm install
cp .env.example .env      # then edit .env with your MONGODB_URI
npm run dev               # http://localhost:5000

# 2. Frontend (new terminal)
cd client
npm install
cp .env.example .env      # VITE_API_URL=http://localhost:5000
npm run dev               # http://localhost:5173
```

## Environment Variables

**server/.env**

| Variable | Purpose |
|----------|---------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `CLIENT_URL` | Allowed frontend origin(s) for CORS (comma-separated) |
| `PORT` | Server port (default 5000) |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `NOTIFY_EMAIL` | Optional Nodemailer email notification |

**client/.env**

| Variable | Purpose |
|----------|---------|
| `VITE_API_URL` | Base URL of the deployed backend |

## API

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/health` | Server + DB status |
| POST | `/api/contact` | Save a message `{ name, email, message }` |
| GET | `/api/resume/pdf` | Download resume (PDF) |
| GET | `/api/resume/docx` | Download resume (Word) |

## Customising

All text, links, skills, projects and certificates live in `client/src/data/portfolio.js`. Replace the resume files in `server/files/` (keep the same file names) to update the downloads. Add your photo at `client/public/profile.jpg`.

## Design: Dark Lavender Dream
Palette tokens live at the top of `client/src/index.css`. Sections are "bands" (`components/Section.jsx`):
`dark` (hero/footer), `alt` (dark in Dream mode, soft lavender in Day mode) and `light` (pale lavender/blush).
The navbar toggle switches Dream/Day. Animations respect `prefers-reduced-motion`.
