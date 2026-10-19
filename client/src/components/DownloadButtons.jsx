import { useState } from "react";
import { API_URL } from "../config.js";

// Downloads from the Express backend route (/api/resume/pdf | /api/resume/docx).
// Uses fetch + blob so we can show errors (e.g. backend asleep) instead of a blank tab.
export default function DownloadButtons({ size = "" }) {
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");

  const download = async (format) => {
    setBusy(format);
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/resume/${format}`);
      if (!res.ok) throw new Error("Download failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Anisha_Gupta_Resume.${format}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError("Couldn't download right now. The server may be waking up, please retry in a few seconds.");
    } finally {
      setBusy("");
    }
  };

  return (
    <div>
      <div className="btn-row">
        <button className={`btn btn-primary ${size}`} onClick={() => download("pdf")} disabled={!!busy}>
          {busy === "pdf" ? "Downloading..." : "⬇ Download CV (PDF)"}
        </button>
        <button className={`btn btn-outline ${size}`} onClick={() => download("docx")} disabled={!!busy}>
          {busy === "docx" ? "Downloading..." : "⬇ Download CV (Word)"}
        </button>
      </div>
      {error && <p className="form-msg error" role="alert">{error}</p>}
    </div>
  );
}
