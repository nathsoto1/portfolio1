import './Resume.css';

const technicalSkills = [
  { name: 'JavaScript', pct: 95 },
  { name: 'React',      pct: 90 },
  { name: 'Node.js',    pct: 85 },
  { name: 'Python',     pct: 80 },
];

const languages = [
  { name: 'English', label: 'Native',       pct: 100 },
  { name: 'Spanish', label: 'Intermediate', pct: 60  },
];

function SkillBar({ name, pct, label }) {
  return (
    <div className="skill">
      <div className="skill-name">
        <span>{name}</span>
        <span>{label || `${pct}%`}</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${pct}%` }}></div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="text-center">My Resume</h2>
        <div className="resume-container">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Aug 2022 - 2026</div>
              <div className="timeline-content">
                <h3>Student</h3>
                <p>LSU Computer Science</p>
                <p>Developed many class projects using a wide variety of programming languages.</p>
              </div>
            </div>
          </div>
          <div className="skills-list">
            <div className="skill-category">
              <h3>Technical Skills</h3>
              {technicalSkills.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
            <div className="skill-category">
              <h3>Languages</h3>
              {languages.map((l) => <SkillBar key={l.name} {...l} />)}
            </div>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a href="assets/Resume.pdf" className="btn">
            <i className="fas fa-download"></i> Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
