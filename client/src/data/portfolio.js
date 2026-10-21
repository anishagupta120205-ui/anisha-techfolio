
/* ============================================================
   PORTFOLIO CONTENT - ANISHA GUPTA
   File: src/data/portfolio.js
   ============================================================ */

// ============================================================
// PROFILE
// ============================================================

export const profile = {
  name: "Anisha Gupta",

  roles: [
    "Full-Stack Developer",
    "Computer Science Undergraduate",
    "ML & Backend Enthusiast",
    "Problem Solver",
  ],

  designation: "B.Tech CSE Student @ JK Lakshmipat University",

  bio: "I'm a Computer Science undergraduate with strong foundations in programming, analytical problem-solving and system-level thinking. During my PS-1 internship, I worked on WellMate, an AI-powered student wellness platform covering machine learning, backend APIs and a full-stack dashboard. I enjoy turning ideas into products that are useful, well-structured and pleasant to use.",

  location: "Jaipur, Rajasthan, India",
  status: "Student (B.Tech CSE, 2024 - 2028)",

  email: "anishagupta120205@gmail.com",
  phone: "8949244212",

  linkedin: "https://linkedin.com/in/anisha-gupta12",
  github: "https://github.com/anishagupta120205-ui",

  photo: "/profile.jpeg",
};

// ============================================================
// SKILLS
// ============================================================

export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React (Vite)", level: 70 },
      { name: "JavaScript", level: 75 },
      { name: "HTML & CSS", level: 70 },
      { name: "SVG Data Visualization", level: 60 },
    ],
  },

  {
    category: "Backend",
    skills: [
      { name: "FastAPI", level: 60 },
      { name: "REST APIs", level: 70 },
      { name: "Node.js & Express", level: 60 },
      { name: "SQL (MySQL, SQLite)", level: 75 },
    ],
  },

  {
    category: "Tools & Technologies",
    skills: [
      { name: "Python", level: 85 },
      { name: "C / C++", level: 75 },
      { name: "XGBoost & LightGBM", level: 70 },
      { name: "Git, GitHub & Docker", level: 70 },
    ],
  },
];

// ============================================================
// PROJECTS
// ============================================================

export const projects = [
  {
    name: "WellMate: AI Student Wellness Platform",
    description:
      "AI-powered student wellness platform featuring personalized daily insights, explainable wellness diagnostics, burnout risk forecasting, an AI companion, journaling and a gamified Mission Center with points, streaks and weekly challenges.",
    tech: [
      "React",
      "Vite",
      "FastAPI",
      "Python",
      "Machine Learning",
    ],
    github:
      "https://github.com/anishagupta120205-ui/WELLMATE-PROJECT",
    demo: "",
  },

  {
    name: "Multi-Outcome Prediction Engine (MOPE)",
    description:
      "Machine learning prediction engine designed to estimate student wellness risks using XGBoost and LightGBM, with model tuning, cross-validation and backend inference APIs.",
    tech: [
      "Python",
      "XGBoost",
      "LightGBM",
      "Optuna",
      "FastAPI",
    ],
    github:
      "https://github.com/tezendrax/Multi-Outcome-Prediction-Engine",
    demo: "",
  },

  {
    name: "Book Recommendation System",
    description:
      "Machine learning project that recommends books using TF-IDF text features, book descriptions, genres and numerical ratings. Includes experiments with Logistic Regression, SVM, KNN, Decision Tree, Multinomial Naive Bayes and Random Forest.",
    tech: [
      "Python",
      "Machine Learning",
      "TF-IDF",
      "Scikit-learn",
      "Pandas",
    ],
    github:
      "https://github.com/anishagupta120205-ui/BOOK-RECOMMENDATION-SYSTEM-FINAL",
    demo: "",
  },

  {
    name: "Student Digital Twin (SDT) Engine",
    description:
      "Student wellness modeling engine representing student state through indicators such as stress, fatigue, anxiety, sleep, mood and focus. Designed to support state updates and historical wellness tracking.",
    tech: [
      "Python",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "pytest",
    ],
    github:
      "https://github.com/tezendrax/STUDENT-DIGITAL-TWIN",
    demo: "",
  },

  {
    name: "Placement & Internship Management Database",
    description:
      "Relational database system for managing placement and internship information, focusing on entity relationship modeling, database normalization, table relationships and structured data management.",
    tech: [
      "MySQL",
      "SQL",
      "DBMS",
      "ER Modeling",
      "Database Normalization",
    ],
    github: "",
    demo: "",
  },

  {
    name: "BusKaro – Shared Mobility Business Project",
    description:
      "Shared-mobility business concept focused on transportation affordability and convenience through shared bus services, exploring market opportunities, user pain points and business model development.",
    tech: [
      "Market Research",
      "Business Model Development",
      "User Research",
      "Problem Solving",
    ],
    github: "",
    demo: "",
  },

  {
    name: "Consumer Empowerment Platform",
    description:
      "User-centric platform concept focused on consumer empowerment, clear information presentation and accessible user experiences.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "UI/UX Design",
      "Frontend Development",
    ],
    github: "",
    demo: "",
  },

  {
    name: "Smart Crop Health: AI Disease Detection",
    description:
      "Digital image processing system that analyzes crop images through preprocessing, color conversion, segmentation and feature extraction, then uses an SVM classifier to predict crop disease categories.",
    tech: [
      "Python",
      "Digital Image Processing",
      "Image Segmentation",
      "Feature Extraction",
      "SVM",
    ],
    github: "",
    demo: "",
  },

  {
    name: "Smart Sales Anomaly Detector",
    description:
      "Data analytics project concept for identifying unusual sales activity, detecting deviations from normal order patterns and helping businesses investigate potentially significant changes.",
    tech: [
      "Python",
      "Data Analysis",
      "Anomaly Detection",
      "Machine Learning",
      "Data Visualization",
    ],
    github: "",
    demo: "",
  },
];

