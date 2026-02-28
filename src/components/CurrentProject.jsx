import ProjectCard from './ProjectCard';
import './Projects.css';

export default function CurrentProject() {
  return (
    <section id="current" className="projects">
      <div className="container">
        <h2 className="text-center">Current Project</h2>
        <div className="projects-grid">
          <ProjectCard
            img="assets/vigiloLOGO2.png"
            alt="Current Project"
            title="Vigiloo"
            desc="I'm currently assisting on building a mobile app with the goal of teaching cyber security principles to the general public."
            tags={['React Native', 'SQL', 'JavaScript']}
            links={[
              { icon: 'fab fa-github', label: 'GitHub', href: '#' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
