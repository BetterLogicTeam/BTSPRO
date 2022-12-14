(function($) {
    'use strict';

    // Mean Menu
    $('.mean-menu').meanmenu({
      meanScreenWidth: "991"
    });

    // Header Sticky
    $(window).on('scroll',function() {
      if ($(this).scrollTop() > 120){  
        $('.navbar-area').addClass("is-sticky");
      }
      else{
        $('.navbar-area').removeClass("is-sticky");
      }
    });

    // Others Option For Responsive JS
    $(".side-nav-responsive .dot-menu").on("click", function(){
        $(".side-nav-responsive .container-max .container").toggleClass("active");
    });

    // Banner Item Slider
    $('.banner-item-slider').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
    })

    // Trending Slider
    $('.trending-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            576:{
                items: 2,
            },
            1000:{
                items: 3
            },
            1200:{
              items: 4
            },
        },
        navText: [
            "<i class='ri-arrow-left-s-line'></i>",
            "<i class='ri-arrow-right-s-line'></i>"
        ]
    })

    // Auctions Slider
    $('.auctions-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2,
            },
            1000:{
                items: 3
            },
        },
    })

    // Auctions Slider Two
    $('.auctions-slider-two').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            576:{
                items: 2,
            },
            1000:{
                items: 3
            },
        },
    })

    // Testimonial Slider
    $('.testimonial-slider').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
    })

    // Testimonial Slider Two
    $('.testimonial-slider-two').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
    })

    // Tabs Single Page
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li a').on('click', function (g) {
        var tab = $(this).closest('.tab'), 
        index = $(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
        g.preventDefault();
    });

    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('%D:%H:%M:%S'));
      });
    });

    // Promoted JS
    $('.promoted').find('.promoted-title').on('click', function(){
      // Adds Active Class
      $(this).toggleClass('active');
      // Expand or Collapse This Panel
      $(this).next().slideToggle('fast');
      // Hide The Other Panels
      $('.promoted-content').not($(this).next()).slideUp('fast');
      // Removes Active Class From Other Titles
      $('.promoted-title').not($(this)).removeClass('active');		
    });

    // Preloader JS
    $(window).on('load',function(){
      $(".preloader").fadeOut(500);
    });

    // Count Time JS
    function makeTimer() {
      var endTime = new Date("October 30, 2022 17:00:00 PDT");			
      var endTime = (Date.parse(endTime)) / 1000;
      var now = new Date();
      var now = (Date.parse(now) / 1000);
      var timeLeft = endTime - now;
      var days = Math.floor(timeLeft / 86400); 
      var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
      var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
      var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
      if (hours < "10") { hours = "0" + hours; }
      if (minutes < "10") { minutes = "0" + minutes; }
      if (seconds < "10") { seconds = "0" + seconds; }
      $("#days").html(days + "<span>Days</span>");
      $("#hours").html(hours + "<span>Hours</span>");
      $("#minutes").html(minutes + "<span>Minutes</span>");
      $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() { makeTimer(); }, 300);

    

    // Back To Top
    $('body').append("<div class='go-top'><i class='ri-arrow-up-s-line'></i></div>");
    $(window).on('scroll', function() {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });
    $('.go-top').on('click', function() {
        $('html, body').animate({
            scrollTop: '0',
        }, 500 );
    });

})($);