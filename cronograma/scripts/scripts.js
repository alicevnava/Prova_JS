$(document).ready(function(){
    $(".seat.available").click(function(){
        $(this).toggleClass("selected");
    });
});
// verde <--> vermelho 