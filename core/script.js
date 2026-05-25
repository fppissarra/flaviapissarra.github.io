function openPanel(panelId, clickedButton) {
  document.querySelectorAll('.content-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  const targetPanel = document.getElementById(`panel-${panelId}`);
  if (targetPanel) targetPanel.classList.add('active');
  if (clickedButton) clickedButton.classList.add('active');
}

function renderCards(panelId, projectsArray) {
  const gridElement = document.querySelector(`#panel-${panelId} .projects-grid`);
  if (!gridElement) return;

  gridElement.innerHTML = '';
  
  projectsArray.forEach(proj => {
    let datePart = "";
    let titlePart = proj.title;

    if (proj.title.includes('|')) {
      const parts = proj.title.split('|');
      datePart = parts[0].trim();
      titlePart = parts[1].trim();
    }

    const cardContent = `
      <div class="project-card-inner" style="display: grid; grid-template-columns: 120px 1fr; gap: 20px; width: 100%;">
        <div class="project-date" style="font-weight: 700; color: var(--text-muted); font-size: 0.9rem; padding-top: 2px;">
          ${datePart}
        </div>
        <div class="project-details">
          <h3 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; margin-bottom: 6px; color: var(--text-dark); letter-spacing: -0.2px;">
            ${titlePart}
          </h3>
          <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-muted);">${proj.desc}</p>
        </div>
      </div>
    `;

    if (panelId === 'bi') {
      gridElement.innerHTML += `
        <a href="https://github.com" target="_blank" class="project-card">
          ${cardContent}
        </a>`;
    } else {
      gridElement.innerHTML += `
        <div class="project-card">
          ${cardContent}
        </div>`;
    }
  });
}

function fetchAndApplyLanguage(langCode) {
  localStorage.setItem('user-portfolio-lang', langCode);

  fetch(`core/lang/${langCode}.json`)
    .then(response => {
      if (!response.ok) throw new Error(`Erro ao ler arquivo core/lang/${langCode}.json`);
      return response.json();
    })
    .then(data => {
      document.querySelector('.profile-headline').textContent = data.headline;
      document.querySelector('[data-panel="bi"]').textContent = data.nav_bi;
      document.querySelector('[data-panel="translation"]').textContent = data.nav_translation;
      document.querySelector('[data-panel="about"]').textContent = data.nav_about;
      
      document.querySelector('#panel-bi .section-title').textContent = data.title_bi;
      document.querySelector('#panel-bi .section-intro').textContent = data.intro_bi;
      
      document.querySelector('#panel-translation .section-title').textContent = data.title_translation;
      document.querySelector('#panel-translation .section-intro').textContent = data.intro_translation;
      
      document.querySelector('#panel-about .section-title').textContent = data.title_about;
      document.querySelector('#panel-about .section-intro').textContent = data.intro_about;

      /* Injeta os textos traduzidos dinamicamente nos links sociais */
      document.getElementById('link-gh').textContent = data.link_github || "GitHub";
      document.getElementById('link-ln').textContent = data.link_linkedin || "LinkedIn";
      document.getElementById('link-em').textContent = data.link_email || "Mail me";

      renderCards('bi', data.projects_bi);
      renderCards('translation', data.projects_translation);
      renderCards('about', data.projects_about);
    })
    .catch(error => console.error('Erro na requisição do idioma:', error));

  const selectElement = document.querySelector('.goog-te-combo');
  if (selectElement) {
    selectElement.value = langCode;
    selectElement.dispatchEvent(new Event('focus', { bubbles: true }));
    selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    selectElement.dispatchEvent(new Event('blur', { bubbles: true }));
  }
}

function googleTranslateElementInit() {
  const langSelect = document.getElementById('custom-lang-select');
  let allowedLanguages = 'en,pt,es,ko,ja,it';
  
  if (langSelect) {
    const options = Array.from(langSelect.options).map(opt => opt.value);
    allowedLanguages = options.join(',');
  }

  new google.translate.TranslateElement(
    { pageLanguage: 'en', includedLanguages: allowedLanguages, autoDisplay: false },
    'google_translate_element'
  );
  
  setTimeout(() => {
    const savedLang = localStorage.getItem('user-portfolio-lang') || 'en';
    if (savedLang !== 'en') fetchAndApplyLanguage(savedLang);
  }, 800);
}

function loadGoogleScript() {
  if (document.getElementById('gt-script')) return;
  const script = document.createElement('script');
  script.id = 'gt-script';
  script.src = 'https://google.com';
  script.async = true;
  document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
  loadGoogleScript();

  const savedLang = localStorage.getItem('user-portfolio-lang') || 'en';
  const langSelect = document.getElementById('custom-lang-select');
  
  if (langSelect) {
    langSelect.value = savedLang;
  }
  
  fetchAndApplyLanguage(savedLang);

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
