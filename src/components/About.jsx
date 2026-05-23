// components/About.jsx
import "../styles/About.css";
import SectionLabel from "./SectionLabel";
import { useFadeIn } from "../hooks/useFadein";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const ref = useFadeIn();
  const { bio, stats } = portfolioData;

  return (
    <section id="about">
      <SectionLabel num="01" label="About" />

      <div className="about-grid fade-in" ref={ref}>
        <div className="about-text">
          {bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="about-stats">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
