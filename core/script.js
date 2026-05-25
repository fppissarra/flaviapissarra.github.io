// --- 1. GERENCIAMENTO DE NAVEGAÇÃO E PAINÉIS ---

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

  // Procura pelo ID estruturado como 'panel-bi', 'panel-traducao', etc.
  const targetPanel = document.getElementById(`panel-${panelId}`);
  if (targetPanel) {
    targetPanel.classList.add('active');
    // Garante que o conteúdo role para o topo ao mudar de aba
    targetPanel.scrollTop = 0; 
  }

  setActiveButton(clickedButton);
}

// --- 2. INTEGRAÇÃO COM GOOGLE TRADUTOR ---

function changeLanguage(lang) {
  const combo = document.querySelector('.goog-te-combo');
  if (!combo) {
    console.warn('O Google Tradutor ainda não carregou totalmente.');
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
    'google_translate_element' // precisa da <div id="google_translate_element"></div> oculta no seu HTML
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

// --- 3. INICIALIZAÇÃO E EVENTOS AUTOMÁTICOS ---

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o script de tradução em segundo plano
  loadGoogleTranslate();

  // Mapeamento simples de texto do botão para o ID correspondente do elemento HTML
  const panelMap = {
    'business intelligence': 'bi',
    'tradução': 'traducao',
    'sobre mim': 'sobre'
  };

  // Escuta os cliques de navegação automaticamente
  document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
      const text = button.textContent.trim().toLowerCase();
      const panelId = panelMap[text];
      if (panelId) {
        openPanel(panelId, button);
      }
    });
  });

  // Escuta os cliques no seletor de idiomas automaticamente (EN / PT)
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const langSelected = button.textContent.trim().toLowerCase(); // 'en' ou 'pt'
      changeLanguage(langSelected);
    });
  });

  // Ativa a primeira aba configurada como ativa no HTML ao carregar a página
  const firstActiveButton = document.querySelector('.nav-btn.active');
  if (firstActiveButton) {
    const text = firstActiveButton.textContent.trim().toLowerCase();
    const panelId = panelMap[text];
    if (panelId) {
      openPanel(panelId, firstActiveButton);
    }
  }
});
