import { useState } from "react";
import { profile } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export default function About() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Section id="about" zone="light" tone="lav" from="dark" wave={0} variant={2} sparkles={10} title="About Me">
      <div className="about-grid">
        <Reveal x={-40} y={0} className="about-photo-wrap">
          <div className="photo-frame">
            {imgFailed ? (
              <div className="about-photo placeholder" aria-label={profile.name}>
                {initials(profile.name)}
              </div>
            ) : (
              <img
                className="about-photo"
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                onError={() => setImgFailed(true)}
              />
            )}
            <span className="photo-spark a" aria-hidden="true" />
            <span className="photo-spark b" aria-hidden="true" />
          </div>
        </Reveal>
        <Reveal x={40} y={0}>
          <p className="about-bio">{profile.bio}</p>
          <ul className="facts">
            <li><strong>📍 Location</strong><span>{profile.location}</span></li>
            <li><strong>🎓 Status</strong><span>{profile.status}</span></li>
            <li><strong>✉️ Email</strong><span><a href={`mailto:${profile.email}`}>{profile.email}</a></span></li>
            <li>
              <strong>🔗 Links</strong>
              <span>
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                {" · "}
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
