$(document).ready(function(){

    $(".menu-img").click(function () {

            $(".menu").animate({width:'toggle'}, 400);
    
    });

    $(window).scroll(function(){
        
        if($(this).scrollTop()>500)
        {
            $("nav").addClass("scrolled");
            $(".logo img:first").fadeOut(100);
            $(".logo img:last").fadeIn(1000);
            $(".menu-bar img:first").fadeOut(100);
            $(".menu-bar img:last").fadeIn(1000);
        }
        else
        {
            $("nav").removeClass("scrolled");
            $(".logo img:last").fadeOut(100);
            $(".logo img:first").fadeIn(2000);
            $(".menu-bar img:last").fadeOut(100);
            $(".menu-bar img:first").fadeIn(2000);
        }
    });

    $('.counter').counterUp();

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        center:true,
        autoWidth:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
});