///******************************************/
///*          flezz framework 1.0           */
///******************************************/
///*  Name: main.js
///*  Version: 1.0
///*  Description: js and angular.
///*  Author: Giancarlo Ortiz.
///*  URI: http://www.zerez.org
///*  License: GNU General Public License v2 or later
///*  License URI: http://www.gnu.org/licenses/gpl-2.0.html
///*  Tags: js, jquery.
///******************************************/


//angular.element() === jQuery() === $()
$ = angular.element;


function muestraMensaje() {
    alert('Gracias por pinchar');
}

function mostrarocultar() {
     console.log('click sidebar --- OK'); 
}


$(document).ready(function() {
  // Handler for .ready() called.
     console.log('DOM loaded --- OK');
     document.getElementById("btn-sidebar").onclick = muestraMensaje;
});