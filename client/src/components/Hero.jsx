import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio.js";
import DownloadButtons from "./DownloadButtons.jsx";
import Section from "./Section.jsx";

// Typewriter hook: types, pauses, deletes, moves to next phrase.
function useTypewriter(words, typeSpeed = 80, deleteSpeed = 40, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === word) delay = pause;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <Section id="home" zone="dark" className="hero" sparkles={26} variant={1}>
      <div className="hero-grid">
      <div className="hero-inner">
        <motion.p
          className="hero-hello"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          👋 Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {profile.name}
        </motion.h1>
        <motion.h2
          className="typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          aria-label={profile.roles.join(", ")}
        >
          <span>{typed}</span>
          <span className="cursor" aria-hidden="true">|</span>
        </motion.h2>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {profile.designation}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <DownloadButtons size="btn-lg" />
        </motion.div>
      </div>
      <motion.div
        className="hero-art"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.9 }}
      >
        <span className="art-glow" />
        <span className="ring r1"><i className="planet" /><i className="planet p2" /></span>
        <span className="ring r2"><i className="planet" /></span>
        <div className="arch">
          <span className="arch-star" />
          <span className="arch-code">&lt;/&gt;</span>
        </div>
      </motion.div>
      </div>
      <span className="scroll-cue" aria-hidden="true" />
    </Section>
  );
}
