const dot = document.getElementById("cur-dot");
const ring = document.getElementById("cur-ring");
const nav = document.getElementById("nav");
const progress = document.querySelector(".scroll-progress");
const transition = document.querySelector(".link-transition");
const transitionTitle = transition.querySelector("strong");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(pointer: fine)").matches;

let mx = 0;
let my = 0;
let rx = 0;
let ry = 0;

if (!reduceMotion && finePointer) {
  document.addEventListener("mousemove", (event) => {
    mx = event.clientX;
    my = event.clientY;
    dot.style.left = `${mx}px`;
    dot.style.top = `${my}px`;
  });

  const animateCursor = () => {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = `${rx}px`;
    ring.style.top = `${ry}px`;
    requestAnimationFrame(animateCursor);
  };
  animateCursor();
}

const updateScrollUI = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable ? (window.scrollY / scrollable) * 100 : 0}%`;
  nav.classList.toggle("scrolled", window.scrollY > 40);
};
window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function trackMouse(event, element) {
  const rect = element.getBoundingClientRect();
  element.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
  element.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
}

document.addEventListener('portfolioDataRendered', () => {
  document.querySelectorAll(".reveal,.reveal-l,.reveal-s").forEach((element) => observer.observe(element));

  if (!reduceMotion && finePointer) {
    // Setup 3D card tilt effects (renamed from 3d-card to card-3d for CSS validation compliance)
    document.querySelectorAll('[class~="card-3d"],.tilt-card').forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -5;
        const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }
});

const transitionTo = (label, callback) => {
  if (reduceMotion) {
    callback();
    return;
  }
  transitionTitle.textContent = label || "Destination";
  transition.classList.add("active");
  window.setTimeout(callback, 650);
};

const closeTransition = () => {
  window.setTimeout(() => transition.classList.remove("active"), 180);
};

document.querySelectorAll("a[href]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.dataset.transitionBypass === "true" || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    const rawHref = link.getAttribute("href");
    if (!rawHref || rawHref === "#" || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) return;

    const label = link.querySelector(".proj-name")?.textContent || link.textContent.trim().replace(/\s+/g, " ").slice(0, 52);

    if (rawHref.startsWith("#")) {
      const target = document.querySelector(rawHref);
      if (!target) return;
      event.preventDefault();
      transitionTo(label, () => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        closeTransition();
      });
      return;
    }

    event.preventDefault();
    const opensNewTab = link.target === "_blank";
    const newTab = opensNewTab ? window.open("", "_blank") : null;
    if (newTab) newTab.opener = null; // the opened site must not be able to control this tab

    transitionTo(label, () => {
      if (link.hasAttribute("download")) {
        const downloadLink = link.cloneNode(true);
        downloadLink.dataset.transitionBypass = "true";
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();
        closeTransition();
      } else if (newTab) {
        newTab.location.href = link.href;
        closeTransition();
      } else {
        window.location.href = link.href;
      }
    });
  });
});

// Web3Forms API Key
const WEB3FORMS_KEY = "2add5fd0-0f10-4cba-be70-8fd9dbdb1918";

const submitMessage = (fields) => fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...fields })
});

document.addEventListener("keydown", (event) => {
  if (!chatPanel) return; // pages without the chat widget
  if (event.key === "Escape") toggleChat(false);
  if (!(event.ctrlKey && event.key === "Enter")) return;
  if (event.target.closest("#chat-panel")) event.target.closest("form")?.requestSubmit();
});

/* LET'S CHAT PANEL */
const chatPanel = document.getElementById("chat-panel");
const chatToggle = document.getElementById("lets-chat");

function toggleChat(open = !chatPanel.classList.contains("open")) {
  chatPanel.classList.toggle("open", open);
  chatPanel.setAttribute("aria-hidden", String(!open));
  chatToggle.setAttribute("aria-expanded", String(open));
  if (!open) return;
  if (chatMode === "ai") document.getElementById("ai-q").focus();
  else document.getElementById(document.getElementById("chat-email").value ? "chat-msg" : "chat-email").focus();
}

let chatMode = "ai";

function setChatMode(mode) {
  chatMode = mode;
  chatPanel.querySelectorAll(".chat-tab").forEach((tab) => {
    const active = tab.dataset.mode === mode;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  chatPanel.querySelectorAll(".chat-pane").forEach((pane) => { pane.hidden = pane.dataset.pane !== mode; });
  document.getElementById("chat-status").textContent = mode === "ai"
    ? "AI assistant · ask about my work"
    : "Available · replies by email";
  toggleChat(true);
}

// "Hire Me": open the chat on the Message tab, ready for a hiring enquiry.
function openHire() {
  document.getElementById("chat-type").value = "Job / Role Opportunity";
  setChatMode("message");
}

const addChatMessage = (text, fromVisitor, bodyId = "chat-body") => {
  const body = document.getElementById(bodyId);
  const bubble = document.createElement("div");
  bubble.className = fromVisitor ? "chat-msg me" : "chat-msg";
  bubble.textContent = text;
  body.appendChild(bubble);
  body.scrollTop = body.scrollHeight;
  return bubble;
};

/* ASK MY AI (answers come from /api/ask, which only knows this portfolio's data) */
const aiHistory = [];
let aiBusy = false;

function localAIAnswer(q) {
  const query = q.toLowerCase();
  if (query.includes("war") || query.includes("medical") || query.includes("battlefield") || query.includes("dbms")) {
    return "Kartikay engineered the Integrated War Resource & Battlefield Medical Management System using MySQL (3NF normalized), Node.js, and Python. It provides real-time casualty triage, inventory allocation, and telemetry with automated SQL triggers and ACID transactions.";
  }
  if (query.includes("counsel") || query.includes("student") || query.includes("mern") || query.includes("mental")) {
    return "The Student Counselling Management System is a MERN stack web app built with React, Node.js, Express, and MongoDB. It features appointment booking, role-based access control (Student/Counsellor/Admin), confidential notes, and analytics.";
  }
  if (query.includes("expense") || query.includes("budget") || query.includes("finance")) {
    return "The Expense Tracker is a Python project using JSON file handling for persistent data storage, categorized monthly summaries, search filters, and budget threshold alerts.";
  }
  if (query.includes("record") || query.includes("c language") || query.includes("c ") || query.includes("systems")) {
    return "The Student Record Management System is built in C with 4-tier Role-Based Access Control, password masking, linear search, and persistent binary file handling for academic records.";
  }
  if (query.includes("skill") || query.includes("stack") || query.includes("tech")) {
    return "Kartikay is skilled in Python, C, C++, Java, JavaScript, React, Node.js, Express.js, Django, FastAPI, MySQL, PostgreSQL, MongoDB, Redis, Docker, Git, and Linux.";
  }
  if (query.includes("leetcode") || query.includes("dsa") || query.includes("problem")) {
    return "Kartikay has solved 180+ problems on LeetCode (@apexkartikay) across Easy (76), Medium (96), and Hard (12), focusing on DSA, tree algorithms, and dynamic programming.";
  }
  if (query.includes("college") || query.includes("education") || query.includes("srm") || query.includes("gpa") || query.includes("cgpa")) {
    return "Kartikay is pursuing his B.Tech in Computer Science & Engineering at SRM University, AP with a CGPA of 8.50.";
  }
  if (query.includes("research") || query.includes("internship") || query.includes("ocr") || query.includes("document") || query.includes("knowledge graph") || query.includes("rag") || query.includes("suraj") || query.includes("khurana") || query.includes("pdf") || query.includes("yolo") || query.includes("paddle")) {
    return "Kartikay completed a Research Internship at SRM University AP under Dr. Suraj Singh Khurana. The topic was 'Structured Knowledge Extraction from Heterogeneous Visual Documents using Hybrid Learning'. He built a hybrid AI document processing system using multi-engine PDF parsing (PyMuPDF, PDFMiner.six, PDFPlumber), OCR (PaddleOCR, RapidOCR), OpenCV, PyTorch, and YOLO. It features LaTeX equation reconstruction, table extraction, IoU-based consensus fusion, Knowledge Graph generation, and export to JSON, Markdown, HTML, XML, and LaTeX for RAG pipelines.";
  }
  if (query.includes("leadership") || query.includes("event") || query.includes("club") || query.includes("hackshastra")) {
    return "Kartikay serves as Events Lead at Hackshastra and was formerly Events Lead at the Centre of Drone Technology (CDT) at SRM University AP, organizing technical workshops and hackathons. He also completed a Research Internship at SRM AP under Dr. Suraj Singh Khurana on AI-powered document intelligence.";
  }
  if (query.includes("contact") || query.includes("email") || query.includes("hire")) {
    return "You can reach Kartikay at kartikmk0402@gmail.com, or check his GitHub at github.com/apexkartikay and LinkedIn at linkedin.com/in/kartikay-mishra-02644633b.";
  }
  return "Kartikay Mishra is a Computer Science undergraduate at SRM University AP (CGPA 8.50) skilled in full-stack web development, DBMS, systems programming in C, AI research, and problem solving with 180+ LeetCode problems solved. He also completed a Research Internship on AI document intelligence. Feel free to ask about his projects, skills, leadership, or research!";
}

function askAI(event, preset) {
  event.preventDefault();
  if (aiBusy) return;
  const input = document.getElementById("ai-q");
  const question = (preset || input.value).trim().slice(0, 600);
  if (!question) return;

  document.getElementById("ai-suggest")?.remove();
  addChatMessage(question, true, "ai-body");
  input.value = "";
  aiHistory.push({ role: "user", content: question });

  const typing = addChatMessage("", false, "ai-body");
  typing.classList.add("chat-typing");
  typing.innerHTML = "<span></span><span></span><span></span>";
  aiBusy = true;

  fetch("/api/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: aiHistory })
  })
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.answer) throw new Error(data.error || "fallback");
      typing.remove();
      aiHistory.push({ role: "assistant", content: data.answer });
      addChatMessage(data.answer, false, "ai-body");
    })
    .catch(() => {
      typing.remove();
      const answer = localAIAnswer(question);
      aiHistory.push({ role: "assistant", content: answer });
      addChatMessage(answer, false, "ai-body");
    })
    .finally(() => { aiBusy = false; });
}

// Enter sends a question; Shift+Enter adds a new line.
document.getElementById("ai-q")?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey && !event.ctrlKey) {
    event.preventDefault();
    document.getElementById("ai-form").requestSubmit();
  }
});

function sendChat(event) {
  event.preventDefault();
  const emailInput = document.getElementById("chat-email");
  const msgInput = document.getElementById("chat-msg");
  const error = document.getElementById("chat-err");
  const sendBtn = document.querySelector("#chat-form .chat-send");
  const email = emailInput.value.trim();
  const message = msgInput.value.trim();

  error.style.display = "none";
  if (!email.includes("@") || !message) {
    error.textContent = "Add your email and a message.";
    error.style.display = "block";
    return;
  }

  sendBtn.disabled = true;
  const type = document.getElementById("chat-type").value;
  
  if (typeof submitMessage === "function") {
    submitMessage({ name: email, email, subject: `[Portfolio] ${type || "Chat"} - ${email}`, message, type: type || "Not specified" })
      .then((response) => {
        if (!response.ok) throw new Error();
        addChatMessage(message, true);
        addChatMessage(`Thanks! Your message reached me. I'll reply at ${email} soon.`, false);
        msgInput.value = "";
      })
      .catch(() => {
        // Mailto fallback
        window.open(`mailto:kartikmk0402@gmail.com?subject=${encodeURIComponent("[Portfolio] " + (type || "Inquiry"))}&body=${encodeURIComponent("From: " + email + "\n\n" + message)}`);
        addChatMessage(message, true);
        addChatMessage(`Thanks! If your mail client didn't open automatically, you can also write directly to kartikmk0402@gmail.com.`, false);
        msgInput.value = "";
      })
      .finally(() => { sendBtn.disabled = false; });
  } else {
    window.open(`mailto:kartikmk0402@gmail.com?subject=${encodeURIComponent("[Portfolio] " + (type || "Inquiry"))}&body=${encodeURIComponent("From: " + email + "\n\n" + message)}`);
    addChatMessage(message, true);
    addChatMessage(`Thanks! Your email client opened to send your note directly to Kartikay.`, false);
    msgInput.value = "";
    sendBtn.disabled = false;
  }
}

