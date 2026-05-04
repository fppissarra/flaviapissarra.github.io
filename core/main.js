async function renderSite() {
    const response = await fetch('/core/data.json');
    const data = await response.json();
    const lang = localStorage.getItem('selectedLang') || 'pt';
    const content = data.translations[lang];

    // 1. Injetar Header Modular
    const hResp = await fetch('/core/header.html');
    const hHtml = await hResp.text();
    document.getElementById('header-placeholder').innerHTML = hHtml;

    // 2. Preencher Dados Pessoais e Role
    document.querySelector('.user-role').innerText = content.role;

    // 3. Gerar Cards de Experiência dinamicamente
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Limpa antes de renderizar

    content.sections.forEach(section => {
        let sectionHtml = `
            <section class="project-card">
                <span class="category-label">${section.category}</span>
                ${section.items.map(item => `
                    <div class="exp-item">
                        <small>${item.date}</small>
                        <h2>${item.title}</h2>
                        <p><strong>${item.sub}</strong></p>
                        <p>${item.desc}</p>
                    </div>
                `).join('<div class="spacer"></div>')}
            </section>
        `;
        container.innerHTML += sectionHtml;
    });
}

function setLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    renderSite(); // Re-renderiza tudo com o novo idioma
}

function downloadCV() { window.print(); }

window.onload = renderSite;
