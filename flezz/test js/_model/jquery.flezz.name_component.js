///******************************************/
///*          flezz framework 1.0           */
///******************************************/
///*  Name: name_component
///*  Version: 0.1.0
///*  Description: description name_component plugin for jquery
///*  Author: Giancarlo Ortiz.
///*  URI: http://www.zerez.org
///*  License: GNU General Public License v2 or later
///*  License URI: http://www.gnu.org/licenses/gpl-2.0.html
///*  Tags: name_component, plugin, js.
///******************************************/
///*    Content
///*
///*  1. Road map.
///*  2. Plugin start.
///*  3. Config variables.
///*  4. Private function.
///*  5. Public function.
///*  6. Public options default.
///******************************************/
/*global document, window, alert, console, jQuery, require*/
///* 1 *//* ROAD MAP */

//
///* 2 *//* PLUGIN - MODULE */
///* Use plugin development pattern, by Mike Alsup */
///*  URI: http://www.learningjquery.com/2007/10/a-plugin-development-pattern */
// Se implementa creando un cierre anónima que se auto-invoca y estiende el objeto jquery.fn de jquery
// en el interior definimos la variable name_component la cual contendrá todo nuestro modulo.
//
// create closure
(function ($) {
    "use strict";
    ///* 3 *//* CONFIG VARIABLES */
    ///* private variables, and private methods *///
    var debug;
    ///* config selector *///
    //
    // plugin definition
    $.fn.name_component = function (user_options) {
        debug(this);
        //  
        // build main options before element iteration
        var opts = $.extend({}, $.fn.name_component.defaults, user_options);
        //
        // iterate and reformat each matched element
        return this.each(function () {
            var o, markup, $this;
            $this = $(this);
            // build element specific options
            o = $.meta ? $.extend({}, opts, $this.data()) : opts;
            // update element styles
            $this.css({
                backgroundColor: o.background,
                color: o.foreground
            });
            markup = $this.html();
            // call our format function
            markup = $.fn.name_component.format(markup);
            $this.html(markup);
        });
    };
    //
    ///* 4 *//* PRIVATE FUNTIONS */
    debug = function ($obj) {
        if (window.console && window.console.log) {
            window.console.log('name_component selection count: ' + $obj.size());
        }
    };
    //
    ///* 5 *//* PUBLIC FUNTIONS - METHODS */
    // define and expose our function
    $.fn.name_component.format = function (txt) {
        return '<strong>' + txt + '</strong>';
    };
    //
    ///* 6 *//* PUBLIC PROPERTIES */
    // define and expose plugin defaults
    $.fn.name_component.defaults = {
        foreground: 'red',
        background: 'yellow'
    };
    //
    // end of closure
}(jQuery));