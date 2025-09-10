// Q-1. Even or Odd Number

// Write a program that takes a number and prints whether it is even or odd.

/* let num = 7; 

if (num % 2 === 0) {
  console.log(num, "is Even");
} else {
  console.log(num, "is Odd");
} */

// Q-2. Find the Largest of Two Numbers

// Ask the user to enter two numbers and print the largest using an if statement.

/* 
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log("Largest number is:", num1);
} else if (num2 > num1) {
  console.log("Largest number is:", num2);
} else {
  console.log("Both numbers are equal");
}
*/

// Q-3. Print Numbers 1 to 10
// Use a for loop to print numbers from 1 to 10.

/* for (let i = 1; i <= 10; i++) {
  console.log(i);
}
*/

// Q-4.Sum of First 10 Natural Numbers
//Write a program to calculate the sum of the first 10 natural numbers using a loop.

/* let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("Sum of first 10 natural numbers is:", sum);
*/

// Q-5.Multiplication Table
//Take input from the user and print the multiplication table using a loop.
/*
let num = parseInt(prompt("Enter a number to print its multiplication table:"));

console.log(`Multiplication Table of ${num}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
} */

// Q-6.Print All Even Numbers from 1 to 20
//Use a for loop and if condition to print only even numbers between 1 and 20.

/* for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
} */

// Q: 7.Pattern 1: Left Triangle
// *
// **
// ***
// ****
// *****


/* let n = 5;

for (let row = 1; row <= n; row++) {
  let stars = "";
  for (let col = 1; col <= row; col++) {
    stars += "* ";
  }
  console.log(stars);
} */



// Q: 8 Pattern 2: Inverted Left Triangle
// *****
// ****
// ***
// **
// *

/* 
let n = 5 // total rows 
for (let row = n; row >= 1; row--){
  let stars = "";

  // Har row me 'row times "*" print hoga
  for(let col = 1; col<= row; col++){
    stars = stars + "*";
  }
  console.log(stars);
} 
*/

// Q: 9 Pattern 3: Right-Aligned Triangle
//     *
//    **
//   ***
//  ****
// *****

/*let n = 5;
for (let row = 1; row <= n; row++) {
  let pattern = "";

  // space 
  for (let space = 1; space <= n-row; space ++){
    pattern = pattern + " ";
  }

  // star after space 
  for(let star = 1; star <= row; star++){
    pattern = pattern + "*";
  }
  console.log(pattern)
} */

// Q: 10 Pattern 4: Inverted Right Triangle
// *****
//  ****
//   ***
//    **
//     *

/* let n = 5; // total rows 
for (let row = 1; row <= n; row ++){
  let pattern = "";

  // space first increasing 
  for (let space = 1; space < row ; space ++ ){
    pattern = pattern + " ";
  }
 // stars decreasing
 for (let star = 1; star <= n-row+1; star ++){
  pattern = pattern + "*";
 }
 console.log(pattern)
}*/

// Q: 11 Pattern 5: Hollow Left Triangle
// *
// * *
// *   *
// *     *
// * * * * *

/*
let n = 5;
for (let row = 1; row <= n; row ++){
  let pattern = "";
  for (let col = 1; col <= row ;col++){
    if(col === 1 || col === row || row === n){
      pattern = pattern + "*";
    }else {
      pattern = pattern + " "
    }
  }
  console.log(pattern);
}
*/

// Q: 12 Pattern 6: Downward Hollow Left Triangle
// * * * * *
// *     *
// *   *
// * *
// *

/*
let n = 5;

for (let row = n; row >= 1; row--) {
  let pattern = "";

  for (let col = 1; col <= row; col++) {
    if (col === 1 || col === row || row === n) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }

  console.log(pattern);
}
*/
// Q: 13 Patter 7  Hollow Right Triangle
//         *
//       * *
//     *   *
//   *     *
// * * * * *

/* let n = 5;

for (let row = 1; row <= n; row++) {
  let pattern = "";

  // Add spaces before stars
  for (let space = 1; space <= n - row; space++) {
    pattern += " ";
  }

  // Add stars and hollow
  for (let col = 1; col <= row; col++) {
    if (col === 1 || col === row || row === n) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }

  console.log(pattern);
}*/


// Q: 14 Pattern 8: Downward Hollow Right Triangle

//  * * * * *
//   *     *
//     *   *
//       * *
//         *

/* let n = 5;

for (let row = 1; row <= n; row++) {
  let pattern = "";

  // Left spaces (increasing)
  for (let space = 1; space < row; space++) {
    pattern += " ";
  }

  // Stars and hollow logic
  for (let col = 1; col <= n - row + 1; col++) {
    if (col === 1 || col === n - row + 1 || row === 1) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }

  console.log(pattern);
} */




// Q: 15 Pattern 9: Full Pyramid
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *


/* let n = 5;

for (let row = 1; row <= n; row++) {
  let pattern = "";

  // Spaces before stars
  for (let space = 1; space <= n - row; space++) {
    pattern += "  "; // double space for alignment
  }

  // Stars with spaces
  for (let star = 1; star <= 2 * row - 1; star++) {
    pattern += "* ";
  }

  console.log(pattern);
} */






// Q: 16 Pattern 10: Hollow Pyramid
//     *
//    * *
//   *   *
//  *     *
// *********

/* let n = 5;

for (let row = 1; row <= n; row++) {
  let pattern = "";

  // Spaces: n - row
  for (let space = 1; space <= n - row; space++) {
    pattern += " ";
  }

  // Columns: 2*row - 1 (odd number of stars/spaces)
  for (let col = 1; col <= 2 * row - 1; col++) {
    if (col === 1 || col === 2 * row - 1 || row === n) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }

  console.log(pattern);
} */

// Q: 17 Pattern 11: Downward Pyramid

// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *

/* let n = 5;

for (let row = 1; row <= n; row++) {
  let pattern = "";

  // Spaces - increasing
  for (let space = 1; space < row; space++) {
    pattern += "  "; // double space for star spacing
  }

  // Stars - decreasing
  for (let star = 1; star <= 2 * (n - row + 1) - 1; star++) {
    pattern += "* ";
  }

  console.log(pattern);
} */

// Q : 18 Pattern 12: Square

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

/* let n = 5;

for (let row = 1; row <= n; row++) {
  let pattern = "";

  for (let col = 1; col <= n; col++) {
    pattern += "* ";
  }

  console.log(pattern);
}
*/

