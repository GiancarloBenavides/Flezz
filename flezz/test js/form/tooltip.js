$(document).ready(function () {
    "use strict";
    var state, title, text, tooltipStruct, item, context;
    $('.help').on('click', function () {
        item = $(this);
        state = item.attr('data-state');
        title = item.attr('data-title');
        text = item.attr('data-tooltip');
        context = $(this).parent();
        tooltipStruct = $('<div class="tooltip"><h2 class="help-title">' + title + '</h2><p>' + text + '</p></div>');
        console.log(tooltipStruct);
        if (state === 'close') {
            context.append(tooltipStruct);
            item.attr('data-state', 'open');
            item.attr('aria-hidden', 'false');
        } else {
            context.find('.tooltip').remove();
            item.attr('data-state', 'close');
            item.attr('aria-hidden', 'true');
        }
        //context.append              
    });
});


$(document).ready(function () {
    "use strict";
    var state, title, text, tooltipStruct, item, context;
    $('.warn').on('click', function () {
        item = $(this);
        state = item.attr('data-state');
        title = item.attr('data-title');
        text = item.attr('data-tooltip');
        context = $(this).parent();
        tooltipStruct = $('<div class="tooltip"><h2 class="warn-title">' + title + '</h2><p>' + text + '</p></div>');
        console.log(tooltipStruct);
        if (state === 'close') {
            context.append(tooltipStruct);
            item.attr('data-state', 'open');
            item.attr('aria-hidden', 'false');
        } else {
            context.find('.tooltip').remove();
            item.attr('data-state', 'close');
            item.attr('aria-hidden', 'true');
        }
        //context.append              
    });
});

