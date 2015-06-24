///******************************************/
///*          flezz framework 1.0           */
///******************************************/
///*  Name: name_component
///*  Version: 1.0.0
///*  Description: description name_component
///*  Author: Giancarlo Ortiz.
///*  URI: http://www.zerez.org
///*  License: GNU General Public License v2 or later
///*  License URI: http://www.gnu.org/licenses/gpl-2.0.html
///*  Tags: name_component, plugin, js.
///******************************************/
///*    Content
///*
///*  1. Config variables.
///*  2. Road map.
///*  3. Funtion.
///*  4. Plugin.
///******************************************/
//"use strict";
///* 1 *//* CONFIG VARIABLES */
//
///* global variables */

//
///* local variables */

//
///* 2 *//* FUNCTIONS */

//
///* 3 *//* PLUGIN */
///* Use Revealing Module Pattern */
var tabs = (function () {
    "use strict";
    ///* private variables, and private methods *///
    var settings, dom, catchDom, suscribeEvents, events, changueTabPanel, initialize;
    ///* config selector *///
    settings = {
        tabs: '.horizontal',
        tabs_item: 'li',
        tabs_item_target: 'a'
    };

    dom = {};

    catchDom = function () {
        dom.tabs_item_target = $(settings.tabs_item_target, settings.tabs);
    };

    suscribeEvents = function () {
        dom.tabs_item_target.on('click', events.eSelectedTab);
        dom.tabs_item_target.on('keypress', events.eKeypressTab);
    };
    
    events = {
        eSelectedTab: function (e) {
            var target, item;
            target = $(this);
            item = target.parent();
            if (!item.hasClass('selected')) {
                //console.log('click');
                changueTabPanel(e, target);
            }
        },
        eKeypressTab: function (e) {
            var target;
            target = $(this);
            if (e.which === 13) {
                //console.log('enter is presed');
                changueTabPanel(e, target);
            }
        }
    };
    
    changueTabPanel = function (e, target) {
        var brother, pane, item;
        item = target.parent();
        ///* changue tab *///        
        item.parent().find('li.selected').attr('class', '').attr({'aria-selected' : 'false',  tabindex : -1});
        ///* changue panel *///
        pane = target.attr('data-tab');
        $("#" + pane).attr('data-state', 'active').attr('aria-hidden', 'false');
        $("#" + pane).siblings().attr('data-state', 'inactive').attr('aria-hidden', 'true');
        item.addClass('selected').attr({'aria-selected' : 'true',  tabindex : 0});
        //console.log('changue panel');
    };

    initialize = function () {
        catchDom();
        suscribeEvents();
    };

    return {
        ///* public variables, and public methods -- Accessing "Private" Methods *///
        init: initialize
    };
})();

tabs.init();