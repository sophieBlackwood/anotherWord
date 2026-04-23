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

// ---------- UI COMPONENT: CARD ----------
function createCard(p) {
    const el = document.createElement("div");
    el.className = "card";
    
    el.innerHTML = `
        <span class="card-date">${p.date || 'Recent'}</span>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-snippet">${p.content.substring(0, 80).replace(/\n/g, ' ')}...</p>
    `;
    
    el.onclick = () => goToPoem(p.id);
    return el;
}

// ---------- PAGE INITIALIZATION ----------
document.addEventListener("DOMContentLoaded", () => {
    // Trigger entry animation
    document.body.classList.add("fade-in");

    // Elements
    const featuredList = document.getElementById("featured-list");
    const allEl = document.getElementById("all-poems");
    const searchInput = document.getElementById("search");
    const tagContainer = document.getElementById("tags");
    const titleEl = document.getElementById("poem-title");
    const contentEl = document.getElementById("poem-content");
    const dateEl = document.getElementById("poem-date");
    const authorBlurb = document.getElementById("author-blurb");

    // --- 1. HOMEPAGE LOGIC ---
    if (featuredList) {
        // Only show poems where 'featured: true' in data.js
        const featured = poems.filter(p => p.featured);
        featured.forEach(p => featuredList.appendChild(createCard(p)));
    }

    if (authorBlurb && typeof author !== 'undefined') {
        authorBlurb.textContent = author.blurb;
    }

    // --- 2. ARCHIVE PAGE LOGIC ---
    if (allEl) {
        const render = (list) => {
            allEl.innerHTML = "";
            if (list.length === 0) {
                allEl.innerHTML = `<p style="color: var(--muted); grid-column: 1/-1; text-align: center;">No poems found matching that search.</p>`;
                return;
            }
            list.forEach(p => allEl.appendChild(createCard(p)));
        };

        // Initial Render
        render(poems);

        // Search Implementation
        if (searchInput) {
            searchInput.addEventListener("input", e => {
                const query = e.target.value.toLowerCase();
                const filtered = poems.filter(p => 
                    p.title.toLowerCase().includes(query) || 
                    p.content.toLowerCase().includes(query)
                );
                render(filtered);
            });
        }

        // Dynamic Tag Filtering
        if (tagContainer) {
            const tags = [...new Set(poems.flatMap(p => p.tags))];
            tags.forEach(tag => {
                const btn = document.createElement("button");
                btn.textContent = tag;
                btn.onclick = () => {
                    // Toggle active class logic
                    document.querySelectorAll('#tags button').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    const filtered = poems.filter(p => p.tags.includes(tag));
                    render(filtered);
                };
                tagContainer.appendChild(btn);
            });
        }
    }

    // --- 3. SINGLE POEM VIEW LOGIC ---
    if (titleEl && contentEl) {
        const id = new URLSearchParams(window.location.search).get("id");
        const poem = poems.find(p => p.id == id);

        if (poem) {
            titleEl.textContent = poem.title;
            // Preserves line breaks and handles basic bold/italic formatting
            contentEl.innerHTML = poem.content
                .replace(/\n/g, "<br>")
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.*?)\*/g, "<em>$1</em>");
            
            if (dateEl) dateEl.textContent = poem.date;
            document.title = `${poem.title} | Another Word`;
        } else {
            titleEl.textContent = "Poem Not Found";
            contentEl.textContent = "The piece you are looking for has drifted away.";
        }
    }
});
