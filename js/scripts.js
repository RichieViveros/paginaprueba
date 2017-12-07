var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('navega');

//Evento cuando se haga click
						//cuando haga click hará lo siguiente
btnMenu.addEventListener('click', function(){
	//al nav se le agrega la clase "mostrar"
	nav.classList.toggle('mostrar');
})