// ============================================================
// EXPERIENCE & EDUCATION
// ============================================================

export const timeline = [
  {
    type: "experience",
    title: "PS-1 Intern: WellMate",
    place: "AI-Powered Student Wellness Platform",
    period: "18 May 2026 - 3 Jul 2026",
    points: [
      "Worked on an AI-powered student wellness platform integrating machine learning, backend services and a student dashboard.",
      "Contributed to the platform's digital twin, prediction engine and React-based dashboard.",
    ],
  },

  {
    type: "education",
    title: "B.Tech in Computer Science",
    place: "JK Lakshmipat University, Jaipur",
    period: "2024 - 2028",
    points: [
      "Coursework in programming, database design, machine learning and user-focused software development.",
    ],
  },
];

// ============================================================
// CERTIFICATIONS
// Replace placeholder entries with certificates you have earned.
// ============================================================

// ============================================================
// CERTIFICATIONS
// ============================================================

export const certifications = [
  {
    title: "Red Hat System Administration I (RH124 - RHA)",
    issuer: "Red Hat",
    year: "2026",
    image: "",
    link: "/2024Btech247_Anisha_Gupta.pdf",
    fileName: "Red-Hat-System-Administration-I.pdf",
    download: true,
  },
  {
    title: "Certificate of Appreciation — Hack JKLU v5.0",
    issuer: "JK Lakshmipat University",
    year: "2026",
    description:
      "Recognized for coordinating the Internal Arrangement Committee and supporting the successful organization of Hack JKLU v5.0.",
    image: "/certificates/hack-jklu.jpg",
    link: "/certificates/hack-jklu.jpg",
    fileName: "Hack-JKLU-5-Certificate.jpg",
    download: true,
  },
  {
    title: "Certificate of Appreciation — Sabrang '24",
    issuer: "JK Lakshmipat University",
    year: "2024",
    description:
      "Recognized for contributions as Event Coordinator for the annual cultural fest.",
    image: "/certificates/sabrang-24.jpg",
    link: "/certificates/sabrang-24.jpg",
    fileName: "Sabrang-24-Certificate.jpg",
    download: true,
  },
];


// ============================================================
// ACHIEVEMENTS
// ============================================================

export const achievements = [
  "Coordinated internal arrangements for Hack JLKU 5.0 at JK Lakshmipat University.",

  "Worked as an event coordinator for Sabrang, contributing to university event planning and coordination.",

  "Developed a Book Recommendation System using machine learning and TF-IDF text vectorization.",

  "Contributed to the development of WellMate, an AI-powered student wellness platform during PS-1 internship.",
];
