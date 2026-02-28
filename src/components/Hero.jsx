import './Hero.css';

export default function Hero() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Nathan Soto</h1>
          <p>I'm a full-stack developer with a passion for creating beautiful, functional web applications that make a difference.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn" onClick={(e) => handleClick(e, '#projects')}>
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => handleClick(e, '#contact')}>
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="assets/pic1.png" alt="Nathan Soto" />
        </div>
      </div>
    </section>
  );
}
