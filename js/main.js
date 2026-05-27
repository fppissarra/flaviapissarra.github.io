document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  loadProjects();
  loadTranslations();
  loadTimeline();
});

function initNavigation() {
  // Smooth scroll + mobile nav close on click
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelector('.nav-links')?.classList.remove('active');
    });
  });
}

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

function showError(containerId, message) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = `<p class="loading-text">${message}</p>`;
}

// 🗺️ PROJECTS
async function loadProjects() {
  const data = await fetchJSON('data/projects.json');
  const container = document.getElementById('projects-grid');
  if (!data) return showError('projects-grid', 'Projects temporarily unavailable.');

  container.innerHTML = data.map(p => `
    <article class="card project-card" data-domain="${p.domain}">
      <h3>${p.title}</h3>
      <p class="card-meta">${p.tools.join(' • ')}</p>
      <p>${p.description}</p>
      <div class="card-links">
        ${p.public_link ? `<a href="${p.public_link}" target="_blank" rel="noopener" class="card-link">Public Demo</a>` : ''}
        ${p.request_access ? `<a href="${p.request_access}" target="_blank" rel="noopener" class="card-link">Request Full Access</a>` : ''}
      </div>
    </article>
  `).join('');

  // Filter logic
  const filters = document.querySelector('.filters');
  if (filters) {
    filters.addEventListener('click', e => {
      if (!e.target.classList.contains('filter-btn')) return;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      const filter = e.target.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.domain === filter) ? 'block' : 'none';
      });
    });
  }
}

// ⚓ TRANSLATIONS
async function loadTranslations() {
  const data = await fetchJSON('data/translations.json');
  const container = document.getElementById('translation-grid');
  if (!data) return showError('translation-grid', 'Translation portfolio loading...');

  container.innerHTML = data.map(t => `
    <article class="card">
      <h3>🌐 ${t.pair}</h3>
      <p class="card-meta">${t.domains.join(' | ')}</p>
      <p>${t.description}</p>
      ${t.excerpt ? `<blockquote class="card-quote">“${t.excerpt}”</blockquote>` : ''}
      ${t.request_access ? `<a href="${t.request_access}" target="_blank" rel="noopener" class="card-link">Request Sample</a>` : ''}
    </article>
  `).join('');
}

// 🧭 TIMELINE
async function loadTimeline() {
  const data = await fetchJSON('data/timeline.json');
  const container = document.getElementById('timeline-container');
  if (!data) return showError('timeline-container', 'Trajectory timeline loading...');

  container.innerHTML = data.map(item => `
    <div class="timeline-item ${item.type}">
      <div class="timeline-marker">${item.icon}</div>
      <div class="timeline-content">
        <span class="timeline-date">${item.date}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-subtitle">${item.subtitle}</p>
        <p>${item.description}</p>
      </div>
    </div>
  `).join('');
}
