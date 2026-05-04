document.addEventListener("DOMContentLoaded", function() {
    fetch('/core/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Erro no core:', error));
});
