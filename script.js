const order = ['bi', 'traducao', 'sobre'];
let currentIndex = 0;
let siteData = {};

fetch('info.json').then(r => r.json()).then(data => siteData = data);

function showPanel(id) {
    currentIndex = order.indexOf(id);
    const contentBox = document.getElementById('content-box');
    
    document.getElementById('content-title').textContent = siteData[id].titulo;
    document.getElementById('content-text').textContent = siteData[id].texto;
    
    contentBox.classList.add('active');
    document.getElementById('main-nav').style.display = 'none';
}

function navigate(dir) {
    currentIndex += dir;
    if (currentIndex < 0) {
        document.getElementById('content-box').classList.remove('active');
        document.getElementById('main-nav').style.display = 'block';
    } else if (currentIndex < order.length) {
        showPanel(order[currentIndex]);
    } else {
        currentIndex = order.length - 1;
    }
}
