"use client";

import React from "react";

const skills = [
  "Statistical Analysis",
  "Database Management",
  "Root Cause Analysis",
  "Quality Control",
  "Technical Reporting",
  "Process Improvement",
  "Standard Operating",
  "Data Entry Accuracy",
  "Teamwork & Collaboration",
  "Problem Solving & Decision Making",
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
];

const courses = [
  {
    title: "Professional Office Management Course",
    provider: "World Information Technology Foundation",
    date: "Jun 2020 – Nov 2020",
    location: "Netrokona",
    items: [
      "Office Administration & Management",
      "Document & Record Management",
      "Microsoft Office (Word, Excel & PowerPoint)",
      "Professional Communication & Correspondence",
      "Time Management & Task Coordination",
    ],
  },
  {
    title: "Digital Marketing",
    provider: "Dreamland IT & Software",
    date: "Dec 2022",
    location: "",
    items: [
      "Social Media Marketing (SMM)",
      "Content Marketing",
      "Social Media Management",
      "Lead Generation",
      "Digital Campaign Management",
      "Keyword Research",
      "Online Branding & Promotion",
    ],
  },
];

// Add your real GitHub profile URL here after creating your account.
const githubUrl = "https://github.com/shamim_sm";

const projects = [
  {
    title: "Quality Inspection & Defect Tracking",
    type: "Professional Experience",
    description: "Hands-on quality inspection work covering visual checks, component-batch inspection, defect trend reporting, production-line monitoring and specification verification.",
    tags: ["Quality Control", "Inspection", "Technical Reporting"],
  },
  {
    title: "Production Process Monitoring",
    type: "Professional Experience",
    description: "Supported production quality by monitoring lines, identifying potential flaws and documenting issues to help reduce output scrap.",
    tags: ["Process Improvement", "Root Cause Analysis", "Reporting"],
  },
  {
    title: "Computer Operations & Data Management",
    type: "Professional Experience",
    description: "Handled daily data batch updates, system monitoring, routine backups and hardware/software troubleshooting in a computer operator role.",
    tags: ["Data Management", "MS Office", "Troubleshooting"],
  },
];

const experience = [
  {
    company: "Ilmeeyat Apparels Ltd (Sharmin Group)",
    role: "Quality Inspector",
    date: "Oct 2023 – Sep 2025",
    location: "Square Masterbari, Valuka, Mymensingh",
    points: [
      "Execute rigorous visual checks to ensure all items meet quality norms.",
      "Inspect component batches for faults to maintain high safety standards.",
      "Log detailed reports on defect trends to improve the assembly process.",
      "Monitor production lines to prevent flaws and reduce output scrap rate.",
      "Verify product specs align with client needs via precise manual testing.",
    ],
  },
  {
    company: "Eslite Garments (BD) Co., Ltd",
    role: "Computer Operator",
    date: "Aug 2022 – Oct 2023",
    location: "Square Masterbari, Valuka, Mymensingh",
    points: [
      "Operated complex mainframe systems to process daily data batch updates.",
      "Monitored server performance metrics to ensure optimal system uptime.",
      "Executed routine data backups to maintain robust security and integrity.",
      "Resolved hardware and software faults to support seamless workflow operations.",
      "Managed peripheral equipment tasks to assist technical staff daily runs.",
    ],
  },
];

const education = [
  ["Bachelor of Social Science (BSS) – Pass Course", "Netrokona Govt. College", "2022", "CGPA 2.67 / 5"],
  ["Higher Secondary School Certificate (HSC) – Humanities", "Abu Abbas College", "2018", "GPA 3.25 / 5"],
  ["Secondary School Certificate (SSC) – Humanities", "Mahmudpur High School", "2016", "GPA 3.78 / 5"],
];

