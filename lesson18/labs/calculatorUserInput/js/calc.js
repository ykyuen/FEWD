/* Write the JS neccesary to calculate values after a number is changed inside the form field.

Hints:
1.) Learn about change event methods: http://api.jquery.com/change/
2.) Learn about retrieving values from form inputs: http://api.jquery.com/val/
3.) Learn how to select specific inputs using eq selectors: http://api.jquery.com/eq-selector/

*/

// Approach 1 by Fion
$("#wrapper").on('change','div > input', function() {
  parent = $(this).parent();
  operators = ['+','-','*','/','%'];
  op = $('#wrapper > div').index(parent);

  one = parseInt(parent.find('input:eq(0)').val());
  two = parseInt(parent.find('input:eq(1)').val());
  parent.find('input:eq(2)').val(calc(one, two, operators[op]));
});

function calc(one, two, operator){
  return eval(one + operator + two);
}



// Approach 2
// $('#addition input:eq(0)').change(addition);
// $('#addition input:eq(1)').change(addition);

// $('#subtraction input:eq(0)').change(subtraction);
// $('#subtraction input:eq(1)').change(subtraction);

// $('#multiplication input:eq(0)').change(multiplication);
// $('#multiplication input:eq(1)').change(multiplication);

// $('#division input:eq(0)').change(division);
// $('#division input:eq(1)').change(division);

// $('#modulus input:eq(0)').change(modulus);
// $('#modulus input:eq(1)').change(modulus);

// function addition() {
//   var box1 = parseInt($('#addition input:eq(0)').val());
//   var box2 = parseInt($('#addition input:eq(1)').val());
//   $('#addition input:eq(2)').val(box1 + box2);
// }

// function subtraction() {
//   var box1 = parseInt($('#subtraction input:eq(0)').val());
//   var box2 = parseInt($('#subtraction input:eq(1)').val());
//   $('#subtraction input:eq(2)').val(box1 - box2);
// }

// function multiplication() {
//   var box1 = parseInt($('#multiplication input:eq(0)').val());
//   var box2 = parseInt($('#multiplication input:eq(1)').val());
//   $('#multiplication input:eq(2)').val(box1 * box2);
// }

// function division() {
//   var box1 = parseInt($('#division input:eq(0)').val());
//   var box2 = parseInt($('#division input:eq(1)').val());
//   $('#division input:eq(2)').val(box1 / box2);
// }

// function modulus() {
//   var box1 = parseInt($('#modulus input:eq(0)').val());
//   var box2 = parseInt($('#modulus input:eq(1)').val());
//   $('#modulus input:eq(2)').val(box1 % box2);
// }