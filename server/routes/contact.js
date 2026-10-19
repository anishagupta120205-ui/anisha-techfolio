const express = require("express");
const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const Message = require("../models/Message");

const router = express.Router();

// Max 5 submissions per IP per 15 minutes to deter spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many messages. Please try again later." },
});

// Optional: email notification (only if SMTP env vars are set)
async function notifyByEmail({ name, email, message }) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) return;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${SMTP_USER}>`,
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });
}

// POST /api/contact
router.post("/", limiter, async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email and message are required." });
  }
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ message: "Database unavailable. Please try again later." });
  }

  try {
    const saved = await Message.create({ name, email, message });
    // Email failure must not fail the request: the message is already stored.
    notifyByEmail({ name, email, message }).catch((e) =>
      console.error("Email notification failed:", e.message)
    );
    return res.status(201).json({ message: "Thanks! Your message has been sent.", id: saved._id });
  } catch (err) {
    if (err.name === "ValidationError") {
      const first = Object.values(err.errors)[0];
      return res.status(400).json({ message: first.message });
    }
    console.error(err);
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
});

module.exports = router;
