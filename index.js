const buttons = Array.from($('button'));

buttons.forEach(function(button, index) {
  button.prepend(index + '. ');
})

$('.button1').click(function() {
  $(this).fadeTo(1000, 0).fadeTo(1000, 1);
})

$('.button2').click(function() {
  $(this).slideToggle(1000).slideToggle(1000);
})

$('.button3').click(function() {
  $(this).animate({width: '+=50px', height: '+=10px', fontSize: '20px'}, 'slow')
    .animate({width: '-=50px', height: '-=10px', fontSize: '14px'}, 'slow');
})

$('.button4').click(function() {
  if($(this).text() == '3. Text Changer') {
    $(this).text('3. Hello')
  } else {
    $(this).text('3. Text Changer');
  }
})

$('.button5').click(function() {
  alert($(this).html());
})

$('.button6').click(function() {
  $(this).attr('disabled', 'true')
    .text('Disabled');
})

$('.button7').click(function() {
  $(this).prepend('<p>Text</p>');
})

$('.button8').click(function() {
  $(this).append('<p>Text</p>');
})

$('.button9').click(function() {
  $('.button7').empty().text('6. Add text before');
  $('.button8').empty().text('7. Add text after');
  $('.button10').css('background', '#fff');
  $('.button10').hover(function() {
    $(this).css('background', '#000')
      .css('color', '#fff')
  }, function() {
    $(this).css('background', '#fff')
      .css('color', '#000')
  })
})

$('.button10').click(function() {
  $(this).css('background', '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase())
})

$('.popup').hide();

$('.button11').click(function() {
  $('.popup').toggle();
})

$('.button12').click(function() {
  alert('Height=' + $(this).outerHeight() + 'px Width=' + $(this).outerWidth() + 'px');
})

