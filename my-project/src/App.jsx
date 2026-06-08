import './App.css'

function App() {
  return (
    <main className="portfolio">
      <header className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Full-stack web developer</span>
          <h1>Kush R Acharya</h1>
          <p>
            Computer Science Engineering student building polished web experiences with React,
            Node.js, and modern database workflows. Passionate about clean design, scalable systems,
            and impactful user journeys.
          </p>
          <div className="hero-actions">
            <a href="https://github.com/KushAchar" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/kushacharya" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-inner">
            <p className="hero-tag">About</p>
            <h2>Student | Developer | Innovator</h2>
            <ul>
              <li>Strong academic performance in B.Tech CSE</li>
              <li>Hands-on full-stack web applications</li>
              <li>Reliable, collaborative, and eager to learn</li>
            </ul>
          </div>
        </div>
      </header>

      <section className="section about">
        <div>
          <h2>Education</h2>
          <p>
            B.Tech in Computer Science and Engineering, NMAM Institute of Technology, Nitte.
            Current CGPA: 8.25.
          </p>
          <p>
            Strong foundation in algorithms, databases, and web systems built through
            academic projects and extracurricular leadership.
          </p>
        </div>
        <div className="stats-grid">
          <article>
            <h3>93.66%</h3>
            <p>Pre-University at Poorna Prajna PU College</p>
          </article>
          <article>
            <h3>85.6%</h3>
            <p>Secondary schooling at Poorna Prajna English Medium School</p>
          </article>
        </div>
      </section>

      <section className="section skills">
        <h2>Technical Skills</h2>
        <div className="chips">
          <span>C</span>
          <span>C++</span>
          <span>Python</span>
          <span>Java</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Spring Boot</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>PgAdmin</span>
          <span>GitHub</span>
          <span>Postman</span>
        </div>
      </section>

      <section className="section projects">
        <h2>Selected Projects</h2>
        <div className="project-list">
          <article>
            <h3>Smart Network Monitoring System</h3>
            <p>
              Web app for monitoring network devices and health status with REST APIs
              built in Node.js and MongoDB, plus a responsive React dashboard with
              light and dark mode support.
            </p>
          </article>
          <article>
            <h3>Real Estate Listings Platform</h3>
            <p>
              Scalable JSF-based real estate platform with authentication,
              role-based access, dynamic search, filters, and a polished buyer/seller experience.
            </p>
          </article>
        </div>
      </section>

      <section className="section extras">
        <div>
          <h2>Leadership &amp; Activities</h2>
          <ul>
            <li>Black belt in karate</li>
            <li>Crew committee member at INCREDIA tech-cultural fest</li>
            <li>Active participant in HackerEarth, Tudar, and Rachana clubs</li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <p>Phone: +91-7204470562</p>
          <p>Email: <a href="mailto:khushchr@gmail.com">khushchr@gmail.com</a></p>
        </div>
      </section>
    </main>
  )
}

export default App
