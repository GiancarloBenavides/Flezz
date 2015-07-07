///******************************************/
///*          flezz framework 1.0           */
///******************************************/
///*  Name: tabs
///*  Version: 1.1.0
///*  Description: description tabs
///*  Author: Giancarlo Ortiz.
///*  URI: http://www.zerez.org
///*  License: GNU General Public License v2 or later
///*  License URI: http://www.gnu.org/licenses/gpl-2.0.html
///*  Tags: tabs, plugin, js.
///******************************************/
///*    Content
///*
///*  1. Road map.
///*  2. Plugin start.
///*  3. Config variables.
///*  4. Subcription of Events.
///*  5. Logic of record event.
///*  6. Private function.
///*  7. Public function.
///*  8. Revealing function.
///******************************************/
//"use strict";
///* 1 *//* ROAD MAP */

//
///* 2 *//* PLUGIN - MODULE */
///* Use Revealing Module Pattern */
var tabs = (function () {
    "use strict";
    //
    ///* 3 *//* CONFIG VARIABLES */
    ///* private variables, and private methods *///
    var settings, dom, catchDom, suscribeEvents, events, changueTabPanel, initialize;
    ///* config selector *///
    settings = {
        tabs_h: '.horizontal',
        tabs_v: '.vertical',
        tabs_item: 'li',
        tabs_item_trigger: 'a'
    };
    dom = {};
    catchDom = function () {
        dom.tabs_h_item_trigger = $(settings.tabs_h).find(settings.tabs_item_trigger);
        dom.tabs_v_item_trigger = $(settings.tabs_v).find(settings.tabs_item_trigger);
    };
    ///* 4 *//* EVENT RECORD */
    suscribeEvents = function () {
        dom.tabs_h_item_trigger.on('click', events.eSelectedTab);
        dom.tabs_h_item_trigger.on('keypress', events.eKeypressTab);
        dom.tabs_v_item_trigger.on('click', events.eSelectedTab);
        dom.tabs_v_item_trigger.on('keypress', events.eKeypressTab);
    };
    ///* 5 *//* EVENT LOGIC */
    events = {
        eSelectedTab: function (e) {
            var trigger, item;
            trigger = $(this);
            item = trigger.parent();
            if (!item.hasClass('selected') && !item.hasClass('disabled')) {
                //console.log('click');
                changueTabPanel(e, trigger);
            }
        },
        eKeypressTab: function (e) {
            var trigger;
            trigger = $(this);
            if (e.which === 13) {
                //console.log('enter is presed');
                changueTabPanel(e, trigger);
            }
        }
    };
    ///* 6 *//* PRIVATE FUNTIONS */
    changueTabPanel = function (e, trigger) {
        var brother, pane, item, list, tab;
        item = trigger.parent();
        list = item.parent();
        tab = list.parent(); 
        ///* changue tab *///        
        list.find('li.selected').attr('class', '').attr('aria-selected', 'false');
        ///* changue panel *///
        pane = trigger.attr('data-tab');
        tab.find("#" + pane).attr('data-state', 'active').attr('aria-hidden', 'false');
        tab.find("#" + pane).siblings().attr('data-state', 'inactive').attr('aria-hidden', 'true');
        item.addClass('selected').attr('aria-selected', 'true');
        //console.log('changue panel');
    };
    ///* 7 *//* PUBLIC FUNTIONS - METHODS */
    initialize = function () {
        catchDom();
        suscribeEvents();
    };
    return {
        ///* 8 *//* REVEALING METHODS */
        ///* public variables, and public methods -- Accessing "Private" Methods *///
        init: initialize
    };
}());
//
///* initialize plugin *///
tabs.init();