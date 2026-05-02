const content = {
    pt: {
        name: "Flávia Porcu Pissarra",
        tagline: "Inteligência de Dados | Logística Portuária | Poliglota",
        summary: "Especialista em dados com vivência na Vale e ArcelorMittal.",
        exp: [
            { title: "ArcelorMittal | Dados", tags: ["SQL", "Python"], desc: "Otimização de processos e KPIs industriais." },
            { title: "Vale | Suporte Operacional", tags: ["CCO", "Dados"], desc: "Análise de métricas ferroviárias de carga pesada." }
        ]
    },
    en: {
        name: "Flávia Porcu Pissarra",
        tagline: "Data Intelligence | Port Logistics | Polyglot",
        summary: "Data specialist with experience at Vale and ArcelorMittal.",
        exp: [
            { title: "ArcelorMittal | Data", tags: ["SQL", "Python"], desc: "Optimization of industrial processes and KPIs." },
            { title: "Vale | Operational Support", tags: ["CCO", "Data"], desc: "Heavy-haul railway metrics analysis." }
        ]
    },
    es: {
        name: "Flávia Porcu Pissarra",
        tagline: "Inteligencia de Datos | Logística Portuaria | Políglota",
        summary: "Especialista en datos con experiencia en Vale y ArcelorMittal.",
        exp: [
            { title: "ArcelorMittal | Datos", tags: ["SQL", "Python"], desc: "Optimización de procesos y KPIs industriales." },
            { title: "Vale | Soporte Operativo", tags: ["CCO", "Datos"], desc: "Análisis de métricas ferroviarias de carga pesada." }
        ]
    }
};

function changeLang(lang) {
    const data = content[lang];
    
    // Traduz o cabeçalho
    document.getElementById('user-name').innerText = data.name;
    document.getElementById('user-tagline').innerText = data.tagline;
    
    // Traduz o corpo
    let html = `<p style="text-align:center; margin-bottom:30px;">${data.summary}</p>`;
    data.exp.forEach(item => {
        html += `
            <div class="experience-box glass-panel" onclick="this.classList.toggle('active-box')">
                <div class="exp-header">${item.title} <span>▾</span></div>
                <div class="exp-content">
                    <div style="margin-bottom:10px;">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                    ${item.desc}
                </div>
            </div>`;
    });
    document.getElementById('main-content').innerHTML = html;
}

// Inicia em PT
window.onload = () => changeLang('pt');
