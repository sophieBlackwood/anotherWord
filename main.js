document.addEventListener("DOMContentLoaded", () => {
    // 1. SELECT ELEMENTS
    const featuredList = document.getElementById("featured-list");
    const allEl = document.getElementById("all-poems");
    const searchInput = document.getElementById("search");
    const authorBlurb = document.getElementById("author-blurb");

    // 2. BACKGROUND LOGIC
    const poemImages = [
        'hero2.jpg', 'hero3.jpg', 'hero4.jpg', 'hero5.jpg', 'hero6.jpg',
        'hero7.jpg', 'hero8.jpg', 'hero9.jpg', 'hero10.jpg', 'hero11.jpg',
        'hero12.jpg', 'hero13.jpg', 'hero14.jpg', 'hero15.jpg', 'hero16.jpg',
        'hero17.jpg', 'hero18.jpg', 'hero19.jpg'
    ];

    const fullHero = document.querySelector('.fullscreen-hero');
    const poemHero = document.querySelector('.poem-hero-visual');

    if (fullHero) {
        // Main Page: Always hero.jpg
        fullHero.style.backgroundImage = "url('./hero.jpg')";
    } else if (poemHero) {
        // Poem Page: Randomly pick hero2 through hero19
        const randomImg = poemImages[Math.floor(Math.random() * poemImages.length)];
        poemHero.style.backgroundImage = `url('./${randomImg}')`;
    }

    // 3. CARD GENERATOR
    function createCard(p) {
        const el = document.createElement("div");
        el.className = "card";
        const displayText = p.description || (p.content ? p.content.substring(0, 120) + "..." : "");

        el.innerHTML = `
            <span style="color: var(--accent); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">${p.date}</span>
            <h2>${p.title}</h2>
            <p>${displayText}</p>
        `;
        el.onclick = () => { window.location.href = `./poem.html?id=${p.id}`; };
        return el;
    }

    // 4. HOME PAGE CONTENT
    if (featuredList && typeof poems !== 'undefined') {
        poems.filter(p => p.featured).forEach(p => featuredList.appendChild(createCard(p)));
    }

    if (authorBlurb && typeof author !== 'undefined') {
        authorBlurb.textContent = author.blurb;
    }

    // 5. ARCHIVE PAGE CONTENT
    if (allEl && typeof poems !== 'undefined') {
        let currentSort = 'newest';
        const render = () => {
            const query = searchInput ? searchInput.value.toLowerCase() : "";
            let list = poems.filter(p => 
                p.title.toLowerCase().includes(query) || 
                (p.tags && p.tags.some(t => t.toLowerCase().includes(query)))
            );

            if (currentSort === 'newest') list.sort((a, b) => new Date(b.date) - new Date(a.date));
            if (currentSort === 'oldest') list.sort((a, b) => new Date(a.date) - new Date(b.date));
            if (currentSort === 'az') list.sort((a, b) => a.title.localeCompare(b.title));
            if (currentSort === 'za') list.sort((a, b) => b.title.localeCompare(a.title));

            allEl.innerHTML = "";
            list.forEach(p => allEl.appendChild(createCard(p)));
        };

        if (searchInput) searchInput.addEventListener("input", render);
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
