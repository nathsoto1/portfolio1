import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CurrentProject from './components/CurrentProject';
import Resume from './components/Resume';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <CurrentProject />
      <Resume />
      <Awards />
      <Contact />
      <Footer />
    </>
  );
}
