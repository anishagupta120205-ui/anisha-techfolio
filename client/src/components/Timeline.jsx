import { timeline } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

export default function Timeline() {
  return (
    <Section id="journey" zone="alt" from="blush" wave={0} variant={2} sparkles={16} title="Education &amp; Experience">
      <div className="timeline">
        {timeline.map((item, i) => (
          <Reveal
            key={item.title}
            x={i % 2 === 0 ? -40 : 40}
            y={0}
            className={`tl-item ${i % 2 === 0 ? "left" : "right"}`}
          >
            <span className="tl-dot" aria-hidden="true">{item.type === "education" ? "🎓" : "💼"}</span>
            <div className="card">
              <span className="tl-period">{item.period}</span>
              <h3>{item.title}</h3>
              <p className="tl-place">{item.place}</p>
              <ul>
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
