$(document).ready(function(){
    let _nav = $('#top-nav');
    const FADE_DURATION = 200, 
        SCROLL_TRESHOLD = 100;

    _nav.hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > SCROLL_TRESHOLD) { 
                _nav.fadeIn(FADE_DURATION);
            } else {
                _nav.fadeOut(FADE_DURATION);
            }
        });
    });
});