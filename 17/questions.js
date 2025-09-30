// Q: 1 Sum of Two Numbers . Write a function add(a, b) that takes two numbers and returns their sum.


/* 
function add (a , b){
  console.log( a + b)
};
add(5 , 10 );
*/



// Q: 2. Find the Smaller Number. Write a function findMin(a, b) that returns the smaller of two numbers.

/*
function findMin(a, b){
  if(a > b){
    console.log("b is minimum than a: ",  b)
  } else {
    console.log("a is minimum than b: " , a)
  }
}
findMin(10 , 5);
*/

// Q: 3: Check Divisibility. Write a function isDivisible(a, b) that returns true if a is divisible by b, otherwise false.

/* 
function isDivisible(a, b) {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}
*/


// Q: 4. String Length. Write a function getStringLength(str) that takes a string and returns its length.


/*
function getStringLength(str) {
    console.log(str.length);
    return str;
}
getStringLength("I love JavaScript");
*/


// Q: 5  Square a Number. Write a function square(num) that returns the square of the given number.

/* 
function square(num){
     return num * num;
}
console.log(square(10));  
*/

// Q: 6 Calculate Area of a Circle. Write a function circleArea(radius) that calculates and returns the area of a circle given its radius.

/*
function circleArea(radius){
    let pi = 3.14;
    return pi * radius * radius;
}
console.log(circleArea(4));
*/


// Q: 7  Capitalize First Letter. Write a function capitalize(str) that capitalizes the first letter of a given string and returns it.

/*
function capitalize(str){
    console.log(str.charAt().toUpperCase()+str.slice(1));
}
capitalize("ayush")
*/

// Q: 8  Check if Prime. Write a function isPrime(num) that returns true if the number is prime and false otherwise.

/*
function isPrime(n) {
    if (n <= 1) return false; // 1 ya kam ke numbers prime nahi hote
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false; // koi factor mila toh prime nahi
    }
    return true; // koi factor nahi mila toh prime hai
}

// Test:
console.log(isPrime(7));   // true
*/

//Q: 9 Remove Spaces from String. Write a function removeSpaces(str) that removes all spaces from the input string and returns the result.


/*
function removeSpaces(str){
     return (str.split(" ").join(""))
};

let input = "Ayush    Singh";
let result = removeSpaces(input);
console.log(result);
*/

// Q: 10 Find Average of Array. Write a function average(arr) that takes an array of numbers and returns their average.


/*
function average(arr) {
    if (arr.length === 0) return 0;

    const sum = arr.reduce((preVal, currVal) => preVal + currVal, 0);
    return sum / arr.length;
}

let arr = [2 , 4 , 8, 2];
console.log(average(arr));
*/

// Q: 11 Check Palindrome Number. Write a function isPalindromeNumber(num) that checks if a given number is a palindrome (reads the same forward and backward).

/*
function isPalindromeNumber(num){
    const str = num.toString();
    const reverseStr = str.split("").reverse().join("")
    if(str === reverseStr){
        console.log("Palindrome Number")
    }else {
        console.log('Not a Palindrome Number')
    };
}
isPalindromeNumber(121);

*/
  

// Q: 12 Find the Largest Number in an Array. Write a function findLargest(arr) that takes an array of numbers and returns the largest number in the array.

/*
function findLargest(arr) {
  return arr.reduce((max, current) => {
    return current > max ? current : max;
  }, arr[0]);
}
console.log(findLargest([10, 5, 20, 8]));
*/


// Q: 13 Count Words in a String. Write a function countWords(str) that counts and returns the number of words in a given string.

/*
function countWords(str){
    return str.trim("").split(" ").length;
}
let str = "Hi I am a boy"
console.log(countWords(str));
*/



// Q: 14 Find Second Largest Number. Write a function secondLargest(arr) that returns the second largest number in an array of numbers.


/*
function secondLargest(arr) {
  if (arr.length < 2) {
    // Agar array me do se kam elements hain, second largest nahi nikal sakte
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      // Naya largest mila
      secondLargest = largest;  // purana largest second largest ban gaya
      largest = num;            // naya largest set karo
    } else if (num > secondLargest && num < largest) {
      // num second largest ho sakta hai (largest se chhota, secondLargest se bada)
      secondLargest = num;
    }
    // Agar num equal ya chhota hai secondLargest ya largest se, ignore kar do
  }

  // Agar secondLargest abhi bhi -Infinity hai, iska matlab second largest distinct element nahi mila
  return secondLargest === -Infinity ? null : secondLargest;
}
console.log(secondLargest([10, 5, 20, 8]));
*/



// Q: 15  Reverse an Array. Write a function reverseArray(arr) that takes an array and returns a new array with the elements in reverse order.

/*
function reverseArray(arr){
    return arr.reverse();
}
console.log(reverseArray([2 , 4 , 8 , 10])); 
*/

// Q: 16 Generate Random Number. Write a function generateRandom(min, max) that generates a random integer between min and max (inclusive).



/*
function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1))+ min;
}
console.log(generateRandom( 3, 4));
*/



// Q: 17 Check Anagram. Write a function isAnagram(str1, str2) that checks if two strings are anagrams of each other (contain the same characters in a different order).





// Q: 18 Sum of Digits. Write a function sumDigits(num) that takes a number and returns the sum of its digits.

/*
function sumDigits(num){
    let sum = 0;
    let str = num.toString();

    for(let i = 0; i < str.length; i++) {
        sum = sum + parseInt(str[i]);
    }

    return sum;
} 

console.log(sumDigits(123));
*/



// Q: 19 Find Unique Elements in an Array.Write a function findUnique(arr) that returns an array of unique elements from the input array.


/*
function findUnique(arr){
    return arr.filter((element , index , arr) => arr.indexOf(element) === index);
}

console.log(findUnique([1, 2, 2, 3, 4, 4, 5]));
*/


/*function findUnique(arr){
    return [...new Set(arr)];
};

console.log(findUnique([1, 2, 2, 3, 4, 4, 5]));
*/


// Q: 20 Fibonacci Sequence. Write a function fibonacci(n) that returns the first n numbers of the Fibonacci sequence as an array.




