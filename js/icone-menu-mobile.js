$(document).on("click", "#icone", function(){
    if($(this).find("i").hasClass("fa-bars")){
        $(this).find("i").removeClass("fa-bars").addClass("fa-times");
    }else if($(this).find("i").hasClass("fa-times")){
        $(this).find("i").removeClass("fa-times").addClass("fa-bars");
    }
});