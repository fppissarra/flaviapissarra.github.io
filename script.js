const content = {
    pt: {
        role: "Professora, Tradutora e Pesquisadora em Linguística Computacional e Tradução assistida por IA",
        badges: ["EN", "ES", "PT", "IT", "JP", "KR", "Especialista em TI & NLP", "Serra, ES"],
        timelineTitle: "Linha do Tempo Profissional",
        experiences: [
            {
                period: "2024–2026",
                title: "Pesquisadora Principal & Líder em IA, Lab CTecL",
                tags: ["Linguística Computacional", "Estratégia de IA & NLP"],
                details: "Coordenação do laboratório CTecL no IFES, explorando modelos de linguagem e tradução automática."
            },
            {
                period: "2020–2023",
                title: "Tradutora Freelancer & Educadora",
                tags: ["Inglês", "Espanhol", "Tradução Técnica"],
                details: "Serviços de tradução e ensino de idiomas com foco em proficiência C2."
            }
        ]
    },
    en: {
        role: "Teacher, Translator, Researcher in Computational Linguistics and AI-assisted translation",
        badges: ["EN", "ES", "PT", "IT", "JP", "KR", "IT & NLP Specialist", "Serra, ES"],
        timelineTitle: "Professional Timeline",
        experiences: [
            {
                period: "2024–2026",
                title: "Lead Computational Linguist & AI Researcher, CTecL Lab",
                tags: ["Computational Linguistics", "AI & NLP Strategy"],
                details: "Coordinating CTecL lab at IFES, exploring language models and machine translation."
            },
            {
                period: "2020–2023",
                title: "Freelance Translator & Educator",
                tags: ["English", "Spanish", "Technical Translation"],
                details: "Translation services and language teaching with a focus on C2 proficiency."
            }
        ]
    }
};

function renderTimeline(lang) {
    const data = content[lang];
    
    // Atualiza cabeçalho e descrição
    document.querySelector('.role-desc').innerText = data.role;
    document.querySelector('.section-title').innerText = data.timelineTitle;

    // Atualiza os Badges (Idiomas e Especialidades)
    const badgeContainer = document.querySelector('.badge-row');
    badgeContainer.innerHTML = `<span class="label">Polyglot:</span>`;
    data.badges.forEach((text, index) => {
        const isSpecial = text.includes("Specialist") || text.includes("Especialista");
        badgeContainer.innerHTML += `<span class="badge ${isSpecial ? 'special' : ''}">${text}</span>`;
    });

    // Renderiza os itens da Timeline
    const timelineContainer = document.querySelector('.timeline-items-wrapper');
    timelineContainer.innerHTML = ''; // Limpa antes de renderizar

    data.experiences.forEach(exp => {
        const itemHtml = `
            <div class="timeline-item">
                <div class="time-label">${exp.period}</div>
                <div class="node"></div>
                <div class="glass-card item-card">
                    <h3>${exp.title}</h3>
                    <div class="tags">
                        ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <p class="exp-details" style="display:none; margin-top:15px; font-size:0.9rem; color:#444;">
                        ${exp.details}
                    </p>
                </div>
            </div>
        `;
        timelineContainer.insertAdjacentHTML('beforeend', itemHtml);
    });

    // Adiciona evento de clique para expandir detalhes (Interatividade)
    document.querySelectorAll('.item-card').forEach(card => {
        card.addEventListener('click', () => {
            const details = card.querySelector('.exp-details');
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
    });
}

function changeLang(lang) {
    // Gerencia as classes ativas nos botões
    document.querySelectorAll('.btn-lang').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    renderTimeline(lang);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Cria um wrapper para os itens se não existir
    if(!document.querySelector('.timeline-items-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'timeline-items-wrapper';
        document.querySelector('.timeline-container').appendChild(wrapper);
    }
    renderTimeline('pt');
});
