document.addEventListener("DOMContentLoaded", () => {
    const featuredList = document.getElementById("featured-list");
    const allEl = document.getElementById("all-poems");
    const searchInput = document.getElementById("search");
    const authorBlurb = document.getElementById("author-blurb");

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

    if (authorBlurb && typeof author !== 'undefined') {
        authorBlurb.textContent = author.blurb;
    }

    if (allEl) {
        let currentSort = 'newest';

        const render = () => {
            const query = searchInput ? searchInput.value.toLowerCase() : "";
            let filteredList = poems.filter(p => 
                p.title.toLowerCase().includes(query) || 
                p.tags.some(t => t.toLowerCase().includes(query))
            );

            if (currentSort === 'newest') {
                filteredList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            } else if (currentSort === 'oldest') {
                filteredList.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            } else if (currentSort === 'az') {
                filteredList.sort((a, b) => a.title.localeCompare(b.title));
            } else if (currentSort === 'za') {
                filteredList.sort((a, b) => b.title.localeCompare(a.title));
            }

            allEl.innerHTML = "";
            filteredList.forEach(p => allEl.appendChild(createCard(p)));
        };

        if (searchInput) {
            searchInput.addEventListener("input", render);
        }

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentSort = btn.getAttribute('data-sort');
                render();
            });
        });

        render();
    }
});
