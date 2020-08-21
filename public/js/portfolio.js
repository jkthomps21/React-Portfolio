// Initializations
$(document).ready(function(){
    $('.sidenav').sidenav();
});

// Other Stuff
window.onload = function() {
    $("#home-page").show();
    $("#portfolio-page").hide();
    $("#contact-page").hide();
    $("#header-line").css("background-color", "rgb(176,158,197)");
    $("#footer-line").css("background-color", "rgb(176,158,197)");
}

$(".button-home").on("click", function(){
    $("#home-page").show();
    $("#portfolio-page").hide();
    $("#contact-page").hide();
    $("#header-line").css("background-color", "rgb(176,158,197)");
    $("#footer-line").css("background-color", "rgb(176,158,197)");
});

$(".button-portfolio").on("click", function(){
    $("#home-page").hide();
    $("#portfolio-page").show();
    $("#contact-page").hide();
    $("#header-line").css("background-color", "rgb(250,173,45)");
    $("#footer-line").css("background-color", "rgb(250,173,45)");
});

$(".button-contact").on("click", function(){
    $("#home-page").hide();
    $("#portfolio-page").hide();
    $("#contact-page").show();
    $("#header-line").css("background-color", "rgb(155,171,69)");
    $("#footer-line").css("background-color", "rgb(155,171,69)");
});

$(".navbar-nav>li>a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
})

// Responsive touches for touch screen devices
$('.contain').on("touchstart", function(e) {
    "use strict";
    var link = $(this);
    if (link.hasClass('hasHover')) {
        return true;
    } else {
        link.addClass('hasHover');
        $('.contain').not(this).removeClass('hasHover');
        e.preventDefault();
        return false;
    }
});
