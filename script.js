function toggleLanguage() {
    // Alterna entre 'pt' e 'en'
    const currentLang = localStorage.getItem('lang') === 'en' ? 'pt' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
}

function applyLanguage(lang) {
    // Procura todos os elementos que têm o atributo data-pt
    const elements = document.querySelectorAll('[data-pt]');
    
    elements.forEach(el => {
        // Altera o texto baseado no idioma selecionado
        const translation = el.getAttribute(`data-${lang}`);
        if (translation) {
            el.innerText = translation;
        }
    });
    
    // Atualiza o texto do botão de alternância
    const btn = document.getElementById('lang-btn');
    if (btn) {
        btn.innerText = lang === 'pt' ? 'English' : 'Português';
    }
}

// Quando a página carrega, aplica o idioma salvo ou padrão (pt)
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'pt';
    applyLanguage(savedLang);
});
