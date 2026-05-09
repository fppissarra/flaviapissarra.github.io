// Para adicionar mais línguas depois, lembrar de incluir aqui usando o modelo data-es, data-jp, etc no HTML
const langCycle = ['pt', 'en']; 
const labels = { pt: 'EN-UK 🇬🇧', en: 'PT-BR 🇧🇷' };

function updateContent(lang) {
    document.querySelectorAll('[data-pt]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`) || el.getAttribute('data-pt');
        el.innerHTML = text;
    });
    
    const btn = document.getElementById('langBtn');
    if (btn) btn.innerText = labels[lang];
}

function toggleLang() {
    let currentIndex = langCycle.indexOf(localStorage.getItem('prefLang') || 'pt');
    let nextIndex = (currentIndex + 1) % langCycle.length;
    let newLang = langCycle[nextIndex];

    localStorage.setItem('prefLang', newLang);
    updateContent(newLang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('prefLang') || 'pt';
    updateContent(savedLang);
    document.body.style.opacity = '1';
});
