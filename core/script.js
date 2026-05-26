document.addEventListener("DOMContentLoaded", () => {
    const langSelector = document.getElementById("lang-selector");
    const menuContainer = document.getElementById("dynamic-menu");
    const contentPlaceholder = document.getElementById("content-placeholder");

    // Função assíncrona para carregar o idioma e injetar o menu
    async function carregarIdioma(idioma) {
        const urlJson = `./core/lang/${idioma}.json`;

        try {
            const response = await fetch(urlJson);
            if (!response.ok) {
                throw new Error(`Não foi possível carregar o arquivo: ${urlJson}`);
            }

            const dados = await response.json();
            
            // Renderiza o menu usando os mapeamentos nativos do seu JSON
            renderizarMenu(dados);
            atualizarTextosGerais(dados);

        } catch (erro) {
            console.error("Erro ao carregar ficheiro de tradução:", erro);
            menuContainer.innerHTML = `<div class="menu-error">Error loading menu (${idioma})</div>`;
        }
    }

    // Função que constrói as divs mapeando as suas chaves nativas diretamente
    function renderizarMenu(dados) {
        menuContainer.innerHTML = ""; // Limpa o estado anterior

        // Mapeamento direto entre a propriedade do JSON e o ID do painel correspondente
        const mapeamentoMenu = [
            { chave: "nav_bi", texto: dados.nav_bi, painel: "projects_bi" },
            { chave: "nav_translation", texto: dados.nav_translation, painel: "projects_translation" },
            { chave: "nav_about", texto: dados.nav_about, painel: "projects_about" }
        ];

        // Cria as divs dinamicamente apenas se o texto existir no JSON correspondente
        mapeamentoMenu.forEach(item => {
            if (item.texto) {
                const itemMenu = document.createElement("div");
                itemMenu.className = "menu-item";
                itemMenu.setAttribute("data-panel", item.painel);
                itemMenu.textContent = item.texto;

                // Evento de clique para gerir os estados ativos na SPA
                itemMenu.addEventListener("click", () => {
                    document.querySelectorAll(".menu-item").forEach(el => el.classList.remove("active"));
                    itemMenu.classList.add("active");
                    console.log(`Trocar para o painel de dados: ${item.painel}`);
                });

                menuContainer.appendChild(itemMenu);
            }
        });
    }

    // Atualiza mensagens adicionais na interface
    function atualizarTextosGerais(dados) {
        if (dados.constructionMessage) {
            contentPlaceholder.textContent = dados.constructionMessage;
        } else if (dados.headline) {
            // Fallback caso prefira usar o headline como texto principal provisório
            contentPlaceholder.textContent = dados.constructionMessage || "WEBSITE UNDER CONSTRUCTION";
        }
    }

    // Escuta a alteração no seletor do HTML (Dropdown)
    if (langSelector) {
        langSelector.addEventListener("change", (e) => {
            carregarIdioma(e.target.value);
        });
    }

    // Executa a inicialização automática com o seu idioma padrão
    carregarIdioma("pt");
});
