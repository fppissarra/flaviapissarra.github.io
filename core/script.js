// --- 1. GERENCIAMENTO DE NAVEGAÇÃO E PAINÉIS ---

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

// --- 2. TRADUÇÃO SILENCIOSA ("POR BAIXO DOS PANOS") ---

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
    { 
      pageLanguage: 'pt', 
      includedLanguages: 'en,pt,es,ko,ja', // Todos os 5 idiomas ativados aqui
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

// --- 3. INICIALIZAÇÃO DE EVENTOS ---

document.addEventListener('DOMContentLoaded', () => {
  loadGoogleTranslate();

  const panelMap = {
    'inteligência de negócios': 'bi',
    'business intelligence': 'bi',
    'tradução': 'traducao',
    'sobre mim': 'sobre'
  };

  // cliques dos painéis do menu lateral
  document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
      const text = button.textContent.trim().toLowerCase();
      const panelId = panelMap[text];
      if (panelId) openPanel(panelId, button);
    });
  });

  // cliques no seletor dinâmico de idiomas (PTBR / ENG / ESP / KOR / JAP)
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const langSelected = button.textContent.trim().toLowerCase();
      
      let targetLang = 'pt';
      
      if (langSelected.includes('en')) {
        targetLang = 'en'; // ENG
      } else if (langSelected.includes('es')) {
        targetLang = 'es'; // ESP
      } else if (langSelected.includes('ko')) {
        targetLang = 'ko'; // KOR
      } else if (langSelected.includes('ja')) {
        targetLang = 'ja'; // JAP
      } else if (langSelected.includes('pt')) {
        targetLang = 'pt'; // PTBR
      }

      changeLanguage(targetLang);
    });
  });

  // ativa a primeira aba configurada automaticamente ao iniciar
  const firstActiveButton = document.querySelector('.nav-btn.active');
  if (firstActiveButton) {
    const text = firstActiveButton.textContent.trim().toLowerCase();
    const panelId = panelMap[text];
    if (panelId) openPanel(panelId, firstActiveButton);
  }
});
