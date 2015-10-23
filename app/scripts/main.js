$('.readMore').on('click', function(event){
  event.preventDefault();
  var box = $(this).parents('.card');
  box.toggleClass('open');
});
