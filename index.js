$('.button1').click(function() {
  $(this).fadeTo(1000, 0);
  $(this).fadeTo(1000, 1);
});

$('.button2').click(function() {
  $(this).slideToggle(1000);
  $(this).slideToggle(1000);
})

$('.button3').click(function() {
  $(this).animate({width: '+=50px', height: '+=10px', fontSize: '20px'}, 'slow');
  $(this).animate({width: '-=50px', height: '-=10px', fontSize: '14px'}, 'slow');
})