function Icon({ name }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    mail: <><path d="m4 4 8 7 8-7"/><rect x="3" y="4" width="18" height="16" rx="2"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    map: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    calendar: <><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

export default function Home() {
  const [light, setLight] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <main>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#home" className="brand"><span>SM</span> Shamim Mia</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-tools">
            <button className="theme-toggle" onClick={() => setLight(!light)} aria-label="Toggle light and dark mode">
              {light ? "☾" : "☀"}
            </button>
            <a className="nav-cta" href="/SHAMIM_MIA-CV.pdf" download>Download CV</a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability"><span></span> Open to professional opportunities</div>
            <p className="eyebrow">PORTFOLIO • QUALITY • DATA • ADMINISTRATION</p>
            <h1>Hi, I’m <span>Shamim Mia.</span><br />I build reliable work through <em>accuracy &amp; discipline.</em></h1>
            <p className="lead">
              Social Science graduate with professional training in Office Management and Digital Marketing,
              and hands-on experience in quality inspection and computer operations.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#experience">Explore my experience <Icon name="arrow" /></a>
              <a className="button secondary" href="/SHAMIM_MIA-CV.pdf" download><Icon name="download" /> Download CV</a>
            </div>
            <div className="contact-strip">
              <a href="mailto:shamim360865@gmail.com"><Icon name="mail" /> shamim360865@gmail.com</a>
              <a href="tel:+8801757516757"><Icon name="phone" /> 01757516757</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="photo-wrap"><img src="/profile.jpg" alt="Shamim Mia" className="profile-photo" /></div>
            <h2>Shamim Mia</h2>
            <p>Quality Inspector · Computer Operator</p>
            <div className="mini-divider" />
            <div className="quick-info"><Icon name="map" /><span>Netrakona Sadar, Bangladesh</span></div>
            <div className="quick-info"><Icon name="calendar" /><span>27 March 2001</span></div>
            <a className="linkedin-card" href="https://www.linkedin.com/in/shamim-mia-402222259" target="_blank" rel="noreferrer">
              <Icon name="linkedin" /> Connect on LinkedIn <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container two-col">
          <div>
            <p className="section-kicker">01 / ABOUT ME</p>
            <h2 className="section-title">Professional mindset, practical experience.</h2>
          </div>
          <div className="about-copy">
            <p>
              I am a Social Science graduate with professional training in Office Management and Digital Marketing.
              My experience includes quality control, data handling, computer operations, technical reporting,
              and administrative support.
            </p>
            <p>
              I focus on accuracy, organized workflows, problem solving, and teamwork while supporting
              day-to-day operational goals.
            </p>
            <div className="stats">
              <div><strong>3+</strong><span>Years of listed professional experience</span></div>
              <div><strong>13</strong><span>Core competency areas</span></div>
              <div><strong>2</strong><span>Professional training courses</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-alt">
        <div className="container">
          <p className="section-kicker">02 / EXPERIENCE</p>
          <h2 className="section-title">Work experience</h2>
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-item" key={job.company}>
                <div className="timeline-dot" />
                <div className="job-card">
                  <div className="job-top">
                    <div>
                      <p className="job-role">{job.role}</p>
                      <h3>{job.company}</h3>
                    </div>
                    <span className="date">{job.date}</span>
                  </div>
                  <p className="location"><Icon name="map" /> {job.location}</p>
                  <ul>{job.points.map((point) => <li key={point}><Icon name="check" /> {point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section section-alt">
        <div className="container">
          <div className="projects-heading">
            <div>
              <p className="section-kicker">03 / PROJECTS &amp; WORK SAMPLES</p>
              <h2 className="section-title">Practical work, clearly presented.</h2>
            </div>
            <div className="github-box">
              <span>GITHUB</span>
              {githubUrl? (
                <a href={githubUrl} target="_blank" rel="noreferrer">View GitHub →</a>
              ) : (
                <p>Create your GitHub profile and add the URL in <code>app/page.js</code>.</p>
              )}
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
          <p className="project-note">These are experience-based work samples derived from the responsibilities listed in my CV; they are not presented as independent software projects.</p>
        </div>
      </section>

      {skills_marke<section id="skills" className="section">
        <div className="container two-col skills-layout">
          <div>
            <p className="section-kicker">04 / SKILLS</p>
            <h2 className="section-title">Core competencies</h2>
            <p className="muted">A practical mix of quality control, data, office productivity and operational skills.</p>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-kicker">04 / WORK HIGHLIGHTS</p>
          <h2 className="section-title">What I bring to a team</h2>
          <div className="highlights-grid">
            <article className="highlight-card"><span>01</span><h3>Quality Control</h3><p>Visual inspection, defect tracking, production-line monitoring and specification checks from hands-on garment industry experience.</p></article>
            <article className="highlight-card"><span>02</span><h3>Data &amp; Computer Operations</h3><p>Daily data processing, system monitoring, backups, troubleshooting and peripheral equipment support.</p></article>
            <article className="highlight-card"><span>03</span><h3>Office &amp; Digital Skills</h3><p>Microsoft Office, document management, professional communication, social media marketing and digital campaign fundamentals.</p></article>
          </div>
        </div>
      </section>

      {mar<section className="section">ker}
        <div className="container">
          <p className="section-kicker">05 / EDUCATION &amp; TRAINING</p>
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {education.map(([degree, school, year, grade]) => (
              <article className="education-card" key={degree}>
                <span className="year">{year}</span>
                <h3>{degree}</h3>
                <p>{school}</p>
                <strong>{grade}</strong>
              </article>
            ))}
          </div>

          <h3 className="subheading">Professional courses</h3>
          <div className="courses-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.title}>
                <p className="course-date">{course.date}{course.location ? ` · ${course.location}` : ""}</p>
                <h3>{course.title}</h3>
                <p>{course.provider}</p>
                <ul>{course.items.map((item) => <li key={item}><Icon name="check" /> {item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section language-section">
        <div className="container language-grid">
          <div><p className="section-kicker">06 / LANGUAGES</p><h2 className="section-title">Communication</h2></div>
          <div className="language-cards">
            <div><span>Bangla</span><strong>Native</strong></div>
            <div><span>English</span><strong>Intermediate</strong></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-box">
          <div>
            <p className="section-kicker">07 / CONTACT</p>
            <h2>Let’s connect.</h2>
            <p>For professional opportunities, collaboration, or further information, feel free to get in touch.</p>
          </div>
          <div className="contact-side">
            <form className="contact-form" action="https://formspree.io/f/xppwkqaq" method="POST">
              <input type="hidden" name="subject" value="New Portfolio Contact — Shamim Mia" />
              <label>Your name<input name="name" type="text" placeholder="Your name" required /></label>
              <label>Your email<input name="email" type="email" placeholder="you@example.com" required /></label>
              <label>Message<textarea name="message" rows="5" placeholder="Write your message..." required /></label>
              <button className="button primary" type="submit">Send message <Icon name="arrow" /></button>
            </form>
            <div className="contact-links">
              <a href="mailto:shamim360865@gmail.com"><Icon name="mail" /><span>Email<br /><b>shamim360865@gmail.com</b></span></a>
              <a href="tel:+8801757516757"><Icon name="phone" /><span>Phone<br /><b>01757516757</b></span></a>
              <a href="https://www.linkedin.com/in/shamim-mia-402222259" target="_blank" rel="noreferrer"><Icon name="linkedin" /><span>LinkedIn<br /><b>View profile</b></span></a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>© 2026 Shamim Mia. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
