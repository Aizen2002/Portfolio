// components/Projects.jsx
import { useState } from "react";
import "../styles/Projects.css";
import SectionLabel from "./SectionLabel";
import { useFadeIn } from "../hooks/useFadein";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const ref = useFadeIn();
  const { projects } = portfolioData;
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects">
      <SectionLabel num="02" label="Projects" />

      <div className="projects-grid fade-in" ref={ref}>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

// ── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onClick }) {
  const { name, desc, tags } = project;

  return (
    <div className="proj-card" onClick={onClick}>
      <div className="proj-card-header">
        <div className="proj-num">0{index + 1}</div>
        <div className="proj-preview-hint">Preview ↗</div>
      </div>
      <div className="proj-name">{name}</div>
      <div className="proj-desc">{desc}</div>
      <div className="proj-tags">
        {tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

// ── Project Modal ─────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const { name, desc, tags, url, liveUrl, image } = project;

  // close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        {/* Header */}
        <div className="modal-header">
          <div>
            <div className="modal-label">Project</div>
            <h3 className="modal-title">{name}</h3>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Optional image preview */}
        {image && (
          <div className="modal-image-wrap">
            <img src={image} alt={`${name} preview`} />
          </div>
        )}

        {/* Body */}
        <div className="modal-body">
          <p className="modal-desc">{desc}</p>

          <div className="modal-section">
            <div className="modal-section-label">Tech Stack</div>
            <div className="modal-tags">
              {tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="modal-footer">
          {url && url !== "#" && (
            <a
              className="btn btn-ghost"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>
          )}
          {liveUrl && (
            <a
              className="btn btn-primary"
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo ↗
            </a>
          )}
          {(!url || url === "#") && !liveUrl && (
            <span className="modal-no-link">No links available yet</span>
          )}
        </div>
      </div>
    </div>
  );
}
