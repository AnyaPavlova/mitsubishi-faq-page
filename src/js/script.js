$(document).ready(function () {
  /*Клик по ссылке-анкору */
  $('.link-anchor').on("click", function(e) {
    e.preventDefault(); 
    var mylink = $(this).attr('href');
    var positionblock = $(mylink).offset().top + 10; //вычисляем позицию блока
    $('html, body').animate({ scrollTop: positionblock }, 500); 
  });
});