const dictionary = {
    en: {
        role: "Data Scientist | Foreign Trade & Port Logistics | Multilingual (PT/EN/ES/IT/JP/KO) | Former Intern at Vale & ArcelorMittal",
        xpTitle: "Professional Timeline",
        experiences: [
            {
                company: "CTecL Lab - IFES",
                position: "Lead Computational Linguist & AI Researcher",
                period: "2024 – Present",
                desc: "Coordinating an AI-assisted translation lab at IFES.",
                details: "Leading research on NLP and poetic translation metrics. Managing data strategies for large language models (LLMs) and computational linguistics projects."
            },
            {
                company: "Freelance & Education",
                position: "Translator & Educator",
                period: "Ongoing",
                desc: "Specialized multilingual instruction and technical translation.",
                details: "Technical and literary translation in English, Spanish, and Italian. Currently developing proficiency in Japanese and Korean for global communication."
            },
            {
                company: "Vale / ArcelorMittal",
                position: "Industrial Logistics Analyst (Former Intern)",
                period: "Previous",
                desc: "Logistics and foreign trade data intelligence.",
                details: "Port logistics workflow optimization and monitoring of heavy-haul railway operational metrics for global industrial leaders."
            }
        ]
    },
    pt: {
        role: "Cientista de Dados | Comércio Exterior e Logística Portuária | Multilíngue (PT/EN/ES/IT/JP/KO) | Ex-estagiária na Vale e ArcelorMittal",
        xpTitle: "Linha do Tempo Profissional",
        experiences: [
            {
                company: "Lab CTecL - IFES",
                position: "Pesquisadora Líder em Linguística Computacional e IA",
                period: "2024 – Atual",
                desc: "Coordenação de laboratório de tradução assistida por IA no IFES.",
                details: "Liderando pesquisas em NLP e métricas de tradução poética. Gestão de estratégias de dados para modelos de linguagem e projetos de linguística computacional."
            },
            {
                company: "Freelance e Educação",
                position: "Tradutora e Educadora",
                period: "Em andamento",
                desc: "Instrução multilíngue especializada e tradução técnica.",
                details: "Tradução técnica e literária em Inglês, Espanhol e Italiano. Desenvolvimento contínuo de proficiência em Japonês e Coreano para comunicação global."
            },
            {
                company: "Vale / ArcelorMittal",
                position: "Analista de Logística Industrial (Ex-estagiária)",
                period: "Anterior",
                desc: "Inteligência de dados em logística e comércio exterior.",
                details: "Otimização de fluxos de logística portuária e monitoramento de métricas ferroviárias para gigantes do setor industrial."
            }
        ]
    },
    es: {
        role: "Científica de Datos | Comercio Exterior y Logística Portuaria | Multilingüe (PT/EN/ES/IT/JP/KO) | Ex-pasante en Vale y ArcelorMittal",
        xpTitle: "Línea de Tiempo Profesional",
        experiences: [
            {
                company: "Lab CTecL - IFES",
                position: "Investigadora Líder en Lingüística Computacional e IA",
                period: "2024 – Actualidad",
                desc: "Coordinación de laboratorio de traducción asistida por IA.",
                details: "Liderazgo en investigaciones de NLP y métricas de traducción poética. Gestión de proyectos de lingüística computacional aplicada."
            },
            {
                company: "Freelance y Educación",
                position: "Traductora y Educadora",
                period: "En curso",
                desc: "Instrucción multilingüe especializada y traducción técnica.",
                details: "Traducción técnica y literaria en varios idiomas. Especializada en la intersección entre lenguas y tecnología."
            }
        ]
    }
};

function setLanguage(lang) {
    const data = dictionary[lang] || dictionary.en;
    document.getElementById('txt-role').innerText = data.role;
    
    document.querySelectorAll('.lang-selector button').forEach(btn => btn.classList.remove('active'));
    const btn = document.getElementById(`btn-${lang}`);
    if (btn) btn.classList.add('active');

    const container = document.getElementById('experience-container');
    let html = `<h2 class="section-label">${data.xpTitle}</h2>`;

    data.experiences.forEach((exp, index) => {
        html += `
            <div class="glass-box experience-card dropdown" onclick="toggleDropdown(${index})">
                <div class="exp-header">
                    <span class="exp-company">${exp.company}</span>
                    <span class="exp-period">${exp.period}</span>
                </div>
                <h3 class="exp-position">${exp.position}</h3>
                <p class="exp-desc">${exp.desc}</p>
                <div id="details-${index}" class="exp-details">
                    <hr class="pearl-divider">
                    <p style="padding-bottom:15px; line-height:1.6;">${exp.details}</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function toggleDropdown(index) {
    const details = document.getElementById(`details-${index}`);
    const isOpen = details.style.maxHeight;
    
    // Fecha outros ao abrir um novo
    document.querySelectorAll('.exp-details').forEach(el => el.style.maxHeight = null);
    
    if (!isOpen) {
        details.style.maxHeight = details.scrollHeight + "px";
    }
}

// Inicializa no idioma padrão (EN)
document.addEventListener('DOMContentLoaded', () => setLanguage('en'));
