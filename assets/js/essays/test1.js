const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const listEl = document.getElementById("essay-list");

function renderEssays() {
  const query = searchInput.value.toLowerCase();
  const sortOrder = sortSelect.value;

  let filtered = ESSAYS.filter(e =>
    e.title.toLowerCase().includes(query) || e.description.toLowerCase().includes(query)
  );

  filtered.sort((a, b) =>
    sortOrder === "newest"
      ? new Date(b.createdAt) - new Date(a.createdAt)
      : new Date(a.createdAt) - new Date(b.createdAt)
  );

  listEl.innerHTML = "";

  if (!filtered.length) {
    listEl.innerHTML = `<p class="empty">No essays found.</p>`;
    return;
  }

  filtered.forEach(essay => {
    const card = document.createElement("a");
    card.href = `#${essay.id}`;
    card.className = "essay-card";

    const title = document.createElement("div");
    title.className = "essay-title";
    title.textContent = essay.title;

    const desc = document.createElement("div");
    desc.className = "essay-description";
    desc.textContent = essay.description;

    card.appendChild(title);
    card.appendChild(desc);

    listEl.appendChild(card);
  });
}

// Event listeners
searchInput.addEventListener("input", renderEssays);
sortSelect.addEventListener("change", renderEssays);

// Initial render
renderEssays();
