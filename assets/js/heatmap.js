// Draws a GitHub-style activity calendar. Shared by the GitHub and LeetCode panels.
// days: [{ date: "YYYY-MM-DD", count, level: 0-4 }] in chronological order.
// Each heatmap follows its platform's own calendar: GitHub shows days in your timezone (IST),
// LeetCode counts submissions by UTC day. Dates are "YYYY-MM-DD" strings and are drawn as-is.
function todayIST() {
  return new Date(Date.now() + 5.5 * 3600 * 1000).toISOString().slice(0, 10);
}

function todayUTC() {
  return new Date().toISOString().slice(0, 10);
}

// Adds empty days after the last day of data up to `today`, so today's cell is always shown.
function padToToday(days, today) {
  if (!days.length) return days;
  const out = days.slice();
  let last = out[out.length - 1].date;
  while (last < today) {
    const next = new Date(last + "T00:00:00Z");
    next.setUTCDate(next.getUTCDate() + 1);
    last = next.toISOString().slice(0, 10);
    out.push({ date: last, count: 0, level: 0 });
  }
  return out;
}

function renderHeatmap(calendarEl, days, unit, zone) {
  const map = calendarEl.querySelector(".gh-heatmap");
  const months = calendarEl.querySelector(".gh-months");
  if (!days.length) {
    // Keep the element (year tabs still need it) and explain instead of leaving a blank.
    months.innerHTML = "";
    map.innerHTML = '<div class="gh-empty">Activity data is unavailable right now.</div>';
    return;
  }
  const lead = new Date(days[0].date + "T00:00:00Z").getUTCDay();
  const cells = Array(lead).fill('<span class="gh-cell empty"></span>');
  const columns = Math.ceil((days.length + lead) / 7);
  const monthMarks = [];
  let lastMonth = -1;
  days.forEach((day, i) => {
    const date = new Date(day.date + "T00:00:00Z");
    const col = Math.floor((i + lead) / 7);
    if (date.getUTCMonth() !== lastMonth && date.getUTCDate() <= 7) {
      monthMarks.push(`<span style="left:${(col / columns) * 100}%">${date.toLocaleString("en", { month: "short", timeZone: "UTC" })}</span>`);
      lastMonth = date.getUTCMonth();
    }
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const label = `${day.count} ${unit}${day.count === 1 ? "" : "s"} on ${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}${zone ? ` (${zone})` : ""}`;
    cells.push(`<span class="gh-cell l${day.level}" title="${label}"></span>`);
  });
  map.innerHTML = cells.join("");
  months.innerHTML = monthMarks.join("");
  // Show the most recent weeks first on narrow screens.
  const scroller = calendarEl.querySelector(".gh-scroll");
  scroller.scrollLeft = scroller.scrollWidth;
}
