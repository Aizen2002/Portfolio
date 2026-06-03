// components/Nav.jsx
import { portfolioData } from "../data/portfolioData";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Nav() {
  const { logo, navSections } = portfolioData;

  return (
    <nav className="nav">
      <span className="nav-logo">{logo}</span>
      <ul className="nav-links">
        {navSections.map((section) => (
          <li key={section.id}>
            <button onClick={() => scrollTo(section.id)}>
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}