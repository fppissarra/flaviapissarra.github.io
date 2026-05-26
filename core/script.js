// core/script.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inicia o processo injetando a Sidebar primeiro
    injectSidebar();
});

/**
 * ==========================================
 * MÓDULO 1: INJEÇÃO DO COMPONENTE (SIDEBAR)
 * ==========================================
 */
function injectSidebar() {
    const sidebarPlaceholder = document.getElementById("sidebar-placeholder");
    
    if (sidebarPlaceholder) {
        fetch('/core/sidebar.html')
            .then(response => {
                if (!response.ok) throw new Error("Erro ao carregar a sidebar.");
                return response.text();
            })
            .then(htmlData => {
                // Cola o HTML do menu dentro da página atual
                sidebarPlaceholder.innerHTML = htmlData;
                
                // Só inicia a tradução DEPOIS que o menu existir na tela
                initTranslationSystem();
            })
            .catch(error => {
                console.error("Falha na Injeção do Menu:", error);
                // Inicia a tradução mesmo se o menu falhar, para não quebrar o resto do site
                initTranslationSystem();
            });
    } else {
        // Se a página não tiver menu (ex: um currículo limpo), apenas traduz o conteúdo
        initTranslationSystem();
    }
}

/**
 * ==========================================
 * MÓDULO 2: SISTEMA DE TRADUÇÃO (6 IDIOMAS)
 * ==========================================
 */
function initTranslationSystem() {
    // O Dicionário JSON Centralizado (Blindado contra erros de CORS)
    const translations = {
        "pt": {
            "role": "Ciência de Dados | Logística Portuária",
            "nav_home": "Início",
            "nav_bi": "Projetos BI",
            "nav_tra": "Tradução & Linguística",
            "summary_title": "Resumo Profissional",
            "summary_desc": "Especialista em transição para áreas de dados e operações portuárias, unindo inteligência linguística com análise técnica."
        },
        "en": {
            "role": "Data Science | Port Logistics",
            "nav_home": "Home",
            "nav_bi": "BI Projects",
            "nav_tra": "Translation & Linguistics",
            "summary_title": "Professional Summary",
            "summary_desc": "Specialist transitioning into data and port operations, combining linguistic intelligence with technical analysis."
        },
        "es": {
            "role": "Ciencia de Datos | Logística Portuaria",
            "nav_home": "Inicio",
            "nav_bi": "Proyectos BI",
            "nav_tra": "Traducción y Lingüística",
            "summary_title": "Resumen Profesional",
            "summary_desc": "Especialista en transición a áreas de datos y operaciones portuarias, combinando inteligencia lingüística con análisis técnico."
        },
        "it": {
            "role": "Scienza dei Dati | Logistica Portuale",
            "nav_home": "Home",
            "nav_bi": "Progetti BI",
            "nav_tra": "Traduzione e Linguistica",
            "summary_title": "Riepilogo Professionale",
            "summary_desc": "Specialista in transizione verso dati e operazioni portuali, unendo intelligenza linguistica e analisi tecnica."
        },
        "jp": {
            "role": "データサイエンス | 港湾ロジスティクス",
            "nav_home": "ホーム",
            "nav_bi": "BIプロジェクト",
            "nav_tra": "翻訳と語学",
            "summary_title": "職務経歴の概要",
            "summary_desc": "語学力と技術分析を融合させ、データおよび港湾業務分野へ移行中のスペシャリスト。"
        },
        "ko": {
            "role": "데이터 사이언스 | 항만 물류",
            "nav_home": "홈",
            "nav_bi": "BI 프로젝트",
            "nav_tra": "번역 및 언어학",
            "summary_title": "전문 요약",
            "summary_desc": "언어적 지능과 기술적 분석을 결합하여 데이터 및 항만 운영 분야로 전환 중인 전문가."
        }
    };

    // Define a ordem dos idiomas que o botão vai percorrer ao ser clicado
    const languageCycle = ['pt', 'en', 'es', 'it', 'jp', 'ko'];
    
    // Recupera o idioma salvo no navegador ou usa 'pt' como padrão
    let currentLang = localStorage.getItem('siteLang') || 'pt';
    const langBtn = document.getElementById('langBtn');

    // Função que aplica os textos na tela
    function applyTranslations(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Atualiza a etiqueta do botão para mostrar qual idioma está ativo
        if (langBtn) {
            langBtn.innerText = lang.toUpperCase();
        }
    }

    // Lógica do clique no botão de idioma
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            // Descobre qual é o próximo idioma da lista
            let currentIndex = languageCycle.indexOf(currentLang);
            let nextIndex = (currentIndex + 1) % languageCycle.length;
            
            currentLang = languageCycle[nextIndex];
            
            // Salva a escolha do usuário e aplica os textos
            localStorage.setItem('siteLang', currentLang);
            applyTranslations(currentLang);
        });
    }

    // Roda a tradução inicial assim que a página (e o menu) terminarem de carregar
    applyTranslations(currentLang);
}
