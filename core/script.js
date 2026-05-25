function openPanel(panelId) {
  document.querySelectorAll('.content-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  const activeSection = document.getElementById(`panel-${panelId}`);
  if (activeSection) activeSection.classList.add('active');

  if (event && event.target) {
    event.target.classList.add('active');
  }
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'pt',
    includedLanguages: 'en,pt',
    autoDisplay: false
  }, 'google_translate_element');
}

const googleTranslateScript = document.createElement('script');
googleTranslateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
document.body.appendChild(googleTranslateScript);

function changeLanguage(lang) {
  const translateCombo = document.querySelector('.goog-te-combo');
  if (!translateCombo) {
    console.warn('O tradutor ainda não carregou.');
    return;
  }

  translateCombo.value = lang;
  translateCombo.dispatchEvent(new Event('change'));
}
