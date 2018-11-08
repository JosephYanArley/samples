$(document).ready(function() {

    var samples = new overlay();

    console.log(samples);
});

function overlay() {

    var element = this;
    element.example = $(".example");
    for (var i = 1; i <= element.example.length; i++) {
        element.example[i - 1].image = $("[data-num=" + i + "] .example-image img");
        element.example[i - 1].git = $("[data-num=" + i + "] .example-image .example-image-overlay--git");
        element.example[i - 1].layout = $("[data-num=" + i + "] .example-image .example-image-overlay--layout");
    }

    /*  element.example.image.on("mouseenter", function() {
         element.example.image.addClass("hovered");
     });

     element.example.image.on("mouseleave", function() {
         element.example.image.removeClass("hovered");
     }); */
};