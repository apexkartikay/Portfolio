const PORTFOLIO_DATA = {
  experience: [
    {
      period: "December 2025 — March 2026",
      company: "Hackshastra · SRM University AP",
      role: "Events Lead",
      desc: [
        "Led planning and execution of premier technical events and hackathons, coordinating cross-functional teams, timelines, logistics, and student participation.",
        "Supported technical initiatives, workshops, and competitive programming sessions, ensuring smooth event delivery through effective leadership and teamwork.",
        "Took responsibility for technical validation, logistical coordination, and analytical rigor across flagship club activities."
      ]
    },
    {
      period: "December 2025 — March 2026",
      company: "Centre of Drone Technology (CDT) · SRM University AP",
      role: "Former Events Lead",
      desc: [
        "Organized and managed technical workshops and hands-on sessions focused on autonomous drone technology and embedded systems.",
        "Collaborated with multidisciplinary engineering teams to drive student engagement and increase participation across campus-wide initiatives."
      ]
    },
    {
      period: "May 2026 — July 2026",
      company: "<a href='https://www.srmap.edu.in/' target='_blank' rel='noopener' style='color:inherit;text-decoration:underline;text-underline-offset:3px;'>SRM University AP</a> · Research Internship",
      role: "Research Intern — AI & Document Intelligence",
      supervisor: {
        name: "Dr. Suraj Singh Khurana",
        url: "https://in.linkedin.com/in/suraj-singh-khurana"
      },
      desc: [
        "<strong>Topic:</strong> Structured Knowledge Extraction from Heterogeneous Visual Documents using Hybrid Learning.",
        "Developed a hybrid AI-powered document processing system that extracts structured information from complex PDFs and scanned images using multi-engine PDF parsing, OCR, and computer vision.",
        "Implemented mathematical equation reconstruction in LaTeX, table extraction, layout analysis, IoU-based consensus fusion, and Document/Knowledge Graph generation.",
        "Engineered export pipelines for JSON, Markdown, HTML, XML, and LaTeX formats — designed for seamless integration with Retrieval-Augmented Generation (RAG) pipelines."
      ],
      techs: ["Python", "PyMuPDF", "PDFMiner.six", "PDFPlumber", "PaddleOCR", "RapidOCR", "OpenCV", "PyTorch", "YOLO", "Git", "GitHub"]
    }
  ],
  education: [
    {
      period: "2024 — Present",
      institution: "SRM University AP",
      degree: "B.Tech in Computer Science & Engineering",
      desc: [
        "Current CGPA: 8.50",
        "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Systems (DBMS), Algorithms, Full Stack Development."
      ]
    }
  ],
  research: [
    {
      link: "https://github.com/apexkartikay",
      image: "assets/images/projects/war-medical-hero.jpg",
      imageLabel: "Battlefield Triage Architecture",
      badge: "Featured System · DBMS + Systems",
      title: "Integrated War Resource & Battlefield Medical Management System",
      description: "An integrated enterprise DBMS-grade architecture engineered for real-time battlefield resource dispatch, emergency medical triage, and field logistics. Built on strict 3NF normalization, optimized multi-table joins, automated stored triggers, and ACID transaction boundaries with a Node.js/Python backend.",
      techs: ["MySQL", "3NF Schema", "Node.js", "Python", "Triggers & Transactions", "GIS Telemetry"],
      linkText: "View Architecture ↗",
      meta: [
        { label: "Domain", value: "Defense & Emergency HealthTech" },
        { label: "Schema", value: "3NF Normalized Relational DB" },
        { label: "Integrity", value: "ACID Triggers & Procedures" }
      ]
    }
  ],
  projects: [
    {
      period: "February 2026",
      link: "https://github.com/apexkartikay",
      image: "assets/images/projects/war-medical-hero.jpg",
      frame: "browser",
      imageLabel: "Command Center & Triage Portal",
      badge: "High-Performance · DBMS + Full-Stack",
      title: "Integrated War Resource & Battlefield Medical Management System",
      description: "Architected an integrated DBMS-driven system for battlefield casualty evacuation and critical medical inventory tracking. Features 3NF relational modeling in MySQL, real-time trigger-based inventory replenishment, medical transit telemetry, and transactional integrity under heavy concurrent loads.",
      techs: ["MySQL", "Node.js", "Python", "REST APIs", "3NF Normalization", "Transactions"],
      linkText: "Repository ↗",
      extraVisualClass: "",
      caseStudy: {
        slug: "war-medical-management",
        tagline: "A mission-critical medical triage & resource logistics engine built for high-stakes emergency operations.",
        meta: [
          { label: "Role", value: "Database Architect & Backend Engineer" },
          { label: "Domain", value: "Emergency HealthTech & Defense Logistics" },
          { label: "Stack", value: "MySQL · Node.js · Python · Express" },
          { label: "Status", value: "Complete" }
        ],
        problem: [
          "During critical emergencies and rapid field operations, medical logistics suffer from fragmented telemetry: blood supplies, surgical kits, and evacuation helicopters are managed across disconnected silos.",
          "This system unites casualty triage prioritization with automated supply chain allocation, enforcing zero-latency status synchronization through database triggers and transactional constraints."
        ],
        features: [
          "Rigorous 3NF normalized schema preventing data anomalies across medical assets, personnel, and casualties",
          "Automated SQL triggers for dynamic inventory alerts (e.g. low plasma, O- blood levels, critical field supplies)",
          "ACID-compliant transaction handling for simultaneous emergency dispatch requests",
          "Role-based emergency access control ensuring classified field medical data confidentiality",
          "Comprehensive multi-table joins optimized for lightning-fast casualty locator queries"
        ],
        architecture: [
          { label: "Database Layer", items: ["MySQL Relational Engine", "3NF Normalization", "Triggers & Procedures"] },
          { label: "Service Layer", items: ["Node.js / Express API", "Python Analytics Engine", "REST Endpoints"] },
          { label: "Security & Ops", items: ["Role-Based Access (RBAC)", "ACID Transactions", "Audit Logging"] },
          { label: "Dashboard", items: ["Real-Time Resource Telemetry", "Triage Queue Monitor", "Transit Maps"] }
        ],
        decisions: [
          { title: "Strict 3NF Schema", text: "Eliminated data redundancy and update anomalies to ensure life-critical casualty and blood supply numbers remain mathematically consistent." },
          { title: "Database-Level Triggers", text: "Implemented inventory deduction triggers directly inside the database engine to guarantee atomic updates without trusting external application layers." },
          { title: "Isolation & Concurrency", text: "Enforced repeatable-read transaction isolation levels to prevent race conditions during high-volume triage admissions." }
        ],
        results: [
          { value: "3NF", label: "Mathematically Normalized Schema" },
          { value: "100%", label: "ACID Transactional Consistency" },
          { value: "<15ms", label: "Optimized Join Query Latency" },
          { value: "4-Tier", label: "Triage Priority Scheduling" }
        ],
        links: [
          { label: "GitHub Profile ↗", url: "https://github.com/apexkartikay" }
        ]
      }
    },
    {
      period: "January 2026 — Present",
      link: "https://github.com/apexkartikay",
      image: "assets/images/projects/counselling-platform-hero.jpg",
      frame: "browser",
      imageLabel: "Campus Mental Health Hub",
      badge: "In Development · MERN Stack",
      title: "Student Counselling Management System",
      description: "Engineering a full-stack mental health portal connecting university students with licensed counsellors. Implements secure session booking, calendar scheduling, encrypted therapist notes, student mood check-ins, and institutional admin analytics with robust JWT authentication.",
      techs: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
      linkText: "Repository ↗",
      extraVisualClass: "",
      caseStudy: {
        slug: "counselling-platform",
        tagline: "Empowering university students with accessible, stigma-free mental health support and streamlined scheduling.",
        meta: [
          { label: "Role", value: "Full-Stack Developer" },
          { label: "Domain", value: "EdTech & Mental Wellness" },
          { label: "Stack", value: "React · Node.js · Express · MongoDB" },
          { label: "Status", value: "Active Development" }
        ],
        problem: [
          "University counselling departments face high friction: students hesitate due to stigma or complex booking flows, while counsellors deal with schedule clashes and messy paper records.",
          "The Student Counselling Management System automates confidential appointments, counsellor slot availability, and secure post-session reflections into a unified digital sanctuary."
        ],
        features: [
          "Seamless calendar appointment booking with instant slot collision prevention",
          "Three-tier Role-Based Access Control (Student, Counsellor, University Admin)",
          "Encrypted private session journals and confidential reflection notes",
          "Automated reminders and notifications to minimize missed sessions",
          "Admin dashboard offering anonymized wellness metrics and peak demand insights"
        ],
        architecture: [
          { label: "Frontend", items: ["React.js Single Page App", "Responsive CSS Design", "Interactive Calendar UI"] },
          { label: "Backend API", items: ["Node.js + Express", "RESTful Routing", "JWT Authentication"] },
          { label: "Data Store", items: ["MongoDB Document DB", "Mongoose Schemas", "Indexing for fast lookups"] }
        ],
        decisions: [
          { title: "Privacy by Design", text: "Separated student personal identification from confidential session notes to uphold ethical counselling standards." },
          { title: "Modular REST Architecture", text: "Decoupled authentication, scheduling, and analytics routes for seamless horizontal scalability." }
        ],
        results: [
          { value: "MERN", label: "Production-ready Web Stack" },
          { value: "3-Tier", label: "RBAC Security (Student/Counsellor/Admin)" },
          { value: "0", label: "Double-Booking Conflicts via Mongo Locking" }
        ],
        links: [
          { label: "GitHub Profile ↗", url: "https://github.com/apexkartikay" }
        ]
      }
    },
    {
      period: "July 2026",
      link: "https://github.com/apexkartikay/Expense_tracker",
      image: "assets/images/projects/expense-tracker-hero.jpg",
      frame: "browser",
      imageLabel: "Financial Analytics Engine",
      badge: "Live on GitHub · Python Core",
      title: "Expense Tracker: Personal Budget & Spending Analytics",
      description: "Developed a modular Python application to manage daily finances with persistent JSON storage. Features dynamic expense addition, category classification, monthly summaries, budget ceiling alerts, query filtering, and interactive visualization.",
      techs: ["Python", "JSON Storage", "File Handling", "Data Analytics", "CLI/GUI"],
      linkText: "GitHub Repo ↗",
      extraVisualClass: "",
      caseStudy: {
        slug: "expense-tracker",
        tagline: "A resilient Python finance engine with JSON persistence and multi-dimensional spending analytics.",
        meta: [
          { label: "Role", value: "Sole Developer" },
          { label: "Domain", value: "FinTech & Productivity" },
          { label: "Stack", value: "Python 3 · JSON · File I/O" },
          { label: "Status", value: "Live on GitHub" }
        ],
        problem: [
          "Personal finance tracking is often weighed down by bloated spreadsheet templates or complex apps requiring paid subscriptions and intrusive third-party cloud connections.",
          "This project provides a lightweight, local-first finance utility ensuring total data ownership with instant category aggregation and intelligent budget thresholds."
        ],
        features: [
          "JSON-based persistent storage with transactional file writing to prevent corruption",
          "Multi-category tagging (Food, Utilities, Travel, Education, Entertainment)",
          "Monthly financial summaries, spending trends, and budget threshold warnings",
          "Flexible search filters by date range, tag, price threshold, and keywords",
          "Menu-driven intuitive interaction designed for rapid keyboard workflows"
        ],
        architecture: [
          { label: "Core Logic", items: ["Python 3 OOP", "Modular Business Rules", "Budget Validator"] },
          { label: "Persistence", items: ["Structured JSON Storage", "Atomic File Updates", "Exception Handlers"] }
        ],
        decisions: [
          { title: "Defensive File Handling", text: "Wrapped all file I/O operations in robust try-except-finally blocks to guarantee data recovery even during sudden exits." },
          { title: "Memory-Efficient Dictionaries", text: "Optimized in-memory category indices for instant search across thousands of transaction entries." }
        ],
        results: [
          { value: "100%", label: "Local Data Ownership & Privacy" },
          { value: "Instant", label: "O(1) Category Index Retrieval" },
          { value: "Open Source", label: "Published on GitHub" }
        ],
        links: [
          { label: "GitHub Repo ↗", url: "https://github.com/apexkartikay/Expense_tracker" }
        ]
      }
    },
    {
      period: "December 2025",
      link: "https://github.com/apexkartikay/STUDENT-RECORD-MANAGEMENT-SYSTEM",
      image: "assets/images/projects/student-record-hero.jpg",
      frame: "browser",
      imageLabel: "Secure Systems Architecture",
      badge: "Live on GitHub · C Systems",
      title: "Student Record Management System: Enterprise C Architecture",
      description: "Engineered a hardened C console application automating academic record management. Features a 4-tier Role-Based Access Control (Admin, Staff, User, Guest), file persistence, password masking, linear search optimization, and comprehensive CRUD operations.",
      techs: ["C Language", "Binary File I/O", "RBAC Security", "Password Masking", "Data Structures"],
      linkText: "GitHub Repo ↗",
      extraVisualClass: "",
      caseStudy: {
        slug: "student-record-system",
        tagline: "A low-level systems application in C delivering role-based security, password masking, and persistent academic storage.",
        meta: [
          { label: "Role", value: "Systems Engineer" },
          { label: "Domain", value: "Systems Programming & Academic Management" },
          { label: "Stack", value: "C · Low-Level File I/O · RBAC" },
          { label: "Status", value: "Live on GitHub" }
        ],
        problem: [
          "Legacy academic management scripts frequently lack granular permissions and security, storing plain-text passwords or risking memory leaks during file serialization.",
          "This C systems app establishes strict Role-Based Access Control, masked credential entry, and memory-safe binary file persistence."
        ],
        features: [
          "4-tier Role-Based Access Control: Admin, Staff, User, and Guest with segregated privileges",
          "Interactive password masking preventing shoulder-surfing during administrative sign-in",
          "Complete CRUD capabilities: student record enrollment, search by ID/name, batch updates, and deletion",
          "Deterministic binary file storage ensuring cross-session persistence and zero external dependencies"
        ],
        architecture: [
          { label: "Systems Core", items: ["C Standard Library", "Struct Serialization", "Pointer Arithmetic"] },
          { label: "Security", items: ["Password Masking", "Role Enforcer", "Input Validation"] },
          { label: "Persistence", items: ["Binary File Streams", "Header Integrity Check", "Backup Mechanisms"] }
        ],
        decisions: [
          { title: "Memory-Safe Struct Management", text: "Constructed fixed-width struct schemas to avoid memory alignment glitches during sequential file reads and writes." },
          { title: "Granular RBAC Enforcement", text: "Hardened permission checks prior to executing destructive actions like delete or bulk records modification." }
        ],
        results: [
          { value: "4 Tiers", label: "RBAC Security Hierarchy" },
          { value: "Zero", label: "External Dependencies (Pure C)" },
          { value: "Open Source", label: "Published on GitHub" }
        ],
        links: [
          { label: "GitHub Repo ↗", url: "https://github.com/apexkartikay/STUDENT-RECORD-MANAGEMENT-SYSTEM" }
        ]
      }
    }
  ],
  skills: [
    {
      category: "Languages",
      tags: ["Python", "C", "C++", "Java", "JavaScript", "SQL"]
    },
    {
      category: "Web & Frontend",
      tags: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      category: "Backend & Frameworks",
      tags: ["Node.js", "Express.js", "Django", "FastAPI", "REST APIs"]
    },
    {
      category: "Databases & DBMS",
      tags: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "3NF Normalization"]
    },
    {
      category: "CS Fundamentals",
      tags: ["Data Structures", "Algorithms", "OOP", "DBMS", "Cybersecurity", "Cryptography"]
    },
    {
      category: "DevOps & Tools",
      tags: ["Git", "GitHub", "Docker", "Linux", "CI/CD", "VS Code", "Figma"]
    },
    {
      category: "Problem Solving & Domains",
      tags: ["LeetCode", "Machine Learning", "Event Management", "Technical Leadership"]
    }
  ],
  certifications: [
    {
      icon: "database",
      date: "2025-02",
      title: "Relational Database Management (RDBMS)",
      sub: "MySQL, 3NF Normalization, Complex Joins & Stored Procedures",
      proof: {
        image: "assets/images/og-card.jpg"
      }
    }
  ],
  achievements: [
    {
      icon: "trophy",
      date: "2025-03",
      title: "Changethon Participant",
      sub: "IIT Roorkee · Innovative Engineering & Tech Hackathon",
      proof: {
        image: "assets/images/og-card.jpg"
      }
    },
    {
      icon: "award",
      date: "2025-01",
      title: "MSME Ideathon Participant",
      sub: "National Innovation Initiative for Scalable Tech Solutions",
      proof: {
        image: "assets/images/og-card.jpg"
      }
    },
    {
      icon: "medal",
      date: "2024-11",
      title: "Robo Wars Participant",
      sub: "V.R. Siddhartha College · Robotics & Combat Engineering",
      proof: {
        image: "assets/images/og-card.jpg"
      }
    },

  ],
  availability: "Open to Software Engineering Roles & Internships",
  bookingUrl: "",
  testimonials: [],
  leadership: [
    {
      role: "Events Lead",
      org: "Hackshastra · SRM University AP",
      period: "December 2025 — March 2026"
    },
    {
      role: "Former Events Lead",
      org: "Centre of Drone Technology (CDT) · SRM University AP",
      period: "December 2025 — March 2026"
    }
  ],
  currentStatus: {
    label: "Currently",
    text: "B.Tech CSE · SRM University AP",
    detail: "CGPA 8.50 · 184 LeetCode Solved · Events Lead"
  },
  // Timeline milestones & projects (dates are automatically kept synchronized with projects)
  timeline: [
    {
      title: "Expense Tracker: Personal Budget & Spending Analytics",
      period: "July 2026",
      sub: "Live on GitHub · Python Core",
      icon: "code",
      link: "https://github.com/apexkartikay/Expense_tracker"
    },
    {
      title: "Integrated War Resource & Battlefield Medical Management System",
      period: "February 2026",
      sub: "High-Performance · DBMS + Full-Stack",
      icon: "database",
      link: "project.html?p=war-medical-management"
    },
    {
      title: "Student Counselling Management System",
      period: "January 2026 — Present",
      sub: "In Development · MERN Stack",
      icon: "code",
      link: "project.html?p=counselling-platform"
    },
    {
      title: "Student Record Management System: Enterprise C Architecture",
      period: "December 2025",
      sub: "Live on GitHub · C Systems",
      icon: "server",
      link: "https://github.com/apexkartikay/STUDENT-RECORD-MANAGEMENT-SYSTEM"
    }
  ]
};

