///******************************************/
///*          flezz framework 1.0           */
///******************************************/
///*  Name: gallery
///*  Version: 1.0.0
///*  Description: simple gallery 3 img/Row
///*  Author: Giancarlo Ortiz.
///*  URI: http://www.zerez.org
///*  License: GNU General Public License v2 or later
///*  License URI: http://www.gnu.org/licenses/gpl-2.0.html
///*  Tags: gallery, plugin, js.
///******************************************/
//"use strict";
///* CONFIG VARIABLES */
var interval = 400;

///* GLOBAL VARIABLES */
var galeryShow  = $('<div class="superbox-show"><img src="" class="superbox-current-img" style="opacity:0"><div class="superbox-close"></div></div>'),
    galeryArrow = $('<div id="irc_pc"></div>');

///* FUNCTIONS */
function arrowPosition(typeRow, place, shotGap) {
    "use strict";
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
    "use strict";
    var box, imgBox, lapse;
    galleryRow.attr('data-state', 'inactive');
    lapse = duration / 2;
    box = galleryRow.find('div.superbox-show');
    imgBox = galleryRow.find('img.superbox-current-img');
    imgBox.animate({opacity: 0}, lapse, function () {
        box.slideUp(lapse, function () {
            box.remove();
        });
    });
    //console.log('click close!');
}

function openImgBox(galleryRow, source, duration) {
    "use strict";
    var box, imgBox;
    galleryRow.attr('data-state', 'active');
    galeryShow.append(galeryArrow);
    galeryShow.appendTo(galleryRow);
    box = galleryRow.find('div.superbox-show');
    imgBox = galleryRow.find('img.superbox-current-img');
    imgBox.attr('src', source);
    box.css('display', 'block');
    imgBox.animate({opacity: 1}, duration);
    //console.log('click open!');
}

function changueImgSrc(galleryRow, source, duration) {
    "use strict";
    var box, imgBox, lapse;
    lapse = duration / 2;
    box = galleryRow.find('div.superbox-show');
    imgBox = galleryRow.find('img.superbox-current-img');
    imgBox.animate({opacity: 0}, lapse, function () {
        imgBox.attr('src', source);
        imgBox.animate({opacity: 1}, lapse);
    });
    //console.log('changue img!');
}

$(document).ready(function () {
    "use strict";
    //console.log('galery flezz ready!');}
    var borderWidth, Gap;
    borderWidth = $("div.gallery-conteiner").css("borderTopWidth");
    try {
        Gap = borderWidth.substring(0, 1);
    } catch (err) {
        //console.log(borderWidth);  
    }
    $('.gallery-item').click(function () {
        var conteiner, clicRow, classRow, activeRow, clicPlace, imgClick, arrowLeft;
        clicPlace = $(this).attr('data-place');
        clicRow = $(this).parent();
        classRow = clicRow.attr('class');
        conteiner = clicRow.parent();
        imgClick = $(this).find('.superbox-img').data('img');
        arrowLeft = arrowPosition(classRow, clicPlace, Gap);
        if (conteiner.attr('data-state') === 'close') {
            conteiner.attr('data-state', 'open');
            openImgBox(clicRow, imgClick, interval);
        } else {
            if (clicRow.attr('data-state') === 'active') {
                changueImgSrc(clicRow, imgClick, interval);
            } else {
                activeRow = conteiner.find('div.superbox-show').parent();
                closeImgBox(activeRow, 0);
                openImgBox(clicRow, imgClick, interval);
            }
        }
        $('#irc_pc').css('left', arrowLeft);
        //console.log(arrowLeft);        
    });
    $('.gallery-conteiner').on('click', '.superbox-close', function () {
        var conteiner, activeRow;
        activeRow = $(this).parent().parent();
        activeRow.attr('data-state', 'inactive');
        conteiner = activeRow.parent();
        conteiner.attr('data-state', 'close');
        closeImgBox(activeRow, interval);
    });
});