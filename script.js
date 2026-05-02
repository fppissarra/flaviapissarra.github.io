const dictionary = {
    en: {
        role: "Data Scientist | Foreign Trade & Port Logistics | Multilingual (PT/EN/ES/IT/JP/KO) | Former Intern at Vale & ArcelorMittal",
        xpTitle: "Professional Timeline",
        eduTitle: "Academic Background",
        experiences: [
            {
                company: "CTecL Lab - IFES",
                position: "Lead Computational Linguist & AI Researcher",
                period: "2024 – Present",
                desc: "Coordinating an AI-assisted translation lab, exploring machine translation and natural language processing (NLP)."
            },
            {
                company: "Vale / ArcelorMittal",
                position: "Logistics & Foreign Trade Analyst",
                period: "Previous Roles",
                desc: "Focused on operational metrics, data-driven decisions, and port logistics management."
            }
        ],
        education: [
            {
                inst: "IFES Serra",
                degree: "M.Sc. in Applied Computing (PPCOMP)",
                period: "Starting 2027",
                desc: "Focusing on advanced computational methods and data intelligence."
            },
            {
                inst: "IFES Vitória",
                degree: "BA in Letters / Language",
                period: "Completed",
                desc: "Foundation in linguistics and multilingual proficiency."
            },
            {
                inst: "IFES Serra",
                degree: "ICT Technician",
                period: "Completed",
                desc: "Technical background in information and communication technology."
            }
        ]
    },
    pt: {
        role: "Cientista de Dados | Comércio Exterior e Logística Portuária | Multilíngue (PT/EN/ES/IT/JP/KO) | Ex-estagiária na Vale e ArcelorMittal",
        xpTitle: "Linha do Tempo Profissional",
        eduTitle: "Formação Acadêmica",
        experiences: [
            {
                company: "Lab CTecL - IFES",
                position: "Pesquisadora Líder em Linguística Computacional e IA",
                period: "2024 – Atual",
                desc: "Coordenação de laboratório de tradução assistida por IA, explorando tradução automática e processamento de linguagem natural (NLP)."
            },
            {
                company: "Vale / ArcelorMittal",
                position: "Analista de Logística e Comércio Exterior",
                period: "Experiências Anteriores",
                desc: "Foco em métricas operacionais, decisões baseadas em dados e gestão de logística portuária."
            }
        ],
        education: [
            {
                inst: "IFES Serra",
                degree: "Mestrado em Computação Aplicada (PPCOMP)",
                period: "Início em 2027",
                desc: "Foco em métodos computacionais avançados e inteligência de dados."
            },
            {
                inst: "IFES Vitória",
                degree: "Licenciatura em Letras",
                period: "Concluído",
                desc: "Base sólida em linguística e proficiência multilíngue."
            },
            {
                inst: "IFES Serra",
                degree: "Técnica em Informática",
                period: "Concluído",
                desc: "Formação técnica em tecnologia da informação e comunicação."
            }
        ]
    }
};

function setLanguage(lang) {
    const data = dictionary[lang] || dictionary.en;
    
    // Atualiza Header
    document.getElementById('txt-role').innerText = data.role;
    
    // Botões Ativos
    document.querySelectorAll('.lang-selector button').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Renderiza Experiências
    const xpContainer = document.getElementById('experience-container');
    let xpHTML = `<h2 class="section-label">${data.xpTitle}</h2>`;
    data.experiences.forEach(exp => {
        xpHTML += `
            <div class="glass-box experience-card">
                <div class="exp-header">
                    <span class="exp-company">${exp.company}</span>
                    <span class="exp-period">${exp.period}</span>
                </div>
                <h3 class="exp-position">${exp.position}</h3>
                <p class="exp-desc">${exp.desc}</p>
            </div>
        `;
    });
    xpContainer.innerHTML = xpHTML;

    // Renderiza Educação
    const eduContainer = document.getElementById('education-container');
    let eduHTML = `<h2 class="section-label">${data.eduTitle}</h2>`;
    data.education.forEach(edu => {
        eduHTML += `
            <div class="glass-box experience-card">
                <div class="exp-header">
                    <span class="exp-company">${edu.inst}</span>
                    <span class="exp-period">${edu.period}</span>
                </div>
                <h3 class="exp-position">${edu.degree}</h3>
                <p class="exp-desc">${edu.desc}</p>
            </div>
        `;
    });
    eduContainer.innerHTML = eduHTML;
}

document.addEventListener('DOMContentLoaded', () => setLanguage('en'));
