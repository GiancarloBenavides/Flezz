///******************************************/
///*          flezz framework 1.0           */
///******************************************/
///*  Name: script principal
///*  Version: 0.1.5
///*  Description: aplicacion contratacion Universidad de Nariño
///*  Author: Giancarlo Ortiz.
///*  URI: http://www.zerez.org
///*  Tags: udenar, planeacion.
///******************************************/
/*global document, window, alert, console, jQuery, require*/
//
// create closure
(function ($) {
    "use strict";
    // init Scroll
    $(function () {
        $('.flezz-scroll').scrollable({
            preventPageScrolling: true
        });
        //
        $("#main").find('.description').load("readme.html", function () {
            $(".flezz-scroll").scrollable();
            $("#main").find("img").load(function () {
                $(".nano").scrollable();
            });
        });
    });
    // inser more init services here...
    
// end of closure
}(jQuery));