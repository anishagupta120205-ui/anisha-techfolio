import { certifications, achievements } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

export default function Certifications() {
  return (
    <Section id="certifications" zone="light" tone="lav" from="alt" wave={1} variant={1} sparkles={10} title="Certifications &amp; Achievements">

      <div className="cert-grid">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1} className="card cert-card">
            {c.image ? (
              <img src={c.image} alt={`${c.title} certificate`} loading="lazy" />
            ) : (
              <div className="cert-icon" aria-hidden="true">🏅</div>
            )}
            <h3>{c.title}</h3>
            <p className="muted">{c.issuer} · {c.year}</p>
            {c.link && (
              <a href={c.link} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                View Certificate
              </a>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="sub-title">Achievements &amp; Activities</h3>
        <ul className="achievements">
          {achievements.map((a) => (
            <li key={a}>🏆 {a}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
