/*global document, window, alert, console, jQuery, require*/
(function ($) {
    "use strict";
    $.fn.alerter = function (atributo, opciones_user) {
        var opc;
        //
        // propiedades privadas
        // Ponemos la variable de opciones antes de la iteración (each) para ahorrar recursos
        opc = $.extend($.fn.alerter.opc_default, opciones_user);
        //
        // Devuelvo la lista de objetos jQuery
        return this.each(function () {
            var atrib, mensaje;
            atrib = $(this).attr(atributo);
            mensaje = $.fn.alerter.formato(atrib);
            alert(opc.inicial_str + mensaje + opc.final_str);
        });
    };
    //
    // propiedades publicas
    $.fn.alerter.opc_default = {
        inicial_str: "Mensaje: ",
        final_str: "."
    };
    //
    // metodos publicos 
    $.fn.alerter.formato = function (text) {
        var texto, primera_letra, resto;
        texto = String(text);
        primera_letra = texto.substring(0, 1);
        resto = texto.substring(1, texto.length);
        return primera_letra + resto;
    };
//    
}(jQuery));