// Seus dados "chumbados" no código. Seguro, rápido e à prova de bugs.
const portfolioData = [
    {
        title: "Flávia P. Pissarra",
        subtitle: "Apresentação",
        desc: "Bem-vinda ao meu portfólio. Sou especialista em transição para áreas de dados e logística portuária. Navegue para explorar minhas experiências."
    },
    {
        title: "Operação Portuária",
        subtitle: "Logística & Comex",
        desc: "Foco na integração eficiente entre ferrovia e navio. Monitoramento de fluxos e procedimentos de carga/descarga com vivência industrial prática."
    },
    {
        title: "Ciência de Dados",
        subtitle: "Business Intelligence",
        desc: "Manipulação de bases de dados e desenvolvimento de indicadores operacionais. Experiência na avaliação e otimização de amostras para modelos de IA."
    },
    {
        title: "Comunicação Multilíngue",
        subtitle: "Inglês (C2) & Espanhol (C2)",
        desc: "Proficiência técnica para atuar na interface com tripulações estrangeiras, negociações internacionais e traduções de alto nível."
    }
];

let currentIndex = 0;

// Elementos da interface
const titleEl = document.getElementById('title');
const subtitleEl = document.getElementById('subtitle');
const descEl = document.getElementById('desc');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Função de atualização da tela
function updateScreen() {
    const currentItem = portfolioData[currentIndex];

    titleEl.innerText = currentItem.title;
    subtitleEl.innerText = currentItem.subtitle;
    descEl.innerText = currentItem.desc;

    // Desativa o botão "Voltar" no início e "Avançar" no final
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === (portfolioData.length - 1);
}

// Ações de clique
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateScreen();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < portfolioData.length - 1) {
        currentIndex++;
        updateScreen();
    }
});

// Inicia o programa
updateScreen();
