function aparecer() {
    var letras = document.querySelectorAll(".letra");
    for (var i = 0; i < letras.length; i++) {
        letras[i].style.opacity = 1;
    }
}

window.onload = aparecer;
