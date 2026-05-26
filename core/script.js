function openPanel(panelId, clickedButton) {
  document.querySelectorAll('.content-panel, .nav-btn').forEach(el => el.classList.remove('active'));
  
  const targetPanel = document.getElementById(`panel-${panelId}`);
  if (targetPanel) targetPanel.classList.add('active');
  if (clickedButton) clickedButton.classList.add('active');
}

function renderCards(panelId, projectsArray) {
  const gridElement = document.querySelector(`#panel-${panelId} .projects-grid`);
  if (!gridElement) return;

  gridElement.innerHTML = '';
  if (!projectsArray || projectsArray.length === 0) return;
  
  projectsArray.forEach(proj => {
    const cardContent = `
      <div class="project-card-inner" style="display: grid; grid-template-columns: 120px 1fr; gap: 20px; width: 100%;">
        <div class="project-date" style="font-weight: 700; color: var(--text-muted); font-size: 0.9rem; padding-top: 2px;">
          ${proj.date || ""}
        </div>
        <div class="project-details">
          <h3 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; margin-bottom: 6px; color: var(--text-dark); letter-spacing: -0.2px;">
            ${proj.title || ""}
          </h3>
          <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-muted);">${proj.desc || ""}</p>
        </div>
      </div>
    `;

    gridElement.innerHTML += (panelId === 'bi') 
      ? `<a href="https://github.com" target="_blank" class="project-card">${cardContent}</a>` 
      : `<div class="project-card">${cardContent}</div>`;
  });
}

function applyData(data) {
  const avatarImg = document.querySelector('.profile-avatar');
  if (avatarImg && data.profile_image) avatarImg.src = data.profile_image;

  document.querySelector('.profile-headline').textContent = data.headline || "";
  document.querySelector('[data-panel="bi"]').textContent = data.nav_bi || "";
  document.querySelector('[data-panel="translation"]').textContent = data.nav_translation || "";
  document.querySelector('[data-panel="about"]').textContent = data.nav_about || "";
  
  ['bi', 'translation', 'about'].forEach(id => {
    document.querySelector(`#panel-${id} .section-title`).textContent = data[`title_${id}`] || "";
    document.querySelector(`#panel-${id} .section-intro`).textContent = data[`intro_${id}`] || "";
  });

  document.getElementById('link-gh').textContent = data.link_github || "GitHub";
  document.getElementById('link-ln').textContent = data.link_linkedin || "LinkedIn";
  document.getElementById('link-em').textContent = data.link_email || "Mail me";

  renderCards('bi', data.projects_bi || []);
  renderCards('translation', data.projects_translation || []);
  renderCards('about', data.projects_about || []);
}

function fetchAndApplyLanguage(langCode) {
  localStorage.setItem('user-portfolio-lang', langCode);

  /* rota fixa pro json */
  fetch(`https://github.io{langCode}.json`)
    .then(response => {
      if (!response.ok) throw new Error("JSON loading failed");
      return response.json();
    })
    .then(data => applyData(data))
    .catch(error => {
      console.error("Erro crítico ao tentar carregar o arquivo online do idioma:", error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  /* inicialização master sempre em eng */
  const defaultLang = 'en';
  localStorage.setItem('user-portfolio-lang', defaultLang);
  
  const langSelect = document.getElementById('custom-lang-select');
  if (langSelect) langSelect.value = defaultLang;
  
  fetchAndApplyLanguage(defaultLang);

  document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
      const panelId = button.getAttribute('data-panel');
      if (panelId) openPanel(panelId, button);
    });
  });

  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      fetchAndApplyLanguage(e.target.value);
    });
  }
});
