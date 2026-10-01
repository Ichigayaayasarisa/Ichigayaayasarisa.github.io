(() => {
  "use strict";
  const data = window.SITE_CONTENT;
  if (!data) return;
  const node = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };
  document.title = data.title;
  document.querySelector("#profile-intro").textContent = data.intro;
  document.querySelector("#github-link").href = data.github;
  data.tags.forEach(tag => document.querySelector("#profile-tags").append(node("span", "", tag)));
  data.interests.forEach(item => {
    const article = node("article", `interest ${item.tone}`);
    const top = node("div", "interest-top");
    const symbol = node("span", "interest-symbol", item.symbol);
    symbol.setAttribute("aria-hidden", "true");
    top.append(node("span", "small-label", `${item.number} / ${item.category}`), symbol);
    article.append(top, node("h3", "", item.title), node("p", "interest-alias", item.alias), node("p", "interest-description", item.text));
    document.querySelector("#interest-grid").append(article);
  });
  document.querySelector("#journal-count").textContent = `${data.entries.length} 段记录`;
  data.entries.forEach(entry => {
    const article = node("article", "journal-entry");
    const date = node("time", "entry-date", entry.date.slice(5).replace("-", "."));
    date.dateTime = entry.date;
    date.append(node("small", "", entry.date.slice(0, 4)));
    const copy = node("div", "entry-copy");
    const tags = node("div", "entry-tags");
    entry.tags.forEach(tag => tags.append(node("span", "", `# ${tag}`)));
    copy.append(node("span", "entry-label", entry.label), node("h3", "", entry.title), node("p", "entry-text", entry.text), tags);
    article.append(date, copy);
    document.querySelector("#journal-list").append(article);
  });
  document.querySelector("#year").textContent = new Date().getFullYear();
  const points = document.querySelector(".light-points");
  // 使用固定分布，刷新时光点不会突然换位置。
  for (let index = 0; index < 38; index++) {
    const point = node("i");
    point.style.left = `${(index * 37 + 13) % 100}%`;
    point.style.top = `${(index * 19 + 7) % 95}%`;
    point.style.animationDelay = `${-(index % 7)}s`;
    points.append(point);
  }
  const button = document.querySelector(".motion-button");
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  function updateMotion(paused) {
    document.body.classList.toggle("motion-paused", paused);
    button.setAttribute("aria-pressed", String(paused));
    button.setAttribute("aria-label", paused ? "播放光点动画" : "暂停光点动画");
    button.querySelector(".motion-label").textContent = paused ? "静静看星空" : "光点漫游中";
  }
  updateMotion(media.matches);
  button.addEventListener("click", () => updateMotion(!document.body.classList.contains("motion-paused")));
})();
