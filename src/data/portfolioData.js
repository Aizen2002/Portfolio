// ─────────────────────────────────────────────────────────────────────────────
// portfolioData.js
// Edit this file to update all your portfolio content.
// ─────────────────────────────────────────────────────────────────────────────

export const portfolioData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  logo: "florence.dev",
  name: "Florence Ayen Z. De Jesus",
  tagline: "Available for work",
  headline: {
    line1: "Florence Ayen De Jesus,",
    line2: "Software Developer.",
  },

  // ── About ─────────────────────────────────────────────────────────────────
  bio: [
    "Hi — I'm Florence, a software developer based in Metro Manila. I specialize in building robust, scalable web applications using modern JavaScript and backend technologies.",
    "I care deeply about clean code, developer experience, and shipping products that people actually enjoy using. When I'm not coding, I'm probably reading about systems design or brewing coffee.",
  ],

  stats: [
    { num: "2", label: "Months of experience"},
    { num: "4", label: "Projects shipped"    },
  ],

  // ── Projects ──────────────────────────────────────────────────────────────
  projects: [
    {
      name: "Recipe-blog",
      desc: "Built a responsive Recipe Blog application using Node.js, Express.js, and EJS, featuring dynamic recipe posting, editing, and content management with server-side rendering.",
      tags: ["Node.js", "JavaScript", "Express JS", "HTML", "CSS"],
      url: "https://github.com/Aizen2002/recipe-blog",
      liveUrl: "https://recipehub-qh2w.onrender.com/",   // optional
      image: "/screenshots/recipe-blog.png",        // optional
    },
    {
      name: "PSA Digital Library",
      desc: "Developed a PSA Digital Library web application that provides organized access to digital documents and records through a user-friendly interface.",
      tags: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
      liveUrl: "https://taskflow.vercel.app",   // optional
      image: "/screenshots/PSA-digital-library.png",        // optional
    },
    {
      name: "Growing in Faith",
      desc: "Developed an interactive e-learning website, “Growing in Faith,” for Grade 8 students of Immaculate Conception Academy to support engaging and accessible learning.",
      tags: ["React", "JavaScript(ES6+)","Firebase"],
      url: "https://github.com/Aizen2002/Growing-in-faith-web",
      liveUrl: "https://growing-in-faith-web-final.vercel.app/login",   // optional
      image: "/screenshots/growing-in-faith.png",        // optional
    },
  ],

  // ── Skills ────────────────────────────────────────────────────────────────
  skills: [
    {
      group: "Frontend",
      items: ["React", "TypeScript","HTML", "CSS", "JavaScript"],
    },
    {
      group: "Backend",
      items: ["Node.js", "Express JS", "PHP", "Redis"],
    },
    {
      group: "Dev tools & AI tools",
      items: ["Git", "Chatgpt", "Claude AI", "Postman"],
    },
  ],

  // ── Experience ────────────────────────────────────────────────────────────
  experience: [
    {
      period: "February 2025 — May 2025",
      role: "Web Developer / IT Support Intern",
      company: "Philippine Statistics Authority NCR V",
      desc: "Supported the development of a digital library system for the Philippine Statistics Authority by assisting in web development, system maintenance, and data management tasks. Collaborated with a team to design and implement responsive web pages, translating UI designs into functional front-end code and ensuring system reliability through data processing and backups.",
    }
  ],

  // ── Contact ───────────────────────────────────────────────────────────────
  contact: {
    cta: "Let's build something together.",
    ctaDesc:
      "Open to full-time roles, freelance contracts, and interesting side projects. Drop me a line — I'm quick to reply.",
    email: "dejesus.florence06@gmail.com",
    github: "Aizen2002",
    linkedin: "Florence Ayen De Jesus",
    location: "Navotas City Metro Manila, PH",
  },

  // ── Nav sections (order controls nav link order) ──────────────────────────
  navSections: [
    { id: "about",      label: "About"      },
    { id: "projects",   label: "Projects"   },
    { id: "skills",     label: "Skills"     },
    { id: "experience", label: "Experience" },
    { id: "contact",    label: "Contact"    },
  ],
};

