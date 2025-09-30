// string :  a sequences of characters used to store form of data.

// a = 5;
// b = 3;
// console.log("a + b =" , a + b);
// console.log(` a + b = ${a + b}`);

// string methods:

// 1. length :

// let name = "I Love Js to Work.";
// console.log(name.length) // 18

// 2. charAt():

// console.log(name.charAt(7)); // J

// 3. concat():

// let method = "STRING methods";
// let methods = " length and charAt()";

// let output = name + method + methods ;
// console.log(output);
// console.log(name.concat(method).concat(methods));

// 4. repeat(n);

// console.log(output.repeat(4));
// console.log(output.concat("\n").repeat(4));

// 5. trim():

// console.log(method);
// console.log(method.trim());

// 6. slice(start, end);

// console.log(methods.slice(2, 6)); // engt

// 7. toUpperCase(), toLowerCase()

// console.log(method.toUpperCase());
// console.log(method.toLowerCase());

// 8. replace("old", "new");
//    replace(/old value/g, "new");
//    replaceAll("old", "new");

// let msg = "hello hi hello hello";
// console.log(msg.replace("hello", "hi"));
// console.log(msg.replaceAll("hello", "hi"));
// console.log(msg.replace(/hello/g, "hi"));

// Q. creating a username

// @snehank -username

/* let userInput = prompt("Enter a username");
let userName = userInput.trim().toLocaleLowerCase().replace(/\s+/g, "");
let special = "@";

console.log(special.concat(userName));*/

// to do work : password generator: lower case , uppercase , speciacl character , number . lenght is more than 8 th character.




// Q. Creating a password (lowercase, uppercase, number, special, length > 8)
let userInput = prompt ("Enter a Valid Password")

let password = userInput.trim();
let hasLower = password.toLowerCase()
let hasUpper = password.toUpperCase()
let hasNumber  = /\d/.test(password)
let hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/ .test(password)

let isValid = length > 8 && hasLower && hasUpper && hasNumber && hasSpecialCharacter ;

if(isValid){
    console.log("Your Password is correct: " , "password");
}else {
    console.log("Your Password is incorrect: " , password)
alert("Invalid Password.\nIt must contain: \n Lowercase\n Uppercase\n Number\n Special Character\n length>8");
}; 