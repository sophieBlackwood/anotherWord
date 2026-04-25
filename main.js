document.addEventListener("DOMContentLoaded", () => {
    const featuredList = document.getElementById("featured-list");
    const allEl = document.getElementById("all-poems");
    const searchInput = document.getElementById("search");

    function createCard(p) {
    const el = document.createElement("div");
    el.className = "card";
    const displayText = p.description || p.content.substring(0, 120) + "...";

    el.innerHTML = `
        <span style="color: var(--accent); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">${p.date}</span>
        <h2>${p.title}</h2>
        <p>${displayText}</p>
    `;
    el.onclick = () => window.location.href = `poem.html?id=${p.id}`;
    return el;
}

    if (featuredList) {
        poems.filter(p => p.featured).forEach(p => featuredList.appendChild(createCard(p)));
    }

    if (allEl) {
        const render = (list) => {
            allEl.innerHTML = "";
            list.forEach(p => allEl.appendChild(createCard(p)));
        };
        render(poems);

        if (searchInput) {
            searchInput.addEventListener("input", e => {
                const q = e.target.value.toLowerCase();
                const filtered = poems.filter(p => 
                    p.title.toLowerCase().includes(q) || 
                    p.tags.some(t => t.toLowerCase().includes(q))
                );
                render(filtered);
            });
        }
    }
});
