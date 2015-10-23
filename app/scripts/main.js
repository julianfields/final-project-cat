$( document ).ready(function() {
  $('.btn adopt-button').click(function(e) {
    e.preventDefault();
    $(this).parents('.flexboxz').addClass('');
  });
  $('.close').click(function(e) {
    e.preventDefault();
    $(this).parents('.flexboxz').removeClass('');
  });
});


// $('.readMore').on('click', function(event){
//   event.preventDefault();
//   var box = $(this).parents('.card');
//   box.toggleClass('open');
// });
