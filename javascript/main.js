$(document).ready( function() {

  $('.matches').hide();

  $('.card').one('click', function() {
    $(this).find(':nth-child(2)').fadeIn();
  });

});
