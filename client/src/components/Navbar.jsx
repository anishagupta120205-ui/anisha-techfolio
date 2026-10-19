import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext.jsx";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (id) => {
    setOpen(false);
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 150);
    } else {
      scroll();
    }
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          anisha<span>.dev</span>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <button key={l.id} className="nav-link" onClick={() => goTo(l.id)}>
              {l.label}
            </button>
          ))}
          <Link to="/resume" className="nav-link" onClick={() => setOpen(false)}>
            Resume
          </Link>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "day" : "dream"} mode`}
            title={theme === "dark" ? "Day mode" : "Dream mode"}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21 14.5A9 9 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z" />
              </svg>
            )}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
