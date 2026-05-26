// 1. Função principal de navegação
async function openCategory(categoryKey) {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        // Verifica se a categoria existe no JSON
        const cat = data[categoryKey];
        if (!cat) {
            console.error("Categoria não encontrada:", categoryKey);
            return;
        }

        // Ativa o modo de duas colunas (Layout 30/70)
        document.getElementById('main-wrapper').classList.add('is-open');
        const displayArea = document.getElementById('display-area');
        displayArea.classList.remove('hidden');

        // Preenche o conteúdo dinâmico
        document.getElementById('display-title').textContent = cat.title;
        document.getElementById('display-description').textContent = cat.description;
        
        const container = document.getElementById('sub-links-container');
        container.innerHTML = '';
        
        // Cria os botões de itens (Projetos ou Links)
        cat.items.forEach(item => {
            const btn = document.createElement('button');
            btn.textContent = item.name;
            btn.className = 'btn';
            btn.onclick = () => handleItemClick(item);
            container.appendChild(btn);
        });

    } catch (error) {
        console.error("Erro ao carregar o JSON:", error);
    }
}

// 2. Manipulador de clique nos itens (Iframe ou Link)
function handleItemClick(item) {
    const container = document.getElementById('sub-links-container');
    container.innerHTML = '';
    
    if (item.type === 'embed') {
        const iframe = document.createElement('iframe');
        iframe.src = item.url;
        iframe.style.width = "100%";
        iframe.style.height = "600px";
        iframe.style.border = "none";
        container.appendChild(iframe);
    } else {
        window.open(item.url, '_blank');
    }
}

// 3. Voltar ao menu principal
function goBack() {
    document.getElementById('main-wrapper').classList.remove('is-open');
    document.getElementById('display-area').classList.add('hidden');
}
