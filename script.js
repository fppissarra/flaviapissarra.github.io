const experiences = [
    {
        category: "Industry, Logistics & Data Intelligence",
        title: "Data Analyst & Technical Interpreter",
        period: "2018 — 2019",
        company: "Vale | ArcelorMittal (CPGC)",
        details: "Optimized industrial logistics at ArcelorMittal's CPGC through automated SQL/Python pipelines. Acted as a technical interpreter, ensuring precise communication of engineering and safety protocols between international teams."
    },
    {
        category: "Research & Language Technology (NLP)",
        title: "Computational Linguistics & MTPE Lead",
        period: "2020 — 2023",
        company: "Ifes / Lab CTecL (FAPES)",
        details: "Directed research in Machine Translation Post-Editing (MTPE) to ensure technical and contractual accuracy. Developed Python scripts for processing large-scale technical and port documentation for global markets."
    },
    {
        category: "Global Communication & Maritime Support",
        title: "Specialized Training & Intercultural Mediation",
        period: "2019 — 2026",
        company: "Maritime Sector | JUCEES",
        details: "Provided specialized Business English training for offshore professionals and ship crews. Managing technical translation and intercultural mediation, while preparing for Sworn Translator certification (JUCEES)."
    }
];

function render() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = experiences.map(exp => `
        <article class="glass-box">
            <span class="section-label">${exp.category}</span>
            <div class="exp-header">
                <span class="exp-title">${exp.title}</span>
                <span class="exp-period">${exp.period}</span>
            </div>
            <span class="company-tag">${exp.company}</span>
            <p class="details-text">${exp.details}</p>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', render);
