
import { useState } from "react";
import { certifications, achievements } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <Section
      id="certifications"
      zone="light"
      tone="lav"
      from="alt"
      wave={1}
      variant={1}
      sparkles={10}
      title="Certifications &amp; Achievements"
    >
      <div className="cert-grid">
        {certifications.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 0.1}
            className="card cert-card"
          >
            {c.image ? (
              <button
                type="button"
                className="cert-image-button"
                onClick={() => setSelectedCertificate(c)}
                aria-label={`Preview ${c.title}`}
              >
                <img
                  src={c.image}
                  alt={`${c.title} certificate`}
                  loading="lazy"
                />
              </button>
            ) : (
              <div className="cert-icon" aria-hidden="true">
                🏅
              </div>
            )}

            <h3>{c.title}</h3>

            <p className="muted">
              {c.issuer} · {c.year}
            </p>

            {c.description && (
              <p className="cert-description">
                {c.description}
              </p>
            )}

            <div className="cert-actions">
              {c.image && (
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => setSelectedCertificate(c)}
                >
                  View Certificate
                </button>
              )}

              {c.link && (
                <a
                  href={c.link}
                  download={
                    c.download
                      ? c.image
                        ? `${c.title}.jpg`
                        : true
                      : undefined
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  {c.download
                    ? "Download Certificate"
                    : "Open Certificate"}
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="sub-title">
          Achievements &amp; Activities
        </h3>

        <ul className="achievements">
          {achievements.map((a) => (
            <li key={a}>🏆 {a}</li>
          ))}
        </ul>
      </Reveal>

      {selectedCertificate && (
        <div
          className="cert-modal"
          onClick={() => setSelectedCertificate(null)}
          role="presentation"
        >
          <div
            className="cert-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="cert-modal-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close preview"
            >
              &times;
            </button>

            <h3>{selectedCertificate.title}</h3>

            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} certificate`}
            />

            <p className="muted">
              {selectedCertificate.issuer} ·{" "}
              {selectedCertificate.year}
            </p>

            <a
              href={selectedCertificate.image}
              download={`${selectedCertificate.title}.jpg`}
              className="btn btn-outline btn-sm"
            >
              Download Image
            </a>
          </div>
        </div>
      )}
    </Section>
  );
}
