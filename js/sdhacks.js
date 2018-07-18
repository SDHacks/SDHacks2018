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
                if ($(window).width() > 768 || $('.navbar-toggler').hasClass('collapsed')) {
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
                _nav.addClass('nav__white');
            }
        } 
    });

    $('.nav__item').on('click', (e) => {

        let scrollOffsets = {
            '#faq': -100,
            '#about': 100,
            '#schedule': 150
        }

        e.preventDefault();

        let hash = $(e.target).attr('href');
        let sect = $(hash);
        let additional = scrollOffsets[hash] || 0;

        $('html, body').animate({
            'scrollTop':  sect.offset().top + additional
        }, 500)
    })

    let tl = new TimelineMax();
    tl.staggerFrom('#laptop_text_copy_2 > g > g path', 0.1, {scaleX: 0}, 0.1)
        .from('#XMLID_123_', 1, {scaleY: 0, transformOrigin: "50% 50%", ease: Power2.easeOut});

    let splashPageBubbles = document.querySelectorAll('#bubbles_copy_3 > g > g path');
});
