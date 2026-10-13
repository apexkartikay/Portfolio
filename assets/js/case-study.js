// Renders project.html?p=<slug> from the caseStudy field of a project in data.js.
(() => {
  const root = document.getElementById("case-study");
  if (!root || typeof PORTFOLIO_DATA === "undefined") return;

  const studies = PORTFOLIO_DATA.projects.filter((p) => p.caseStudy);
  const slug = new URLSearchParams(location.search).get("p");
  const index = studies.findIndex((p) => p.caseStudy.slug === slug);

  if (index === -1) {
    root.innerHTML = `
      <section class="case-hero">
        <div class="section-inner">
          <div class="s-tag reveal">case study</div>
          <h1 class="s-title reveal">Project not found.</h1>
          <a href="index.html#projects" class="proj-link">← Back to all projects</a>
        </div>
      </section>`;
    return;
  }

  const project = studies[index];
  const cs = project.caseStudy;
  const next = studies[(index + 1) % studies.length];
  const [name, ...rest] = project.title.split(":");
  document.title = `${name.trim()} — Case Study · Kartikay Mishra`;

  const block = (label, body, extra = "") => `
    <div class="case-block ${extra}">
      <div class="group-label reveal">${label}</div>
      ${body}
    </div>`;

  root.innerHTML = `
    <section class="case-hero">
      <div class="section-inner">
        <div class="s-tag reveal">case study</div>
        <h1 class="s-title case-title reveal">${name.trim()}${rest.length ? `<span>${rest.join(":").trim()}</span>` : ""}</h1>
        <p class="case-tagline reveal">${cs.tagline}</p>
        <div class="case-meta reveal-s">
          ${(() => {
            const items = [...cs.meta];
            const dateVal = project.period || project.date;
            const existingIdx = items.findIndex(m => m.label.toLowerCase() === 'timeline' || m.label.toLowerCase() === 'date');
            if (dateVal) {
              if (existingIdx >= 0) items[existingIdx].value = dateVal;
              else items.push({ label: "Timeline", value: dateVal });
            }
            return items.map((m) => `
              <div class="case-meta-item">
                <div class="gh-label">${m.label}</div>
                <div class="case-meta-value">${m.value}</div>
              </div>`).join("");
          })()}
        </div>
        <div class="case-links reveal">
          ${cs.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener" class="proj-link">${l.label}</a>`).join("")}
        </div>
        <a class="case-shot reveal-s" href="${project.link}" target="_blank" rel="noopener">
          <div class="browser-bar"><span></span><span></span><span></span><div class="browser-url">${(() => { try { return new URL(project.link).hostname; } catch(e) { return 'github.com'; } })()}</div></div>
          <img src="${project.image}" alt="${project.imageLabel}">
        </a>
      </div>
    </section>

    <section class="case-body">
      <div class="section-inner">
        ${block("The problem", `<div class="case-prose reveal">${cs.problem.map((p) => `<p>${p}</p>`).join("")}</div>`)}

        ${block("What I built", `
          <ul class="case-features reveal-s">
            ${cs.features.map((f) => `<li>${f}</li>`).join("")}
          </ul>`)}

        ${block("Architecture", `
          <div class="case-arch reveal-s">
            ${cs.architecture.map((layer, i) => `
              <div class="arch-layer">
                <div class="arch-step">${String(i + 1).padStart(2, "0")}</div>
                <div class="skill-cat">${layer.label}</div>
                ${layer.items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}
              </div>`).join('<div class="arch-arrow" aria-hidden="true"></div>')}
          </div>
          <div class="case-techs">${project.techs.map((t) => `<span class="proj-tech">${t}</span>`).join("")}</div>`)}

        ${block("Key decisions", `
          <div class="case-decisions reveal-s">
            ${cs.decisions.map((d, i) => `
              <div class="case-decision">
                <div class="exp-num">${String(i + 1).padStart(2, "0")}</div>
                <div class="ach-title">${d.title}</div>
                <p>${d.text}</p>
              </div>`).join("")}
          </div>`)}

        ${block("Results", `
          <div class="gh-stats case-results reveal-s">
            ${cs.results.map((r) => `
              <div class="gh-stat">
                <div class="gh-num">${r.value}</div>
                <div class="gh-label">${r.label}</div>
              </div>`).join("")}
          </div>`)}

        ${next !== project ? `
          <a class="case-next reveal" href="project.html?p=${next.caseStudy.slug}">
            <span class="gh-label">Next case study</span>
            <span class="case-next-title">${next.title.split(":")[0].trim()} →</span>
          </a>` : ""}
      </div>
    </section>`;
})();