/**
 * Bidirectional Date Synchronization Engine:
 * Ensures any change to the dates/periods in either PORTFOLIO_DATA.projects or
 * PORTFOLIO_DATA.timeline (or via runtime assignment / setProjectDate) automatically
 * synchronizes to the other section.
 */
function syncProjectTimelineDates(data = PORTFOLIO_DATA) {
  if (!data || !data.projects) return;

  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const normalize = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const getBaseTitle = (t) => (t || '').split(/[:\-—]/)[0].trim().toLowerCase();

  const parsePeriodToYm = (period) => {
    if (!period) return '';
    const m = period.match(/([A-Za-z]{3})[a-z]*\s+(\d{4})/i);
    if (m) {
      const idx = MONTHS.findIndex(mo => mo.toLowerCase() === m[1].toLowerCase());
      return `${m[2]}-${String(idx >= 0 ? idx + 1 : 1).padStart(2, '0')}`;
    }
    const ym = period.match(/(\d{4})-(\d{2})/);
    if (ym) return `${ym[1]}-${ym[2]}`;
    const y = period.match(/\d{4}/);
    return y ? `${y[0]}-01` : '';
  };

  if (!data.timeline) {
    data.timeline = [];
  }

  const CACHE_KEY = '_portfolio_date_sync_cache_v1';
  let cache = {};
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(CACHE_KEY) : null;
    if (raw) cache = JSON.parse(raw);
  } catch (e) {}

  data.projects.forEach((proj, idx) => {
    const projBase = getBaseTitle(proj.title);
    const key = proj.caseStudy?.slug || projBase || `proj_${idx}`;

    // Find matching item in timeline by title or slug
    let match = data.timeline.find((t) => {
      if (!t || !t.title) return false;
      const tBase = getBaseTitle(t.title);
      return tBase === projBase ||
             normalize(t.title).includes(normalize(projBase)) ||
             normalize(projBase).includes(normalize(t.title));
    });

    if (!match) {
      match = {
        title: proj.title,
        sub: proj.badge || 'Project',
        icon: 'code',
        link: proj.caseStudy ? `project.html?p=${proj.caseStudy.slug}` : proj.link,
        period: proj.period || proj.date || '',
        date: proj.date || ''
      };
      data.timeline.push(match);
    }

    const prevCache = cache[key] || {};
    const projVal = proj.period || proj.date || '';
    const timeVal = match.period || match.date || '';

    let chosenPeriod = projVal || timeVal;

    // Detect which section was modified if they differ in the source code
    if (projVal && timeVal && projVal !== timeVal) {
      if (prevCache.project && projVal !== prevCache.project) {
        // Project section in data.js was edited by the user
        chosenPeriod = projVal;
      } else if (prevCache.timeline && timeVal !== prevCache.timeline) {
        // Timeline section in data.js was edited by the user
        chosenPeriod = timeVal;
      } else {
        // Default to project if both changed or on fresh cache
        chosenPeriod = projVal;
      }
    }

    cache[key] = {
      project: chosenPeriod,
      timeline: chosenPeriod
    };

    const sharedState = {
      period: chosenPeriod,
      date: proj.date || match.date || (chosenPeriod ? parsePeriodToYm(chosenPeriod) : '')
    };

    const dispatchChange = (field, val) => {
      cache[key] = { project: sharedState.period, timeline: sharedState.period };
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
        }
      } catch (e) {}
      if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
        window.dispatchEvent(new CustomEvent('portfolio-date-change', {
          detail: { key, title: proj.title, [field]: val }
        }));
      }
    };

    // Bind period two-way
    const linkProperty = (target, prop) => {
      Object.defineProperty(target, prop, {
        configurable: true,
        enumerable: true,
        get() {
          return prop === 'period' ? sharedState.period : sharedState.date;
        },
        set(val) {
          if (prop === 'period') {
            sharedState.period = val;
            if (val) sharedState.date = parsePeriodToYm(val);
          } else {
            sharedState.date = val;
            if (val && !sharedState.period) sharedState.period = val;
          }
          dispatchChange(prop, val);
        }
      });
    };

    linkProperty(proj, 'period');
    linkProperty(match, 'period');
    linkProperty(proj, 'date');
    linkProperty(match, 'date');
  });

  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    }
  } catch (e) {}
}

// Helper to update any project date programmatically by title or slug
function setProjectDate(titleOrSlug, newDate) {
  if (typeof PORTFOLIO_DATA === 'undefined') return false;
  const normalize = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const target = (titleOrSlug || '').trim();
  const proj = PORTFOLIO_DATA.projects.find(p =>
    (p.caseStudy && p.caseStudy.slug === target) ||
    normalize(p.title).includes(normalize(target)) ||
    normalize(target).includes(normalize(p.title))
  );
  if (proj) {
    proj.period = newDate;
    return true;
  }
  return false;
}

// Run initial sync on load
syncProjectTimelineDates(PORTFOLIO_DATA);

// Expose globally
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
  window.syncProjectTimelineDates = syncProjectTimelineDates;
  window.setProjectDate = setProjectDate;
}
if (typeof globalThis !== 'undefined') {
  globalThis.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PORTFOLIO_DATA, syncProjectTimelineDates, setProjectDate };
}

