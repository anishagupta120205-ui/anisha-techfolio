import { useState } from "react";
import { API_URL } from "../config.js";
import { profile } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const empty = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "Failed to send message");
      setStatus({ type: "success", text: data.message || "Message sent!" });
      setForm(empty);
    } catch (err) {
      setStatus({
        type: "error",
        text: err.message === "Failed to fetch"
          ? "Can't reach the server right now. It may be waking up, please retry shortly."
          : err.message,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contact"
      zone="alt"
      from="lav"
      wave={2}
      variant={3}
      sparkles={18}
      title="Get In Touch"
      sub="Have an opportunity or a question? Send me a message."
    >

      <div className="contact-grid">
        <Reveal x={-40} y={0} className="contact-info">
          <p>✉️ <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p>📞 <a href={`tel:${profile.phone}`}>{profile.phone}</a></p>
          <p>📍 {profile.location}</p>
          <p>
            🔗 <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            {" · "}
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </Reveal>

        <Reveal x={40} y={0}>
          <form className="card contact-form" onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={onChange} required maxLength={100} autoComplete="name" />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} value={form.message} onChange={onChange} required maxLength={2000} />

            <button className="btn btn-primary" type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
            {status.text && (
              <p className={`form-msg ${status.type}`} role="status">{status.text}</p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
