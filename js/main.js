// Global functions for inline HTML onclick
window.toggleSidebar = function() {
  document.querySelector('.sidebar').classList.toggle('open');
  document.querySelector('.sidebar-overlay').classList.toggle('active');
};

window.switchTab = function(targetId) {
  // Update sidebar buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.target === targetId) btn.classList.add('active');
  });

  // Update content sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
    section.classList.add('hidden');
  });

  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
    targetSection.classList.add('active');
    
    // Close mobile menu on tab switch
    if (window.innerWidth <= 768) {
      document.querySelector('.sidebar').classList.remove('open');
      document.querySelector('.sidebar-overlay').classList.remove('active');
    }
  }
};

// JSON Fetch Helper
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

// 🗺️ Projects Loader + Filters
async function loadProjects() {
  const data = await fetchJSON('data/projects.json');
  const container = document.getElementById('projects-grid');
  if (!data) {
    container.innerHTML = '<p class="loading-text">Projects temporarily unavailable.</p>';
    return;
  }

  const renderProjects = (filter = 'all') => {
    container.innerHTML = data.map(p => {
      if (filter !== 'all' && p.domain !== filter) return '';
      return `
        <article class="card project-card" data-domain="${p.domain}">
          <h3>${p.title}</h3>
          <p class="card-meta">${p.tools.join(' • ')}</p>
          <p>${p.description}</p>
          <div style="display:flex; gap:1rem; flex-wrap:wrap; margin-top:0.5rem;">
            ${p.public_link ? `<a href="${p.public_link}" target="_blank" rel="noopener" class="card-link">Public Demo ↗</a>` : ''}
            ${p.request_access ? `<a href="${p.request_access}" target="_blank" rel="noopener" class="card-link">Request Access ↗</a>` : ''}
          </div>
        </article>
      `;
    }).join('');
  };

  renderProjects();

  document.querySelector('.filters')?.addEventListener('click', e => {
    if (!e.target.classList.contains('filter-btn')) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderProjects(e.target.dataset.filter);
  });
}

// ⚓ Translation Loader
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
      ${t.excerpt ? `<blockquote style="border-left:3px solid var(--ubuntu-orange); padding-left:0.75rem; margin:0.75rem 0; font-style:italic; color:var(--ubuntu-text); background:var(--ubuntu-light); padding:0.5rem 0.75rem; border-radius:4px;">“${t.excerpt}”</blockquote>` : ''}
      ${t.request_access ? `<a href="${t.request_access}" target="_blank" rel="noopener" class="card-link">Request Sample ↗</a>` : ''}
    </article>
  `).join('');
}

//  Timeline Loader
async function loadTimeline() {
  const data = await fetchJSON('data/timeline.json');
  const container = document.getElementById('timeline-container');
  if (!data) {
    container.innerHTML = '<p class="loading-text">Trajectory timeline loading...</p>';
    return;
  }

  container.innerHTML = data.map(item => `
    <div class="timeline-item">
      <div class="timeline-marker">${item.icon}</div>
      <div class="timeline-content">
        <span class="timeline-date">${item.date}</span>
        <span class="timeline-tag">${item.type === 'education' ? ' Education' : '💼 Experience'}</span>
        <h3 style="font-size:1.05rem; margin:0.25rem 0; font-weight:500;">${item.title}</h3>
        <p style="font-size:0.9rem; margin:0; line-height:1.5;">${item.description}</p>
      </div>
    </div>
  `).join('');
}

// 🌐 Languages Loader
async function loadLanguages() {
  const data = await fetchJSON('data/languages.json');
  const container = document.getElementById('languages-grid');
  if (!data) {
    container.innerHTML = '<p class="loading-text">Languages loading...</p>';
    return;
  }

  container.innerHTML = data.map(l => `
    <article class="card language-card">
      <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.5rem;">
        <span style="font-size:1.5rem;">${l.icon}</span>
        <h3 style="margin:0; font-size:1.1rem;">${l.lang}</h3>
      </div>
      <span style="display:inline-block; background:var(--ubuntu-orange); color:white; padding:0.2rem 0.6rem; border-radius:12px; font-size:0.8rem; font-weight:500; margin-bottom:0.5rem;">${l.level}</span>
      <p style="margin:0; font-size:0.9rem; color:var(--ubuntu-text); line-height:1.4;">${l.details}</p>
    </article>
  `).join('');
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Bind sidebar navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.target));
  });

  // Load all data sections
  loadProjects();
  loadTranslations();
  loadTimeline();
  loadLanguages();

  // Reset mobile menu on window resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      document.querySelector('.sidebar').classList.remove('open');
      document.querySelector('.sidebar-overlay').classList.remove('active');
    }
  });
});
