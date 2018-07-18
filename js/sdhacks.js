$(document).ready(function(){
    new WOW().init();
    let _nav = $('#top-nav');
    const SCROLL_TRESHOLD = _nav.height();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > SCROLL_TRESHOLD) { 

                //make nav white when below treshold
                _nav.addClass('nav__white');
            } else {

                //make nav transparent only if the nav is collapsed
                if ($('.navbar-toggler').hasClass('collapsed')) {
                    _nav.removeClass('nav__white');
                }
            }
        });
    });

    $('.navbar-toggler').on('click', (e) => {
        if ($(this).scrollTop() < SCROLL_TRESHOLD) {
            if (_nav.hasClass('nav__white')) {
                _nav.removeClass('nav__white')
            }
            else {
                console.log("shshs");
                _nav.addClass('nav__white');
            }
        } 
    });

    let tl = new TimelineMax();
    tl.staggerFrom('#laptop_text_copy_2 > g > g path', 0.1, {scaleX: 0}, 0.1)
        .from('#XMLID_123_', 1, {scaleY: 0, transformOrigin: "50% 50%", ease: Power2.easeOut});

    let splashPageBubbles = document.querySelectorAll('#bubbles_copy_3 > g > g path');
});
