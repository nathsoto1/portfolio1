import './Awards.css';

const awardsData = [
  {
    title: 'JROTC Cadet Challenge',
    detail: 'State Level — 2nd Place',
  },
  {
    title: 'IB Full Diploma',
    detail: 'International Baccalaureate Full Diploma Recipient',
  },
  {
    title: 'LSU Merit Scholar',
    detail: 'Louisiana State University Merit Scholarship Recipient',
  },
];

export default function Awards() {
  return (
    <section id="awards" className="awards">
      <div className="container">
        <h2 className="text-center">Awards</h2>
        <div className="awards-grid">
          {awardsData.map(({ icon, title, detail }) => (
            <div className="award-card" key={title}>
              <h3>{title}</h3>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
