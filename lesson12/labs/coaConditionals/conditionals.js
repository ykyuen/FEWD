	// this is a single line comment
	/*
	 * this is a multi-line comment
	 */

	 //Prompt the user for their name and last name. 
  var firstName = prompt("What's your first name?");
  var lastName = prompt("What's your last name?");


	//Create a new variable called full name and store the users full name.
	var fullName = firstName + " " + lastName;
	
	//Print the full name to the console.
	console.log(fullName);

	//Prompt the user for their age.
	var age = prompt("What's your age?");


	//Add 10 to the age and print the output to the console.
	age = parseInt(age) + 10;
	console.log(age);
	
	//Verify that the user is over 18 and print if they are a minor or adult to the console.
  if (age > 28) {
  	console.log('adult');
  } else {
  	console.log('minor');
  }
	
	//Verify if the first name is "General" and the last name is NOT "Assembly"
	if (firstName == "General" && lastName != "Assembly") {
		console.log('TRUE');
	} else {
		console.log('FALSE');
	}
