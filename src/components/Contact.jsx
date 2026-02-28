import { useState } from 'react';
import './Contact.css';

const contactInfo = [
  { icon: 'fa-envelope',    title: 'Email',    detail: 'sotonathan2004@gmail.com' },
  { icon: 'fa-phone',       title: 'Phone',    detail: '+1 (985) 687-9093' },
  { icon: 'fa-map-marker-alt', title: 'Location', detail: 'Hammond, Louisiana' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${form.name}! Your message has been received.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="text-center">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            {contactInfo.map(({ icon, title, detail }) => (
              <div className="contact-item" key={title}>
                <div className="contact-icon">
                  <i className={`fas ${icon}`}></i>
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
