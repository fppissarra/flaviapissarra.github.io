function toggleLanguage() {
    const currentLang = localStorage.getItem('lang') === 'pt' ? 'en' : 'pt';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
}

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    
    elements.forEach(el => {
        const translation = el.getAttribute(`data-${lang}`);
        if (translation) {
            el.innerText = translation;
        }
    });
    
    const btn = document.getElementById('lang-btn');
    if (btn) {
        btn.innerText = lang === 'en' ? 'Português' : 'English';
    }
    
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    applyLanguage(savedLang);
});
