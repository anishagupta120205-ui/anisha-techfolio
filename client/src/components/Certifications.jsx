
import { useState } from "react";
import { certifications, achievements } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const certificateFiles = {
  "Red Hat System Administration I (RH124 - RHA)": {
    url: "/2024Btech247_Anisha_Gupta.pdf",
    filename: "Red-Hat-System-Administration-I.pdf",
  },
  "Certificate of Appreciation — Hack JKLU v5.0": {
    url: "/ANISHAHACK.jpg",
    filename: "Hack-JKLU-5-Certificate.jpg",
  },
  "Certificate of Appreciation — Sabrang '24": {
    url: "/anishasabrang.jpg",
    filename: "Sabrang-24-Certificate.jpg",
  },
};

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
        {certifications.map((c, i) => {
          const file = certificateFiles[c.title];

          // Use the actual files stored in client/public.
          const fileUrl = file?.url || c.link;
          const fileName = file?.filename || c.fileName;

          const isImage = /\.(jpg|jpeg|png|webp)$/i.test(fileUrl || "");

          return (
            <Reveal
              key={c.title}
              delay={i * 0.1}
              className="card cert-card"
            >
              {isImage ? (
                <button
                  type="button"
                  className="cert-image-button"
                  onClick={() =>
                    setSelectedCertificate({
                      ...c,
                      image: fileUrl,
                      fileName,
                    })
                  }
                  aria-label={`Preview ${c.title}`}
                >
                  <img
                    src={fileUrl}
                    alt={`${c.title} certificate`}
                    loading="lazy"
                  />
                </button>
              ) : (
                <div className="cert-icon" aria-hidden="true">
                  📜
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
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  View Certificate
                </a>

                <a
                  href={fileUrl}
                  download={fileName}
                  className="btn btn-outline btn-sm"
                >
                  Download Certificate
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <h3 className="sub-title">
          Achievements &amp; Activities
        </h3>

        <ul className="achievements">
          {achievements.map((achievement) => (
            <li key={achievement}>🏆 {achievement}</li>
          ))}
        </ul>
      </Reveal>

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
              aria-label="Close preview"
            >
              &times;
            </button>

            <h3>{selectedCertificate.title}</h3>

            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} certificate`}
              className="cert-modal-image"
            />

            <a
              href={selectedCertificate.image}
              download={selectedCertificate.fileName}
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
