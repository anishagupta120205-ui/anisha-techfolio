import Backdrop from "./Backdrop.jsx";
import Reveal from "./Reveal.jsx";

// Curved divider drawn at the top of a band, filled with the previous band's colour.
const WAVES = [
  {
    back: "M0,0H1440V38C1240,92 1020,6 760,46C500,86 240,14 0,58Z",
    front: "M0,0H1440V22C1200,70 980,0 720,30C470,60 220,6 0,36Z",
  },
  {
    back: "M0,0H1440V50C1180,12 960,92 700,52C440,12 220,80 0,34Z",
    front: "M0,0H1440V30C1160,0 940,64 690,34C440,4 210,52 0,20Z",
  },
  {
    back: "M0,0H1440V28C1260,80 1100,84 880,48C640,8 380,12 0,70Z",
    front: "M0,0H1440V14C1250,56 1080,60 860,28C620,-4 360,-2 0,44Z",
  },
];

export function Wave({ from, shape = 0 }) {
  const w = WAVES[shape % WAVES.length];
  return (
    <svg className={`wave from-${from}`} viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
      <path className="wave-back" d={w.back} />
      <path className="wave-front" d={w.front} />
    </svg>
  );
}

/**
 * zone: "dark"  – always deep lavender (hero, footer)
 *       "alt"   – deep lavender in Dream mode, soft lavender in Day mode
 *       "light" – pale lavender / blush in both modes (tone: "lav" | "blush")
 */
export default function Section({
  id,
  zone = "light",
  tone = "lav",
  from,
  wave = 0,
  variant = 1,
  sparkles = 10,
  title,
  sub,
  className = "",
  style,
  children,
}) {
  const zoneClass = zone === "light" ? `zone-light tone-${tone}` : `zone-${zone}`;
  return (
    <section id={id} className={`band ${zoneClass} ${className}`} style={style}>
      <Backdrop variant={variant} sparkles={sparkles} seed={variant + (id ? id.length : 1)} />
      {from && <Wave from={from} shape={wave} />}
      <div className="wrap">
        {title && (
          <Reveal className="section-head">
            <h2 className="section-title">{title}</h2>
            {sub && <p className="section-sub">{sub}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
