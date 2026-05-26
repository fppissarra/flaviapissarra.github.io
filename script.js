cat.items.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = item.name;
    
    btn.onclick = (e) => {
        // Prevent the click from bubbling up to parent elements
        e.stopPropagation(); 
        
        // Only clear the sub-links if you want to show the context/iframe
        container.innerHTML = `<p style="font-style: italic; margin-bottom: 15px;">${item.context || ''}</p>`;
        
        if (item.type === 'embed') {
            const ifr = document.createElement('iframe');
            ifr.src = item.url;
            container.appendChild(ifr);
        } else if (item.type === 'link') {
            // Simply open in a new tab, DO NOT call goBack() or clear everything
            window.open(item.url, '_blank');
        }
    };
    container.appendChild(btn);
});
