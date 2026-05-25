function toggleLanguage() {
    const btn = document.getElementById('lang-btn');
    if (!btn) return;

    const currentText = btn.innerText.trim();
    
    const nextLang = (currentText === 'Português' || currentText === 'Português') ? 'en' : 'pt';
    
    if (nextLang === 'en') {
        btn.innerText = 'English';
        document.querySelectorAll('[data-en]').forEach(el => {
            el.innerText = el.getAttribute('data-en');
        });
    } else {
        btn.innerText = 'Português';
        document.querySelectorAll('[data-pt]').forEach(el => {
            el.innerText = el.getAttribute('data-pt');
        });
    }
}
