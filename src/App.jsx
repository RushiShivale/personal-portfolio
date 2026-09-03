import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

/**
 * App — Root component that assembles all portfolio sections.
 * Sections render in order: Navbar → Hero → About → Skills → Projects → Contact → Footer
 */
const App = () => {
  return (
    <>
      {/* Fixed navigation bar */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Site footer */}
      <Footer />
    </>
  );
};

export default App;
