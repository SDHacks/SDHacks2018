$(document).ready(function(){
    new WOW().init();
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

    let tl = new TimelineMax();
    tl.staggerFrom('#laptop_text_copy_2 > g > g path', 0.1, {scaleX: 0}, 0.1)
        .from('#XMLID_123_', 1, {scaleY: 0, transformOrigin: "50% 50%", ease: Power2.easeOut});

    let splashPageBubbles = document.querySelectorAll('#bubbles_copy_3 > g > g path');
});
