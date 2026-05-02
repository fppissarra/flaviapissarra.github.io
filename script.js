const dictionary = {
    en: {
        role: "Data Scientist | Foreign Trade & Port Logistics | Multilingual (PT/EN/ES/IT/JP/KO) | Former Intern at Vale & ArcelorMittal",
        summary: "Polyglot professional with a multidisciplinary background in IT and Humanities. Experienced in data-driven decision making and logistics optimization.",
        sectionTitle: "Professional Profile"
    },
    pt: {
        role: "Cientista de Dados | Comércio Exterior e Logística Portuária | Multilíngue (PT/EN/ES/IT/JP/KO) | Ex-estagiária na Vale e ArcelorMittal",
        summary: "Profissional poliglota com formação multidisciplinar em TI e Letras. Experiência em tomada de decisão baseada em dados e otimização logística.",
        sectionTitle: "Perfil Profissional"
    },
    es: {
        role: "Científica de Datos | Comercio Exterior y Logística Portuaria | Multilingüe (PT/EN/ES/IT/JP/KO) | Ex-pasante en Vale y ArcelorMittal",
        summary: "Profesional poliglota con formación multidisciplinar en TI y Letras. Experiencia en toma de decisiones basada en datos y optimización logística.",
        sectionTitle: "Perfil Profesional"
    }
};

function setLanguage(lang) {
    const data = dictionary[lang];
    
    document.getElementById('txt-role').innerText = data.role;
    
    document.querySelectorAll('.lang-selector button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    const cvSection = document.getElementById('cv-content');
    cvSection.innerHTML = `
        <div class="glass-box">
            <h2 style="margin-top:0; font-weight:800;">${data.sectionTitle}</h2>
            <p style="color:#555; line-height:1.8;">${data.summary}</p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => setLanguage('en'));
