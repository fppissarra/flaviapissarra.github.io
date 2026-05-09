function updateContent(lang) {
    // Busca todos os elementos que possuem a tradução definida
    document.querySelectorAll('[data-pt]').forEach(el => {
        const text = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-pt');
        el.innerHTML = text;
    });
    
    // Atualiza o texto do botão de idioma
    const btn = document.getElementById('langBtn');
    if (btn) btn.innerText = lang === 'en' ? 'PT-BR 🇧🇷' : 'EN-UK 🇬🇧';
}

function toggleLang() {
    const newLang = localStorage.getItem('prefLang') === 'pt' ? 'en' : 'pt';
    localStorage.setItem('prefLang', newLang);
    updateContent(newLang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('prefLang') || 'pt';
    updateContent(savedLang);
    // Mostra o site suavemente após carregar o idioma correto
    document.body.style.opacity = '1';
});
