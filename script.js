const dictionary = {
    en: {
        role: "Data Scientist transitioning to Foreign Trade & Port Logistics | Multilingual (PT/EN/ES/IT/JP/KO) | Former Intern at Vale & ArcelorMittal",
        sections: { ind: "Industry", res: "Research & Technology", doc: "Teaching & Translation" },
        xp: [
            {
                category: "doc",
                title: "Teaching & Professional Translation",
                period: "2024 — 2026",
                content: [
                    {
                        company: "Number One / Escola Mundo Livre",
                        points: [
                            "Delivered specialized English instruction for Business and academic purposes.",
                            "Applied advanced linguistic analysis (C2) to adapt complex curriculum for corporate environments.",
                            "Managed high-stakes localization and technical translation for industrial sectors."
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
                            "Lead Researcher specializing in Corpus Linguistics and Machine Translation Post-Editing (MTPE).",
                            "Architected gold-standard datasets for EN/ES/PT corpora, reducing labeling bias.",
                            "Developed 'Python for Linguists' curriculum, training 100+ students in NLP tools (spaCy/NLTK).",
                            "Applied Meschonnic’s Poetics of Rhythm for AI-Assisted Translation evaluation."
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
                            "Engineered automated pipelines (SQL/Python) for 10k+ rows of raw industrial data.",
                            "Architected Power BI dashboards reducing manual data consolidation time by 30%.",
                            "Lead Spanish & English Translator for Mexican and Canadian technical delegations."
                        ]
                    },
                    {
                        company: "Vale",
                        points: [
                            "Managed large-scale data and operational KPIs within complex industrial environments.",
                            "Optimized logistics operations and bridged communication gaps through data-driven insights."
                        ]
                    }
                ]
            }
        ]
    },
    pt: {
        role: "Cientista de Dados em transição para Comércio Exterior e Logística Portuária | Multilíngue (PT/EN/ES/IT/JP/KO) | Ex-estagiária Vale & ArcelorMittal",
        sections: { ind: "Indústria", res: "Pesquisa e Tecnologia", doc: "Docência e Tradução" },
        xp: [
            {
                category: "doc",
                title: "Docência e Tradução Profissional",
                period: "2024 — 2026",
                content: [
                    {
                        company: "Number One / Escola Mundo Livre",
                        points: [
                            "Ensino especializado de Inglês para fins acadêmicos e de Business.",
                            "Aplicação de análise linguística avançada (C2) para adaptação de currículos corporativos.",
                            "Gestão de localização e tradução técnica para o setor industrial."
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
                            "Criação do curso 'Python para Linguistas', treinando 100+ alunos em ferramentas de NLP.",
                            "Análise rítmica aplicada à avaliação de tradução assistida por IA."
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
                            "Engenharia de pipelines (SQL/Python) para processamento de 10k+ linhas mensais.",
                            "Desenvolvimento de dashboards em Power BI com redução de 30% em tarefas manuais.",
                            "Tradução técnica líder para delegações mexicanas e canadenses."
                        ]
                    }
                ]
            }
        ]
    },
    es: {
        role: "Científica de Datos en transición a Comercio Exterior y Logística Portuaria | Multilingüe (PT/EN/ES/IT/JP/KO) | Ex-pasante en Vale y ArcelorMittal",
        sections: { ind: "Industria", res: "Investigación y Tecnología", doc: "Docencia y Traducción" },
        xp: [
            {
                category: "doc",
                title: "Docencia y Traducción Profesional",
                period: "2024 — 2026",
                content: [
                    {
                        company: "Number One / Escola Mundo Livre",
                        points: [
                            "Instrucción especializada en inglés para negocios y propósitos académicos.",
                            "Adaptación de currículos complejos para entornos corporativos (Nivel C2).",
                            "Traducción técnica y localización para sectores industriales de alto impacto."
                        ]
                    }
                ]
            },
            {
                category: "res",
                title: "Lingüística Computacional e Investigación",
                period: "2020 — 2023",
                content: [
                    {
                        company: "Ifes / Lab CTecL",
                        points: [
                            "Investigadora líder en Lingüística de Corpus y Post-edición de Traducción Automática.",
                            "Arquitectura de conjuntos de datos de referencia (EN/ES/PT) para modelos de lenguaje.",
                            "Capacitación de más de 100 estudiantes en herramientas de NLP y Python."
                        ]
                    }
                ]
            },
            {
                category: "ind",
                title: "Ciencia de Datos e Ingeniería Industrial",
                period: "2018 — 2019",
                content: [
                    {
                        company: "ArcelorMittal / Vale",
                        points: [
                            "Ingeniería de pipelines automatizados (SQL/Python) para datos industriales a gran escala.",
                            "Desarrollo de paneles en Power BI reduciendo el tiempo de consolidación en un 30%.",
                            "Traductora líder de español e inglés para delegaciones mexicanas y canadienses."
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
    container.innerHTML = ""; // Limpa o container

    // Itera sobre as categorias para criar a visualização organizada
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
