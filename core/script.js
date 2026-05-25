function setActiveButton(clickedButton) {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

function openPanel(panelId, clickedButton = null) {
  document.querySelectorAll('.content-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  const targetPanel = document.getElementById(`panel-${panelId}`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  setActiveButton(clickedButton);
}

function changeLanguage(lang) {
  const combo = document.querySelector('.goog-te-combo');
  if (!combo) {
    console.warn('O Google Tradutor ainda não carregou.');
    return;
  }

  combo.value = lang;
  combo.dispatchEvent(new Event('change'));
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'pt',
      includedLanguages: 'en,pt',
      autoDisplay: false
    },
    'google_translate_element'
  );
}

function loadGoogleTranslate() {
  if (document.getElementById('google-translate-script')) return;

  const script = document.createElement('script');
  script.id = 'google-translate-script';
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
  loadGoogleTranslate();

  const firstActiveButton = document.querySelector('.nav-btn.active');
  if (firstActiveButton) {
    const text = firstActiveButton.textContent.trim().toLowerCase();
    const map = {
      'business intelligence': 'bi',
      'tradução': 'traducao',
      'sobre mim': 'sobre'
    };

    const panelId = map[text];
    if (panelId) {
      openPanel(panelId, firstActiveButton);
    }
  }
});
