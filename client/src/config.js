// Backend base URL. Set VITE_API_URL in client/.env (local) or in your host's env settings (Vercel/Netlify).
export const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");
