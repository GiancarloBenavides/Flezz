///******************************************/
///*          flezz framework 1.0           */
///******************************************/
///*  Name: tiles
///*  Version: 0.1.0
///*  Description: description Tiles
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
/*global document, window, alert, console, jQuery, require*/
///* 1 *//* ROAD MAP */

//
///* 2 *//* PLUGIN - MODULE */
///* Use Revealing Module Pattern */
// Se implementa creando una funci├│n an├│nima que se auto-invoca y regresa un objeto literal
// Definimos la variable gallery la cual contendr├í todo nuestro modulo.
var tilesWidth;

$(document).ready(function () {
    "use strict";
    var numTilesRow, imparTiles, percentTiles, tilesSizeMin, tilesPadding;
    tilesSizeMin = 60;
    tilesPadding = 8;
    tilesWidth = $('.tiles').width();
    numTilesRow = Math.round(tilesWidth / (2 * (tilesSizeMin + tilesPadding)));
    imparTiles = (numTilesRow % 2);
    percentTiles = (100 / numTilesRow);
    //console.log('tilesByRow: ' + numTilesRow);
    $('.tiles>div.tile-two-v').css('width', 'calc(' + percentTiles + '% - ' + tilesPadding + 'px)');
    $('.tiles>div.tile-one-s').css('width', 'calc(' + percentTiles + '% - ' + tilesPadding + 'px)');
    $('.tiles>div.tile-two-h').css('width', 'calc(' + 2 * percentTiles + '% - ' + tilesPadding + 'px)');
    normalizar(numTilesRow, percentTiles, tilesPadding);
});

$(window).resize(function () {
    "use strict";
    var newWidth, diff, numTilesRow, imparTiles, percentTiles, tilesSizeMin, tilesPadding;
    newWidth = $('.tiles').width();
    diff = Math.abs(tilesWidth - newWidth);
    console.log(diff);
    if (diff > 120) {
//        console.log('resize');
//        tilesSizeMin = 60;
//        tilesPadding = 8;
//        tilesWidth = $('.tiles').width();
//        numTilesRow = Math.round(tilesWidth / (2 * (tilesSizeMin + tilesPadding)));
//        percentTiles = (100 / numTilesRow);
//        $('.tiles>div.tile-two-v').css('width', 'calc(' + percentTiles + '% - ' + tilesPadding + 'px)');
//        $('.tiles>div.tile-one-s').css('width', 'calc(' + percentTiles + '% - ' + tilesPadding + 'px)');
//        $('.tiles>div.tile-two-h').css('width', 'calc(' + 2 * percentTiles + '% - ' + tilesPadding + 'px)');
//        normalizar(numTilesRow, percentTiles, tilesPadding);
          location.reload();
        console.log('ok');
    }
});

function normalizar(TilesRow, percent, padding) {
    "use strict";
    var i, j, numTiles, finTiles, sum, initTile, vertical, tiles, tempTile, initRow, limitRow;
    tiles = $('.tiles>div');
    numTiles = tiles.length;
    sum = 0;
    initTile = 1;
    if ($('.tiles>div:nth-child(1)').hasClass('tile-two-v')) {
        vertical = 1;
    }
    for (i = 1; i <= numTiles; i = i + 1) {
        //console.log('sumi: ' + sum);
        tempTile = $('.tiles>div:nth-child(' + i + ')');
        if (tempTile.hasClass('tile-one-s') || tempTile.hasClass('tile-two-v')) {
            sum = sum + 1;
        }
        if (tempTile.hasClass('tile-two-h')) {
            sum = sum + 2;
        }
        //console.log('sumr: ' + sum);
        if (sum === TilesRow) {
            sum = 0;
            initTile = i + 1;
            if (vertical === 1) {
                sum = sum + 1;
                vertical = 0;
            }
        }
        if (sum > TilesRow) {
            limitRow = i - 1;
            //console.log('hole in i: ' + i + ' inittile: ' + initTile + ' limitRow: ' + limitRow);
            for (j = initTile; j <= limitRow; j = j + 1) {
                initRow = $('.tiles>div:nth-child(' + j + ')');
                if (initRow.hasClass('tile-one-s')) {
                    initRow.removeClass('tile-one-s');
                    initRow.addClass('tile-two-h');
                    initRow.css('width', 'calc(' + 2 * percent + '% - ' + padding + 'px)');
                    j = limitRow + 1; // break
                    //console.log('changue');
                }
            }
            sum = 2;
            initTile = i;
            if (vertical === 1) {
                sum = sum + 1;
                vertical = 0;
            }
        }
        //console.log(tempTile.attr('class'));
        //console.log('sum: ' + sum);
    }
    finTiles = numTiles - initTile + 1;
    //console.log('sum: ' + sum + ' inittile: ' + initTile + ' finTiles: ' + finTiles);
    if (finTiles > 0) {
        for (j = initTile; j <= numTiles; j = j + 1) {
            initRow = $('.tiles>div:nth-child(' + j + ')');
            initRow.css('width', 'calc(' + 100 / finTiles + '% - ' + padding + 'px)');
        }
    }
}
//
///* initialize plugin *///
// Ejecutando el m├®todo "init" del m├│dulo name_component.