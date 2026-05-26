async function init() {
    const response = await fetch('data.json');
    const data = await response.json();
    
    document.getElementById('header-title').textContent = data.header.title;
    document.getElementById('header-subtitle').textContent = data.header.subtitle;
    
    const menu = document.getElementById('menu-hub');
    menu.innerHTML = '';
    
    Object.keys(data).filter(key => key !== 'header').forEach(key => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = data[key].title;
        btn.onclick = () => openCategory(key);
        menu.appendChild(btn);
    });
}

async function openCategory(catKey) {
    const response = await fetch('data.json');
    const data = await response.json();
    const cat = data[catKey];

    document.getElementById('main-wrapper').classList.add('is-open');
    const display = document.getElementById('display-area');
    display.classList.remove('hidden');

    document.getElementById('display-title').textContent = cat.title;
    document.getElementById('display-description').textContent = cat.description;

    const container = document.getElementById('sub-links-container');
    container.innerHTML = '';
    
    cat.items.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = item.name;
        
        btn.onclick = (e) => {
            e.stopPropagation();
            if (item.type === 'embed') {
                container.innerHTML = `<p style="font-style: italic; margin-bottom: 15px;">${item.context || ''}</p>`;
                const ifr = document.createElement('iframe');
                ifr.src = item.url;
                container.appendChild(ifr);
            } else {
                window.open(item.url, '_blank');
            }
        };
        container.appendChild(btn);
    });
    
    setTimeout(() => display.classList.add('active'), 300);
}

function goBack() {
    const display = document.getElementById('display-area');
    display.classList.remove('active');
    setTimeout(() => {
        display.classList.add('hidden');
        document.getElementById('main-wrapper').classList.remove('is-open');
    }, 500);
}

window.onload = init;
