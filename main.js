document.addEventListener("DOMContentLoaded", () => {
    const featuredList = document.getElementById("featured-list");
    const allEl = document.getElementById("all-poems");
    const searchInput = document.getElementById("search");

    function createCard(p) {
        const el = document.createElement("div");
        el.className = "card";
        const displayText = p.description || p.content.substring(0, 100) + "...";

        el.innerHTML = `
            <span style="color: var(--accent); font-size: 0.7rem; font-weight: 700; text-transform: uppercase;">${p.date}</span>
            <h2 style="margin: 1rem 0; font-size: 1.5rem;">${p.title}</h2>
            <p style="color: var(--muted); font-size: 0.95rem; line-height: 1.6;">${displayText}</p>
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
