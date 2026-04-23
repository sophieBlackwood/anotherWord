// ---------- UTIL ----------
function goToPoem(id) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = `poem.html?id=${id}`;
  }, 200);
}

// ---------- SEARCH ----------
function filterPoems(query) {
  return poems.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.content.toLowerCase().includes(query.toLowerCase())
  );
}

// ---------- MARKDOWN LIGHT ----------
function formatText(text) {
  return text
    .replace(/\n/g, "<br>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");
}

// ---------- RENDER CARDS ----------
function createCard(p) {
  const el = document.createElement("div");
  el.className = "card";
  el.textContent = p.title;
  el.onclick = () => goToPoem(p.id);
  return el;
}

// ---------- INDEX ----------
const featuredEl = document.getElementById("featured");
const recentEl = document.getElementById("recent");
const authorEl = document.getElementById("author-blurb");

if (featuredEl) {
  poems.filter(p => p.featured).forEach(p => {
    featuredEl.appendChild(createCard(p));
  });
}

if (recentEl) {
  poems.slice(0, 5).forEach(p => {
    recentEl.appendChild(createCard(p));
  });
}

if (authorEl) {
  authorEl.textContent = author.blurb;
}

// ---------- ALL POEMS PAGE ----------
const allEl = document.getElementById("all-poems");
const searchInput = document.getElementById("search");
const tagContainer = document.getElementById("tags");

if (allEl) {

  function render(list) {
    allEl.innerHTML = "";
    list.forEach(p => allEl.appendChild(createCard(p)));
  }

  render(poems);

  // search
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      render(filterPoems(e.target.value));
    });
  }

  // tags
  const tags = [...new Set(poems.flatMap(p => p.tags))];

  if (tagContainer) {
    tags.forEach(tag => {
      const btn = document.createElement("button");
      btn.textContent = tag;
      btn.onclick = () => {
        render(poems.filter(p => p.tags.includes(tag)));
      };
      tagContainer.appendChild(btn);
    });
  }
}

// ---------- SINGLE POEM ----------
const titleEl = document.getElementById("poem-title");
const contentEl = document.getElementById("poem-content");

if (titleEl && contentEl) {
  const id = new URLSearchParams(window.location.search).get("id");
  const poem = poems.find(p => p.id == id);

  if (poem) {
    titleEl.textContent = poem.title;
    contentEl.innerHTML = formatText(poem.content);
  }
}

// ---------- FADE IN ----------
window.onload = () => {
  document.body.classList.add("fade-in");
};
