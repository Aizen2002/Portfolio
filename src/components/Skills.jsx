// components/Skills.jsx
import "../styles/Skills.css";
import SectionLabel from "./SectionLabel";
import { useFadeIn } from "../hooks/useFadein";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const ref = useFadeIn();
  const { skills } = portfolioData;

  return (
    <section id="skills">
      <SectionLabel num="03" label="Skills" />

      <div className="skills-groups fade-in" ref={ref}>
        {skills.map((group) => (
          <SkillGroup key={group.group} group={group} />
        ))}
      </div>
    </section>
  );
}

function SkillGroup({ group }) {
  return (
    <div>
      <div className="skill-group-title">{group.group}</div>
      <div className="skill-list">
        {group.items.map((item) => (
          <div className="skill-item" key={item}>
            <span className="skill-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
