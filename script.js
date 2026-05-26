document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('data.json');
    const data = await res.json();

    // Header
    document.getElementById('header-title').textContent = data.header.title;
    document.getElementById('header-subtitle').textContent = data.header.subtitle;
    document.getElementById('profile-img').src = data.header.avatar_url;

    // Menu Hub
    const menu = document.getElementById('menu-hub');
    Object.keys(data).forEach(key => {
        if (key === 'header') return;
        
        const section = document.createElement('div');
        section.innerHTML = `<h4 style="color:var(--accent); margin-top:20px;">${data[key].title}</h4>`;
        
        data[key].items.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.textContent = item.name;
            btn.onclick = () => {
                if (item.url.startsWith('http')) window.open(item.url, '_blank');
                else document.getElementById('frame-content').src = item.url;
            };
            section.appendChild(btn);
        });
        menu.appendChild(section);
    });
});
