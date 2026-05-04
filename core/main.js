document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('./core/data.json?v=' + Date.now());
        const data = await response.json();
        const r = data.translations.pt;

        // Injeção para seções de currículo (se houver containers no HTML)
        const sections = [
            { id: 'port-content', content: r.sections.port },
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
                        </div>`;
                });
                container.innerHTML = html;
            }
        });
    } catch (err) {
        console.error("Erro ao carregar dados operacionais:", err);
    }
});

// Lógica Global para o Viewer de BI
window.openBI = function(url) {
    const viewer = document.getElementById('bi-viewer');
    const frame = document.getElementById('powerbi-frame');
    const hub = document.getElementById('hub-content');
    
    if(viewer && frame) {
        hub.style.display = 'none';
        viewer.style.display = 'block';
        frame.src = url;
        document.body.style.overflow = 'hidden';
    }
};

window.closeBI = function() {
    const viewer = document.getElementById('bi-viewer');
    const hub = document.getElementById('hub-content');
    
    viewer.style.display = 'none';
    hub.style.display = 'block';
    document.getElementById('powerbi-frame').src = '';
    document.body.style.overflow = 'auto';
};
