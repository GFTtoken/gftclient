function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function choose_language(lang){
    var current_lang = getCookie('lang');
    if (current_lang == lang)
        return;
    else{
        setCookie('lang', lang, 365);
        location.reload();
    }
}
var wh = $(window).height();
var ww = $(window).width();

$(window).load(function () {
    //about slider
    $('#about-slider').flexslider({
        namespace: 'about-slider-',
        animation: 'slide',
        controlNav: false,
        directionNav: true,
        slideshow: false,
        slideshowSpeed: 5000,
        animationSpeed: 700,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>',
        after: function(slider){
            var cur = slider.currentSlide+1;
            $('.about-tab').removeClass('about-tab-active');
            $('#about-tab-'+cur).addClass('about-tab-active');
        }
    });
    
    //ico slider
    $('#ico-slider').flexslider({
        namespace: 'ico-slider-',
        animation: 'slide',
        controlNav: false,
        directionNav: true,
        slideshow: false,
        slideshowSpeed: 5000,
        animationSpeed: 700,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>',
        after: function(slider){
            var cur = slider.currentSlide+1;
            $('.ico-tab').removeClass('ico-tab-active');
            $('#ico-tab-'+cur).addClass('ico-tab-active');
        }
    });
    
    $('#move-top').click(function(){
        $(window).scrollTo(0,500);
    });
    $('.fancybox').fancybox();
    
    //lang
    $('.choose-lang').click(function(e){
        e.preventDefault();
        $('.list-lang').show();
    });
    $('.list-lang-jp').click(() => {
        choose_language('jp');
    });
    $('.list-lang-en').click(() => {
        choose_language('en');
    });
    
    //app
    $('.platform-tab').click(function(e){
        e.preventDefault();
        $('.platform-tab').removeClass('platform-tab-active');
        $(this).addClass('platform-tab-active');
        var rel = $(this).attr('data-target');
        $('.platform-panel').hide();
        $('#'+rel).show();
    });
    //about
    $('.about-tab').click(function(e){
        e.preventDefault();
        $('.about-tab').removeClass('about-tab-active');
        $(this).addClass('about-tab-active');
        var rel = $(this).attr('rel');
        $('#about-slider').flexslider(parseInt(rel)-1);
    });
    //ico
    $('.ico-tab').click(function(e){
        e.preventDefault();
        $('.ico-tab').removeClass('ico-tab-active');
        $(this).addClass('ico-tab-active');
        var rel = $(this).attr('rel');
        $('#ico-slider').flexslider(parseInt(rel)-1);
    });
    //scrollbar
    $('.about-content-wrp').scrollbar();
    $('.ico-content').scrollbar();
    //menu
    $('.slide-to').click(function(e){
        e.preventDefault();
        var rel=$(this).attr('rel');
        $(window).scrollTo($('#'+rel).position().top+60,500);
    });
    //mobile
    $('.mobile-toggle').click(function(e){
        e.preventDefault();
        $('.mobile-wrp').fadeIn();
    });
    $('.mobile-close').click(function(e){
        e.preventDefault();
        $('.mobile-wrp').hide();
    });
    $('.mobile-wrp .slide-to').click(function(){
        $('.mobile-wrp').hide();
    });
    //init
    $('#ico-slider').flexslider(3);
});

$(document).on("scroll", onScroll);

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.top-menu li a').each(function () {
        var currLink = $(this);
        if ( currLink.attr("rel") != undefined ){
            var refElement = $('#'+currLink.attr("rel"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.top-menu li a').removeClass("top-menu-active");
                currLink.addClass("top-menu-active");
            }
        }
    });
}
$(document).mouseup(function (e){
    var container = $(".list-lang");
    if (!container.is(e.target)){
        container.hide();
    }
});
$(window).scroll(function(){
    var n = $(window).scrollTop();
    if(n == 0)
        $('#move-top').fadeOut();
    else
        $('#move-top').show();
    if(n > 120){
        $('#block-top').addClass('stick-top');
    }else{
        $('#block-top').removeClass('stick-top');
    }
});
/*
     FILE ARCHIVED ON 13:45:01 Dec 22, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:41:56 Jun 20, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 94.674 (3)
  esindex: 0.01
  captures_list: 115.336
  CDXLines.iter: 12.678 (3)
  PetaboxLoader3.datanode: 104.941 (5)
  exclusion.robots: 0.356
  exclusion.robots.policy: 0.343
  RedisCDXSource: 3.921
  PetaboxLoader3.resolve: 136.096 (2)
  load_resource: 169.304
*/