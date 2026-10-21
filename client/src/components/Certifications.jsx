
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
      {/* Certificates Grid */}
      <div className="cert-grid">
        {certifications.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 0.1}
            className="card cert-card"
          >
            {/* Certificate Image or Placeholder */}
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
                📜
              </div>
            )}

            {/* Certificate Details */}
            <h3>{c.title}</h3>

            <p className="muted">
              {c.issuer} · {c.year}
            </p>

            {c.description && (
              <p className="cert-description">
                {c.description}
              </p>
            )}

            {/* View and Download Buttons */}
            <div className="cert-actions">
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  View Certificate
                </a>
              )}

              {c.link && (
                <a
                  href={c.link}
                  download={c.fileName || true}
                  className="btn btn-outline btn-sm"
                >
                  Download Certificate
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Achievements and Activities */}
      <Reveal>
        <h3 className="sub-title">
          Achievements &amp; Activities
        </h3>

        <ul className="achievements">
          {achievements.map((achievement) => (
            <li key={achievement}>
              🏆 {achievement}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Certificate Image Preview Modal */}
      {selectedCertificate && (
        <div
          className="cert-modal"
          onClick={() => setSelectedCertificate(null)}
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
              aria-label="Close certificate preview"
            >
              &times;
            </button>

            <h3>{selectedCertificate.title}</h3>

            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} certificate`}
              className="cert-modal-image"
            />

            <p className="muted">
              {selectedCertificate.issuer} ·{" "}
              {selectedCertificate.year}
            </p>

            <a
              href={selectedCertificate.image}
              download={selectedCertificate.fileName || true}
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
