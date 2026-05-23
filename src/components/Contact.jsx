// components/Contact.jsx
import "../styles/Contact.css";
import SectionLabel from "./SectionLabel";
import { useFadeIn } from "../hooks/useFadein";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const ref = useFadeIn();
  const { cta, ctaDesc, email, github, linkedin, location } = portfolioData.contact;

  const links = [
    { icon: "✉", label: email,    href: `https://mail.google.com/mail/u/2/#inbox${email}`        },
    { icon: "⌥", label: github,   href: `https://github.com/${github}`      },
    { icon: "in", label: linkedin, href: `https://www.linkedin.com/in/florence-ayen-de-jesus-60b59634a/${linkedin}`    },
    { icon: "⊙", label: location, href: null                     },
  ];

  return (
    <section id="contact">
      <SectionLabel num="05" label="Contact" />

      <div className="contact-inner fade-in" ref={ref}>
        <div className="contact-cta">
          <h2>{cta}</h2>
          <p>{ctaDesc}</p>
          <a className="btn btn-primary" href={`mailto:${email}`}>
            Send a message
          </a>
        </div>

        <div className="contact-links">
          {links.map((link) =>
            link.href ? (
              <a
                className="contact-link"
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">{link.icon}</span>
                {link.label}
              </a>
            ) : (
              <span className="contact-link" key={link.label}>
                <span className="contact-icon">{link.icon}</span>
                {link.label}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
