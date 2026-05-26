function navigate(item) {
    if (item.url.startsWith('http')) return window.open(item.url, '_blank');

    const header = document.getElementById('main-header');
    const content = document.getElementById('view-content');
    
    // Transição
    header.classList.add('header-compact');
    content.classList.add('content-visible');
    
    document.getElementById('view-title').textContent = item.name;
    document.getElementById('display-area').innerHTML = `<iframe src="${item.url}"></iframe>`;
}

function resetLayout() {
    document.getElementById('main-header').classList.remove('header-compact');
    document.getElementById('view-content').classList.remove('content-visible');
}
