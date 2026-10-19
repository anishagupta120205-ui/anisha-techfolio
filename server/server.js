require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const contactRoutes = require("./routes/contact");
const resumeRoutes = require("./routes/resume");

const app = express();
const PORT = process.env.PORT || 5001;

// Allow the deployed frontend (and localhost in dev). CLIENT_URL may be a comma-separated list.
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim().replace(/\/$/, ""));

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS"));
    },
    exposedHeaders: ["Content-Disposition"],
  })
);
app.use(express.json({ limit: "20kb" }));

app.get("/", (_req, res) => res.json({ status: "ok", service: "portfolio-api" }));
app.get("/api/health", (_req, res) =>
  res.json({
    status: "ok",
    db: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  })
);

app.use("/api/contact", contactRoutes);
app.use("/api/resume", resumeRoutes);

app.use((_req, res) => res.status(404).json({ message: "Route not found" }));

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err.message);
  res.status(err.status || 500).json({ message: err.message || "Server error" });
});

async function start() {
  if (!process.env.MONGODB_URI) {
    console.warn("MONGODB_URI is not set. Contact form will not save messages.");
  } else {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected");
    } catch (err) {
      console.error("MongoDB connection failed:", err.message);
    }
  }
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

start();
