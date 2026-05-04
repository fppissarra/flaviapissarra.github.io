const experiences = [
    {
        category: "Industry, Logistics & Data Intelligence",
        title: "Data Analyst & Technical Interpreter",
        period: "2018 — 2019",
        company: "Vale | ArcelorMittal (CPGC)",
        details: "Optimized industrial logistics at ArcelorMittal's CPGC through automated SQL/Python pipelines. Acted as a technical interpreter, ensuring precise communication of engineering protocols between international teams."
    },
    {
        category: "Research & Language Technology (NLP)",
        title: "Computational Linguistics & MTPE Lead",
        period: "2020 — 2023",
        company: "Ifes / Lab CTecL (FAPES)",
        details: "Led research in Machine Translation Post-Editing (MTPE) for technical and contractual accuracy. Developed Python-based tools for processing large-scale documentation for global markets."
    },
    {
        category: "Global Communication & Maritime Support",
        title: "Specialized Training & Intercultural Mediation",
        period: "2019 — 2026",
        company: "Maritime Sector | JUCEES",
        details: "Specialized Business English training for offshore professionals and ship crews. Managing intercultural mediation and technical translation, preparing for Sworn Translator certification (JUCEES)."
    }
];

// Função para renderizar o conteúdo original (em Inglês)
function render() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = experiences.map(exp => `
        <div class="glass-box">
            <span class="section-label" data-translate>${exp.category}</span>
            <div class="exp-header">
                <span class="exp-title" data-translate>${exp.title}</span>
                <span class="exp-period">${exp.period}</span>
            </div>
            <span class="company-tag">${exp.company}</span>
            <p class="details-text" data-translate>${exp.details}</p>
        </div>
    `).join('');
}

// Função de tradução que lida com erros de API
async function translateAll(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    
    // Mostra um feedback visual simples se quiser, ou apenas processa
    for (let el of elements) {
        const text = el.innerText;
        if (lang === 'en') continue; 

        try {
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURIComponent(text)}`;
            const response = await fetch(url);
            const json = await response.json();
            if (json && json[0] && json[0][0]) {
                el.innerText = json[0][0][0];
            }
        } catch (e) {
            console.warn("Translation service unavailable. Staying in English.", e);
        }
    }
}

// Função chamada pelos botões
async function updatePortfolio(lang) {
    render(); // Reseta para o original antes de traduzir
    if (lang === 'pt') {
        await translateAll('pt');
    }
}

// Inicializa a página
document.addEventListener('DOMContentLoaded', () => {
    render();
});
