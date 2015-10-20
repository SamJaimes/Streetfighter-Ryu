$(document).ready(function() {
  playIntro();
});

$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
  	playHadouken();
  	$('.ryu-ready').hide();
    $('.ryu-cool').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').finish().show()
  	   .animate(
  			{'left': '1020px'},
  			500,
  			function() {
  				$(this).hide();
  				$(this).css('left', '520px');
  			}
  		);
  })
  .mouseup(function() {
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  });
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

$(document).keydown(function(e) {
  if(e.keyCode === 88) {
    $('#ryu-stage')[0].pause();
    playSaxGuy();
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').show();
  }
}).keyup(function(e) {
  if(e.keyCode == 88) {
    $('#sax-guy')[0].pause();
    $('#sax-guy')[0].load();
    $('.ryu-cool').hide();
    $('.ryu-still').show();
  }
});

function playSaxGuy () {
  $('#sax-guy')[0].play();
}

function playIntro () {
  $('#ryu-stage')[0].play();
}

/*  
add to events to fix div stacking and 
mouse in and out issues
$('.ryu div').hide();
*/