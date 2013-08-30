$(
  function(event) {
    // $(handler) is a short hand of $(document).ready(handler)

  	//Start to type below here. Make sure not to delete any "{}" braces. 
    var favColor = prompt("What is your favorite color?");

    if (favColor == "blue" || favColor == "red" || favColor == "yellow" || favColor ==  "green"){
      $("body").css ('background-color', favColor);
    } else {
      $("body").css ('background-color', "white");
      $("h2").html("Sorry we don't have that color");
    }
  }
);