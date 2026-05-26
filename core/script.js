document.addEventListener("DOMContentLoaded", () => {
    const langSelector = document.getElementById("lang-selector");
    const menuContainer = document.getElementById("dynamic-menu");
    const contentPlaceholder = document.getElementById("content-placeholder");

    // Função assíncrona principal para carregar o idioma e montar o menu
    async function carregarIdioma(idioma) {
        // Caminho corrigido refletindo a arquitetura do GitHub Pages
        const urlJson = `./core/lang/${idioma}.json`;

        try {
            const response = await fetch(urlJson);
            if (!response.ok) {
                throw new Error(`Não foi possível carregar o arquivo: ${urlJson} (Status: ${response.status})`);
            }

            const dados = await response.json();
            
            // Renderiza o menu e atualiza os placeholders
            renderizarMenu(dados.menu);
            atualizarTextosGerais(dados);

        } catch (erro) {
            console.error("Erro crítico ao processar o JSON de translação:", erro);
            // Fallback visual simples caso o arquivo falhe (ex: erro de sintaxe no JSON)
            menuContainer.innerHTML = `<div class="menu-error">Error loading menu (${idioma})</div>`;
        }
    }

    // Função responsável por gerar as divs filhas dentro do container do menu
    function renderizarMenu(menuDados) {
        // Limpa o esqueleto ou o menu antigo para evitar duplicidade
        menuContainer.innerHTML = "";

        // Garante que o JSON possui a estrutura de menu esperada
        if (!menuDados) return;

        // Passa por cada chave do objeto "menu" do seu JSON
        Object.entries(menuDados).forEach(([chave, texto]) => {
            const itemMenu = document.createElement("div");
            itemMenu.className = "menu-item";
            itemMenu.setAttribute("data-key", chave);
            itemMenu.textContent = texto;

            // Evento para navegação futura da SPA
            itemMenu.addEventListener("click", () => {
                document.querySelectorAll(".menu-item").forEach(el => el.classList.remove("active"));
                itemMenu.classList.add("active");
                console.log(`Navegando para o painel: ${chave}`);
            });

            menuContainer.appendChild(itemMenu);
        });
    }

    // Atualiza outros textos estáticos fora do menu que estejam mapeados no seu JSON
    function atualizarTextosGerais(dados) {
        if (dados.constructionMessage) {
            contentPlaceholder.textContent = dados.constructionMessage;
        }
    }

    // Escuta a mudança de seleção de idioma no dropdown
    langSelector.addEventListener("change", (e) => {
        carregarIdioma(e.target.value);
    });

    // Inicializa o site carregando o idioma padrão (Português)
    carregarIdioma("pt");
});
