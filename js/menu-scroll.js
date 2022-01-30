$(function(){
    $('.items__menu-desktop a, .menu__mobile a, .box__services-wraper a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;
        $('html,body').animate({'scrollTop':offSetTop});
        return false;
    })
})