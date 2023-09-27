// Función para cargar el contenido en el idioma seleccionado
function cargarContenido(idioma) {
    var url;
    if (idioma === 'es') {
        url = '/web/profile_es.html';
    } else if (idioma === 'en') {
        url = '/web/profile_en.html';
    }

    // Realiza una solicitud HTTP para cargar el contenido del idioma
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('contenido').innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Carga el contenido en español al cargar la página principal
window.onload = function() {
    cargarContenido('es');
};