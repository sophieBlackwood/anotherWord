document.addEventListener("DOMContentLoaded", () => {
    // 1. SELECT ELEMENTS
    const featuredList = document.getElementById("featured-list");
    const allEl = document.getElementById("all-poems");
    const searchInput = document.getElementById("search");
    const authorBlurb = document.getElementById("author-blurb");

    // 2. RANDOM BACKGROUND ROTATION
    // Add your image filenames here
    // 1. Define your images (ensure these files exist in your folder!)
const backgroundImages = [
    'hero.jpg',
    'hero2.jpg',
    'hero3.jpg',
    'hero4.jpg',
    'hero5.jpg',
    'hero6.jpg',
    'hero7.jpg',
    'hero8.jpg',
    'hero9.jpg',
    'hero10.jpg',
    'hero11.jpg',
    'hero12.jpg',
    'hero13.jpg',
    'hero14.jpg',
    'hero15.jpg',
    'hero16.jpg',
    'hero17.jpg',
    'hero18.jpg',
    'hero19.jpg'
];

// 2. Function to pick one at random
function setRandomHero() {
    const heroSection = document.querySelector('.poem-hero-visual');
    
    if (heroSection) {
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        const selectedImage = backgroundImages[randomIndex];
        heroSection.style.backgroundImage = `url('${selectedImage}')`;
    }
}

// 3. Call it immediately
setRandomHero();

    // 3. CARD GENERATOR FUNCTION
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

    // 4. HOME PAGE LOGIC
    if (featuredList) {
        poems.filter(p => p.featured).forEach(p => featuredList.appendChild(createCard(p)));
    }

    if (authorBlurb && typeof author !== 'undefined') {
        authorBlurb.textContent = author.blurb;
    }

    // 5. ARCHIVE PAGE LOGIC (Sorting & Filtering)
    if (allEl) {
        let currentSort = 'newest';

        const render = () => {
            const query = searchInput ? searchInput.value.toLowerCase() : "";
            
            // Filter
            let filteredList = poems.filter(p => 
                p.title.toLowerCase().includes(query) || 
                (p.tags && p.tags.some(t => t.toLowerCase().includes(query)))
            );

            // Sort
            if (currentSort === 'newest') {
                filteredList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            } else if (currentSort === 'oldest') {
                filteredList.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            } else if (currentSort === 'az') {
                filteredList.sort((a, b) => a.title.localeCompare(b.title));
            } else if (currentSort === 'za') {
                filteredList.sort((a, b) => b.title.localeCompare(a.title));
            }

            // Clear and Render
            allEl.innerHTML = "";
            filteredList.forEach(p => allEl.appendChild(createCard(p)));
        };

        // Listeners
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

        // Initial Run for Archive
        render();
    }
});
