document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        document.getElementById('header-title').textContent = data.header.title;
        document.getElementById('header-subtitle').textContent = data.header.subtitle;
        document.getElementById('profile-img').src = data.header.avatar_url;

        const menu = document.getElementById('menu-hub');
        menu.innerHTML = '';

        Object.keys(data).forEach(key => {
            if (key === 'header') return;

            const section = data[key];
            const sectionDiv = document.createElement('div');
            sectionDiv.innerHTML = `<h3 style="margin-top:25px; color:var(--accent); font-size:0.75rem;">${section.title}</h3>`;

            section.items.forEach(item => {
                const btn = document.createElement('button');
                btn.className = 'btn';
                btn.textContent = item.name;
                btn.onclick = () => handleNavigation(item);
                sectionDiv.appendChild(btn);
            });
            menu.appendChild(sectionDiv);
        });
    } catch (err) {
        console.error("Erro ao carregar dados:", err);
    }
});

function handleNavigation(item) {
    const titleEl = document.getElementById('view-title');
    const contentEl = document.getElementById('view-content');

    titleEl.textContent = item.name;

    // se link externo, abre em nova aba
    if (item.url.startsWith('http')) {
        window.open(item.url, '_blank');
        contentEl.innerHTML = `<p style="color:var(--text-muted);">Redirecionando para ${item.name}...</p>`;
    } 
    // se link interno, carrega no iframe
    else if (item.url !== '#') {
        contentEl.innerHTML = `<iframe src="${item.url}" title="${item.name}"></iframe>`;
    } 
    // placeholder
    else {
        contentEl.innerHTML = `<p style="color:var(--text-muted);">Conteúdo em desenvolvimento.</p>`;
    }
}

// Função para carregar conteúdo e transicionar o layout
function handleNavigation(item) {
    const wrapper = document.querySelector('.app-wrapper');
    const contentEl = document.getElementById('view-content');
    const titleEl = document.getElementById('view-title');

    // Se for link externo, abre em nova aba e NÃO altera layout
    if (item.url.startsWith('http')) {
        window.open(item.url, '_blank');
        return;
    }

    // Se for projeto, ativa o modo transição
    wrapper.classList.add('project-mode');
    titleEl.textContent = item.name;
    
    // Adiciona botão de voltar se não existir
    if (!document.querySelector('.back-btn')) {
        const back = document.createElement('button');
        back.className = 'back-btn';
        back.textContent = '← VOLTAR';
        back.onclick = resetLayout;
        document.querySelector('.profile-panel').prepend(back);
    }

    contentEl.innerHTML = `<iframe src="${item.url}" title="${item.name}"></iframe>`;
}

// Função para resetar o layout
function resetLayout() {
    const wrapper = document.querySelector('.app-wrapper');
    wrapper.classList.remove('project-mode');
    document.getElementById('view-content').innerHTML = '';
    document.getElementById('view-title').textContent = '';
    const back = document.querySelector('.back-btn');
    if (back) back.remove();
}
