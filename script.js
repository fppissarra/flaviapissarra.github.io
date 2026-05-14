// script

function toggleLanguage() {
    const currentLang = localStorage.getItem('lang') === 'en' ? 'pt' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
}

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-pt]');
    
    elements.forEach(el => {
        const translation = el.getAttribute(`data-${lang}`);
        if (translation) {
            el.innerText = translation;
        }
    });
    
    const btn = document.getElementById('lang-btn');
    if (btn) {
        btn.innerText = lang === 'pt' ? 'English' : 'Português';
    }
    
    document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'pt';
    applyLanguage(savedLang);
});
