/**
 * 
 * Run this from the Windows Run Dialog (WIN + R)
 *
 *   chrome.exe --allow-file-access-from-files
 *
 * OR
 * 
 * If you want to run a really simple server
 * you can also navigate to your project directory
 * and run this from the terminal:
 *
 *     python -m SimpleHTTPServer 8080    
 *
 * and then you can visit localhost:8080 in your 
 * browser and it will ... work! like the web!  
 */

$('#btn').click(function(event){

  var data = $('#data').val();

  // Empty the result div every time the user click a button
  $('#result').html('');

  $.getJSON(data, function(json, textStatus, jqXHR){
    $('#result').append('<p>This is the result:</p>');
    $('#result').append('<hr>');

    // loop through the returned array
    for (var i = 0; i < json.length; i++) {
      $('#result').append('<p>name: ' + json[i].name + '</p>');
      $('#result').append('<p>name: ' + json[i].color + '</p>');
      $('#result').append('<p>name: ' + json[i].origin + '</p>');
      $('#result').append('<hr>');
    }
  })

});