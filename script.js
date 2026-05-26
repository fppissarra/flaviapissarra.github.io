const data = {
    bi: { title: "Business Intelligence", text: "Analytical dashboards for logistics.", links: [{name: "Port Dashboard", url: "#"}, {name: "NLP Logistics", url: "#"}] },
    traducao: { title: "Technical Translation", text: "Localization and documentation.", links: [{name: "Manual A", url: "#"}] },
    sobre: { title: "About Me", text: "Expertise in data and port processes.", links: [{name: "LinkedIn", url: "#"}, {name: "Lattes", url: "#"}] }
};

function openCategory(cat) {
    document.getElementById('menu-hub').style.display = 'none';
    document.getElementById('header-area').style.display = 'none';
    const display = document.getElementById('display-area');
    display.classList.remove('hidden');

    document.getElementById('display-title').textContent = data[cat].title;
    document.getElementById('display-text').textContent = data[cat].text;

    const container = document.getElementById('sub-links-container');
    container.innerHTML = '';
    
    data[cat].links.forEach(l => {
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
}
