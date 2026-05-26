function openColumn(category) {
    const wrapper = document.getElementById('app-wrapper');
    const menu = wrapper.querySelector('.menu-panel');
    
    // Remove qualquer painel de conteúdo anterior
    const existing = wrapper.querySelectorAll('.content-panel');
    existing.forEach(p => p.remove());

    // Cria o novo painel
    const data = portfolioData[category];
    if (data) {
        const panel = document.createElement('div');
        panel.className = 'content-panel';
        panel.innerHTML = `<h3>${data.title}</h3><p>${data.content}</p>`;
        wrapper.appendChild(panel);
    }
}
