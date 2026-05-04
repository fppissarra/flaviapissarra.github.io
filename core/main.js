const loadData = async () => {
    try {
        const response = await fetch('./core/data.json?v=' + Date.now());
        const data = await response.json();
        const r = data.translations.pt;

        // Injeta Nome e Cargo na Sidebar (25%)
        document.getElementById('header-placeholder').innerHTML = `
            <h1 style="font-weight:200; font-size:2.2rem;">${r.name}</h1>
            <p style="color:#64748b; margin-bottom:25px;">${r.role}</p>
            <div style="display:flex; flex-direction:column; gap:10px;">
                <a href="mailto:${r.email}" style="color:#1a2a3a; text-decoration:none;">E-mail</a>
                <a href="https://${r.linkedin}" target="_blank" style="color:#1a2a3a; text-decoration:none;">LinkedIn</a>
            </div>
        `;

        // Injeta as seções: Porto -> Idiomas -> Dados -> Educação
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
                    <div style="margin-bottom:20px;">
                        <small style="color:#94a3b8; font-weight:700; font-size:0.7rem;">${i.d} — ${i.s}</small>
                        <h4 style="margin:5px 0;">${i.h}</h4>
                        <p style="font-size:0.85rem; color:#475569;">${i.p}</p>
                    </div>
                `).join('');
                el.innerHTML = `<h3 style="font-size:0.65rem; letter-spacing:2px; text-transform:uppercase; color:#94a3b8; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:20px;">${item.sec.title}</h3>${itemsHtml}`;
            }
        });
    } catch (err) {
        console.error("Erro ao carregar os dados. Verifique se o arquivo data.json está na pasta core.", err);
    }
};

loadData();
