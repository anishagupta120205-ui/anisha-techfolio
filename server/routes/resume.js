const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();
const FILES_DIR = path.join(__dirname, "..", "files");

const FILES = {
  pdf: { file: "Anisha_Gupta_Resume.pdf", type: "application/pdf" },
  docx: {
    file: "Anisha_Gupta_Resume.docx",
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
};

// GET /api/resume/pdf  and  GET /api/resume/docx
router.get("/:format", (req, res) => {
  const entry = FILES[req.params.format.toLowerCase()];
  if (!entry) return res.status(404).json({ message: "Use /pdf or /docx" });

  const filePath = path.join(FILES_DIR, entry.file);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "Resume file not found on server." });
  }

  res.setHeader("Content-Type", entry.type);
  res.download(filePath, entry.file);
});

module.exports = router;
