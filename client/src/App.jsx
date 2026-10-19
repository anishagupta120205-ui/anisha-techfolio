import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import ResumePage from "./components/ResumePage.jsx";
import Section from "./components/Section.jsx";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Certifications />
      <Contact />
    </>
  );
}

function NotFound() {
  return (
    <Section zone="alt" variant={2} sparkles={14} style={{ textAlign: "center", minHeight: "70vh" }}>
      <h1 className="section-title">404</h1>
      <p className="muted">That page doesn't exist.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: 24 }}>
        Back home
      </Link>
    </Section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
