/**
 * MAIN.JS - Another Word (Midnight Edition)
 */

// ---------- NAVIGATION & TRANSITIONS ----------
function goToPoem(id) {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = `poem.html?id=${id}`;
    }, 400);
}

function createCard(p) {
    const el = document.createElement("div");
    el.className = "card";
    
    // Fallback to snippet if description is missing
    const displayText = p.description || (p.content.substring(0, 100).replace(/\n/g, ' ') + '...');

    el.innerHTML = `
        <span class="card-date">${p.date}</span>
        <h2 class="card-title">${p.title}</h2>
        <p class="card-snippet">${displayText}</p>
    `;
    
    el.onclick = () => goToPoem(p.id);
    return el;
}

// ---------- PAGE INITIALIZATION ----------
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    // Elements
    const featuredList = document.getElementById("featured-list");
    const allEl = document.getElementById("all-poems");
    const searchInput = document.getElementById("search");
    const titleEl = document.getElementById("poem-title");
    const contentEl = document.getElementById("poem-content");
    const dateEl = document.getElementById("poem-date");
    const authorBlurb = document.getElementById("author-blurb");

    // --- 1. HOMEPAGE LOGIC ---
    if (featuredList) {
        const featured = poems.filter(p => p.featured);
        featured.forEach(p => featuredList.appendChild(createCard(p)));
    }

    if (authorBlurb && typeof author !== 'undefined') {
        authorBlurb.textContent = author.blurb;
    }

    // --- 2. ARCHIVE PAGE LOGIC (Invisible Tag Search) ---
    if (allEl) {
        const render = (list) => {
            allEl.innerHTML = "";
            if (list.length === 0) {
                allEl.innerHTML = `<p style="color: var(--muted); grid-column: 1/-1; text-align: center; font-family: 'Playfair Display', serif; font-style: italic; margin-top: 2rem;">The words you seek haven't surfaced yet.</p>`;
                return;
            }
            list.forEach(p => allEl.appendChild(createCard(p)));
        };

        render(poems);

        if (searchInput) {
            searchInput.addEventListener("input", e => {
                const query = e.target.value.toLowerCase();
                
                const filtered = poems.filter(p => {
                    // Search Title
                    const inTitle = p.title.toLowerCase().includes(query);
                    // Search Content
                    const inContent = p.content.toLowerCase().includes(query);
                    // Search Tags (Invisible Keywords)
                    const inTags = p.tags.some(tag => tag.toLowerCase().includes(query));
                    
                    return inTitle || inContent || inTags;
                });
                
                render(filtered);
            });
        }
    }

    // --- 3. SINGLE POEM VIEW LOGIC ---
    if (titleEl && contentEl) {
        const id = new URLSearchParams(window.location.search).get("id");
        const poem = poems.find(p => p.id == id);

        if (poem) {
            titleEl.textContent = poem.title;
            contentEl.innerHTML = poem.content
                .replace(/\n/g, "<br>")
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.*?)\*/g, "<em>$1</em>");
            
            if (dateEl) dateEl.textContent = poem.date;
            document.title = `${poem.title} | Another Word`;
        } else {
            titleEl.textContent = "Empty Waters";
            contentEl.textContent = "The piece you are looking for has drifted away.";
        }
    }
});
