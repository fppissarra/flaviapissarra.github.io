const experiences = [
    {
        category: "Teaching & Translation",
        title: "TESOL Certified Educator & Multilingual Translator",
        period: "2024 — 2026",
        company: "Colégio Santa Catarina | Adventista | Number One",
        details: "Provided TESOL-certified instruction and specialized business English training. Managed technical translations and curriculum adaptations for inclusive education."
    },
    {
        category: "Communication & Support",
        title: "Community Moderation & Multilingual Chat Support",
        period: "Dec 2019 — Oct 2020",
        company: "Freelance (Japanese Job Platform)",
        details: "Managed real-time multilingual support (PT/EN/ES/JP) and moderated job board content for the Brazilian community abroad."
    },
    {
        category: "Research & Technology",
        title: "Computational Linguistics & NLP Researcher",
        period: "2020 — 2023",
        company: "Ifes / Lab CTecL (FAPES Scholar)",
        details: "Lead researcher in Machine Translation Post-Editing (MTPE). Developed 'Python for Linguists' and architected gold-standard multilingual datasets."
    },
    {
        category: "Industry & Data Science",
        title: "Data Science & Industrial Logistics Intern",
        period: "2018 — 2019",
        company: "Vale | ArcelorMittal (CPGC)",
        details: "Engineered automated SQL/Python pipelines and architected Power BI dashboards for industrial control and logistics optimization."
    }
];

function render() {
    const container = document.getElementById('experience-container');
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

async function translateAll(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    for (let el of elements) {
        const text = el.innerText;
        if (lang === 'en') continue;
        try {
            const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURI(text)}`);
            const json = await response.json();
            el.innerText = json[0][0][0];
        } catch (e) { console.error("IA Translation Error", e); }
    }
}

async function updatePortfolio(lang) {
    render(); 
    if (lang !== 'en') await translateAll(lang);
}

document.addEventListener('DOMContentLoaded', () => render());
