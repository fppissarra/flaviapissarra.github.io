function openLevel2(type) {
    const wrapper = document.getElementById('app-wrapper');
    
    // Remove painéis antigos de nível 2 se existirem
    const existing = document.querySelectorAll('.dynamic-panel');
    existing.forEach(p => p.remove());

    // Cria o novo painel
    const panel = document.createElement('div');
    panel.className = 'panel dynamic-panel';
    panel.innerHTML = `<h3>${type.toUpperCase()}</h3><p>Conteúdo detalhado...</p>`;
    
    wrapper.appendChild(panel);
}
