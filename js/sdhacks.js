$(document).ready(function(){
    new WOW().init();
    let _nav = $('#top-nav');
    const SCROLL_TRESHOLD = _nav.height();

    //on scroll white behavior
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

    //on click collapsed behaviour
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

    //nav scrolling
    $('.nav__item').on('click', (e) => {

        let scrollOffsets = {
            '#faq': -100,
            '#about': 150,
            '#schedule': 250,
        }

        e.preventDefault();

        let hash = $(e.target).attr('href');
        let sect = $(hash);
        let additional = scrollOffsets[hash] || 0;

        $('html, body').animate({
            'scrollTop':  sect.offset().top + additional
        }, 500)
    })


    //hero animation
    let tl = new TimelineMax();
    tl.staggerFrom('#laptop_text_copy_2 > g > g path', 0.1, {scaleX: 0}, 0.1)
        .from('#XMLID_123_', 1, {scaleY: 0, transformOrigin: "50% 50%", ease: Power2.easeOut});

    let splashPageBubbles = document.querySelectorAll('#bubbles_copy_3 > g > g path');
    //new TimelineLite().to("#bubbles_copy_3 > g > g", 0.5, {y:10 * Math.random(), ease:Linear.easeNone})
        //.to("#bubbles_copy_3 > g > g", 1, {y: -10 * Math.random(), ease:Linear.easeNone, repeat:-1, yoyo:true});

    splashPageBubbles.forEach(bubble => {
        new TimelineLite().to(bubble, 1, {y:5 * Math.random(), ease:Linear.easeNone})
            .to(bubble, 1, {y: -5 * Math.random(), ease:Linear.easeNone, repeat:-1, yoyo:true});
    })
});
