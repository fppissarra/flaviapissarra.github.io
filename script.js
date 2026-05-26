document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('data.json');
    const data = await res.json();

    document.getElementById('header-title').textContent = data.header.title;
    document.getElementById('profile-img').src = data.header.avatar_url;

    const menu = document.getElementById('menu-hub');
    Object.keys(data).forEach(key => {
        if (key === 'header') return;
        
        // Adiciona título da categoria
        const title = document.createElement('div');
        title.innerHTML = `<h4 style="color:var(--accent); font-size:0.7rem; margin-top:20px;">${data[key].title}</h4>`;
        menu.appendChild(title);

        data[key].items.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.textContent = item.name;
            btn.onclick = () => {
                if (item.url.startsWith('http')) window.open(item.url, '_blank');
                else document.getElementById('frame-content').src = item.url;
            };
            menu.appendChild(btn);
        });
    });
});
