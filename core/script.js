const siteContent = {
  en: {
    headline: "Data Scientist & Technical Translator",
    nav_bi: "Projects", nav_translation: "Translation", nav_about: "Academia",
    link_github: "GitHub", link_linkedin: "LinkedIn", link_email: "Mail me",
    title_bi: "Data Science & Analytics Projects", intro_bi: "End-to-end data exploration, feature engineering, and strategic dashboards.",
    title_translation: "Technical Translation & Software Localization", intro_translation: "High-precision translation, software internationalization, and regional versioning.",
    title_about: "Courses & Certifications", intro_about: "A comprehensive list of my academic path and computational technical training.",
    projects_bi: [
      { "date": "2026", "title": "Predictive Logistics Engineer", "desc": "DEVELOPMENT: Designing port logistics operational frameworks with pipeline tracking. EXPLANATION: Uses real-time stream telemetry to mitigate maritime queue bottlenecks." },
      { "date": "2019", "title": "Web Systems & Data Engineer (ArcelorMittal)", "desc": "DEVELOPMENT: Engineered automated data pipelines for operational auditing. EXPLANATION: Built Python and SQL scripts to handle 10k monthly rows, streamlining manufacturing data consolidation by 30%." },
      { "date": "2018", "title": "Automation & Telemetry Analyst (Vale S.A.)", "desc": "DEVELOPMENT: Automated key performance indicators via custom workflows. EXPLANATION: Deployed live Power BI corporate dashboards to support high-level executive decision-making." }
    ],
    projects_translation: [
      { "date": "2020", "title": "Website Localization Specialist (Murakami)", "desc": "DEVELOPMENT: Executed website localization and internationalization testing. EXPLANATION: Adapted digital assets to ensure a native user experience (UX) during multilingual deployment." },
      { "date": "2023", "title": "AI Translation & LLM Coordinator (CTecL)", "desc": "DEVELOPMENT: Investigated how LLMs and advanced NLP tools handle poetic rhythm. EXPLANATION: Managed computational linguistic datasets to evaluate machine translation output." },
      { "date": "2024", "title": "Dataset Evaluator & MTPE Specialist (CTecL)", "desc": "DEVELOPMENT: Performed Machine Translation Post-Editing workflows. EXPLANATION: Curated trilingual datasets (EN/ES/PT), ensuring absolute terminological precision and data integrity." }
    ],
    projects_about: [
      { "date": "2025", "title": "Published Literary Translator", "desc": "DEVELOPMENT: Co-translated and published the book 'Ora ga haru: minha primavera' (2025). EXPLANATION: Applied cross-cultural translation frameworks to preserve delicate rhythmic and semantic styles." },
      { "date": "2022", "title": "NLP Research Engineer (Haikai Data Project)", "desc": "DEVELOPMENT: Developed custom text analysis algorithms to extract text patterns. EXPLANATION: Engineered automated text processing pipelines with Python to parse unstructured creative datasets." },
      { "date": "2021", "title": "Data Pipeline Developer (Reler & Fazer)", "desc": "DEVELOPMENT: Constructed automated data processing pipelines and maintained relational databases. EXPLANATION: Used clean JavaScript, PHP, and MySQL to streamline academic content delivery." },
      { "date": "2012 - 2023", "title": "Academic Degrees & Diplomas (IFES)", "desc": "DEVELOPMENT: Completed official multi-disciplinary certifications at IFES. EXPLANATION: Built a specialized dual foundation balancing computational data systems with advanced text processing." }
    ]
  },
  pt: {
    headline: "Cientista de Dados e Tradutora",
    nav_bi: "Projetos", nav_translation: "Tradução", nav_about: "Academia",
    link_github: "Meu GitHub", link_linkedin: "Meu LinkedIn", link_email: "Contate-me",
    title_bi: "Projetos de Ciência de Dados", intro_bi: "Exploração de dados, engenharia de recursos e construção de dashboards estratégicos.",
    title_translation: "Tradução Técnica e Localização de Software", intro_translation: "Tradução de alta precisão, internacionalização de software e versionamento multicultural.",
    title_about: "Cursos e Certificações", intro_about: "Uma lista detalhada da minha formação acadêmica e treinamento técnico computacional.",
    projects_bi: [
      { "date": "2026", "title": "Engenheira de Logística Preditiva", "desc": "DESENVOLVIMENTO: Desenvolvendo estruturas de logística portuária com rastreamento dinâmico. EXPLICAÇÃO: Utiliza telemetria em tempo real para mitigar gargalos em filas marítimas portuárias." },
      { "date": "2019", "title": "Engenheira de Dados (ArcelorMittal)", "desc": "DESENVOLVIMENTO: Construção de pipelines automatizados de dados para auditoria operacional. EXPLICAÇÃO: Criação de scripts em Python e SQL para processar 10 mil linhas mensais, reduzindo o tempo de consolidação em 30%." },
      { "date": "2018", "title": "Analista de Telemetria (Vale S.A.)", "desc": "DESENVOLVIMENTO: Automação de indicadores por meio de fluxos de dados personalizados. EXPLICAÇÃO: Implantação de painéis corporativos no Power BI para suporte a decisões executivas." }
    ],
    projects_translation: [
      { "date": "2020", "title": "Especialista em Localização Web (Murakami)", "desc": "DESENVOLVIMENTO: Execução de localização de sites e testes de internacionalização. EXPLICAÇÃO: Adaptação de ativos digitais para garantir uma experiência de usuário (UX) nativa e multilíngue." },
      { "date": "2023", "title": "Coordenadora de Tradução de IA (CTecL)", "desc": "DESENVOLVIMENTO: Investigação de como modelos LLM e NLP lidam com ritmo e métrica poética. EXPLICAÇÃO: Gestão de conjuntos de dados linguísticos computacionais para avaliar a tradução automática." },
      { "date": "2024", "title": "Especialista em MTPE (CTecL)", "desc": "DESENVOLVIMENTO: Execução de fluxos de Pós-Edição de Tradução Automática de alto volume. EXPLICAÇÃO: Curadoria de conjuntos de dados trilíngues (EN/ES/PT) para garantir precisão terminológica absoluta." }
    ],
    projects_about: [
      { "date": "2025", "title": "Tradutora Literária Publicada", "desc": "DESENVOLVIMENTO: Cotradução e publicação do livro de poesia 'Ora ga haru: minha primavera' (2025). EXPLICAÇÃO: Aplicação de estruturas de tradução avançadas para preservar estilos estruturais e rítmicos." },
      { "date": "2022", "title": "Engenheira de Pesquisa em NLP (Haikai Data)", "desc": "DESENVOLVIMENTO: Desenvolvimento de algoritmos customizados para extração de padrões textuais. EXPLICAÇÃO: Pipelines de processamento de texto com Python para analisar dados criativos não estruturados." },
      { "date": "2021", "title": "Desenvolvedora de Pipelines (Reler & Fazer)", "desc": "DESENVOLVIMENTO: Construção de pipelines automatizados e manutenção de bancos de dados relacionais. EXPLICAÇÃO: Uso de JavaScript, PHP e MySQL para otimizar a entrega de conteúdo multidisciplinar." },
      { "date": "2012 - 2023", "title": "Graus Acadêmicos e Diplomas (IFES)", "desc": "DESENVOLVIMENTO: Conclusão de certificações multidisciplinares oficiais no IFES. EXPLICAÇÃO: Base especializada equilibrando sistemas computacionais com processamento linguístico." }
    ]
  }
};

