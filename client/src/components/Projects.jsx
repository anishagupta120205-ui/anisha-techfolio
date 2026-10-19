import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/portfolio.js";
import Section from "./Section.jsx";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("default");

  const techs = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((p) => p.tech))).sort()],
    []
  );

  const visible = useMemo(() => {
    const list = projects.filter((p) => filter === "All" || p.tech.includes(filter));
    if (sort === "az") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [filter, sort]);

  return (
    <Section id="projects" zone="light" tone="blush" from="alt" wave={2} variant={3} sparkles={10} title="Projects">

      <div className="filters">
        <label className="sr-only" htmlFor="tech-filter">Filter by technology</label>
        <select id="tech-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          {techs.map((t) => (
            <option key={t} value={t}>{t === "All" ? "All technologies" : t}</option>
          ))}
        </select>
        <label className="sr-only" htmlFor="sort">Sort projects</label>
        <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Featured order</option>
          <option value="az">Name A to Z</option>
        </select>
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              layout
              key={p.name}
              className="card project-card"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{p.name}</h3>
              <p className="muted">{p.description}</p>
              <div className="badges">
                {p.tech.map((t) => (
                  <button key={t} className="badge" onClick={() => setFilter(t)} title={`Filter by ${t}`}>
                    {t}
                  </button>
                ))}
              </div>
              <div className="card-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
