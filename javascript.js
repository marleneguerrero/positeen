$("#nbabout").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});
$("#dailypositivity").click(function() {
    $('html, body').animate({
        scrollTop: $("#daily").offset().top
    }, 2000);
});
$("#game1").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});

$("#top").click(function() {
    $('html, body').animate({
        scrollTop: $("#header").offset().top
    }, 2000);
});

function expand(){
	document.getElementById("about").innerHTML = "About"
}