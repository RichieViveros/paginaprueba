//*********Botón menu "toggle de clases"*********

var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('navega');

//Evento cuando se haga click
						//cuando haga click hará lo siguiente
btnMenu.addEventListener('click', function(){
	//al nav se le agrega la clase "mostrar"
	nav.classList.toggle('mostrar');
})

//********* Animación Pila*********

function chargebattery() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf244;";
  setTimeout(function () {
      a.innerHTML = "&#xf243;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf242;";
    }, 2000);
  setTimeout(function () {
      a.innerHTML = "&#xf241;";
    }, 3000);
  setTimeout(function () {
      a.innerHTML = "&#xf240;";
    }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);