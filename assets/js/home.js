
//animation bacground marvel
$("document").ready(function(){
    $(".background").animate({
        'left':'50%'
    }, 1500)
   
})
$(document).ready(function() {
    /* Spiderman scroll */
    $(window).scroll(function() {
        let stop = $("#spiderman").offset().top;
        let positionY = Math.floor($(document).scrollTop());
        if (positionY < stop) {
            $(".background1").animate({ 'top': positionY + "px" });
        }
    });
    $(window).scroll(function() {
        let stop1 = $("#news").offset().top;
        let positionY1 = Math.floor($(document).scrollTop());
        if (positionY1 < stop1) {
            $("#spiderman").animate({ 'top': positionY1 + "px" });
        }
    });

});
/*zoem de trois heros spiderman*/
$(".heros3").mouseenter(function(){
    (this).css({
        'transform':'scale(1.5)'
    })
})