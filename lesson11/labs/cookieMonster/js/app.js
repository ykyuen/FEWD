var counter = 0;
$(document).ready(function(){
  $("#startSwapping").click(function(event) {
    counter = counter % 4 + 1;
    $("body").css("background-image", "url(\"images/bg" + counter + ".jpg\")");
  });
})