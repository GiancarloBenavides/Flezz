$(function () {
    "use strict";
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