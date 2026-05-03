const experiences = [
    {
        category: "Industry, Logistics & Data Intelligence",
        title: "Data Analyst & Technical Interpreter",
        period: "2018 — 2019",
        company: "Vale | ArcelorMittal (CPGC)",
        details: "Optimized industrial logistics at ArcelorMittal's CPGC through automated SQL/Python pipelines and Power BI dashboards. Acted as a technical interpreter in-situ, ensuring precise engineering and safety communication between domestic and international teams."
    },
    {
        category: "Research & Language Technology (NLP)",
        title: "Computational Linguistics & MTPE Lead",
        period: "2020 — 2023",
        company: "Ifes / Lab CTecL (FAPES)",
        details: "Directed research in Machine Translation Post-Editing (MTPE) to enhance technical and contractual accuracy for global markets. Architected gold-standard multilingual datasets and developed Python-based tools for processing large-scale technical documentation."
    },
    {
        category: "Global Communication & Maritime Support",
        title: "Specialized Training & Intercultural Mediation",
        period: "2019 — 2026",
        company: "Maritime Sector | JUCEES | Japanese Platform",
        details: "Provided Technical English training for offshore professionals and crew members, focusing on maritime terminology. Managed real-time multilingual support (PT/EN/ES/JP) for international platforms and currently preparing for Sworn Translator certification (JUCEES)."
    }
];

// Função de renderização para garantir que os dados apareçam
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

// Ponte de tradução via IA para suporte multilingue
async function translateAll(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    for (let el of elements) {
        const text = el.innerText;
        if (lang === 'en') continue; 

        try {
            const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURI(text)}`);
            const json = await response.json();
            el.innerText = json[0][0][0];
        } catch (e) {
            console.error("Translation logic error:", e);
        }
    }
}

// Função coordenadora
async function updatePortfolio(lang) {
    render(); 
    if (lang !== 'en') {
        await translateAll(lang);
    }
}

// Inicialização automática ao carregar a página
document.addEventListener('DOMContentLoaded', () => render());
