document.addEventListener('DOMContentLoaded', () => {
    // Adiciona classe de fade ao corpo para entrada suave
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 10);

    // Smooth Transition ao clicar em links internos
    const links = document.querySelectorAll('a[href^="p/"], a[href^="../"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const destination = link.getAttribute('href');
            if (!destination.startsWith('http')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = destination;
                }, 400);
            }
        });
    });
});
