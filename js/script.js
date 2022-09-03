

$(window).on("load", function() {
    $(".loader").fadeOut(777, function() {
        $(".loader").fadeOut(999);
    });
});




$(document).ready(function () {

    $('#slides').superslides({
        animation :  'fade',
        play : 5000,
        pagination : false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        // margin:10,
        items: 4,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            580:{
                items:2
            },
            868:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    // $('.chart').easyPieChart({
    //     //your options goes here
    //     easing: 'easeInOut',
    //     barColor: '#fff',
    //     trackColor: false,
    //     // scaleColor: false,
    //     lineWidth: 4,
    //     size: 152,
    //     onStep: function(from, to, percent) {
    //         $(this.el).find('.percent').text(Math.round(percent));
    //     }
    // });

    var skillsTopOffset = $(".skillsSection").offset().top;
    // console.log(skillsTopOffset);

    $(window).scroll(function() {

        // console.log(window.pageYOffset);
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 230) {
            $('.chart').easyPieChart({
                //your options goes here
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                // scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition-50 }, "slow");


    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }

});

