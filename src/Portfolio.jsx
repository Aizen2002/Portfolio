// Portfolio.jsx
// Main entry point — imports and renders all sections in order.
// To reorder sections, just move the components around below.

import "./styles/portfolio.css";
import "./styles/Nav.css";

import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Projects   from "./components/Projects";
import Skills     from "./components/Skills";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";

export default function Portfolio() {
  return (
    <div className="port">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
