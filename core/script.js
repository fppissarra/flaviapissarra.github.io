function openPanel(panelId, clickedButton) {
  document.querySelectorAll('.content-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  const targetPanel = document.getElementById(`panel-${panelId}`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

function triggerGoogleTranslate(langCode) {
  const selectElement = document.querySelector('.goog-te-combo');
  if (selectElement) {
    selectElement.value = langCode;
    selectElement.dispatchEvent(new Event('change'));
  } else {
    console.error('Motor do Google Translate ainda não inicializou na página.');
  }
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

  document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
      const panelId = button.getAttribute('data-panel');
      if (panelId) openPanel(panelId, button);
    });
  });

  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const langCode = button.getAttribute('data-lang');
      if (langCode) triggerGoogleTranslate(langCode);
    });
  });
});
