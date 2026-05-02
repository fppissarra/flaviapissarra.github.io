const content = {
    pt: {
        tagline: "Dados | Logística Portuária | Poliglota",
        sections: { work: "Trajetória Profissional", acad: "Formação & Pesquisa" },
        exp: [
            { cat: "work", title: "ArcelorMittal | Inteligência de Dados", tags: ["SQL", "Python", "KPI"], desc: "Especialista técnica na automação de dados e KPIs industriais." },
            { cat: "work", title: "Vale | Suporte Operacional", tags: ["Logística", "Ferrovia"], desc: "Análise de métricas operacionais para logística de carga pesada." },
            { cat: "acad", title: "CTecL IFES | Coordenação de IA", tags: ["NLP", "Tradução"], desc: "Liderança em laboratório de IA aplicada ao processamento de linguagem natural." },
            { cat: "acad", title: "Técnica em Portos | IFES", tags: ["Logística", "Comex"], desc: "Formação técnica voltada à gestão portuária e intermodalidade." }
        ]
    },
    en: {
        tagline: "Data | Port Logistics | Polyglot",
        sections: { work: "Professional Path", acad: "Education & Research" },
        exp: [
            { cat: "work", title: "ArcelorMittal | Data Intelligence", tags: ["SQL", "Python", "KPI"], desc: "Technical specialist in industrial data and KPI automation." },
            { cat: "work", title: "Vale | Operational Support", tags: ["Logistics", "Railway"], desc: "Operational metrics analysis for heavy-haul logistics." },
            { cat: "acad", title: "CTecL IFES | AI Coordination", tags: ["NLP", "Translation"], desc: "Leading the AI lab focused on Natural Language Processing." },
            { cat: "acad", title: "Port Technician | IFES", tags: ["Logistics", "Trade"], desc: "Technical education focused on port management." }
        ]
    }
};

function changeLang(lang) {
    const data = content[lang] || content.pt;
    document.getElementById('user-tagline').innerText = data.tagline;
    
    document.querySelectorAll('.btn-lang').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    let html = '';
    ['work', 'acad'].forEach(cat => {
        html += `<div class="section-title">${data.sections[cat]}</div>`;
        data.exp.filter(e => e.cat === cat).forEach(item => {
            html += `
                <div class="glass-card experience-item" onclick="this.classList.toggle('active-box')">
                    <div class="exp-header">${item.title}</div>
                    <div class="exp-content">
                        <div style="margin-bottom:12px;">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                        <p style="color:#64748b; line-height:1.6; margin:0;">${item.desc}</p>
                    </div>
                </div>`;
        });
    });
    document.getElementById('main-content').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => changeLang('pt'));
