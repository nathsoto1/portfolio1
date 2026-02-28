import ProjectCard from './ProjectCard';
import './Projects.css';

const projectsData = [
  {
    img: 'assets/image.png',
    alt: 'Universal Fitness App',
    title: 'Universal Fitness',
    desc: 'An app I made with a team to create connectivity between people at the gym. Features a calorie tracker, workout generator, a news section, and a social media platform!',
    tags: ['Kotlin', 'Android Studio', 'Docker'],
    links: [
      { icon: 'fab fa-github', label: 'GitHub', href: 'https://github.com/CSC-3380-Fall-2024/Team-16?tab=readme-ov-file' },
    ],
  },
  {
    img: 'assets/nueron.png',
    alt: 'Neuron Simulation',
    title: 'Neuron Simulation',
    desc: 'A Python program that simulates how two neurons interact with each other. A key feature is the ability to add different constraints to see how the neurons will react.',
    tags: ['Python', 'Numpy', 'Matplotlib'],
    links: [
      { icon: 'fab fa-github', label: 'GitHub', href: 'https://github.com/nathsoto1/NeuroSim' },
    ],
  },
  {
    img: 'assets/globe.png',
    alt: 'Global News Finder',
    title: 'Global News Finder',
    desc: 'A webpage that allows you to search news from around the world and translate it. I made this to encourage people to stay informed about other parts of the world!',
    tags: ['Node.js', 'NewsAPI', 'JavaScript'],
    links: [
      { icon: 'fab fa-github', label: 'GitHub', href: '#' },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="text-center">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
