// Armazenamos apenas o conteúdo original (em Inglês, por exemplo)
const originalContent = {
    role: "Data Scientist | Foreign Trade & Port Logistics | Multilingual (PT/EN/ES/IT/JP/KO) | Former Intern at Vale & ArcelorMittal",
    // ... suas outras strings originais
};

async function translateContent(targetLang) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    for (let el of elementsToTranslate) {
        const text = el.innerText;
        
        // Chamada para uma API de tradução (Exemplo usando uma função serveless ou endpoint de tradução)
        try {
            const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURI(text)}`);
            const result = await response.json();
            el.innerText = result[0][0][0];
        } catch (error) {
            console.error("Erro na tradução via IA:", error);
        }
    }
}

// No seu seletor de idiomas, basta chamar:
// translateContent('pt');
