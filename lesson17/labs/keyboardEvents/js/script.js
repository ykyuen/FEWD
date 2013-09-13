/**
 * Welcome to Keyboard Events Exercise
 * A couple of thing we want to do:
 * 
 * 1) First, let's display the most recent keyCode the user pressed. This will help you do the second
 *    exercise. 
 *
 * 2) Now, let's change the behavior of the "noVowels" textbox so that no vowels can
 *    be typed in it. 
 *    Hint, remeber what event.preventDefault() does? 
 */

$('#noVowels').keypress(function(event){
  
  var keyCode = event.keyCode

  // Prevent the vowels being printed
  // A switch statement is like making a lot of if else checking.
  // Try to search on Google and find out the syntax for switch().
  switch(String.fromCharCode(keyCode)) {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
      event.preventDefault();
      break;
  }

  // Print keyCode
  //$('#justPressed').text(keyCode);

  // OR

  // Print the character
  $('#justPressed').text(String.fromCharCode(keyCode));

});