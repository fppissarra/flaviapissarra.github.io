const content = {
    pt: {
        name: "Flávia P. Pissarra",
        tagline: "Inteligência de Dados | Logística Portuária | Poliglota",
        summary: "Especialista em processamento de dados e comunicação técnica com vivência industrial na <b>Vale e ArcelorMittal</b>. Integrando TI à eficiência logística.",
        exp: [
            { title: "ArcelorMittal | Engenharia de Dados", tags: ["Python", "SQL", "KPI"], desc: "Otimização de processos industriais com processamento de 10k+ linhas/mês. Suporte técnico para delegações internacionais." },
            { title: "Vale | Suporte em Dados Operacionais", tags: ["CCO", "Ferrovia", "Analytics"], desc: "Análise de métricas ferroviárias de carga pesada e suporte à infraestrutura de dados industriais." },
            { title: "IFES CTecL | Liderança em IA & NLP", tags: ["NLP", "Machine Learning", "QA"], desc: "Coordenação de laboratório de tradução assistida por IA. Automação de workflows reduzindo erros sistêmicos." },
            { title: "Técnica em Portos | IFES", tags: ["Logística", "Comex", "Gestão"], desc: "Especialização em operações portuárias, multimodalidade e fluxos de comércio exterior." }
        ]
    },
    en: {
        name: "Flávia P. Pissarra",
        tagline: "Data Intelligence | Port Logistics | Polyglot",
        summary: "Data processing specialist and technical communicator with industrial experience at <b>Vale and ArcelorMittal</b>. Bridging IT and logistics efficiency.",
        exp: [
            { title: "ArcelorMittal | Data Engineering", tags: ["Python", "SQL", "KPI"], desc: "Industrial process optimization processing 10k+ rows/month. Technical support for international delegations." },
            { title: "Vale | Operational Data Support", tags: ["CCO", "Railway", "Analytics"], desc: "Analysis of heavy-haul railway metrics and industrial data infrastructure support." },
            { title: "IFES CTecL | AI & NLP Leadership", tags: ["NLP", "Machine Learning", "QA"], desc: "Coordination of AI-assisted translation lab. Workflow automation reducing systemic errors." },
            { title: "Port Technician | IFES", tags: ["Logistics", "Global Trade", "Management"], desc: "Specialization in port operations, multimodality, and foreign trade flows." }
        ]
    },
    es: {
        name: "Flávia P. Pissarra",
        tagline: "Inteligencia de Datos | Logística Portuaria | Políglota",
        summary: "Especialista en datos y comunicación técnica con experiencia industrial en <b>Vale y ArcelorMittal</b>. Integrando TI y eficiencia logística.",
        exp: [
            { title: "ArcelorMittal | Ingeniería de Datos", tags: ["Python", "SQL", "KPI"], desc: "Optimización de procesos industriales procesando más de 10k líneas/mes. Soporte técnico bilingüe." },
            { title: "Vale | Soporte de Datos Operativos", tags: ["CCO", "Ferrocarril", "Analytics"], desc: "Análisis de métricas ferroviarias de carga pesada y soporte a la infraestructura de datos industriales." },
            { title: "IFES CTecL | Liderazgo en IA y NLP", tags: ["NLP", "Machine Learning", "QA"], desc: "Coordinación de laboratorio de traducción asistida por IA. Automatización de workflows operacionales." },
            { title: "Técnica en Puertos | IFES", tags: ["Logística", "Comex", "Gestión"], desc: "Especialización en operaciones portuarias, multimodalidad y flujos de comercio exterior." }
        ]
    }
};

function changeLang(lang) {
    const data = content[lang];
    
    // Atualiza cabeçalho traduzido
    document.getElementById('user-name').innerText = data.name;
    document.getElementById('user-tagline').innerText = data.tagline;
    
    // Atualiza botões ativos
    document.querySelectorAll('.btn-lang').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(lang));
    });

    // Renderiza experiências
    let html = `<p style="text-align:center; margin-bottom:30px; color:#555; font-size:1.1rem;">${data.summary}</p>`;
    data.exp.forEach((item, index) => {
        html += `
            <div class="experience-box glass-panel" onclick="this.classList.toggle('active-box')">
                <div class="exp-header">
                    <span>${item.title}</span>
                </div>
                <div class="exp-content">
                    <div style="margin-bottom:12px;">
                        ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                    <div style="color:#444; line-height:1.6;">${item.desc}</div>
                </div>
            </div>`;
    });
    document.getElementById('main-content').innerHTML = html;
}

window.onload = () => changeLang('pt');
