// Este código se ejecutará cuando la página se cargue
function playAudio() {
    // Obtenemos el elemento audio
    const audio = document.querySelector("audio");
    // Habilitamos la reproducción automática
    audio.autoplay = true;
    // Iniciamos la reproducción
    audio.play();
}
    // Ejecutamos la función playAudio al cargar la página
document.addEventListener("DOMContentLoaded", playAudio);
