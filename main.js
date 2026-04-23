// ---------- UTIL ----------
function goToPoem(id) {
    document.body.classList.add("fade-out");
    // Increased timeout for a smoother, sea-mist fade transition
    setTimeout(() => {
        window.location.href = `poem.html?id=${id}`;
    }, 400);
}

// ---------- SEARCH ----------
function filterPoems(query) {
    return poems.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.content.toLowerCase().includes(query.toLowerCase())
    );
}

// ---------- FORMATTING ----------
function formatText(text) {
    // Seaglass style uses airy spacing, handled by CSS pre-line
    return text
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>");
}

// ---------- RENDER CARDS (The UI Upgrade) ----------
function createCard(p) {
    const el = document.createElement("div");
    el.className = "card";
    
    // Adding the specific Seaglass structure: Date > Title > Snippet
    el.innerHTML = `
        <span class="card-date">${p.date || 'Recent'}</span>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-snippet">${p.content.substring(0, 60)}...</p>
    `;
    
    el.onclick = () => goToPoem(p.id);
    return el;
}

// ---------- INDEX LOGIC ----------
const featuredEl = document.getElementById("featured");
const recentEl = document.getElementById("recent");
const authorEl = document.getElementById("author-blurb");

if (featuredEl) {
    poems.filter(p => p.featured).forEach(p => {
        featuredEl.appendChild(createCard(p));
    });
}

if (recentEl) {
    // Showing only the 3 most recent to keep the landing page uncluttered
    poems.slice(-3).reverse().forEach(p => {
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

    if (searchInput) {
        searchInput.addEventListener("input", e => {
            render(filterPoems(e.target.value));
        });
    }

    // Dynamic Tag Generation
    const tags = [...new Set(poems.flatMap(p => p.tags))];

    if (tagContainer) {
        tags.forEach(tag => {
            const btn = document.createElement("button");
            btn.textContent = tag;
            btn.onclick = () => {
                const filtered = poems.filter(p => p.tags.includes(tag));
                render(filtered);
            };
            tagContainer.appendChild(btn);
        });
    }
}

// ---------- SINGLE POEM VIEW ----------
const titleEl = document.getElementById("poem-title");
const contentEl = document.getElementById("poem-content");
const dateEl = document.getElementById("poem-date");

if (titleEl && contentEl) {
    const id = new URLSearchParams(window.location.search).get("id");
    const poem = poems.find(p => p.id == id);

    if (poem) {
        titleEl.textContent = poem.title;
        contentEl.innerHTML = formatText(poem.content);
        if (dateEl) dateEl.textContent = poem.date;
    }
}

// ---------- INITIALIZE FADE ----------
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});