function renderCards(panelId, projectsArray) {
  const grid = document.querySelector(`#panel-${panelId} .projects-grid`);
  if (!grid) return;
  
  grid.innerHTML = '';
  projectsArray.forEach(p => {
    const html = `
      <div class="project-card-inner" style="display: grid; grid-template-columns: 120px 1fr; gap: 20px; width: 100%;">
        <div style="font-weight: 700; color: var(--text-muted); font-size: 0.9rem;">${p.date}</div>
        <div>
          <h3 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; margin-bottom: 6px; color: var(--text-dark);">${p.title}</h3>
          <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-muted);">${p.desc}</p>
        </div>
      </div>
    `;
    grid.innerHTML += panelId === 'bi' ? `<a href="https://github.com" target="_blank" class="project-card">${html}</a>` : `<div class="project-card">${html}</div>`;
  });
}

function applyLanguage(code) {
  const d = siteContent[code];
  if (!d) return;

  const avatar = document.querySelector('.profile-avatar');
  if (avatar) avatar.src = "https://github.com.png";

  document.querySelector('.profile-headline').textContent = d.headline;
  document.querySelector('[data-panel="bi"]').textContent = d.nav_bi;
  document.querySelector('[data-panel="translation"]').textContent = d.nav_translation;
  document.querySelector('[data-panel="about"]').textContent = d.nav_about;

  ['bi', 'translation', 'about'].forEach(id => {
    document.querySelector(`#panel-${id} .section-title`).textContent = d[`title_${id}`];
    document.querySelector(`#panel-${id} .section-intro`).textContent = d[`intro_${id}`];
  });

  document.getElementById('link-gh').textContent = d.link_github;
  document.getElementById('link-ln').textContent = d.link_linkedin;
  document.getElementById('link-em').textContent = d.link_email;

  renderCards('bi', d.projects_bi);
  renderCards('translation', d.projects_translation);
  renderCards('about', d.projects_about);
}

document.addEventListener('DOMContentLoaded', () => {
  /* Força carregar em inglês de forma imperativa e limpa */
  applyLanguage('en');

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-panel');
      document.querySelectorAll('.content-panel, .nav-btn').forEach(e => e.classList.remove('active'));
      document.getElementById(`panel-${id}`).classList.add('active');
      btn.classList.add('active');
    });
  });

  const select = document.getElementById('custom-lang-select');
  if (select) {
    select.value = 'en';
    select.addEventListener('change', (e) => applyLanguage(e.target.value));
  }
});
