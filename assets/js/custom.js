/*=============================================================
    Authour URL: www.designbootstrap.com
    
    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */

$(document).ready(function() {

    /*====================================
    SCROLLING SCRIPTS
    ======================================*/

    $('.scroll-me a').bind('click', function(event) { //just pass scroll-me in design and start scrolling
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });


    /*====================================
    SLIDER SCRIPTS
    ======================================*/


    $('#carousel-slider').carousel({
        interval: 4000 //TIME IN MILLI SECONDS
    });


    /*====================================
    VAGAS SLIDESHOW SCRIPTS
    ======================================*/
    $.vegas('slideshow', {
        backgrounds: [
            { src: 'assets/img/1.jpg', fade: 1000, delay: 9000 },
            { src: 'assets/img/2.jpg', fade: 1000, delay: 9000 },
        ]
    })('overlay', {
        /** SLIDESHOW OVERLAY IMAGE **/
        src: 'assets/js/vegas/overlays/06.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
    });


    /*====================================
    POPUP IMAGE SCRIPTS
    ======================================*/
    $('.fancybox-media').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });


    /*====================================
    FILTER FUNCTIONALITY SCRIPTS
    ======================================*/
    $(window).load(function() {
        var $container = $('#work-div');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.caegories a').click(function() {
            $('.caegories .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



    /*====================================
    WRITE YOUR CUSTOM SCRIPTS BELOW
    ======================================*/


    //TODO $.getJSON('https://api.github.com/users/strawsnake/gists',function(data){console.log(data)})

    //TODO https://api.github.com/users/strawsnake

    $.ajax({
        url: "https://api.github.com/users/strawsnake/gists",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function(data) {
            $('#gist .row-gist').empty();
            for (i = 0; i < data.length; i++) {
                var gisthtml = '<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3"><h2>Gist</h2><p><a href="' + data[i].html_url + '">' + data[i].description + '</a></p></div>';

                $('#gist .row-gist').append(gisthtml);

            }

        },
        error: function(data) {
            console.log("Error: " + data);
        }
    });


});