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
        btn.onclick = () => {
            container.innerHTML = '';
            if (item.type === 'embed') {
                const ifr = document.createElement('iframe');
                ifr.src = item.url;
                container.appendChild(ifr);
            } else { window.open(item.url, '_blank'); }
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
