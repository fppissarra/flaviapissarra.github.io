// FUNÇÃO SPA: ALTERNAR ENTRE AS ABAS SEM RECARREGAR A PÁGINA
function openPanel(panelId) {
    // 1. Remove a classe 'active' de todas as seções de conteúdo
    const sections = document.querySelectorAll('.panel-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Remove a classe 'active' de todos os botões do menu lateral
    const buttons = document.querySelectorAll('.menu-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // 3. Ativa a seção correspondente ao ID clicado
    const activeSection = document.getElementById(`panel-${panelId}`);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // 4. Adiciona a classe ativa ao botão que disparou o evento
    const clickedButton = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(panelId));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

function toggleLanguage() {
    console.log("Mecanismo pronto para receber o dicionário.");
}
