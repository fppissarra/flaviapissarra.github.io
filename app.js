function openColumn(category, itemId = null) {
    const wrapper = document.getElementById('app-wrapper');
    
    // Limpa colunas dinâmicas (mantém apenas o menu lateral - primeiro filho)
    while (wrapper.children.length > 1) {
        wrapper.removeChild(wrapper.lastChild);
    }

    if (itemId) {
        // Se for o segundo nível, renderiza o item escolhido
        const item = portfolioData[category].items.find(i => i.id === itemId);
        createPanel(item.title, item.content);
    } else {
        // Se for o primeiro nível (categoria), renderiza a lista de itens
        const cat = portfolioData[category];
        const panel = createPanel(cat.title, cat.items.map(i => 
            `<button onclick="openColumn('${category}', '${i.id}')">${i.title}</button>`
        ).join('<br>'));
    }
}

function createPanel(title, content) {
    const panel = document.createElement('div');
    panel.className = 'panel dynamic-panel';
    panel.innerHTML = `<h3>${title}</h3><hr><p>${content}</p>`;
    document.getElementById('app-wrapper').appendChild(panel);
    return panel;
}
