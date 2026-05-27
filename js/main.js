// Tab Switching Logic
function switchTab(targetId) {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.target === targetId) btn.classList.add('active');
  });

  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
    section.classList.add('hidden');
  });

  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
    targetSection.classList.add('active');
  }
}

// Data Fetching Helper
async function fetchJSON(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(`Failed to load ${path}:`, err);
    return null;
  }
}

// 🗺️ PROJECTS
async function loadProjects() {
  const data = await fetchJSON('data/projects.json');
  const container = document.getElementById('projects-grid');
  if (!data) {
    container.innerHTML = '<p class="loading-text">Projects temporarily unavailable.</p>';
    return;
  }

  container.innerHTML = data.map(p => `
    <article class="card project-card" data-domain="${p.domain}">
      <h3>${p.title}</h3>
      <p class="card-meta">${p.tools.join(' • ')}</p>
      <p>${p.description}</p>
      <div style="display:flex; gap:1rem; flex-wrap:wrap;">
        ${p.public_link ? `<a href="${p.public_link}" target="_blank" rel="noopener" class="card-link">Public Demo</a>` : ''}
        ${p.request_access ? `<a href="${p.request_access}" target="_blank" rel="noopener" class="card-link">Request Access</a>` : ''}
      </div>
    </article>
  `).join('');

  // Filter Logic
  document.querySelector('.filters')?.addEventListener('click', e => {
    if (!e.target.classList.contains('filter-btn')) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    const filter = e.target.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.domain === filter) ? 'block' : 'none';
    });
  });
}

// ⚓ TRANSLATIONS
async function loadTranslations() {
  const data = await fetchJSON('data/translations.json');
  const container = document.getElementById('translation-grid');
  if (!data) {
    container.innerHTML = '<p class="loading-text">Translation portfolio loading...</p>';
    return;
  }

  container.innerHTML = data.map(t => `
    <article class="card">
      <h3>🌐 ${t.pair}</h3>
      <p class="card-meta">${t.domains.join(' | ')}</p>
      <p>${t.description}</p>
      ${t.excerpt ? `<blockquote style="border-left:3px solid var(--brass); padding-left:0.5rem; margin:0.5rem 0; font-style:italic; color:var(--cabin-wood);">“${t.excerpt}”</blockquote>` : ''}
      ${t.request_access ? `<a href="${t.request_access}" target="_blank" rel="noopener" class="card-link">Request Sample</a>` : ''}
    </article>
  `).join('');
}

// 🧭 TIMELINE
async function loadTimeline() {
  const data = await fetchJSON('data/timeline.json');
  const container = document.getElementById('timeline-container');
  if (!data) {
    container.innerHTML = '<p class="loading-text">Trajectory timeline loading...</p>';
    return;
  }

  container.innerHTML = data.map(item => `
    <div class="timeline-item ${item.type}">
      <div class="timeline-marker">${item.icon}</div>
      <div class="timeline-content">
        <span class="timeline-date">${item.date}</span>
        <span class="timeline-tag">${item.type === 'education' ? '🎓 Education' : '💼 Experience'}</span>
        <h3 style="font-size:1.1rem; margin:0.25rem 0;">${item.title}</h3>
        <p style="font-size:0.9rem; margin:0;">${item.description}</p>
      </div>
    </div>
  `).join('');
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  // Attach click listeners to sidebar buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.target));
  });

  loadProjects();
  loadTranslations();
  loadTimeline();
});
