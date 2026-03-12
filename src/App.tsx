import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Research from './sections/Research';
import Publications from './sections/Publications';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
