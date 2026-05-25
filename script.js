function toggleLanguage() {
    const btn = document.getElementById('lang-btn');
    if (!btn) return;

    const currentLang = btn.getAttribute('data-lang') || 'en';

    if (currentLang === 'en') {
        btn.setAttribute('data-lang', 'pt');
        btn.innerText = 'English';

        document.querySelectorAll('[data-pt]').forEach(el => {
            el.innerText = el.getAttribute('data-pt');
        });
    } else {
        btn.setAttribute('data-lang', 'en');
        btn.innerText = 'Português';

        document.querySelectorAll('[data-en]').forEach(el => {
            el.innerText = el.getAttribute('data-en');
        });
    }
}
