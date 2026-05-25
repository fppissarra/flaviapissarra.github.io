const localTranslations = {
  en: {
    headline: "Data Scientist & Translator",
    navBi: "Business Intelligence",
    navTrad: "Translation",
    navAbout: "About me",
    titleBi: "Business Intelligence & Analytics",
    introBi: "Data exploration, feature engineering, and strategic dashboard architecture.",
    titleTrad: "Translation & Localization",
    introTrad: "Technical translation, software localization, and cross-cultural versioning.",
    titleAbout: "About me",
    introAbout: "Discover my professional background, technical stack, and academic trajectory."
  },
  pt: {
    headline: "Cientista de Dados e Tradutora",
    navBi: "Inteligência de Negócios",
    navTrad: "Tradução",
    navAbout: "Sobre mim",
    titleBi: "Inteligência de Negócios e Análise",
    introBi: "Exploração de dados, engenharia de recursos e construção de dashboards estratégicos.",
    titleTrad: "Tradução e Localização",
    introTrad: "Tradução técnica, localização de software e versionamento multicultural.",
    titleAbout: "Sobre mim",
    introAbout: "Descubra minha trajetória profissional, ferramentas técnicas e jornada acadêmica."
  },
  es: {
    headline: "Científica de Datos y Traductora",
    navBi: "Inteligencia de Negocios",
    navTrad: "Traducción",
    navAbout: "Sobre mí",
    titleBi: "Inteligencia de Negocios y Analítica",
    introBi: "Exploración de datos, ingeniería de características y arquitectura de tableros estratégicos.",
    titleTrad: "Traducción y Localización",
    introTrad: "Traducción técnica, localización de software y versiones interculturales.",
    titleAbout: "Sobre mí",
    introAbout: "Descubre mi trayectoria profesional, herramientas técnicas y trayectoria académica."
  },
  ko: {
    headline: "데이터 과학자 및 번역가",
    navBi: "비즈니스 인텔리전스",
    navTrad: "번역",
    navAbout: "소개",
    titleBi: "비즈니스 인텔리전스 및 분석",
    introBi: "데이터 탐색, 피처 엔지니어링 및 전략적 대시보드 아키텍처.",
    titleTrad: "번역 및 현지화",
    introTrad: "기술 번역, 소프트웨어 현지화 및 다문화 버전 관리.",
    titleAbout: "소개",
    introAbout: "나의 전문적인 배경, 기술 스택 및 학업 여정을 알아보세요."
  },
  ja: {
    headline: "データサイエンティスト & 翻訳者",
    navBi: "ビジネスインテリジェンス",
    navTrad: "翻訳",
    navAbout: "プロフィール",
    titleBi: "ビジネスインテリジェンス & アナリティクス",
    introBi: "データ探索, フィーチャーエンジニアリング, および戦略的ダッシュボードアーキテクチャ.",
    titleTrad: "翻訳 & ローカライズ",
    introTrad: "技術翻訳, ソフトウェアローカライズ, および異文化間バージョン管理.",
    titleAbout: "プロフィール",
    introAbout: "私の専門的な背景、技術スタック、および学術的な軌跡をご覧ください。"
  }
};

function openPanel(panelId, clickedButton) {
  document.querySelectorAll('.content-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  const targetPanel = document.getElementById(`panel-${panelId}`);
  if (targetPanel) targetPanel.classList.add('active');
  if (clickedButton) clickedButton.classList.add('active');
}

function applyLocalFallback(langCode) {
  const data = localTranslations[langCode];
  if (!data) return;

  document.querySelector('.profile-headline').textContent = data.headline;
  document.querySelector('[data-panel="bi"]').textContent = data.navBi;
  document.querySelector('[data-panel="translation"]').textContent = data.navTrad;
  document.querySelector('[data-panel="about"]').textContent = data.navAbout;
  
  document.querySelector('#panel-bi .section-title').textContent = data.titleBi;
  document.querySelector('#panel-bi .section-intro').textContent = data.introBi;
  
  document.querySelector('#panel-translation .section-title').textContent = data.titleTrad;
  document.querySelector('#panel-translation .section-intro').textContent = data.introTrad;
  
  document.querySelector('#panel-about .section-title').textContent = data.titleAbout;
  document.querySelector('#panel-about .section-intro').textContent = data.introAbout;
}

function triggerGoogleTranslate(langCode) {
  localStorage.setItem('user-portfolio-lang', langCode);
  const selectElement = document.querySelector('.goog-te-combo');
  
  if (selectElement) {
    selectElement.value = langCode;
    selectElement.dispatchEvent(new Event('change'));
  } else {
    if (window.location.protocol === 'file:') {
      applyLocalFallback(langCode);
    }
  }
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en', includedLanguages: 'en,pt,es,ko,ja', autoDisplay: false },
    'google_translate_element'
  );
  
  setTimeout(() => {
    const savedLang = localStorage.getItem('user-portfolio-lang') || 'en';
    if (savedLang !== 'en') triggerGoogleTranslate(savedLang);
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
    if (window.location.protocol === 'file:' && savedLang !== 'en') {
      applyLocalFallback(savedLang);
    }
  }

  document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
      const panelId = button.getAttribute('data-panel');
      if (panelId) openPanel(panelId, button);
    });
  });

  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      triggerGoogleTranslate(e.target.value);
    });
  }
});
