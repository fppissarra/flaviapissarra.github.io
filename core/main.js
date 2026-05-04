const translations = {
    pt: {
        role: "CIENTISTA DE DADOS | ESPECIALISTA EM DADOS INDUSTRIAIS | COMÉRCIO EXTERIOR & LOGÍSTICA PORTUÁRIA",
        nav_home: "home",
        nav_bi: "projetos bi",
        nav_cv: "[ Baixar CV ]",
        cat_logistics: "Logística & Dados Industriais",
        cat_nlp: "Tecnologia de Linguagem & NLP",
        cat_maritime: "Operações Portuárias & Comex",
        vale_title: "Estagiária de Análise de Dados",
        vale_desc: "Suporte à inteligência de dados na Vale aplicada à logística ferroviária e portuária.",
        arcelor_title: "Estagiária de Dados (CPGC)",
        arcelor_desc: "Atuação na ArcelorMittal com foco em pipelines de dados e tradução técnica."
    },
    en: {
        role: "DATA SCIENTIST | SPECIALIZED IN INDUSTRIAL DATA | FOREIGN TRADE & PORT LOGISTICS",
        nav_home: "home",
        nav_bi: "bi projects",
        nav_cv: "[ Download CV ]",
        cat_logistics: "Data & Industrial Logistics",
        cat_nlp: "Language Technology & NLP",
        cat_maritime: "Port Operations & Global Trade",
        vale_title: "Data Analyst Intern",
        vale_desc: "Data intelligence support at Vale applied to railway and port logistics.",
        arcelor_title: "Data Intern (CPGC)",
        arcelor_desc: "Work at ArcelorMittal focusing on data pipelines and technical translation."
    }
};

// Injeção do Header e aplicação do idioma
async function initHeader() {
    try {
        const response = await fetch('/core/header.html');
        const html = await response.text();
        document.getElementById('header-placeholder').innerHTML = html;
        
        const savedLang = localStorage.getItem('selectedLang') || 'pt';
        setLanguage(savedLang);
    } catch (e) { console.error("Erro ao carregar header:", e); }
}

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    localStorage.setItem('selectedLang', lang);
}

function downloadCV() {
    window.print();
}

// Executa assim que o script é lido
initHeader();
