$(document).ready(function() {
    $(".nav_right li").mouseenter(function() {
        $(this).find(".dropdown").addClass("active");
    })
    $(".nav_right li").mouseleave(function() {
        $(this).find(".dropdown").removeClass("active");
    })
})