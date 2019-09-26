(function ($) {
    'use strict';
$(document).ready(function(){
    $('#menu-toggle').click(function(){
        $(this).toggleClass('open');
        $('nav').toggleClass('open');
        $('#menu-content').slideToggle();
    });

    $('.action button, .close-pop-over').click(function(){
        $('.action button, .close-pop-over, .pop-over').toggleClass('open');
        //$('.pop-over').fadeToggle();
    });

    $('.status-action button').click(function(){
        $(this).toggleClass('open');
        $(this).find('.chevron, .circle').toggleClass('open');
        $(this).parent().next('.status-info').slideToggle();
        $(this).parent().parent().toggleClass('open');
    });

    $('.toggle--details').click(function(){
        $(this).toggleClass('open');
        $(this).find('.circle').toggleClass('open');
        $(this).parent().next('.summary-report--details').slideToggle();
        $(this).parent().parent().toggleClass('open');
    });


// Temp for showing pages in demo
    $('.toggle--login').click(function(){
        $(this).toggleClass('is-active');
        $('.toggle--patient-list, .toggle--summary').removeClass('is-active');
        $('body').find('.page--summary-report').hide();
        $('body').find('.page--patient-list').hide();
        $('body').find('.page--login').fadeToggle();
    });

    $('.toggle--patient-list').click(function(){
        $(this).toggleClass('is-active');
        $('.toggle--login, .toggle--summary').removeClass('is-active');
        $('body').find('.page--summary-report').hide();
        $('body').find('.page--login').hide();
        $('body').find('.page--patient-list').fadeToggle();
    });

    $('.toggle--summary').click(function(){
        $(this).toggleClass('is-active');
        $('.toggle--patient-list, .toggle--login').removeClass('is-active');
        $('body').find('.page--login').hide();
        $('body').find('.page--patient-list').hide();
        $('body').find('.page--summary-report').fadeToggle();
        console.log('hello');
    });

});

})(jQuery);
