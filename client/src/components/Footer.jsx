import { profile } from "../data/portfolio.js";
import { Wave } from "./Section.jsx";
import Backdrop from "./Backdrop.jsx";

export default function Footer() {
  return (
    <footer className="band footer zone-dark">
      <Backdrop variant={2} sparkles={14} seed={7} />
      <Wave from="alt" shape={1} />
      <div className="wrap">
        <p className="footer-logo">
          anisha<span>.dev</span>
        </p>
        <p className="footer-tag">Thanks for stopping by. Let's build something lovely.</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} {profile.name}. Built with MongoDB, Express, React &amp; Node.
        </p>
      </div>
    </footer>
  );
}
