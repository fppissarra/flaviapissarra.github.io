(async function() {
    try {
        const response = await fetch('/core/header.html');
        const data = await response.text();
        const placeholder = document.getElementById('header-placeholder');
        if (placeholder) {
            placeholder.innerHTML = data;
            // Dispara um evento customizado caso precise de algo após o load
            window.dispatchEvent(new Event('headerLoaded'));
        }
    } catch (error) {
        console.error('Erro na carga do core:', error);
    }
})();
