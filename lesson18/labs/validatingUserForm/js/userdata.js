/**
 * Suggestions only, you can implement the logics in your own way
 *
 * 1. CREATE USER OBJECT FOR THE FORM INPUTS (using Literal Notation)
 * 2. CREATE VARIABLES FOR STORING THE DOM DATA FROM THE JQUERY SELECTOR
 * 3. INITIALLY HIDE ERRORS	
 * 4. CREATE A DISPLAY FUNCTION FOR DISPLAYING THE INPUTTED DATA (can be used in the form submit event function and the clear function)
 * 5. ADD_USER FORM SUBMIT EVENT FUNCTION
 *    - validate the four user inputs
 *    - for phone number, use this RegExp object: /^[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[0-9]$/
 *    - for email, use this RegExp object: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/
 * 6. CLEAR BUTTON CLICK EVENT FUNCTION
 */

//CREATE OBJECT (using Literal Notation)
var user = {
  name : '',
  age : '',
  phone : '',
  email : ''
};

$(document).ready(function(){

  // hide all erros initially
  $('span[id$="error"]').hide();

  // Implement the event handler of the submit button click event
	$('input[type="submit"]').click(function(event){

    // prevent the default page refresh when submit button is clicked
    event.preventDefault();
    
    user.name  = $('#user_name').val();
    user.age   = $('#user_age').val();
    user.phone = $('#user_ph').val();
    user.email = $('#user_email').val();

    // this boolean will be set to true if the user input has error
    var hasError = false;

    if (user.name.length < 3) {
      $('#user_name_error').show();
      hasError = true;
    } else {
      $('#user_name_error').hide();
    }

    if (isNaN(user.age) || user.age == '') {
      $('#user_age_error').show();
      hasError = true;
    } else {
      $('#user_age_error').hide();
    }

    var pattern = /^[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[0-9]$/;

    if (pattern.test(user.phone)) {
      $('#user_ph_error').hide();
    } else {
      $('#user_ph_error').show();
      hasError = true;
    }

    pattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;

    if (pattern.test(user.email)) {
      $('#user_email_error').hide();
    } else {
      $('#user_email_error').show();
      hasError = true;
    }

    if (!hasError) {
      display();
    }
  });

  function display() {
    // blank out the list
    $('#display_data').html(''); 
  
    //each iterates over all properties in the object one by one. 
    $.each(user, function(prop, value) {
      //display each piece of data.
      $('#display_data').append('<li>'+prop+': '+value+'</li>'); 
    });
  }

  $('#clear').click(function(){
    user.name = ''; //clear name
    user.age = ''; //clear age
    user.phone = ''; //clear phone
    user.email = ''; //clear email
    display();
  });
});


