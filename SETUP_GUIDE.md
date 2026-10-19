# Setup, Deploy & Push Guide

Follow in order. Total time: about 45 minutes.

## 0. Fill in your real details first (5 min)

Open `client/src/data/portfolio.js` and replace everything marked `TODO`:

- `github` profile URL
- Each project's `github` and `demo` links (the assignment needs **3+ projects with GitHub + live links**)
- Certificates (use real Coursera / NPTEL / LinkedIn Learning ones, with a link or image)
- Skill percentages (rate yourself honestly)

Add your photo as `client/public/profile.jpg`.
Your resume PDF/DOCX are already in `server/files/`.

## 1. Create a free MongoDB Atlas database (10 min)

1. Sign up at https://www.mongodb.com/cloud/atlas and create a free **M0** cluster.
2. **Database Access** → Add a user with a password (save it).
3. **Network Access** → Add IP `0.0.0.0/0` (allows Render to connect).
4. **Connect → Drivers** → copy the connection string. Replace `<password>`, and put `/portfolio` before the `?`:
   `mongodb+srv://USER:PASS@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority`

## 2. Run it locally (10 min)

```bash
cd server
npm install
cp .env.example .env     # Windows: copy .env.example .env
# edit .env: paste MONGODB_URI
npm run dev
```

New terminal:

```bash
cd client
npm install
cp .env.example .env     # VITE_API_URL=http://localhost:5000
npm run dev
```

Open http://localhost:5173 and check:
- [ ] Typewriter + both CV buttons download the right files
- [ ] Dark/light toggle works, mobile menu works (resize the browser)
- [ ] Submit the contact form, then see the message in Atlas → Browse Collections → `portfolio.messages`

## 3. Push to GitHub (5 min)

Create an **empty public repo** on GitHub (no README), then from the `portfolio` folder:

```bash
git init
git add .
git status        # IMPORTANT: confirm .env and node_modules are NOT listed
git commit -m "feat: initial MERN portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

> ⚠️ The assignment deducts marks for exposed secrets. Only `.env.example` (no real values) should be committed. If you ever push `.env` by mistake, change your Atlas password immediately.

Tip: use small, meaningful commits afterwards (`feat: add projects filter`, `fix: cors origin`). Marks are given for commit quality.

## 4. Deploy the backend on Render (10 min)

1. https://render.com → **New → Web Service** → connect your GitHub repo.
2. Settings:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
3. **Environment Variables:**
   - `MONGODB_URI` = your Atlas string
   - `CLIENT_URL` = your Vercel URL (add after step 5, then redeploy)
4. Deploy. Test `https://YOUR-API.onrender.com/api/health`: expect `"db":"connected"`.

Note: Render's free tier sleeps after inactivity, so the first request can take ~30 seconds. Open the API URL once before showing your teacher.

## 5. Deploy the frontend on Vercel (5 min)

1. https://vercel.com → **Add New → Project** → import the repo.
2. **Root Directory:** `client` (framework auto-detects as Vite).
3. **Environment Variable:** `VITE_API_URL` = `https://YOUR-API.onrender.com` (no trailing slash).
4. Deploy, then copy your Vercel URL.
5. Go back to Render → set `CLIENT_URL` to that Vercel URL → it redeploys.

(Netlify also works: base `client`, build `npm run build`, publish `dist`; the SPA redirect file is already included.)

## 6. Final checks and submit

- [ ] Live site: CV downloads (PDF + DOCX), contact form saves to Atlas
- [ ] Update the two live links at the top of `README.md`, then commit and push:
  ```bash
  git add README.md && git commit -m "docs: add live deployment links" && git push
  ```
- [ ] Submit the GitHub repo link in Google Classroom before **October 20, 2026**

## Optional: email notifications (Nodemailer)

For Gmail, enable 2-step verification, create an **App Password**, then set on Render:
`SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER=you@gmail.com`, `SMTP_PASS=<app password>`, `NOTIFY_EMAIL=you@gmail.com`.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Contact form says "Can't reach the server" | Render is waking up (retry), or `VITE_API_URL` is wrong |
| CORS error in console | `CLIENT_URL` on Render must exactly match your Vercel URL (no trailing slash) |
| `db: disconnected` | Check Atlas password, Network Access `0.0.0.0/0`, and `/portfolio` in the URI |
| Refreshing `/resume` gives 404 | `client/vercel.json` must be present (it is) |
