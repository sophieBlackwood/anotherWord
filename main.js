document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    const featuredList = document.getElementById("featured-list");
    const allEl = document.getElementById("all-poems");
    const searchInput = document.getElementById("search");
    const authorBlurb = document.getElementById("author-blurb");

    // UI: Create Calm Card
    function createCard(p) {
        const el = document.createElement("div");
        el.className = "card";
        const displayText = p.description || p.content.substring(0, 100).replace(/\n/g, ' ') + '...';

        el.innerHTML = `
            <span class="card-date">${p.date}</span>
            <h2 class="card-title">${p.title}</h2>
            <p class="card-snippet">${displayText}</p>
        `;
        el.onclick = () => {
            document.body.style.opacity = "0";
            setTimeout(() => window.location.href = `poem.html?id=${p.id}`, 400);
        };
        return el;
    }

    // Load Author
    if (authorBlurb && typeof author !== 'undefined') {
        authorBlurb.textContent = author.blurb;
    }

    // Load Carousel (Home)
    if (featuredList) {
        poems.filter(p => p.featured).forEach(p => featuredList.appendChild(createCard(p)));
    }

    // Load Archive (Grid)
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
