function openPanel(panelId) {
    // Esconde todos os painéis
    const panels = document.querySelectorAll('.content-panel');
    panels.forEach(panel => {
        panel.style.display = 'none';
    });

    // Mostra o painel selecionado
    const selectedPanel = document.getElementById(panelId);
    if (selectedPanel) {
        selectedPanel.style.display = 'block';
    }
}
