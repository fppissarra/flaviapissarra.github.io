document.addEventListener("DOMContentLoaded", () => {
    const langSelector = document.getElementById("lang-selector");
    
    const domMap = {
        navBi: document.getElementById("nav-bi"),
        navTranslation: document.getElementById("nav-translation"),
        navAbout: document.getElementById("nav-about"),
        profileHeadline: document.getElementById("profile-headline"),
        linkGithub: document.getElementById("link-github"),
        linkLinkedin: document.getElementById("link-linkedin"),
        linkEmail: document.getElementById("link-email"),
        constructionMessage: document.getElementById("construction-message"),
        titleBi: document.getElementById("title-bi"),
        introBi: document.getElementById("intro-bi"),
        titleTranslation: document.getElementById("title-translation"),
        introTranslation: document.getElementById("intro-translation"),
        titleAbout: document.getElementById("title-about"),
        introAbout: document.getElementById("intro-about")
    };

    const profileImg = document.getElementById("profile-img");

    async function carregarDinamicoJSON(idioma) {
        const path = `./core/lang/${idioma}.json`;

        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`Não foi possível ler: ${path}`);
            
            const dados = await response.json();

            if (dados.profile_image && profileImg) {
                profileImg.src = dados.profile_image;
                profileImg.style.display = "block";
            }

            if (domMap.navBi) domMap.navBi.textContent = dados.nav_bi || "";
            if (domMap.navTranslation) domMap.navTranslation.textContent = dados.nav_translation || "";
            if (domMap.navAbout) domMap.navAbout.textContent = dados.nav_about || "";
            if (domMap.profileHeadline) domMap.profileHeadline.textContent = dados.headline || "";
            if (domMap.linkGithub) domMap.linkGithub.textContent = dados.link_github || "GitHub";
            if (domMap.linkLinkedin) domMap.linkLinkedin.textContent = dados.link_linkedin || "LinkedIn";
            if (domMap.linkEmail) domMap.linkEmail.textContent = dados.link_email || "Mail me";
            
            if (domMap.constructionMessage) {
                domMap.constructionMessage.textContent = dados.constructionMessage || "WEBSITE UNDER CONSTRUCTION";
            }

            if (domMap.titleBi) domMap.titleBi.textContent = dados.title_bi || "";
            if (domMap.introBi) domMap.introBi.textContent = dados.intro_bi || "";
            if (domMap.titleTranslation) domMap.titleTranslation.textContent = dados.title_translation || "";
            if (domMap.introTranslation) domMap.introTranslation.textContent = dados.intro_translation || "";
            if (domMap.titleAbout) domMap.titleAbout.textContent = dados.title_about || "";
            if (domMap.introAbout) domMap.introAbout.textContent = dados.intro_about || "";

            processarSubLista("container-projects-bi", dados.projects_bi);
            processarSubLista("container-projects-translation", dados.projects_translation);
            processarSubLista("container-projects-about", dados.projects_about);

        } catch (error) {
            console.error("Falha crítica na injeção assíncrona:", error);
        }
    }

    function processarSubLista(targetId, arrayProjetos) {
        const container = document.getElementById(targetId);
        if (!container) return;
        container.innerHTML = "";

        if (arrayProjetos && Array.isArray(arrayProjetos)) {
            arrayProjetos.forEach(proj => {
                const card = document.createElement("div");
                card.className = "project-card";
                card.innerHTML = `
                    <span class="project-date">${proj.date}</span>
                    <h4 class="project-title">${proj.title}</h4>
                    <p class="project-desc">${proj.desc}</p>
                `;
                container.appendChild(card);
            });
        }
    }

    document.querySelectorAll(".menu-item").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".menu-item").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".viewport-panel").forEach(p => p.classList.remove("active"));
            
            btn.classList.add("active");
            const targetId = btn.getAttribute("data-target");
            const targetPanel = document.getElementById(targetId);
            
            const constPanel = document.getElementById("construction-panel");
            if (constPanel) constPanel.classList.remove("active");
            
            if (targetPanel) targetPanel.classList.add("active");
        });
    });

    if (langSelector) {
        langSelector.addEventListener("change", (e) => {
            carregarDinamicoJSON(e.target.value);
        });
    }

    carregarDinamicoJSON("pt");
});
