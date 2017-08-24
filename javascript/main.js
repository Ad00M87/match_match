$(document).ready( function() {

  $('.matches').hide();

  $('.r1c1').on('click', function(){
        $("#fish1").fadeIn();
  });

  $('.r3c2').on('click', function(){
        $("#fish2").fadeIn();
  });

  $('.r1c2').on('click', function(){
        $("#bear1").fadeIn();
  });

  $('.r4c4').on('click', function(){
        $("#bear2").fadeIn();
  });

});
