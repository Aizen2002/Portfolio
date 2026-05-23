// components/Experience.jsx
import "../styles/Experience.css";
import SectionLabel from "./SectionLabel";
import { useFadeIn } from "../hooks/useFadein";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const ref = useFadeIn();
  const { experience } = portfolioData;

  return (
    <section id="experience">
      <SectionLabel num="04" label="Experience" />

      <div className="exp-list fade-in" ref={ref}>
        {experience.map((job) => (
          <ExperienceItem key={job.role} job={job} />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({ job }) {
  const { period, role, company, desc } = job;

  return (
    <div className="exp-item">
      <div className="exp-period">{period}</div>
      <div>
        <div className="exp-role">{role}</div>
        <div className="exp-company">{company}</div>
        <div className="exp-desc">{desc}</div>
      </div>
    </div>
  );
}
