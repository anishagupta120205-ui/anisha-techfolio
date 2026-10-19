import { useMemo } from "react";

// Small deterministic PRNG so sparkle positions are stable between renders.
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function Sparkles({ count = 14, seed = 1 }) {
  const items = useMemo(() => {
    const r = rng(seed * 9973);
    return Array.from({ length: count }, (_, i) => ({
      x: `${Math.round(r() * 100)}%`,
      y: `${Math.round(r() * 100)}%`,
      s: `${(6 + r() * 11).toFixed(1)}px`,
      d: `${(5 + r() * 6).toFixed(1)}s`,
      dl: `-${(r() * 10).toFixed(1)}s`,
      c: i % 3,
    }));
  }, [count, seed]);

  return (
    <>
      {items.map((p, i) => (
        <span
          key={i}
          className={`sparkle c${p.c}`}
          style={{ "--x": p.x, "--y": p.y, "--s": p.s, "--d": p.d, "--dl": p.dl }}
        />
      ))}
    </>
  );
}

// Ambient layer for a band: drifting glows, abstract shapes, sparkles, grain.
export default function Backdrop({ variant = 1, sparkles = 14, seed = 1 }) {
  return (
    <div className={`backdrop v${variant}`} aria-hidden="true">
      <span className="glow g1" />
      <span className="glow g2" />
      <span className="glow g3" />
      <span className="shape s-blob" />
      <span className="shape s-ring" />
      <span className="shape s-arch" />
      <span className="shape s-gem" />
      <Sparkles count={sparkles} seed={seed} />
      <span className="grain" />
    </div>
  );
}
