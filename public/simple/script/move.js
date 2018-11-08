$(document).ready(function() {
    var first_layer = $(".background-layer-shader1");
    var second_layer = $(".background-layer-shader2");
    first_layer.slideToggle(2000);
    second_layer.slideToggle(2000);
});

var quotes = $(".quotes-scroll-text");
var next = $(".next");
var prev = $(".prev");
var i = 0;
next.on('click', function() {
    quotes.eq(i).fadeOut();
    i++;
    if (i >= quotes.length) {
        i = 0;
    };
    quotes.eq(i).fadeIn();
});
prev.on('click', function() {
    quotes.eq(i).fadeOut();
    i--;
    if (i < 0) {
        i = quotes.length - 1;
    };
    quotes.eq(i).fadeIn();
})