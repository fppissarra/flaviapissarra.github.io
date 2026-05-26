async function init() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        // header e foto
        document.getElementById('header-title').textContent = data.header.title;
        document.getElementById('header-subtitle').textContent = data.header.subtitle;
        document.getElementById('profile-img').src = data.header.avatar_url;
        
        const menu = document.getElementById('menu-hub');
        menu.innerHTML = '';
        
        // renderização dinâmica
        Object.keys(data).forEach(key => {
            if (key !== 'header') {
                const section = data[key];
                const div = document.createElement('div');
                div.innerHTML = `<h3 style="margin-top:25px; color:var(--accent); font-size:0.75rem; letter-spacing:1px;">${section.title}</h3>`;
                
                section.items.forEach(item => {
                    const btn = document.createElement('button');
                    btn.className = 'btn';
                    btn.textContent = item.name;
                    btn.onclick = () => {
                        document.getElementById('view-title').textContent = item.name;
                        document.getElementById('view-content').innerHTML = `<p>${item.context || ''}</p>`;
                    };
                    div.appendChild(btn);
                });
                menu.appendChild(div);
            }
        });
    } catch (err) {
        console.error("Error:", err);
    }
}

document.addEventListener('DOMContentLoaded', init);
