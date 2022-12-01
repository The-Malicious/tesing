$(document).ready(function () {
    $('.testimonial').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.brannd-logo-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay:true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    $(".close-icon").click(function(){
        $('.menu').hide(500)
      });
    $(".menu-icon").click(function(){
        $('.menu').show(500)
      });

})