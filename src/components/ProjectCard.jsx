import './ProjectCard.css';

export default function ProjectCard({ img, alt, title, desc, tags, links }) {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={img} alt={alt} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span className="project-tag" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {links.map(({ icon, label, href }) => (
            <a href={href} key={label}>
              <i className={icon}></i> {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
