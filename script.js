const dictionary = {
    en: {
        role: "Teacher, Translator, Researcher in Computational Linguistics and AI-assisted translation",
        summary: "Lead Computational Linguist and AI Data Researcher (CTecL: AI-Assisted Poetic Translation Lab).",
        xpTitle: "Professional Timeline"
    },
    pt: {
        role: "Professora, Tradutora e Pesquisadora em Linguística Computacional e Tradução assistida por IA",
        summary: "Líder de Pesquisa em Linguística Computacional e Dados de IA (CTecL: Laboratório de Tradução Poética Assistida por IA).",
        xpTitle: "Linha do Tempo Profissional"
    },
    es: {
        role: "Profesora, Traductora e Investigadora en Lingüística Computacional y Traducción asistida por IA",
        summary: "Líder de Investigación en Lingüística Computacional y Datos de IA (CTecL: Laboratorio de Traducción Poética Asistida por IA).",
        xpTitle: "Línea de Tiempo Profesional"
    }
};

function setLanguage(lang) {
    const data = dictionary[lang];
    
    // Atualiza o cargo/descrição
    document.getElementById('txt-role').innerText = data.role;
    
    // Atualiza estados dos botões
    document.querySelectorAll('.lang-selector button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    // Atualiza a caixa de conteúdo
    const cvSection = document.getElementById('cv-content');
    cvSection.innerHTML = `
        <div class="glass-box">
            <h2 style="margin-top:0; font-weight:800; letter-spacing:-1px;">${data.xpTitle}</h2>
            <p style="line-height:1.7; font-size:1.05rem; color:#4a4a4a;">${data.summary}</p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => setLanguage('en'));
