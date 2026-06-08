import "./App.css";

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">Kush Acharya</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">

        <div className="hero-content">
          <span className="hero-badge">
            Full Stack Developer
          </span>

          <h1>
            Building Digital
            <span> Experiences </span>
            That Matter
          </h1>

          <p className="hero-desc">
            Computer Science Engineering student passionate
            about Full Stack Development, Problem Solving,
            Databases and creating impactful web applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a
              href="https://github.com/KushAchar"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>
          </div>
        </div>

      </section>

      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I'm Kush Acharya, a Computer Science Engineering
          student with strong interests in Full Stack
          Development, Software Engineering, Database
          Management Systems and scalable web applications.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Tech Stack</h2>

        <div className="skills-grid">
          {[
            "Python",
            "Java",
            "C++",
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "MySQL",
            "Spring Boot",
            "Git",
            "Postman",
            "Linux",
          ].map((skill) => (
            <div key={skill} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Smart Network Monitoring</h3>
            <p>
              Real-time network monitoring dashboard built
              using React, Node.js and MongoDB.
            </p>
          </div>

          <div className="project-card">
            <h3>Hospital Management System</h3>
            <p>
              End-to-end healthcare workflow and patient
              management platform.
            </p>
          </div>

          <div className="project-card">
            <h3>Real Estate Platform</h3>
            <p>
              Property listing and role-based management
              system with advanced search features.
            </p>
          </div>

        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Let's Connect</h2>

        <p>Email: khushchr@gmail.com</p>
        <p>Phone: +91 7204470562</p>
      </section>

    </div>
  );
}

export default App;