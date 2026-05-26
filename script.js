document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        // Header
        document.getElementById('header-title').textContent = data.header.title;
        document.getElementById('header-subtitle').textContent = data.header.subtitle;
        document.getElementById('profile-img').src = data.header.avatar_url;

        const menu = document.getElementById('menu-hub');
        menu.innerHTML = '';

        // Renderização com Dropdowns
        Object.keys(data).forEach(key => {
            if (key === 'header') return;

            const section = data[key];
            const sectionContainer = document.createElement('div');
            sectionContainer.className = 'dropdown-section';

            sectionContainer.innerHTML = `
                <button class="dropdown-header">
                    ${section.title} <span>▼</span>
                </button>
                <div class="dropdown-content" style="display:none;"></div>
            `;

            const contentDiv = sectionContainer.querySelector('.dropdown-content');
            section.items.forEach(item => {
                const btn = document.createElement('button');
                btn.className = 'btn';
                btn.textContent = item.name;
                btn.onclick = () => handleNavigation(item);
                contentDiv.appendChild(btn);
            });

            sectionContainer.querySelector('.dropdown-header').onclick = function() {
                const content = this.nextElementSibling;
                const isOpen = content.style.display !== 'none';
                content.style.display = isOpen ? 'none' : 'block';
                this.querySelector('span').textContent = isOpen ? '▼' : '▲';
            };

            menu.appendChild(sectionContainer);
        });
    } catch (err) {
        console.error("Erro ao carregar dados:", err);
    }
});

function handleNavigation(item) {
    // Links externos abrem em nova aba e não alteram layout
    if (item.url.startsWith('http')) {
        window.open(item.url, '_blank');
        return;
    }

    const wrapper = document.querySelector('.app-wrapper');
    const contentEl = document.getElementById('view-content');
    const titleEl = document.getElementById('view-title');

    wrapper.classList.add('project-mode');
    titleEl.textContent = item.name;

    // Adiciona botão de voltar se não existir
    if (!document.querySelector('.back-btn')) {
        const back = document.createElement('button');
        back.className = 'back-btn';
        back.textContent = '← VOLTAR';
        back.onclick = resetLayout;
        document.querySelector('.profile-header').prepend(back);
    }

    // Carrega conteúdo (placeholder ou iframe)
    if (item.url !== '#') {
        contentEl.innerHTML = `<iframe src="${item.url}" title="${item.name}"></iframe>`;
    } else {
        contentEl.innerHTML = `<p style="padding:20px; color:var(--text-muted);">Conteúdo em desenvolvimento.</p>`;
    }
}

function resetLayout() {
    const wrapper = document.querySelector('.app-wrapper');
    wrapper.classList.remove('project-mode');
    document.getElementById('view-content').innerHTML = '';
    document.getElementById('view-title').textContent = '';
    const back = document.querySelector('.back-btn');
    if (back) back.remove();
}
