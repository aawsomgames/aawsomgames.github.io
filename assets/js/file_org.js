const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const listEl = document.getElementById("essay-list");

function renderEssays() {
  const query = searchInput.value.toLowerCase();
  const sortOrder = sortSelect.value;

  let filtered = ESSAYS.filter(
    (e) =>
      e.title.toLowerCase().includes(query) ||
      e.body.toLowerCase().includes(query)
  );

  filtered.sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
  });

  listEl.innerHTML = "";

  if (filtered.length === 0) {
    listEl.innerHTML = `<li class="empty">No essays found.</li>`;
    return;
  }

  filtered.forEach((essay) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `files/${essay.id}`;
    a.textContent = essay.title;
    li.appendChild(a);
    listEl.appendChild(li);
  });
}

// Event listeners
searchInput.addEventListener("input", renderEssays);
sortSelect.addEventListener("change", renderEssays);

// Initial render
renderEssays();
