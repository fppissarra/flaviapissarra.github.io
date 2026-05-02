const dictionary = {
    en: {
        role: "Data Scientist | Foreign Trade & Port Logistics | Multilingual (PT/EN/ES/IT/JP/KO) | Former Intern at Vale & ArcelorMittal",
        sections: { ind: "Industry", res: "Research & Technology", doc: "Teaching & Translation" },
        xp: [
            {
                category: "doc",
                title: "TESOL Certified Educator & Translator",
                period: "2024 — 2026",
                content: [
                    {
                        company: "Colégio Santa Catarina / Colégio Adventista",
                        points: [
                            "TESOL-certified instruction for primary and secondary education.",
                            "Development of pedagogical materials aligned with inclusive education and international standards.",
                            "Classroom management and progress evaluation for diverse student groups."
                        ]
                    },
                    {
                        company: "Number One / Escola Mundo Livre",
                        points: [
                            "Business English and academic proficiency training for corporate environments.",
                            "Technical translation and linguistic quality assurance for industrial sectors.",
                            "Curriculum adaptation based on international communicative methodologies."
                        ]
                    }
                ]
            },
            {
                category: "res",
                title: "Computational Linguistics & Data Research",
                period: "2020 — 2023",
                content: [
                    {
                        company: "Ifes / CTecL Lab",
                        points: [
                            "Lead Researcher in Corpus Linguistics and Machine Translation Post-Editing (MTPE).",
                            "Architected gold-standard datasets for EN/ES/PT corpora.",
                            "Developed 'Python for Linguists' curriculum, training 100+ students in NLP tools.",
                            "Applied analytical models to evaluate AI-assisted poetic translation."
                        ]
                    }
                ]
            },
            {
                category: "ind",
                title: "Data Science & Industrial Engineering",
                period: "2018 — 2019",
                content: [
                    {
                        company: "ArcelorMittal",
                        points: [
                            "Engineered automated pipelines (SQL/Python) for 10k+ rows of industrial data.",
                            "Architected Power BI dashboards reducing manual data consolidation by 30%.",
                            "Technical localization and lead translation for Mexican and Canadian delegations."
                        ]
                    },
                    {
                        company: "Vale",
                        points: [
                            "Managed large-scale data and operational KPIs within complex industrial environments.",
                            "Optimized logistics operations and bridged communication gaps through data insights."
                        ]
                    }
                ]
            }
        ]
    },
    pt: {
        role: "Data Scientist | Foreign Trade & Port Logistics | Multilingual (PT/EN/ES/IT/JP/KO) | Former Intern at Vale & ArcelorMittal",
        sections: { ind: "Indústria", res: "Pesquisa e Tecnologia", doc: "Docência e Tradução" },
        xp: [
            {
                category: "doc",
                title: "Docência (TESOL) e Tradução Profissional",
                period: "2024 — 2026",
                content: [
                    {
                        company: "Colégio Santa Catarina / Colégio Adventista",
                        points: [
                            "Instrução de Inglês com certificação internacional TESOL para educação básica e média.",
                            "Desenvolvimento de materiais sob a perspectiva da educação inclusiva e padrões globais.",
                            "Gestão de sala de aula e avaliação de progresso estudantil."
                        ]
                    },
                    {
                        company: "Number One / Escola Mundo Livre",
                        points: [
                            "Treinamento de Business English e proficiência acadêmica com base em metodologias internacionais.",
                            "Tradução técnica e garantia de qualidade linguística para os setores industrial e corporativo.",
                            "Adaptação curricular especializada para ensino de idiomas."
                        ]
                    }
                ]
            },
            {
                category: "res",
                title: "Linguística Computacional e Pesquisa de Dados",
                period: "2020 — 2023",
                content: [
                    {
                        company: "Ifes / Lab CTecL",
                        points: [
                            "Pesquisadora líder em Linguística de Corpus e Pós-Edição de Tradução Automática (MTPE).",
                            "Arquitetura de datasets padrão-ouro para corpora EN/ES/PT.",
                            "Criação do curso 'Python para Linguistas' para treinamento em ferramentas de NLP."
                        ]
                    }
                ]
            },
            {
                category: "ind",
                title: "Ciência de Dados e Engenharia Industrial",
                period: "2018 — 2019",
                content: [
                    {
                        company: "ArcelorMittal / Vale",
                        points: [
                            "Engenharia de pipelines (SQL/Python) para processamento de dados industriais.",
                            "Desenvolvimento de dashboards em Power BI com redução de 30% em tarefas manuais.",
                            "Tradução técnica líder para delegações mexicanas e canadenses."
                        ]
                    }
                ]
            }
        ]
    }
};

function setLanguage(lang) {
    const data = dictionary[lang];
    document.getElementById('txt-role').innerText = data.role;
    
    document.querySelectorAll('.lang-selector button').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    const container = document.getElementById('experience-container');
    container.innerHTML = "";

    const categories = ['doc', 'res', 'ind'];
    
    categories.forEach(cat => {
        const items = data.xp.filter(item => item.category === cat);
        if (items.length > 0) {
            container.innerHTML += `<h2 class="section-label">${data.sections[cat]}</h2>`;
            items.forEach((x, i) => {
                const uniqueId = `${cat}-${i}`;
                container.innerHTML += `
                    <div class="glass-box dropdown" onclick="toggle('${uniqueId}')">
                        <div class="exp-header">
                            <span class="exp-title">${x.title}</span>
                            <span class="exp-period">${x.period}</span>
                        </div>
                        <div id="det-${uniqueId}" class="exp-details">
                            <hr class="pearl-divider">
                            ${x.content.map(c => `
                                <span class="company-tag">${c.company}</span>
                                <ul class="bullet-list" style="margin-bottom:15px;">
                                    ${c.points.map(p => `<li>${p}</li>`).join('')}
                                </ul>
                            `).join('')}
                        </div>
                    </div>
                `;
            });
        }
    });
}

function toggle(id) {
    const d = document.getElementById(`det-${id}`);
    const isOpen = d.style.maxHeight;
    document.querySelectorAll('.exp-details').forEach(el => el.style.maxHeight = null);
    if (!isOpen) d.style.maxHeight = d.scrollHeight + "px";
}

document.addEventListener('DOMContentLoaded', () => setLanguage('en'));
