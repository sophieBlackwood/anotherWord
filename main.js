function goToPoem(id) {
    document.body.classList.add("fade-out");
    setTimeout(() => { window.location.href = `poem.html?id=${id}`; }, 400);
}

function createCard(p) {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `
        <span class="card-date">${p.date || 'Entry'}</span>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-snippet">${p.content.substring(0, 60)}...</p>
    `;
    el.onclick = () => goToPoem(p.id);
    return el;
}

// Initialization for different pages
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    const recentEl = document.getElementById("recent");
    const allEl = document.getElementById("all-poems");
    const titleEl = document.getElementById("poem-title");

    if (recentEl) poems.forEach(p => recentEl.appendChild(createCard(p)));
    
    if (allEl) {
        const render = (list) => {
            allEl.innerHTML = "";
            list.forEach(p => allEl.appendChild(createCard(p)));
        };
        render(poems);
        document.getElementById("search")?.addEventListener("input", e => {
            const filtered = poems.filter(p => p.title.toLowerCase().includes(e.target.value.toLowerCase()));
            render(filtered);
        });
    }

    if (titleEl) {
        const id = new URLSearchParams(window.location.search).get("id");
        const poem = poems.find(p => p.id == id);
        if (poem) {
            titleEl.textContent = poem.title;
            document.getElementById("poem-content").innerHTML = poem.content.replace(/\n/g, "<br>");
            document.getElementById("poem-date").textContent = poem.date;
        }
    }
});
