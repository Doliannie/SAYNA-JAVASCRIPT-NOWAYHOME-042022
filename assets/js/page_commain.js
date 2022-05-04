//animation button
$(".btninverse").mouseenter(function(){
    $(this).css({'background':' #b11313','color':'white','font-weigth':'bolder','box-shadow':'5px 5px 60px white'})
})
$(".btninverse").mouseleave(function(){
    $(this).css({'background':'white ','color':'#b11313','font-weigth':'bolder','box-shadow':'none'})
})
$("#btn2").mouseenter(function(){
    $(this).css({'background':'white ','color':'#b11313','font-weigth':'bolder','box-shadow':'5px 5px 60px white'})
})
$("#btn2").mouseleave(function(){
    $(this).css({'background':' rgba(0,0,0,0)','color':'white','box-shadow':'none'})
})
//surlignage du rubrique de menu
$("li").mouseenter(function(){
    $(this).css({ 'text-decoration':'line-through'})
})
$("li").mouseleave(function(){
    $(this).css({ 'text-decoration':'none'})
})
// hover footer-icone
$(".footer-icone").mouseenter(function(){
    $(this).css({ 'color':"white"})
})
$(".footer-icone").mouseleave(function(){
    $(this).css({ 'color':"black"})
})
//fade in grand titre et sous-titre

$(document).ready(function(){
    $(".box").animate({
        'left':'50px'
    },)
    $(".description").fadeIn(5000);
})