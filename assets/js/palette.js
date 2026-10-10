// Command palette: Ctrl+K / ⌘K (or the footer hint) opens a searchable list of sections and actions.
(() => {
  const onHome = !!document.getElementById("about");
  const data = typeof PORTFOLIO_DATA !== "undefined" ? PORTFOLIO_DATA : {};
  const EMAIL = "kartikmk0402@gmail.com";

  const go = (id) => {
    if (onHome) document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.href = `index.html#${id}`;
  };
  const open = (url) => window.open(url, "_blank", "noopener");

  const toast = (text) => {
    let el = document.querySelector(".cmd-toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "cmd-toast";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    el.textContent = text;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 1800);
  };

  const commands = [
    ...[
      ["experience", "Experience"], ["projects", "Projects"], ["research", "Featured Highlights"], ["education", "Education"],
      ["skills", "Skills"], ["achievements", "Achievements & Competitions"], ["profiles", "Coding Profiles"],
      ["leadership", "Leadership & Activities"], ["journey", "Timeline"], ["contact", "Contact"]
    ].map(([id, label]) => ({ group: "Go to", label, keywords: id, run: () => go(id) })),
    ...(data.projects || []).filter((p) => p.caseStudy).map((p) => ({
      group: "Case studies",
      label: p.title.split(":")[0].trim(),
      keywords: p.title,
      run: () => { window.location.href = `project.html?p=${p.caseStudy.slug}`; }
    })),
    ...(typeof setChatMode === "function" && document.getElementById("chat-panel") ? [
      { group: "Actions", label: "Ask my AI assistant", keywords: "chat ai question kartikay", run: () => setChatMode("ai") },
      { group: "Actions", label: "Send a message", keywords: "chat contact email hire kartikay", run: () => setChatMode("message") }
    ] : []),
    ...(data.bookingUrl ? [{ group: "Actions", label: "Book a call", keywords: "schedule meeting calendar", run: () => open(data.bookingUrl) }] : []),
    { group: "Actions", label: "Copy email address", keywords: EMAIL, run: () => {
      navigator.clipboard?.writeText(EMAIL).then(() => toast("Email copied to clipboard"), () => toast(EMAIL));
    } },
    { group: "Actions", label: "Download Resume", keywords: "resume cv pdf", run: () => {
      const a = Object.assign(document.createElement("a"), { href: "assets/docs/Kartikay-Mishra-Resume.pdf", download: "Kartikay-Mishra-Resume.pdf" });
      a.dataset.transitionBypass = "true";
      document.body.appendChild(a); a.click(); a.remove();
    } },
    { group: "Actions", label: "View Resume", keywords: "resume cv pdf one-pager", run: () => open("assets/docs/Kartikay-Mishra-Resume.pdf") },
    { group: "Actions", label: "Switch light / dark theme", keywords: "theme mode", run: () => document.getElementById("theme-toggle")?.click() },
    { group: "Links", label: "GitHub · apexkartikay", keywords: "code repos github", run: () => open("https://github.com/apexkartikay") },
    { group: "Links", label: "LinkedIn · Kartikay Mishra", keywords: "profile linkedin", run: () => open("https://www.linkedin.com/in/kartikay-mishra-02644633b/") },
    { group: "Links", label: "LeetCode · apexkartikay (184+ Solved)", keywords: "dsa problems leetcode", run: () => open("https://leetcode.com/u/apexkartikay/") }
  ];

  const root = document.createElement("div");
  root.className = "cmd";
  root.hidden = true;
  root.innerHTML = `
    <div class="cmd-backdrop" data-cmd-close></div>
    <div class="cmd-box" role="dialog" aria-modal="true" aria-label="Command menu">
      <div class="cmd-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input type="text" placeholder="Search sections and actions…" aria-label="Search commands" autocomplete="off" spellcheck="false">
        <kbd>Esc</kbd>
      </div>
      <ul class="cmd-list" role="listbox"></ul>
      <div class="cmd-foot"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>↵</kbd> select</span></div>
    </div>`;
  document.body.appendChild(root);

  const input = root.querySelector("input");
  const list = root.querySelector(".cmd-list");
  let results = commands;
  let active = 0;
  let lastFocus = null;

  function renderList() {
    const q = input.value.trim().toLowerCase();
    results = commands.filter((c) => !q || `${c.label} ${c.keywords} ${c.group}`.toLowerCase().includes(q));
    active = Math.min(active, Math.max(results.length - 1, 0));
    let group = "";
    list.innerHTML = results.length ? results.map((c, i) => {
      const header = c.group !== group ? `<li class="cmd-group" role="presentation">${(group = c.group)}</li>` : "";
      return `${header}<li class="cmd-item${i === active ? " active" : ""}" role="option" aria-selected="${i === active}" data-i="${i}">${c.label}</li>`;
    }).join("") : '<li class="cmd-empty">No matches</li>';
    list.querySelector(".cmd-item.active")?.scrollIntoView({ block: "nearest" });
  }

  function openPalette() {
    lastFocus = document.activeElement;
    root.hidden = false;
    input.value = "";
    active = 0;
    renderList();
    input.focus();
  }

  function closePalette() {
    root.hidden = true;
    if (lastFocus) lastFocus.focus();
  }

  function execute(index) {
    const item = results[index];
    if (!item) return;
    closePalette();
    item.run();
  }

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      root.hidden ? openPalette() : closePalette();
    } else if (e.key === "Escape" && !root.hidden) {
      e.preventDefault();
      closePalette();
    }
  });

  document.querySelectorAll("[data-open-palette]").forEach((el) => {
    el.addEventListener("click", openPalette);
  });

  root.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-cmd-close")) closePalette();
    const item = e.target.closest(".cmd-item");
    if (item) execute(Number(item.dataset.i));
  });

  input.addEventListener("input", renderList);
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      active = (active + 1) % results.length;
      renderList();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      active = (active - 1 + results.length) % results.length;
      renderList();
    } else if (e.key === "Enter") {
      e.preventDefault();
      execute(active);
    }
  });
})();
