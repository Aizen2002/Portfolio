// components/Hero.jsx
import "../styles/Hero.css";
import { portfolioData } from "../data/portfolioData";
import resumeFile from "../resume.pdf";
import heroBg from "../hero-bg.png";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  const { tagline, headline, bio } = portfolioData;

  return (
    <div className="hero">
      {/* ── Left: text ── */}
      <div className="hero-left">
        <div className="hero-tag">{tagline}</div>

        <h1>
          {headline.line1}
          <br />
          <em>{headline.line2}</em>
        </h1>

        <p className="hero-sub">{bio[0]}</p>

        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
            View projects
          </button>
          <button className="btn btn-ghost" onClick={() => scrollTo("contact")}>
            Get in touch
          </button>
          <a className="btn btn-ghost" href={resumeFile} target="_blank" rel="noreferrer" download>
            Download CV ↓
          </a>
        </div>
      </div>
    
      {/* ── Right: image panel ── */}
      <div className="hero-image-wrap">
        <img src={heroBg} alt="Code on screen" />
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">Open to work</span>
        </div>
      </div>
    </div>
  );
}
