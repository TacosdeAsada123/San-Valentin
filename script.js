function moveButton(){
    // Obtener el botón por su id
    const btn = document.getElementById('noButton');

    // Función para obtener una posición aleatoria dentro de la ventana
    function getRandomPosition() {
        const x = Math.floor(Math.random() * (window.innerWidth - btn.offsetWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - btn.offsetHeight));
        return { x, y };
    }

    // Función para mover el botón a una posición aleatoria
    function moveButton() {
        const { x, y } = getRandomPosition();
        btn.style.position = 'absolute'; // Asegura que el botón se mueva correctamente
        btn.style.left = `${x}px`; // Establece la nueva posición horizontal
        btn.style.top = `${y}px`; // Establece la nueva posición vertical
    }

    // Llamar a la función de mover el botón al hacer clic (compatible con dispositivos móviles)
    btn.addEventListener('click', moveButton);

}
function nextPage(){
 window.location.href = "yes.html";
}

