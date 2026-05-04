document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('./core/data.json?v=' + Date.now());
        if (!response.ok) throw new Error("Erro ao carregar dados.");
        
        const data = await response.json();
        const r = data.translations.pt;

        // Mapeamento das seções do Bento Grid
        const sections = [
            { id: 'port-content', content: r.sections.port },
            { id: 'languages-content', content: r.sections.languages },
            { id: 'data-content', content: r.sections.data },
            { id: 'education-content', content: r.sections.education }
        ];

        sections.forEach(s => {
            const container = document.getElementById(s.id);
            if (container && s.content) {
                let html = `<h3>${s.content.title}</h3>`;
                s.content.items.forEach(item => {
                    html += `
                        <div class="exp-item">
                            <small>${item.d} | ${item.s}</small>
                            <h4>${item.h}</h4>
                            <p>${item.p}</p>
                        </div>
                    `;
                });
                container.innerHTML = html;
            }
        });

    } catch (err) {
        console.error("Falha técnica no carregamento operacional:", err);
    }
});
