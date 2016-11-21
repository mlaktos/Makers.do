//$(window).scroll(function () {
//    var scroll = $(window).scrollTop();
//
//    if (scroll >= 1) {
//        $("#header").removeClass("header-bright");
//    } else {
//        $("#header").addClass("header-bright");
//        //        $("#header").css({"background-color":"rgba(255, 255, 255, .9)"})
//    }
//});
//
//function mobileViewUpdate() {
//    var viewportWidth = $(window).width();
//    if (viewportWidth < 990) {
//        $(".collapse").removeClass("in");
//    } else {
//        $(".collapse").addClass("in");
//    }
//}
//
//function expandDetails() {
//    if ($(this).hasClass("price__adv-extend-plus")) {
//        $(this).removeClass("price__adv-extend-plus");
//        $(this).addClass("price__adv-extend-minus");
//    } else {
//        $(this).removeClass("price__adv-extend-minus");
//        $(this).addClass("price__adv-extend-plus");
//    }
//}
//
//function changeCurrency() {
//    if ($('#price__switch').hasClass('price__usd')) {
//        $(".price__usd").addClass("price__eur");
//        $(".price__usd").removeClass("price__usd");
//    }
//    else {
//        $(".price__eur").addClass("price__usd");
//        $(".price__eur").removeClass("price__eur");
//    }
//}
//
//$(window).load(mobileViewUpdate);
//$(window).resize(mobileViewUpdate);
//$(".price__adv-extend").click(expandDetails)

// add wait as $.wait() standalone and $(elem).wait() for animation chaining

$(".building-structures-detailed").hover (
    function() {
        if ($("#first-text").hasClass("start")) {
            $("#first-text").removeClass("start");
        }
        if ($("#first-link").hasClass("start")) {
            $("#first-link").removeClass("start");
        }
    }
);

$(".building-structures-detailed").mouseleave (
    function() {
        $("#first-text").addClass("start");
        $("#first-link").addClass("start");
    }
);

$('.building-structures-detailed').off('hover');


//$(document).ready(function () {
//    alert("loaded")
//})

//$(document).ready(function () {
//    var viewportWidth = $(window).width();
//    var active = 0;
//    var activator;
//    var mask;
//
//    if (viewportWidth >= 692) {
//        $('.our-framework-call').click(function () {
//
//            if (this.id == 'ofb-1' && this.id != active) {
//                active = 1;
//            }
//
//            activator = 'ofb-' + active;
//            mask = '#of-' + active;
//            
//            $(mask).removeClass("our-framework-hide-mask");
//            $(mask).addClass("our-framework-show-mask");
//        })
//    }
//});

//
//function expandDetails() {
//    if ($(this).hasClass("our-framework-show-mask")) {
//        $(this).removeClass("our-framework-show-mask");
//        $(this).addClass("our-framework-hide-mask");
//    } 
//}
//
//
//$(".our-framework-open-desc").hover(expandDetails)