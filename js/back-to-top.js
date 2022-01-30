$(document).ready(function() {

    $('#icon-smoothscroll-top').hide(); //Esconder o elemento após carregar o JQuery.
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 400) {
        $('#icon-smoothscroll-top').fadeIn();
      } else {
        $('#icon-smoothscroll-top').fadeOut();
      }
    });
  
    $('#icon-smoothscroll-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  
  });