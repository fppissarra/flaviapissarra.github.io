function toggleLanguage() {
    const btn = document.getElementById('lang-btn');
    // Verifica qual é o idioma atual baseado no texto do botão
    const currentLang = btn.innerText === 'Português' ? 'en' : 'pt';
    
    if (currentLang === 'en') {
        btn.innerText = 'Português';
        // Procura e traduz todos os elementos que possuem o atributo data-en
        document.querySelectorAll('[data-en]').forEach(el => {
            el.innerText = el.getAttribute('data-en');
        });
    } else {
        btn.innerText = 'English';
        // Procura e traduz todos os elementos que possuem o atributo data-pt
        document.querySelectorAll('[data-pt]').forEach(el => {
            el.innerText = el.getAttribute('data-pt');
        });
    }
}
