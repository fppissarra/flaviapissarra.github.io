async function openCategory(cat) {
    const response = await fetch('data.json');
    const data = await response.json();
    const catData = data[cat];

    document.getElementById('menu-hub').style.display = 'none';
    document.getElementById('header-area').style.display = 'none';
    
    const display = document.getElementById('display-area');
    display.classList.remove('hidden');

    document.getElementById('display-title').textContent = catData.title;
    document.getElementById('display-text').textContent = catData.text;

    const container = document.getElementById('sub-links-container');
    container.innerHTML = '';
    
    catData.links.forEach(l => {
        const btn = document.createElement('a');
        btn.href = l.url;
        btn.textContent = l.name;
        btn.className = 'btn';
        btn.target = "_blank";
        container.appendChild(btn);
    });
}

function goBack() {
    document.getElementById('menu-hub').style.display = 'block';
    document.getElementById('header-area').style.display = 'block';
    document.getElementById('display-area').classList.add('hidden');
    document.getElementById('sub-links-container').innerHTML = '';
}
