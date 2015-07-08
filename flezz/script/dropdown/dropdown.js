///******************************************/
///*          flezz framework 1.0           */
///******************************************/
///*  Name: name_component
///*  Version: 0.1.0
///*  Description: description name_component
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
///*  4. Cache DOM - Document Object Model .
///*  5. Subcription of Events.
///*  6. Logic of record event.
///*  7. Private function.
///*  8. Public function.
///*  9. Revealing function.
///******************************************/
///* 1 *//* ROAD MAP */

//
///* 2 *//* PLUGIN - MODULE */
///* Use Revealing Module Pattern */
// Se implementa creando una función anónima que se auto-invoca y regresa un objeto literal
// Definimos la variable name_component la cual contendrá todo nuestro modulo.
var name_component = (function () {
    // Defines that JavaScript code should be executed in "strict mode" to avoid errors.
    "use strict";
    //
    ///* 3 *//* CONFIG VARIABLES */
    ///* private variables, and private methods *///
    var settings, dom, catcheDom, suscribeEvents, events, toggle, initialize;
    ///* config selector *///
    // Objeto literal en el cual establecemos valores que vamos a usar mas adelante en este ámbito
    // los objetos literales pueden contener propiedades y métodos
    settings = {
        selector_main:      '.dropdown',
        selector_item:      'li',
        selector_trigger:   'a',
        selector_stop:      '.close',
        selector_target:    'ul',
        // other options
        interval: 400
        //....
    };
    ///* cache DOM *///
    // Objeto literal vacío que guardará elementos que se manejan por HTML.
    dom = {};
    ///* 4 *//* CACHE FUNTION START */
    // Función que llenará al objeto dom con los objetos HTML a través de jQuery ($).
    catcheDom = function () {
        // encontrar y almacenar los elementos objetivo del DOM
        dom.context = $(settings.selector_main);
        dom.trigger = dom.context.children(settings.selector_trigger);
        console.log(dom.trigger);
        dom.target = dom.context.find(settings.selector_target);
    };
    //
    ///* 5 *//* EVENT RECORD */
    // Función donde establecemos los eventos que tendrán cada uno de los elementos del objeto DOM.
    suscribeEvents = function () {
        dom.trigger.on('click', events.callbackClick);
        dom.trigger.on('keypress', events.callbackTab);
        dom.context.on('click', settings.selector_stop, events.callbackStop);
    };
    //
    ///* 6 *//* EVENT LOGIC */
    // Objeto que guarda métodos que se van a usar en cada evento definido en la función suscribeEvents
    events = {
        callbackClick: function (e) {
            var context, item, state, target, clase;
            state = dom.context.attr('data-state');
            clase = dom.trigger.html();
            console.log("click" + clase);
            
            if (state !== 'disabled') {
                toggle(e, state);
            }
        },
        callbackTab: function (e) {

        },
        callbackStop: function (e) {

        }
    };
    //
    ///* 7 *//* PRIVATE FUNTIONS */
    toggle = function (e, state) {
        console.log("click" + state);
    };
    //
    ///* 8 *//* PUBLIC FUNTIONS - METHODS */
    initialize = function () {
        ///* init dom cache *///
        catcheDom();
        //...
        ///* init listeners *///
        suscribeEvents();
    };
     // Retorna un objeto literal con el método init haciendo referencia a la función initialize.
    return {
        ///* 9 *//* REVEALING METHODS */
        ///* public variables, public methods or accessing "Private" Methods *///
        // Alias de metodos privados
        init: initialize
    };
}());
//
///* initialize plugin *///
// Ejecutando el método "init" del módulo name_component.
name_component.init();