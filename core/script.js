// =========================================================================
// 1. SISTEMA DE TRADUÇÃO AUTOMÁTICA POR IA (GOOGLE TRANSLATE)
// =========================================================================

// Cria dinamicamente o elemento nativo do Google Translate oculto na página
const googleTranslateScript = document.createElement('script');
googleTranslateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
document.body.appendChild(googleTranslateScript);

// Inicializa o tradutor configurando o idioma padrão do seu site como Português
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'pt',
        includedLanguages: 'en,pt',
        autoDisplay: false
    }, 'google_translate_element');
}

// Controle do estado do botão do seu layout perolado
let isEnglish = false;

function toggleLanguage() {
    // Captura o seletor interno que o Google cria para trocar os idiomas
    const translateCombo = document.querySelector('.goog-te-combo');
    
    if (!translateCombo) {
        console.warn("A IA de tradução ainda está carregando... Tente novamente em um segundo.");
        return;
    }

    if (!isEnglish) {
        // Altera para Inglês e dispara o evento de mudança para a IA agir
        translateCombo.value = 'en';
        isEnglish = true;
    } else {
        // Volta para o Português original
        translateCombo.value = 'pt';
        isEnglish = false;
    }

    // Dispara o evento que avisa o navegador para a IA traduzir a tela instantaneamente
    translateCombo.dispatchEvent(new Event('change'));
}


// =========================================================================
// 2. FUNÇÃO SPA: ALTERNAR ENTRE AS ABAS SEM RECARREGAR A PÁGINA
// =========================================================================
function openPanel(panelId) {
    const sections = document.querySelectorAll('.panel-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const buttons = document.querySelectorAll('.menu-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeSection = document.getElementById(`panel-${panelId}`);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    const clickedButton = Array.from(buttons).find(btn => {
        const clickAttr = btn.getAttribute('onclick');
        return clickAttr && clickAttr.includes(panelId);
    });
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}
