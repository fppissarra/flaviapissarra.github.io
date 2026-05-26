function openColumn(category) {
    const wrapper = document.getElementById('app-wrapper');
    
    // Remove apenas os painéis dinâmicos, nunca o menu (primeiro elemento)
    while (wrapper.children.length > 1) {
        wrapper.removeChild(wrapper.lastChild);
    }

    // Busca os dados no objeto portfolioData (definido em data.js)
    const catData = portfolioData[category];
    if (!catData) return;

    const panel = document.createElement('div');
    panel.className = 'panel dynamic-panel';
    
    // Renderiza itens
    let html = `<h3>${catData.title}</h3>`;
    catData.items.forEach(item => {
        html += `<button onclick="alert('${item.content}')">${item.title}</button><br>`;
    });
    
    panel.innerHTML = html;
    wrapper.appendChild(panel);
}
