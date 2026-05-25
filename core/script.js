function setActiveButton(clickedButton) {
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  if (clickedButton) clickedButton.classList.add('active');
}

function openPanel(panelId, clickedButton = null) {
  const activePanel = document.querySelector('.content-panel.active');
  const targetPanel = document.getElementById(`panel-${panelId}`);

  if (!targetPanel || activePanel === targetPanel) return;

  if (activePanel) {
    activePanel.classList.remove('show');
    setTimeout(() => {
      activePanel.classList.remove('active');
      switchPanel(targetPanel, clickedButton);
    }, 350); 
  } else {
    switchPanel(targetPanel, clickedButton);
  }
}

function switchPanel(targetPanel, clickedButton) {
  targetPanel.classList.add('active');
  targetPanel.scrollTop = 0;
  
  requestAnimationFrame(() => {
    setTimeout(() => {
      targetPanel.classList.add('show');
    }, 20);
  });

  setActiveButton(clickedButton);
}

function changeLanguage(lang) {
  const combo = document.querySelector('.goog-te-combo');
  if (!combo) {
    console.warn('Google Translation services initializing...');
    return;
  }
  combo.value = lang;
  combo.dispatchEvent(new Event('change'));
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { 
      pageLanguage: 'en', 
      includedLanguages: 'en,pt,es,ko,ja', 
      autoDisplay: false 
    },
    'google_translate_element'
  );
}

function loadGoogleTranslate() {
  if (document.getElementById('google-translate-script')) return;
  const script = document.createElement('script');
  script.id = 'google-translate-script';
  script.src = 'https://google.com';
  script.async = true;
  document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
  loadGoogleTranslate();

  document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
      const panelId = button.getAttribute('data-panel');
      if (panelId) openPanel(panelId, button);
    });
  });

  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = button.getAttribute('data-lang');
      if (targetLang) {
        changeLanguage(targetLang);
      }
    });
  });

  const firstActivePanel = document.querySelector('.content-panel.active');
  if (firstActivePanel) {
    setTimeout(() => { firstActivePanel.classList.add('show'); }, 100);
  }
});
