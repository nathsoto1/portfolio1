import "./Footer.css";

export default function Footer() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer>
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://github.com/nathsoto1"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 Nathan Soto. All rights reserved.</p>
        <p>Last updated: {lastUpdated}</p>
      </div>
    </footer>
  );
}
