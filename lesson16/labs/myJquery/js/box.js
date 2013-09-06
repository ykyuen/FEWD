/*
	Only add code to this file.
*/

$('h1').remove();
$('body > p').remove();

var input = prompt('Yes or No?');

if (input == 'Y' || input == 'y') {
  $('.box').hide(3000, showBox2);
} else {
  alert('nothing has changed!');
}

function showBox2() {
  $('.box2').css('background-color', 'blue').show(1000);
}