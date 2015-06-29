///******************************************/
///*          flezz framework 1.0           */
///******************************************/
///*  Name: gallery
///*  Version: 0.1.0
///*  Description: description gallery
///*  Author: Giancarlo Ortiz.
///*  URI: http://www.zerez.org
///*  License: GNU General Public License v2 or later
///*  License URI: http://www.gnu.org/licenses/gpl-2.0.html
///*  Tags: gallery, plugin, js.
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
// Definimos la variable gallery la cual contendrá todo nuestro modulo.
var gallery = (function () {
    // Defines that JavaScript code should be executed in "strict mode" to avoid errors.
    "use strict";
    //
    ///* 3 *//* CONFIG VARIABLES */
    ///* private variables, and private methods *///
    var settings, dom, catcheDom, suscribeEvents, events, privateFuntion, initialize;
    ///* config selector *///
    // Objeto literal en el cual establecemos valores que vamos a usar mas adelante en este ámbito
    // los objetos literales pueden contener propiedades y métodos
    settings = {
        selector_main: '.gallery-conteiner',
        selector_item: '.gallery-item',
        selector_trigger: '.superbox-img',
        selector_target: '.superbox-show',
        interval: 400,
        gap: 0
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
        dom.trigger = dom.context.find(settings.selector_trigger);
        dom.target = dom.context.find(settings.selector_target);
        dom.galeryShow  = $('<div class="superbox-show"><img src="" class="superbox-current-img" style="opacity:0"><div class="superbox-close"></div></div>');
        dom.galeryArrow = $('<div id="irc_pc"></div>');
    };
    //
    ///* 5 *//* EVENT RECORD */
    // Función donde establecemos los eventos que tendrán cada uno de los elementos del objeto DOM.
    suscribeEvents = function () {
        dom.trigger.on('click', events.callbackClick);
        dom.trigger.on('keypress', events.callbackTab);
    };
    //
    ///* 6 *//* EVENT LOGIC */
    // Objeto que guarda métodos que se van a usar en cada evento definido en la función suscribeEvents
    events = {
        callbackClick: function (e) {
            //....
            privateFuntion(e);
            //....
        },
        callbackTab: function (e) {
            //....
            privateFuntion(e);
            //....
        }
    };
    //
    ///* 7 *//* PRIVATE FUNTIONS */
    function getGapImg() {
        var borderWidth, gap;
        borderWidth = dom.context.css("borderTopWidth");
        settings.gap = borderWidth.substring(0, 1);
    }
    
    function getArrowPosition(typeRow, place, shotGap) {
        var left, ir1, ir2, ir3;
        function padd(num) { return 4 + (shotGap * num); }
        switch (typeRow) {
        case 'big-left':
            ir1 = 'calc(50% - ' + padd(3) + 'px)';
            ir2 = 'calc(75% - ' + padd(2) + 'px)';
            ir3 = 'calc(75% - ' + 4 + 'px)';
            break;
        case 'big-center':
            ir1 = 'calc(25% - ' + padd(2) + 'px)';
            ir2 = 'calc(75% - ' + padd(2) + 'px)';
            ir3 = 'calc(75% - ' + 4 + 'px)';
            break;
        case 'big-right':
            ir1 = 'calc(25% - ' + padd(2) + 'px)';
            ir2 = 'calc(50% - ' + padd(1) + 'px)';
            ir3 = 'calc(50% - ' + padd(-1) + 'px)';
            break;
        default:
            return '50%';
        }
        switch (place) {
        case '1':
            left = ir1;
            break;
        case '2':
            left = ir2;
            break;
        case '3':
            left = ir3;
            break;
        default:
            return '50%';
        }
        return left;
    }
    
    function closeImgBox(galleryRow, duration) {
        var box, imgBox, lapse;
        galleryRow.attr('data-state', 'inactive');
        lapse = duration / 2;
        box = galleryRow.find(settings.selector_target);
        imgBox = galleryRow.find('img');
        imgBox.animate({opacity: 0}, lapse, function () {
            box.slideUp(lapse, function () {
                box.remove();
            });
        });
        //console.log('click close!');
    }

    function openImgBox(galleryRow, source, duration) {
        var box, imgBox;
        galleryRow.attr('data-state', 'active');
        dom.galeryShow.append(dom.galeryArrow);
        dom.galeryShow.appendTo(galleryRow);
        box = galleryRow.find(settings.selector_target);
        imgBox = galleryRow.find('img');
        imgBox.attr('src', source);
        box.css('display', 'block');
        imgBox.animate({opacity: 1}, duration);
        //console.log('click open!');
    }

    function changueImgSrc(galleryRow, source, duration) {
        var box, imgBox, lapse;
        lapse = duration / 2;
        box = galleryRow.find(settings.selector_target);
        imgBox = galleryRow.find('img');
        imgBox.animate({opacity: 0}, lapse, function () {
            imgBox.attr('src', source);
            imgBox.animate({opacity: 1}, lapse);
        });
        //console.log('changue img!');
    }
    //
    ///* 8 *//* PUBLIC FUNTIONS - METHODS */
    initialize = function () {
        getGapImg();
        catcheDom();
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
// Ejecutando el método "init" del módulo gallery.
gallery.init();