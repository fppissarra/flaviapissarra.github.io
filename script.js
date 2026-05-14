/**
 * Alterna entre Português e Inglês e salva a preferência no navegador
 */
function toggleLanguage() {
    // Verifica qual é o idioma atual salvo e inverte
    const currentLang = localStorage.getItem('lang') === 'en' ? 'pt' : 'en';
    
    // Salva a nova escolha no LocalStorage para persistir entre páginas
    localStorage.setItem('lang', currentLang);
    
    // Aplica as mudanças visualmente
    applyLanguage(currentLang);
}

/**
 * Aplica os textos traduzidos a todos os elementos com atributos data-pt/data-en
 */
function applyLanguage(lang) {
    // Seleciona todos os elementos que possuem o atributo de tradução
    const elements = document.querySelectorAll('[data-pt]');
    
    elements.forEach(el => {
        const translation = el.getAttribute(`data-${lang}`);
        if (translation) {
            el.innerText = translation;
        }
    });
    
    // Atualiza o texto do botão de idioma (mostra a opção oposta à atual)
    const btn = document.getElementById('lang-btn');
    if (btn) {
        btn.innerText = lang === 'pt' ? 'English' : 'Português';
    }
    
    // Atualiza a meta-tag de idioma do documento para acessibilidade
    document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';
}

/**
 * Executa automaticamente ao carregar qualquer página do site
 */
document.addEventListener('DOMContentLoaded', () => {
    // Recupera o idioma salvo ou define Português como padrão
    const savedLang = localStorage.getItem('lang') || 'pt';
    applyLanguage(savedLang);
});
