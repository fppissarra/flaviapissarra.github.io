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
        const div = document.createElement('div');
        div.innerHTML = `<h3 style="margin-top:25px; color:var(--accent); font-size:0.75rem;">${section.title}</h3>`;
        
        section.items.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.textContent = item.name;
            btn.onclick = () => {
                document.getElementById('view-title').textContent = item.name;
                // Se for projeto, carrega o path local /p/slug/
                document.getElementById('view-content').innerHTML = 
                    `<iframe src="${item.url}" style="width:100%; height:500px; border:none;"></iframe>`;
            };
            div.appendChild(btn);
        });
        menu.appendChild(div);
    });
});
