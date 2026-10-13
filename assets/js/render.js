// Line icons for certification and achievement cards (24x24, stroke-based).
const ICONS = {
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>',
  server: '<rect x="3" y="3" width="18" height="8" rx="1"/><rect x="3" y="13" width="18" height="8" rx="1"/><path d="M7 7h.01M7 17h.01"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  patent: '<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',
  trophy: '<path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  medal: '<circle cx="12" cy="15" r="6"/><circle cx="12" cy="15" r="2"/><path d="M8.5 10.2 5 3h4l3 6 3-6h4l-3.5 7.2"/>',
  award: '<path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
  people: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14.6c2.9.2 5 2.2 5 5.4"/>'
};

const renderIcon = (name) => ICONS[name]
  ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`
  : name;

document.addEventListener('DOMContentLoaded', () => {
  // Render Hero Current Status
  const statusContainer = document.getElementById('hero-current-status');
  if (statusContainer && typeof PORTFOLIO_DATA !== 'undefined') {
    let label = "Currently";
    let text = "B.Tech CSE · SRM University AP";
    let detail = "2 Internships · CGPA 9.35";

    // Override with manually configured currentStatus if present in data.js
    if (PORTFOLIO_DATA.currentStatus) {
      if (PORTFOLIO_DATA.currentStatus.label !== undefined) label = PORTFOLIO_DATA.currentStatus.label;
      if (PORTFOLIO_DATA.currentStatus.text !== undefined) text = PORTFOLIO_DATA.currentStatus.text;
      if (PORTFOLIO_DATA.currentStatus.detail !== undefined) detail = PORTFOLIO_DATA.currentStatus.detail;
    }

    statusContainer.innerHTML = `
      <div style="font-family:var(--mono);font-size:11px;color:rgba(136,136,136,.6);letter-spacing:.5px;margin-bottom:8px">${label}</div>
      <div style="font-size:14px;font-weight:600;color:#fff;margin-bottom:4px">${text}</div>
      <div style="font-family:var(--mono);font-size:11px;color:var(--red);letter-spacing:.5px">${detail}</div>
    `;
  }

  // Availability pill
  const availability = document.getElementById('hero-availability');
  if (availability && typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.availability) {
    availability.lastElementChild.textContent = PORTFOLIO_DATA.availability;
    availability.hidden = false;
  }

  // Render Experience
  const expContainer = document.querySelector('#experience .exp-grid');
  if (expContainer && typeof PORTFOLIO_DATA !== 'undefined') {
    expContainer.innerHTML = PORTFOLIO_DATA.experience.map((exp, index) => `
      <div class="exp-card reveal card-3d" style="transition-delay:${index * 0.1}s">
        <div class="exp-num">${String(index + 1).padStart(2, '0')}</div>
        <div class="exp-period">${exp.period}</div>
        <div class="exp-company">${exp.company}</div>
        <div class="exp-role">${exp.role}</div>
        ${exp.supervisor ? `
        <div class="exp-supervisor" style="font-family:var(--mono);font-size:11px;color:rgba(136,136,136,.7);margin-bottom:12px;letter-spacing:.3px">
          Under <a href="${exp.supervisor.url}" target="_blank" rel="noopener" style="color:var(--red);text-decoration:underline;text-underline-offset:3px;">${exp.supervisor.name}</a>
        </div>` : ''}
        <ul class="exp-desc">
          ${exp.desc.map(d => `<li>${d}</li>`).join('')}
        </ul>
        ${exp.techs && exp.techs.length ? `
        <div class="exp-techs" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:16px">
          ${exp.techs.map(t => `<span style="font-family:var(--mono);font-size:10px;padding:3px 10px;border-radius:20px;border:1px solid rgba(255,255,255,.12);color:rgba(200,200,200,.8);background:rgba(255,255,255,.04);letter-spacing:.5px">${t}</span>`).join('')}
        </div>` : ''}
        ${exp.certificates && exp.certificates.length ? `
        <div class="exp-certs">
          ${exp.certificates.map((c, ci) => `<button type="button" class="proj-link" data-proof="experience:${index}:${ci}">View ${c.label.toLowerCase()} ↗</button>`).join('')}
        </div>` : ''}
      </div>
    `).join('');
  }

  // Render Leadership & Volunteering
  const leadContainer = document.querySelector('#leadership .lead-list');
  if (leadContainer && PORTFOLIO_DATA.leadership) {
    leadContainer.innerHTML = PORTFOLIO_DATA.leadership.map((l, i) => {
      const body = `
        <span class="ach-icon">${renderIcon('people')}</span>
        <span class="tl-mile-text">
          <span class="ach-title">${l.role}${l.current ? ' <span class="lead-current">Current</span>' : ''}</span>
          <span class="ach-sub">${l.org}</span>
        </span>
        <span class="lead-period">${l.period}</span>
        ${l.proof ? '<span class="ach-view">View ↗</span>' : ''}`;
      return l.proof
        ? `<button type="button" class="tl-mile lead-row card-3d" data-proof="leadership:${i}" aria-label="View certificate: ${l.role}, ${l.org}">${body}</button>`
        : `<div class="tl-mile lead-row card-3d">${body}</div>`;
    }).join('');
  }

  // Journey: a timeline of roles and milestones (achievements, certifications, education, and projects).
  const renderTimeline = () => {
    const timeline = document.querySelector('#journey .timeline');
    if (!timeline || typeof PORTFOLIO_DATA === 'undefined') return;

    if (typeof syncProjectTimelineDates === 'function') {
      syncProjectTimelineDates(PORTFOLIO_DATA);
    }

    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const fromPeriod = (period) => {
      if (!period) return '2025-01';
      const m = period.match(/([A-Za-z]{3})[a-z]*\s+(\d{4})/i);
      if (m) {
        const mIdx = MONTHS.findIndex(mo => mo.toLowerCase() === m[1].toLowerCase());
        return `${m[2]}-${String(mIdx >= 0 ? mIdx + 1 : 1).padStart(2, '0')}`;
      }
      const ym = period.match(/(\d{4})-(\d{2})/);
      if (ym) return `${ym[1]}-${ym[2]}`;
      const y = period.match(/\d{4}/);
      return y ? `${y[0]}-01` : '2025-01';
    };
    const label = (ym) => {
      if (!ym || ym.length < 7) return ym || '';
      const mIdx = Number(ym.slice(5, 7)) - 1;
      return `${MONTHS[mIdx] || ''} ${ym.slice(0, 4)}`.trim();
    };

    const customTimeline = (PORTFOLIO_DATA.timeline || []).map((t, i) => ({
      kind: 'milestone',
      group: 'timeline',
      sort: t.date || fromPeriod(t.period),
      item: t,
      i
    }));

    const entries = [
      ...PORTFOLIO_DATA.experience.map((exp, i) => ({ kind: 'role', sort: fromPeriod(exp.period), item: exp, i })),
      ...customTimeline,
      ...PORTFOLIO_DATA.achievements.filter(a => a.date).map((a, i) => ({ kind: 'milestone', group: 'achievements', sort: a.date, item: a, i: PORTFOLIO_DATA.achievements.indexOf(a) })),
      ...PORTFOLIO_DATA.certifications.filter(c => c.date).map(c => ({ kind: 'milestone', group: 'certifications', sort: c.date, item: c, i: PORTFOLIO_DATA.certifications.indexOf(c) })),
      ...PORTFOLIO_DATA.education.slice(0, 1).map(e => ({ kind: 'milestone', sort: fromPeriod(e.period), item: { icon: 'code', title: e.title || e.degree, sub: e.institution, dateLabel: e.period } }))
    ].sort((x, y) => y.sort.localeCompare(x.sort));

    timeline.innerHTML = entries.map((e) => {
      if (e.kind === 'role') {
        const exp = e.item;
        return `
          <div class="tl-item tl-role reveal">
            <div class="tl-date">${exp.period}</div>
            <div class="tl-dot" aria-hidden="true"></div>
            <div class="exp-card card-3d">
              <div class="exp-company">${exp.company}</div>
              <div class="exp-role">${exp.role}</div>
              <ul class="exp-desc">${exp.desc.map(d => `<li>${d}</li>`).join('')}</ul>
            </div>
          </div>`;
      }
      const m = e.item;
      const body = `
        <span class="ach-icon">${renderIcon(m.icon || 'code')}</span>
        <span class="tl-mile-text">
          <span class="ach-title">${m.title}</span>
          <span class="ach-sub">${m.sub || ''}</span>
        </span>
        ${m.link ? `<span class="ach-view">View ↗</span>` : (m.proof ? '<span class="ach-view">View ↗</span>' : '')}`;
      return `
        <div class="tl-item tl-milestone reveal">
          <div class="tl-date">${m.period || m.dateLabel || label(e.sort)}</div>
          <div class="tl-dot small" aria-hidden="true"></div>
          ${m.proof
            ? `<button type="button" class="tl-mile" data-proof="${e.group}:${e.i}" aria-label="View: ${m.title}">${body}</button>`
            : (m.link
                ? `<a href="${m.link}" class="tl-mile" ${m.link.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${body}</a>`
                : `<div class="tl-mile">${body}</div>`)}
        </div>`;
    }).join('');
  };

  // Render Education as a timeline (same style as the Timeline section)
  const eduContainer = document.querySelector('#education .timeline');
  if (eduContainer && typeof PORTFOLIO_DATA !== 'undefined') {
    eduContainer.innerHTML = PORTFOLIO_DATA.education.map((edu) => `
      <div class="tl-item tl-role reveal">
        <div class="tl-date">${edu.period}</div>
        <div class="tl-dot" aria-hidden="true"></div>
        <div class="exp-card card-3d">
          <div class="exp-company">${edu.institution}</div>
          <div class="exp-role">${edu.degree}</div>
          <ul class="exp-desc">${edu.desc.map(d => `<li>${d}</li>`).join('')}</ul>
        </div>
      </div>
    `).join('');
  }

  // Render Projects ("Things I've Built")
  const renderProjects = () => {
    const projectsContainer = document.querySelector('#projects .proj-grid');
    if (!projectsContainer || typeof PORTFOLIO_DATA === 'undefined') return;

    projectsContainer.innerHTML = PORTFOLIO_DATA.projects.map((proj, index) => `
      <div class="proj-card reveal card-3d" style="transition-delay:${index * 0.12}s" onmousemove="trackMouse(event,this)">
        <a class="proj-top-bar project-visual ${proj.frame === 'browser' ? 'shot-browser' : ''} ${proj.extraVisualClass || ''}" href="${proj.link}" target="_blank" rel="noopener">
          ${proj.frame === 'browser' ? `
          <div class="browser">
            <div class="browser-bar"><span></span><span></span><span></span><div class="browser-url">${(() => { try { return new URL(proj.link).hostname; } catch(e) { return 'github.com'; } })()}</div></div>
            <img src="${proj.image}" alt="${proj.imageLabel}" loading="lazy">
          </div>` : `<img src="${proj.image}" alt="${proj.imageLabel}" loading="lazy">`}
          <div class="proj-grid-lines"></div>
          <div class="proj-glow"></div>
          ${proj.mark ? `<div class="proj-mark">${proj.mark}</div>` : ''}
          <div class="project-image-label">${proj.imageLabel}</div>
        </a>
        <div class="proj-body">
          <div class="proj-header-row">
            <div class="proj-label">${proj.badge}</div>
            ${(proj.period || proj.date) ? `<div class="proj-date">${proj.period || proj.date}</div>` : ''}
          </div>
          <div class="proj-name">${proj.title}</div>
          <div class="proj-desc">${proj.description}</div>
          <div class="proj-techs">
            ${proj.techs.map(t => `<span class="proj-tech">${t}</span>`).join('')}
          </div>
          <div class="proj-links">
            ${proj.caseStudy ? `<a href="project.html?p=${proj.caseStudy.slug}" class="proj-link">Case Study →</a>` : ''}
            <a href="${proj.link}" target="_blank" rel="noopener" class="proj-link">${proj.linkText}</a>
          </div>
        </div>
      </div>
    `).join('');
  };

  // Initial renders
  renderTimeline();
  renderProjects();

  // Expose render functions globally and listen to live date change events
  window.renderTimeline = renderTimeline;
  window.renderProjects = renderProjects;
  window.addEventListener('portfolio-date-change', () => {
    renderProjects();
    renderTimeline();
  });

  // Render Skills
  const skillsContainer = document.querySelector('#skills .skills-grid');
  if (skillsContainer && typeof PORTFOLIO_DATA !== 'undefined') {
    skillsContainer.innerHTML = PORTFOLIO_DATA.skills.map((skillBlock, index) => `
      <div class="skill-block card-3d">
        <div class="skill-cat">${skillBlock.category}</div>
        <div class="skill-tags">
          ${skillBlock.tags.map(t => `<span class="skill-tag">${typeof stackIcon === "function" ? stackIcon(t) : ""}${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // Render Certifications & Achievements. A card with `proof` opens the original certificate in
  // the viewer; a card with only `link` opens that page; anything else is a plain card.
  const honorCard = (item, group, index) => {
    const body = `
      <span class="ach-icon">${renderIcon(item.icon)}</span>
      <div class="ach-title">${item.title}</div>
      <div class="ach-sub">${item.sub}</div>`;
    if (item.proof) {
      return `
        <button type="button" class="ach-card card-3d ach-clickable" data-proof="${group}:${index}" aria-label="View certificate: ${item.title}">
          ${body}
          <span class="ach-actions">
            <span class="ach-view">View ${item.icon === 'patent' ? 'document' : 'certificate'} ↗</span>
            ${item.proof.verify ? '<span class="ach-verified">✓ Verifiable</span>' : ''}
          </span>
        </button>`;
    }
    if (item.link) {
      return `
        <a class="ach-card card-3d ach-clickable" href="${item.link}" target="_blank" rel="noopener">
          ${body}
          <span class="ach-view">View source ↗</span>
        </a>`;
    }
    return `<div class="ach-card card-3d">${body}</div>`;
  };

  const certContainer = document.getElementById('cert-grid');
  if (certContainer && typeof PORTFOLIO_DATA !== 'undefined') {
    certContainer.innerHTML = PORTFOLIO_DATA.certifications.map((c, i) => honorCard(c, 'certifications', i)).join('');
  }

  const achContainer = document.getElementById('ach-grid');
  if (achContainer && typeof PORTFOLIO_DATA !== 'undefined') {
    achContainer.innerHTML = PORTFOLIO_DATA.achievements.map((a, i) => honorCard(a, 'achievements', i)).join('');
  }

  // Certificate viewer
  const viewer = document.getElementById('proof-viewer');
  if (viewer) {
    let lastFocus = null;
    const close = () => {
      viewer.hidden = true;
      document.body.classList.remove('viewer-open');
      if (lastFocus) lastFocus.focus();
    };
    document.addEventListener('click', (event) => {
      const card = event.target.closest('[data-proof]');
      if (card) {
        const [group, index, sub] = card.dataset.proof.split(':');
        let item = PORTFOLIO_DATA[group][Number(index)];
        if (sub !== undefined) {
          // Experience certificates: one entry of the role's `certificates` list.
          const cert = item.certificates[Number(sub)];
          item = { title: `${item.role} — ${cert.label}`, sub: cert.note ? `${item.company} · ${cert.note}` : item.company, proof: { image: cert.image, verify: cert.verify } };
        }
        viewer.querySelector('.proof-title').textContent = item.title || item.role;
        viewer.querySelector('.proof-sub').textContent = item.sub || item.org || item.badge || '';
        const img = viewer.querySelector('.proof-img');
        img.src = item.proof.image;
        img.alt = `${item.title || item.role} certificate`;
        viewer.querySelector('.proof-full').href = item.proof.image;
        const verify = viewer.querySelector('.proof-verify');
        verify.hidden = !item.proof.verify;
        if (item.proof.verify) verify.href = item.proof.verify;
        const source = viewer.querySelector('.proof-source');
        source.hidden = !item.proof.source;
        if (item.proof.source) source.href = item.proof.source;
        lastFocus = card;
        viewer.hidden = false;
        document.body.classList.add('viewer-open');
        viewer.querySelector('.proof-close').focus();
        return;
      }
      if (event.target.closest('[data-close-viewer]')) close();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !viewer.hidden) close();
    });
  }

  // Finds which card holds a given certificate image, so other sections can open it in the viewer.
  function proofRef(image) {
    if (!image) return '';
    for (const group of ['achievements', 'certifications', 'leadership']) {
      const i = (PORTFOLIO_DATA[group] || []).findIndex(x => x.proof && x.proof.image === image);
      if (i !== -1) return `${group}:${i}`;
    }
    return '';
  }

  // Testimonials (section stays hidden when there are none)
  const testimonials = document.getElementById('testimonials');
  if (testimonials && PORTFOLIO_DATA.testimonials && PORTFOLIO_DATA.testimonials.length) {
    testimonials.querySelector('.quote-grid').innerHTML = PORTFOLIO_DATA.testimonials.map(t => `
      <figure class="quote-card reveal">
        <div class="quote-mark" aria-hidden="true">&ldquo;</div>
        <blockquote>${t.quote}</blockquote>
        <figcaption><span class="ach-title">${t.name}</span><span class="ach-sub">${t.role}</span></figcaption>
        ${proofRef(t.proof) ? `<button type="button" class="proj-link quote-proof" data-proof="${proofRef(t.proof)}">View certificate ↗</button>` : ''}
      </figure>`).join('');
    testimonials.hidden = false;
  }

  // Dispatch a custom event to notify main.js that rendering is complete
  document.dispatchEvent(new Event('portfolioDataRendered'));
});
