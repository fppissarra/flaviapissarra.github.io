async function loadData() {
    try {
        const response = await fetch('info.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}

async function openPanel(panelId) {
    const data = await loadData();
    const displayArea = document.getElementById('display-area');
    
    const panels = document.querySelectorAll('.content-panel');
    panels.forEach(panel => panel.classList.remove('active'));

    let target = document.getElementById(panelId);
    
    if (target && data[panelId]) {
        target.querySelector('h2').textContent = data[panelId].titulo;
        target.querySelector('p').textContent = data[panelId].texto;
        target.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    openPanel('bi');
});
