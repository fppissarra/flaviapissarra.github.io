document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('data.json');
    const data = await response.json();

    document.getElementById('header-title').textContent = data.header.title;
    document.getElementById('header-subtitle').textContent = data.header.subtitle;
    document.getElementById('profile-img').src = data.header.avatar_url;

    const menu = document.getElementById('menu-hub');
    Object.keys(data).forEach(key => {
        if (key === 'header') return;

        const section = data[key];
        const container = document.createElement('div');
        container.innerHTML = `<button class="dropdown-header">${section.title} <span>▼</span></button>
                               <div class="dropdown-content" style="display:none;"></div>`;
        
        const content = container.querySelector('.dropdown-content');
        section.items.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.textContent = item.name;
            btn.onclick = () => navigate(item);
            content.appendChild(btn);
        });

        container.querySelector('.dropdown-header').onclick = function() {
            const isHidden = content.style.display === 'none';
            content.style.display = isHidden ? 'block' : 'none';
            this.querySelector('span').textContent = isHidden ? '▲' : '▼';
        };
        menu.appendChild(container);
    });
});

function navigate(item) {
    if (item.url.startsWith('http')) return window.open(item.url, '_blank');
    
    const wrapper = document.querySelector('.app-wrapper');
    const panel = document.querySelector('.display-panel');
    const content = document.getElementById('view-content');
    
    wrapper.classList.add('project-mode');
    panel.style.display = 'flex';
    document.getElementById('view-title').textContent = item.name;

    if (item.url !== '#') {
        content.innerHTML = `<iframe src="${item.url}"></iframe>`;
    } else {
        content.innerHTML = `<p style="padding:20px;">Em desenvolvimento.</p>`;
    }

    if (!document.querySelector('.back-btn')) {
        const back = document.createElement('button');
        back.className = 'back-btn';
        back.textContent = '← VOLTAR';
        back.onclick = () => {
            wrapper.classList.remove('project-mode');
            panel.style.display = 'none';
            back.remove();
        };
        document.querySelector('.profile-header').prepend(back);
    }
}
