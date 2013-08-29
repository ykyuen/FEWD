/*

This is a banking application. This program will update your balance with your deposits and withdrawls.

-	Create 3 variables: balance, transaction, and amount.
-	The starting account balance is 1000$.
-	Ask for their transaction type (deposit, withdrawl).
-	Ask for the amount to withdraw or deposit.
-	Depending on their transaction choice either add or substract the balance. 
-	Print the new balance to the console.
*/

var balance = 1000;
var transaction;
var amount;

// By Fion
while (transaction != 'q') {  
  transaction = prompt('(d)eposite, (w)ithdrawal or (q)uit?'); 
  if (transaction == 'd' || transaction == 'w'){
    amount = parseInt(prompt('How much?')); 
    (transaction == 'd') ? balance += amount : balance -= amount;
  } else if (transaction != 'q') {
    console.log('error')
  } 
} 
console.log('Your new balance: $' + balance) 

// FOR LOOP
// for (null; transaction != 'q'; null) {
//   transaction = prompt('(d)eposite, (w)ithdrawl or (q)uit?');

//   if (transaction == 'd') {
//     amount = parseInt(prompt('How much?'));
//     balance = balance + amount;
//     console.log('Your current balance: $' + balance);

//   } else if (transaction == 'w') {
//     amount = parseInt(prompt('How much?'));
//     balance = balance - amount;
//     console.log('Your current balance: $' + balance);

//   } else if (transaction == 'q') {
//     console.log('Thanks for using our bank service!');
//     console.log('Your final balance: $' + balance);

//   } else {
//     console.log('error on input!');
//   }
// }


// DO WHILE LOOP
// do {

//   transaction = prompt('(d)eposite, (w)ithdrawl or (q)uit?');

//   if (transaction == 'd') {
//     amount = parseInt(prompt('How much?'));
//     balance = balance + amount;
//     console.log('Your current balance: $' + balance);

//   } else if (transaction == 'w') {
//     amount = parseInt(prompt('How much?'));
//     balance = balance - amount;
//     console.log('Your current balance: $' + balance);

//   } else if (transaction == 'q') {
//     console.log('Thanks for using our bank service!');
//     console.log('Your final balance: $' + balance);

//   } else {
//     console.log('error on input!');
//   }

// } while (transaction != 'q')



// WHILE LOOP

// while (transaction != 'q') {

//   transaction = prompt('(d)eposite, (w)ithdrawl or (q)uit?');

//   if (transaction == 'd') {
//     amount = parseInt(prompt('How much?'));
//     balance = balance + amount;
//     console.log('Your current balance: $' + balance);

//   } else if (transaction == 'w') {
//     amount = parseInt(prompt('How much?'));
//     balance = balance - amount;
//     console.log('Your current balance: $' + balance);

//   } else if (transaction == 'q') {
//     console.log('Thanks for using our bank service!');
//     console.log('Your final balance: $' + balance);

//   } else {
//     console.log('error on input!');
//   }

// }



