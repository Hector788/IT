const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if (!localStorage.getItem('cookies-aceptadas')) {
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
} else {
    dataLayer.push({ 'event': 'cookies-aceptadas' });
}

botonAceptarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', true);

    dataLayer.push({ 'event': 'cookies-aceptadas' });
});



document.getElementById("likeButton").addEventListener("click", function() {
    // código para contar los clics aquí
});

let likeCount = 0;

// cargar la información de almacenamiento local si existe
if (localStorage.getItem("likeCount")) {
    likeCount = parseInt(localStorage.getItem("likeCount"));
}

document.getElementById("likeButton").innerHTML = " ME GUSTA(" + likeCount + ")";

// asignar manejador de eventos de clic al botón
document.getElementById("likeButton").addEventListener("click", function() {
    likeCount++;
    document.getElementById("likeButton").innerHTML = "ME GUSTA(" + likeCount + ")";
    localStorage.setItem("likeCount", likeCount);
});