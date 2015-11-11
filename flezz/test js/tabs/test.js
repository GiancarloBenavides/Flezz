/*$(document).ready(function(){
    alert('Changed!');
//    $(document).on('resize', (function(e) {
//        var newWidth = $(window).width();
//        alert('Changed!' + newWidth);
//    });
    $( window ).resize(function() {
        $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
    });
})*/

var docWidth, tabPosition = [];

$(document).ready(function () {
    "use strict";
    docWidth = $(window).width();
});

$(window).resize(function () {
    "use strict";
    var newWidth, newWidthTab, newWidthCont, diffWidth, numLi, numDrop, numPos, tempChild, child, selected, i, tempOthers, others;
    newWidth = $(window).width();
    //console.log('docWidth: ' + docWidth);
    //console.log('newWidth: ' + newWidth);
    
    if (newWidth < docWidth * 0.95) {
        //console.log('decreciendo');
        newWidthTab = $('.horizontal').width();
        newWidthCont = $('.tabs-content').width();
        numLi = $(".horizontal>li").size();
        numDrop = $('.horizontal>li.others>ul>li').size();
        if (newWidthTab > newWidthCont * 0.9) {
            for (i = numLi; i > 0; i = i - 1) {
                tempChild = $('.horizontal>li:nth-child(' + i + ')');
                if (!(tempChild.hasClass('dropdown'))) {
                    selected = tempChild.hasClass('selected');
                    child = tempChild.detach();
                    tabPosition.push(i-1);
                    //console.log(tabPosition);
                    if ($('.horizontal>li.more').size()) {
                        $('.horizontal>li.more').addClass('others');
                        $('.horizontal>li.more').removeClass('more');
                    }
                    if ($('.horizontal>li.others').size()) {
                        child.prependTo('.horizontal>li.others>ul');
                        if (selected) {
                            $('.horizontal>li.others').addClass('includes');
                        }
                    }
                    i = 0;
                }
            }
        }
        docWidth = newWidth;
    }
    if (newWidth > docWidth * 1.06) {
        //console.log('creciendo');
        newWidthTab = $('.horizontal').width();
        newWidthCont = $('.tabs-content').width();
        numLi = $(".horizontal>li").size();
        numDrop = $('.horizontal>li.others>ul>li').size();
        if (newWidthTab < newWidthCont * 0.9) {
            //console.log('desagregar');
            for (i = 1; i <= numDrop; i = i + 1) {
                tempOthers = $('.horizontal>li.others>ul>li:nth-child(' + i + ')');
                others = tempOthers.detach();
                numPos = tabPosition[tabPosition.length - 1];
                tabPosition.splice(tabPosition.length - 1, 1);
                $('.horizontal>Li:eq(' + numPos + ')').before(others);
                if (tempOthers.hasClass('selected')) {
                    $('.horizontal>li.others').removeClass('includes');
                }
                
                i = numDrop;
            }
            if (numDrop <= 1) {
                $('.horizontal>li.others').addClass('more');
                $('.horizontal>li.others').removeClass('others');
            }
        }
        docWidth = newWidth;
    }
});