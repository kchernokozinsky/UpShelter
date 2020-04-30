$(document).ready(function(){
    console.log("test");

    $("#dropdown").on("click", function(e){
        e.preventDefault();
        console.log("click");
        if($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).children("ul").slideUp("fast");
        } else {
            $(this).addClass("open");
            $(this).children("ul").slideDown("fast");
        }
    });
})
