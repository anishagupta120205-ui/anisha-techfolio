import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

function levelLabel(n) {
  if (n >= 80) return "Advanced";
  if (n >= 65) return "Proficient";
  if (n >= 45) return "Intermediate";
  return "Beginner";
}

function SkillBar({ name, level, i }) {
  const reduce = useReducedMotion();
  return (
    <div className="skill" title={`${name}: ${level}% (${levelLabel(level)})`} tabIndex={0}>
      <div className="skill-head">
        <span>{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="bar" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={name}>
        <motion.div
          className="bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 1.1, delay: reduce ? 0 : 0.1 * i, ease: "easeOut" }}
        />
      </div>
      <span className="tooltip">{levelLabel(level)}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" zone="alt" from="lav" wave={1} variant={1} sparkles={16} title="Skills">
      <div className="skills-grid">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.category} delay={gi * 0.12} className="card skill-card">
            <h3>{g.category}</h3>
            {g.skills.map((s, i) => (
              <SkillBar key={s.name} {...s} i={i} />
            ))}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
