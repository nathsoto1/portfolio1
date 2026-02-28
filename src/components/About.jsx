import './About.css';

const skillItems = [
  { icon: 'fa-code',     title: 'Frontend',  desc: 'HTML, CSS, JavaScript, React, Vue.js' },
  { icon: 'fa-server',   title: 'Backend',   desc: 'Node.js, Express, Python, Django' },
  { icon: 'fa-database', title: 'Database',  desc: 'MySQL, MongoDB, PostgreSQL' },
  { icon: 'fa-tools',    title: 'Tools',     desc: 'Git, Docker, AWS, Webpack, Figma, Numpy, Matplotlib, p5.js, Arduino' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="text-center">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Hello! I'm Nathan, a passionate full-stack developer based in Hammond, LA. I am currently pursuing a degree in Computer Science with a concentration in software engineering!</p>
            <p>My journey in tech started when I joined my school's robotics team at 16, and since then I've been hooked on creating digital experiences that solve real-world problems. When I'm not coding, you can find me working out, reading tech blogs, or experimenting with new programming languages.</p>
            <p>I believe in writing clean, efficient code and continuously learning new technologies to stay at the forefront of web development.</p>
          </div>
          <div className="skills-grid">
            {skillItems.map(({ icon, title, desc }) => (
              <div className="skill-item" key={title}>
                <h3><i className={`fas ${icon}`}></i> {title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
