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
