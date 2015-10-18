$( document ).ready(function() {
  $('.learn-more').click(function(e) {
    e.preventDefault();
    $(this).parents('.card').addClass('open-image');
  });
  $('.close').click(function(e) {
    e.preventDefault();
    $(this).parents('.card').removeClass('open-image');
  });
});
