# Kartikay Mishra — Personal Portfolio Website

A software developer portfolio built to mirror the design, features, and animations of [adityakumar.pro](https://adityakumar.pro/), customized with **Kartikay Mishra's** projects, academic background, live coding profiles, and resume.

---

## 🌟 Key Features

- **Dynamic Hero Section**:
  - Editorial developer portrait with rim lighting and scanline effects.
  - Live IST (Asia/Kolkata) clock updating every second.
  - Quick action buttons for **Hire Me** and **Download Resume** (one-click download of your actual resume).
  - Status block highlighting your current B.Tech CSE degree at SRM University AP, CGPA (8.50), and leadership roles.

- **Projects & Case Studies**:
  - **Integrated War Resource & Battlefield Medical Management System**: Relational DBMS in MySQL with 3NF normalization, triggers, transactions, and Node.js/Python backend.
  - **Student Counselling Management System**: Full-stack MERN platform with role-based access control (RBAC), appointment calendar, and confidential notes.
  - **Expense Tracker**: Python application with JSON persistence, categorized monthly analytics, and budget alerts ([GitHub Repo](https://github.com/apexkartikay/Expense_tracker)).
  - **Student Record Management System**: C systems application featuring 4-tier RBAC, password masking, and binary file persistence ([GitHub Repo](https://github.com/apexkartikay/STUDENT-RECORD-MANAGEMENT-SYSTEM)).
  - Full dedicated case study viewer via `project.html?p=<slug>`.

- **Coding Profiles (Live GitHub & LeetCode)**:
  - **GitHub Activity**: Live commit tracking, language breakdown, contribution counts, and multi-year calendar tabs for [@apexkartikay](https://github.com/apexkartikay).
  - **LeetCode Stats**: Live integration showing **184 problems solved** (76 Easy, 96 Medium, 12 Hard), ranking (~951,016), submission heatmaps, and languages breakdown for [@apexkartikay](https://leetcode.com/u/apexkartikay/).

- **Interactive AI Assistant & Chat Drawer ("Let's Chat")**:
  - **Ask AI tab**: Instant answers about your projects, skills, education, and experience with smart local fallback.
  - **Message tab**: Directly connects visitors to message you or compose an email to `kartikmk0402@gmail.com`.

- **Command Palette (`Ctrl+K` / `⌘K`)**:
  - Searchable modal to quickly navigate sections, copy your email address, download your CV, or jump to GitHub / LeetCode.

- **Theme Switcher**:
  - Seamless toggle between dark mode and light mode, saved to `localStorage`.

- **Responsive Design & Animations**:
  - 3D card tilt physics on hover.
  - Magnetic interactive buttons.
  - Custom floating dot + ring cursor.
  - Page entry and navigation transitions.

---

## 📂 Project Structure

```text
Portfolio/
├── index.html                 # Main portfolio page
├── project.html               # Project case study template
├── README.md                  # Project documentation
├── api/                       # Optional Vercel serverless functions
│   ├── ask.js                 # AI chat API endpoint
│   ├── github.js              # GitHub live stats endpoint
│   └── leetcode.js            # LeetCode live stats endpoint
└── assets/
    ├── css/                   # Modular stylesheet system
    │   ├── style.css
    │   ├── variables.css
    │   ├── base.css
    │   ├── layout.css
    │   ├── components.css
    │   └── animations.css
    ├── js/                    # Client-side logic & rendering
    │   ├── data.js            # All portfolio data, projects, skills & timeline
    │   ├── render.js          # Dynamic DOM rendering
    │   ├── main.js            # Scroll, cursor, theme, chat & interactive logic
    │   ├── palette.js         # Ctrl+K command menu
    │   ├── case-study.js      # Case study renderer
    │   ├── heatmap.js         # Heatmap drawing engine
    │   ├── github.js          # GitHub activity panel
    │   ├── leetcode.js        # LeetCode stats panel
    │   └── stack-icons.js     # Tech stack SVG icons
    ├── docs/
    │   └── Kartikay-Mishra-Resume.pdf # Your resume PDF
    └── images/
        ├── favicon.svg        # Monogram 'K' favicon
        ├── og-card.jpg        # Social preview card
        ├── kartikay-hero-1600.webp # High-res hero portrait
        ├── kartikay-hero-900.webp  # Responsive hero portrait
        └── projects/          # High-fidelity project interface previews
```

---

## 🚀 How to Run Locally

You can preview the portfolio immediately using any local web server:

### Option 1: Python
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

### Option 2: VS Code Live Server
Right-click on `index.html` and select **Open with Live Server**.

### Option 3: Node.js (npx serve)
```bash
npx -y serve .
```

---

## 🌐 How to Deploy for Free

### 1. GitHub Pages
1. Push this folder to a GitHub repository named `apexkartikay.github.io` (or `portfolio`).
2. Go to **Settings** → **Pages** → select the `main` branch.
3. Your portfolio will be live at `https://apexkartikay.github.io/`.

### 2. Vercel
1. Install Vercel CLI or import the repository in [vercel.com](https://vercel.com).
2. The serverless functions in `/api/` will automatically deploy alongside the static files.
