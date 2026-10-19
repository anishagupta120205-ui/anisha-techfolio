import { API_URL } from "../config.js";
import DownloadButtons from "./DownloadButtons.jsx";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

export default function ResumePage() {
  return (
    <Section zone="light" tone="lav" variant={2} sparkles={10} style={{ minHeight: "80vh" }}>
      <Reveal className="section-head">
        <h1 className="section-title">Resume</h1>
        <p className="section-sub">Download my CV, or preview the PDF below.</p>
      </Reveal>
      <Reveal>
        <DownloadButtons />
      </Reveal>
      <Reveal delay={0.15}>
        <iframe
          className="resume-frame"
          title="Resume PDF preview"
          src={`${API_URL}/api/resume/pdf`}
        />
      </Reveal>
    </Section>
  );
}
