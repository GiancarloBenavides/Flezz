/*
function manejadorEventos(elEvento) {
  var evento = elEvento || window.event;
}

function muestraMensaje() {
  alert('Gracias por pinchar');
}

window.onload = function() {
  document.getElementById("btn-sidebar").onclick = muestraMensaje;
}
*/

angular.element('document').ready(function() {
  // Handler for .ready() called.
     console.log('la pagina se ha cargado');
});