// Using String Method


// Q: 1Capitalize the first char of every word.


// By For Loops: 



/*
let str = "welcome to string questions";

let words = str.split(" ");
let result = "";
console.log(words);


for (let i = 0 ; i< words.length; i++){
   let word = words[i];
   let capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
   result = result + capitalizeWord;

   // last word ke baad space nahi chahiye

   if(i < words.length -1){
    result = result + " ";
   }
}
console.log(result); 
*/


// By PUSH AND JOIN

/* 
let str = "welcome to string questions";
let words = str.split(" ");
let capitalizeWords = [];

for (let i = 0 ; i < words.length; i++){
    let word = words[i];
    let capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizeWords.push(capitalizeWord);
}

let result = capitalizeWords.join(" ");
console.log(result);
*/

// Q: 2 Count number of spaces in a sentence.

// By Using For Loop
/*
let str = "welcome to string questions";
let count = 0;

for (let i = 0 ; i < str.length ; i ++){
    if(str[i] === ' '){
        count++;
    }
}

console.log('Spaces:' , count);
*/


// By Split Method
/* 
let str = "welcome to string questions";
let spaces = str.split(" ").length - 1;

console.log("Spaces:", spaces);  // 👉 3
*/

// Reverse a string.
/*
let str = "welcome";
console.log(str.split("").reverse().join(''));
*/


// Reverse a sentance.
/* 
let str = "welcome to string questions";
console.log(str.split(" ").reverse().join(" "));
*/
// Plaindorom => madam > madam.

/* let str = "madam";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed); */

/* let str = "madam"; 
let reverseStr = str.split("").reverse().join("");
if(str === reverseStr){
    console.log("It is Palindrome" , reverseStr);
}else {
    console.log("It is not Palindrome : " , reverseStr);
}*/




