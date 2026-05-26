document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        // Header
        document.getElementById('header-title').textContent = data.header.title;
        document.getElementById('header-subtitle').textContent = data.header.subtitle;
        document.getElementById('profile-img').src = data.header.avatar_url;

        // Menu
        const menu = document.getElementById('menu-hub');
        menu.innerHTML = '';

        Object.keys(data).forEach(key => {
            if (key === 'header') return;

            const section = data[key];
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'menu-section';
            sectionDiv.innerHTML = `<h4 class="section-title">${section.title}</h4>`;

            section.items.forEach(item => {
                const btn = document.createElement('button');
                btn.className = 'btn';
                btn.textContent = item.name;
                btn.onclick = () => {
                    if (item.url.startsWith('http')) {
                        window.open(item.url, '_blank');
                    } else {
                        document.getElementById('frame-content').src = item.url;
                    }
                };
                sectionDiv.appendChild(btn);
            });
            menu.appendChild(sectionDiv);
        });
    } catch (err) {
        console.error("Erro ao carregar dados:", err);
    }
});
