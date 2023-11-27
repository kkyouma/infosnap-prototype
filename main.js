// Ocultar/mostrar el encabezado al desplazar la página
let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById('main-header').style.top = '0';
    } else {
        document.getElementById('main-header').style.top = '-60px';
    }

    prevScrollPos = currentScrollPos;
};
