import Nav from "./components/Nav";
import RulerMarks from "./components/RulerMarks";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-blueprint-800 text-paper font-body min-h-screen">
      <RulerMarks />
      <Nav />
      <Hero />
      <About />
      <TechStack />
      <Skills />
      <Projects />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
