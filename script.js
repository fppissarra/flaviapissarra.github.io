const data = {
    bi: { title: "Business Intelligence", text: "Developing analytical dashboards for monitoring port KPIs, optimizing cargo flow, and predictive berthing analysis.", links: [{name: "Port Dashboard", url: "#"}, {name: "Logistics NLP", url: "#"}] },
    traducao: { title: "Technical Translation", text: "Localization of port equipment manuals and technical documentation (English-Portuguese) for international logistics.", links: [{name: "Equipment Manual A", url: "#"}, {name: "Logistics Glossary", url: "#"}] },
    sobre: { title: "About Me", text: "Data professional transitioning into the industry, combining expertise in port processes with data analysis and automation.", links: [{name: "LinkedIn", url: "#"}, {name: "Lattes", url: "#"}, {name: "GitHub", url: "#"}] }
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
