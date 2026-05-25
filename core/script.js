function setActiveButton(clickedButton) {
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  if (clickedButton) clickedButton.classList.add('active');
}

function openPanel(panelId, clickedButton = null) {
  document.querySelectorAll('.content-panel').forEach(panel => panel.classList.remove('active'));

  const targetPanel = document.getElementById(`panel-${panelId}`);
  if (targetPanel) {
    targetPanel.classList.add('active');
    targetPanel.scrollTop = 0; 
  }
  setActiveButton(clickedButton);
}

// tradução silenciosa
function changeLanguage(lang) {
  const combo = document.querySelector('.goog-te-combo');
  if (!combo) {
    console.warn('O Google Tradutor está carregando em background...');
    return;
  }
  combo.value = lang;
  combo.dispatchEvent(new Event('change'));
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'pt', includedLanguages: 'en,pt', autoDisplay: false },
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

  const panelMap = {
    'inteligência de negócios': 'bi',
    'business intelligence': 'bi',
    'tradução': 'traducao',
    'sobre mim': 'sobre'
  };

  // cliques nos painéis
  document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
      const text = button.textContent.trim().toLowerCase();
      const panelId = panelMap[text];
      if (panelId) openPanel(panelId, button);
    });
  });

  // cliques nos seletores de idioma customizados
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const langSelected = button.textContent.trim().toLowerCase(); // 'en' ou 'pt'
      
      // mapeia para o padrão esperado pelo Google Combobox ('en' ou 'pt')
      const targetLang = langSelected.includes('pt') ? 'pt' : 'en';
      changeLanguage(targetLang);
    });
  });

  // inicializa o primeiro painel ativo
  const firstActiveButton = document.querySelector('.nav-btn.active');
  if (firstActiveButton) {
    const text = firstActiveButton.textContent.trim().toLowerCase();
    const panelId = panelMap[text];
    if (panelId) openPanel(panelId, firstActiveButton);
  }
});
