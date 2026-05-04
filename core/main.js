document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('./core/data.json?v=' + Date.now());
        const data = await response.json();
        const r = data.translations.pt;

        // Injeta Sidebar com Objetivo Profissional
        document.getElementById('header-placeholder').innerHTML = `
            <h1>${r.name}</h1>
            <p style="font-weight:600; color:#006666;">${r.role}</p>
            <p class="objective-text">${r.objective}</p>
            <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
                <span>📍 Serra, ES</span>
                <a href="mailto:${r.email}" style="color:inherit;">${r.email}</a>
                <a href="https://${r.linkedin}" target="_blank" style="color:inherit;">LinkedIn</a>
            </div>
        `;

        // Mapeamento das Seções
        const mapping = [
            { id: 'port-content', sec: r.sections.port },
            { id: 'languages-content', sec: r.sections.languages },
            { id: 'data-content', sec: r.sections.data },
            { id: 'education-content', sec: r.sections.education }
        ];

        mapping.forEach(item => {
            const el = document.getElementById(item.id);
            if (el && item.sec) {
                let itemsHtml = item.sec.items.map(i => `
                    <div class="exp-item">
                        <small>${i.d} | ${i.s}</small>
                        <h4>${i.h}</h4>
                        <p>${i.p}</p>
                    </div>
                `).join('');
                el.innerHTML = `<h3>${item.sec.title}</h3>${itemsHtml}`;
            }
        });
    } catch (err) {
        console.error("Erro na carga de dados:", err);
    }
});
