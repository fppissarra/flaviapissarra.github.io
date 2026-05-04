document.addEventListener('DOMContentLoaded', () => {
    fetch('core/data.json')
        .then(response => response.json())
        .then(data => {
            const resume = data.translations.pt;
            
            // Injeção da Sidebar (Nome e Contatos)
            const sidebar = document.querySelector('.identity-col');
            sidebar.innerHTML = `
                <div class="profile-info">
                    <h1>${resume.name}</h1>
                    <p class="role-text">${resume.role}</p>
                    <nav class="links">
                        <a href="mailto:${resume.email}">E-mail</a>
                        <a href="https://${resume.linkedin}" target="_blank">LinkedIn</a>
                    </nav>
                </div>
                <div class="sidebar-action print-hide">
                    <button class="mop-btn" onclick="window.print()">Gerar PDF do Currículo</button>
                </div>
            `;

            // Injeção dos Cards (Ordem: Porto, Idiomas, Data, Education)
            renderSection('port-content', resume.sections.port);
            renderSection('languages-content', resume.sections.languages);
            renderSection('data-content', resume.sections.data);
            renderSection('education-content', resume.sections.education);
        })
        .catch(error => console.error('Erro ao carregar dados:', error));
});

function renderSection(containerId, sectionData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `<h3>${sectionData.title}</h3>`;
    sectionData.items.forEach(item => {
        html += `
            <div class="exp-item">
                <small>${item.d} — ${item.s}</small>
                <h4>${item.h}</h4>
                <p>${item.p}</p>
            </div>
        `;
    });
    container.innerHTML = html;
}
