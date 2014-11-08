jQuery( document ).ready(function( $ ) {

   	"use strict";
	$ = jQuery;



    // Pretty photo control

    $("a[class^='prettyPhoto']").prettyPhoto({

        deeplinking: false

    });

    /* ---------------------------------------------------- */
    /*	Tabs
     /* ---------------------------------------------------- */

    $('.tabs .tabs_content').first().css('display','block');

    $(".my_tabs.one .tabs_head").click(function(){

        $(this).siblings().removeClass("active").end()
            .andSelf().addClass("active");

        var tab = $(this).index();
        var content = $('.tabs_content');
        content.hide();
        $('.tabs_content:eq('+ tab +')').fadeIn();
    });

    /* ---------------------------------------------------- */
    /*	Tabs2
     /* ---------------------------------------------------- */

    $('.tabs2 .tabs_content2').first().css('display','block');

    $(".my_tabs .tabs_head2").click(function(){

        $(this).siblings().removeClass("active").end()
            .andSelf().addClass("active");

        var tab = $(this).index();
        var content = $('.tabs_content2');
        content.hide();
        $('.tabs_content2:eq('+ tab +')').fadeIn();
    });


    /* ---------------------------------------------------- */
    /*	Accordion
     /* ---------------------------------------------------- */

    $('.accordion').click(function(){
        $(this).siblings('.accordion').removeClass('current');
        $(this).addClass('current').children('.accordion_content').slideDown(500)
            .parents('.accordion').siblings('.accordion').children('.accordion_content').slideUp(500);
    });

    /* ---------------------------------------------------- */
    /*	Header  Nav
     /* ---------------------------------------------------- */

    $( "nav ul li ul").css('top','118px');
    $('nav ul li').hover(function(){
            $(this).children('ul').stop(true,true).css('display','block').animate({

                top: "113px"
            }, 400 ).animate({

                    top: "113px"
                }, 400 );

        },function(){
            $(this).children('ul').stop(true,true).css('display','none').animate({

                top: "118px"
            },400 );

        }
    );

    /* ---------------------------------------------------- */
    /*	Alert boxes
     /* ---------------------------------------------------- */

    $(".close").on('click', function(){
        var thisparent = $(this).parents('.same ');
        thisparent.fadeOut();
    });


    function open_nav(){
        $(".responsive-nav  .open").click(function(e){
            $(this).children('ul').stop(true, true).slideDown(500);
            $(this).removeClass('open').addClass('close-nav');
            close_nav();
        });
    }
    open_nav();
    function close_nav(){
        $(".responsive-nav .close-nav").click(function(e){
            $(this).children('ul').stop(true, true).slideUp(500);
            $(this).removeClass('close-nav').addClass('open');
            open_nav();
        });
    }



    /*-----------------------------------------------------------------------------------*/
    /*	Flex Slider
     /*-----------------------------------------------------------------------------------*/
    $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 5000,
        animationSpeed:	1500,
        directionNav: false,
        controlNav: true,
        keyboardNav: true
    });

    $('.flexslider_port').flexslider({
        animation: "fade",
       	directionNav: false, 
        controlNav: true
    });
	

	
	$('.flexslider_port_two').flexslider({
        animation: "slide",
       	directionNav: false, 
        controlNav: true
    });
	
    /*-----------------------------------------------------------------------------------*/
    /*	Recent Project Hover
     /*-----------------------------------------------------------------------------------*/

    $('figure').hover(function(){
            $(this).children('a').children('span').stop(true,true).fadeIn();
            $(this).children('a').children('.plus').stop(true,true).fadeIn();
        },function(){
            $(this).children('a').children('span').stop(true,true).fadeOut();
            $(this).children('a').children('.plus').stop(true,true).fadeOut();
        }

    );

    /*-----------------------------------------------------------------------------------*/
    /*	jCarousel
     /*-----------------------------------------------------------------------------------*/
    if(jQuery().jcarousel){

        // Jcarousel for partners
        jQuery('.brands-carousel .brands-carousel-list ').jcarousel({
            scroll:1
        });
    }


    //==================================

    $('.gotop').click(function(e){ $('html, body').animate({scrollTop: 0}, 1000); e.preventDefault(); });

    // ISOTOPE

    if( jQuery().isotope ) {

        jQuery(function() {

            var container = jQuery('.isotope'),
                filterLinks = jQuery('.port-cats li a');

            filterLinks.click(function(e){
                var selector = jQuery(this).attr('data-filter');
                container.isotope({
                    filter : '.' + selector,
                    itemSelector : '.home_project',
                    layoutMode : 'fitRows',
                    animationEngine : 'best-available'
                });

                filterLinks.removeClass('active');
                jQuery('.port-cats li').removeClass('current-cat');
                jQuery(this).addClass('active');
                e.preventDefault();
            });

        });

    }

    $("html").niceScroll();

    jQuery('.animated').appear();

    jQuery(document.body).on('appear', '.fade', function() {
        jQuery(this).each(function(){ jQuery(this).addClass('ae-animation-fade') });
    });
    jQuery(document.body).on('appear', '.slide', function() {
        jQuery(this).each(function(){ jQuery(this).addClass('ae-animation-slide') });
    });
    jQuery(document.body).on('appear', '.hatch', function() {
        jQuery(this).each(function(){ jQuery(this).addClass('ae-animation-hatch') });
    });
    jQuery(document.body).on('appear', '.entrance', function() {
        jQuery(this).each(function(){ jQuery(this).addClass('ae-animation-entrance') });
    });

});

//var tpj=jQuery;               // MAKE JQUERY PLUGIN CONFLICTFREE
//tpj.noConflict();
//
//tpj(document).ready(function() {
//
//    if (tpj.fn.cssOriginal!=undefined)   // CHECK IF fn.css already extended
//        tpj.fn.css = tpj.fn.cssOriginal;
//
//    tpj('#fullwidthbanner').revolution(
//        {
//            delay:9000,
//            startheight:490,
//            startwidth:1170,
//
//            hideThumbs:200,
//
//            thumbWidth:100,
//            thumbHeight:50,
//            thumbAmount:5,
//
//            navigationType:"bullet",
//            navigationArrows:"none",
//            navigationStyle:"round",
//            touchenabled:"on",
//            onHoverStop:"on",
//
//            navOffsetHorizontal:0,
//            navOffsetVertical:20,
//
//            shadow:1,
//            fullWidth:"on"
//
//        });
//});