let secreto = window.document.getElementById('secret')

localStorage.setItem('etapa02', 'teste')

function secretof() {
    secreto.innerHTML = 'Vá até "<strong>Application</strong>" <br> Em Application, entre em <strong>Local Storage</strong> <br> Logo depois clique no <strong>Primeiro</strong> <br> Procure por <strong>etapa02</strong>'
}