/* LIVE CLOCK (IST) */
const clockFormat = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const tickClock = () => {
  const time = clockFormat.format(new Date());
  document.querySelectorAll('[data-live="clock"]').forEach((el) => { el.textContent = time; });
};
tickClock();
setInterval(tickClock, 1000);

/* LAST UPDATED (written on every deploy by scripts/stamp-updated.cjs) */
fetch("assets/data/site-updated.json", { cache: "no-store" })
  .then((response) => (response.ok ? response.json() : null))
  .then((data) => {
    if (!data || !data.updated) return;
    // Built by hand so it reads "26 Sep 2026" in every browser (some locales print "Sept").
    const d = new Date(new Date(data.updated).toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const text = `${d.getDate()} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()]} ${d.getFullYear()}`;
    document.querySelectorAll('[data-live="updated"]').forEach((el) => { el.textContent = text; });
    document.querySelectorAll(".footer-updated").forEach((el) => { el.hidden = false; });
  })
  .catch(() => {});

/* VIEW COUNTER (Abacus, counted once per browser) */
(() => {
  const base = "https://abacus.jasoncameron.dev";
  const key = "kartikay-portfolio/views";
  // Local previews only read the count so testing doesn't inflate it.
  let seen = ["localhost", "127.0.0.1", ""].includes(location.hostname);
  try { seen = seen || localStorage.getItem("af-viewed") === "1"; } catch (e) {}

  fetch(`${base}/${seen ? "get" : "hit"}/${key}`)
    // A 404 means the counter hasn't been created yet (no live visits so far).
    .then((response) => (response.status === 404 ? { value: 0 } : response.json()))
    .then(({ value }) => {
      if (typeof value !== "number") return;
      try { localStorage.setItem("af-viewed", "1"); } catch (e) {}
      const views = value.toLocaleString("en-IN");
      document.querySelectorAll('[data-live="views"]').forEach((el) => { el.textContent = views; });
    })
    .catch(() => {});
})();

/* ADVANCED ANIMATIONS */

// Magnetic buttons and links
if (!reduceMotion && finePointer) {
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.transition = "none";
    });
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transition = "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)";
      el.style.transform = "";
    });
  });
}

// Active Navigation highlight on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const highlightNav = () => {
  let scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150;
    const sectionId = current.getAttribute("id");
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
      });
    }
  });
};
window.addEventListener("scroll", highlightNav, { passive: true });

// Text Scramble Effect for Logo
const scrambleLogo = () => {
  const logo = document.querySelector(".nav-logo");
  if (!logo) return;
  const originalText = logo.textContent;
  const chars = "<>/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  
  logo.addEventListener("mouseenter", () => {
    let iteration = 0;
    clearInterval(interval);
    
    interval = setInterval(() => {
      logo.textContent = originalText
        .split("")
        .map((char, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
        
      if (iteration >= originalText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  });
};
scrambleLogo();

/* THEME SWITCH (dark by default; the choice is remembered per visitor) */
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  const syncToggle = () => {
    const light = document.documentElement.dataset.theme === "light";
    themeToggle.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
  };
  syncToggle();
  themeToggle.addEventListener("click", () => {
    const light = document.documentElement.dataset.theme !== "light";
    if (light) document.documentElement.dataset.theme = "light";
    else delete document.documentElement.dataset.theme;
    try { localStorage.setItem("theme", light ? "light" : "dark"); } catch (e) {}
    syncToggle();
  });
}
