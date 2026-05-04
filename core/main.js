document.addEventListener('DOMContentLoaded', () => {
    fetch('core/data.json')
        .then(res => res.json())
        .then(data => {
            const resume = data.translations.pt;
            
            // Renderiza Sidebar
            const headerPlaceholder = document.getElementById('header-placeholder');
            headerPlaceholder.innerHTML = `
                <h1 style="font-weight:200; font-size:2.5rem; margin-bottom:10px;">${resume.name}</h1>
                <p style="color:#64748b; margin-bottom:30px;">${resume.role}</p>
                <div style="display:flex; flex-direction:column; gap:10px;">
                    <a href="mailto:${resume.email}" style="text-decoration:none; color:var(--navy); font-size:0.9rem;">E-mail</a>
                    <a href="https://${resume.linkedin}" target="_blank" style="text-decoration:none; color:var(--navy); font-size:0.9rem;">LinkedIn</a>
                </div>
            `;

            // Renderiza Seções na ordem PORT - LANGUAGES - DATA
            renderSection('port-content', resume.sections.port);
            renderSection('languages-content', resume.sections.languages);
            renderSection('data-content', resume.sections.data);
            renderSection('education-content', resume.sections.education);
        });
});

function renderSection(id, section) {
    const el = document.getElementById(id);
    if (!el) return;
    let itemsHtml = section.items.map(i => `
        <div class="exp-item">
            <small>${i.d} — ${i.s}</small>
            <h4>${i.h}</h4>
            <p>${i.p}</p>
        </div>
    `).join('');
    el.innerHTML = `<h3>${section.title}</h3>${itemsHtml}`;
}
