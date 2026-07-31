// components/Certifications.jsx
import { useState } from "react";
import "../styles/Certifications.css";
import SectionLabel from "./SectionLabel";
import { useFadeIn } from "../hooks/useFadein";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const ref = useFadeIn();
  const { certifications } = portfolioData;
  const [selected, setSelected] = useState(null);

  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications">
      <SectionLabel num="06" label="Certifications" />

      <div className="cert-grid fade-in" ref={ref}>
        {certifications.map((cert) => (
          <CertCard key={cert.name} cert={cert} onClick={() => setSelected(cert)} />
        ))}
      </div>

      {selected && (
        <CertModal cert={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

// ── Cert Card ─────────────────────────────────────────────────────────────────
function CertCard({ cert, onClick }) {
  const { name, issuer, date, icon } = cert;

  return (
    <div className="cert-card" onClick={onClick}>
      <div className="cert-card-top">
        <div className="cert-icon">{icon || "🏅"}</div>
        <div className="cert-view-hint">View ↗</div>
      </div>
      <div className="cert-name">{name}</div>
      <div className="cert-issuer">{issuer}</div>
      <div className="cert-date">{date}</div>
    </div>
  );
}

// ── Cert Modal ────────────────────────────────────────────────────────────────
function CertModal({ cert, onClose }) {
  const { name, issuer, date, image, credentialUrl } = cert;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal cert-modal">
        {/* Header */}
        <div className="modal-header">
          <div>
            <div className="modal-label">{issuer}</div>
            <h3 className="modal-title">{name}</h3>
            <div className="cert-modal-date">{date}</div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Certificate image */}
        {image ? (
          <div className="cert-modal-image-wrap">
            <img src={image} alt={`${name} certificate`} />
          </div>
        ) : (
          <div className="cert-modal-no-image">
            <span>🏅</span>
            <p>No certificate image added yet.</p>
          </div>
        )}

        {/* Footer */}
        <div className="modal-footer">
          {credentialUrl && (
            <a
              className="btn btn-primary"
              href={credentialUrl}
              target="_blank"
              rel="noreferrer"
            >
              Verify Credential ↗
            </a>
          )}
          <button className="btn btn-ghost" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
