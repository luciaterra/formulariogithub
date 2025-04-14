// Validación del formulario al hacer clic en "Enviar"
document.getElementById('submit-button').addEventListener('click', function(event) {
    const form = document.getElementById('personal-data-form');
    if (!form.checkValidity()) {
        event.preventDefault(); // Evita el envío del formulario si no es válido
        alert('Por favor, completa todos los campos correctamente.');
    }
});

// Cambiar al estilo 1 (claro/normal)
document.getElementById('style-button-1').addEventListener('click', function() {
    document.body.classList.remove('high-contrast');
    document.querySelector('.container').classList.remove('high-contrast');
});

// Cambiar al estilo de alto contraste
document.getElementById('style-button-2').addEventListener('click', function() {
    document.body.classList.add('high-contrast');
    document.querySelector('.container').classList.add('high-contrast');
});