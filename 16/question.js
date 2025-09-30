// Q:1 Create an array of your favorite fruits. Add "Mango" at the end and "Apple" at the beginning. 
// Then, remove the first and last elements.



/* let fruits = ["Oranges" ,"Banana", "Strawberry" , "Pineapple" , "Guava"];
console.log(fruits.push("Mango"));
console.log(fruits);
console.log(fruits.unshift('Apple'));
console.log(fruits);
console.log(fruits.shift(0));
console.log(fruits);
console.log(fruits.pop());
console.log(fruits); */
 

// Q:2.Reverse the order of elements in an array [1, 2, 3, 4, 5].

/* let arr = [ 1 , 2 , 3 , 4 , 5];
console.log(arr.reverse()); */


// Q: 3 Given an array of numbers, return a new array where each number is squared.

// Map Method Use
/* let arr = [ 2 , 4 , 6 , 8 , 10];
let newArr = arr.map((element , index , arr) =>{
    return element *2
})
console.log("original Array: " , arr);
console.log(newArr); */


// Q: 4.From an array [2, 5, 8, 11, 14], create a new array containing only numbers greater than 10.


// Filter Method Use 
/*let arr = [2 , 5 , 8 , 11, 14];
let newArr = arr.filter((element , index , arr)=>{
   return element > 10
})
console.log("original Array: " , arr);
console.log(newArr);*/



// Q: 5.From an array ["Alice", "Bob", "Charlie", "David"], find the name that starts with "C".

// Filter Method + startsWith()
/* let names = ["Alice", "Bob", "Charlie", "David"];
let result = names.filter(name => name.startsWith("C"));
console.log(result);  */


// Filter + charAt()
/* let names = ["Alice", "Bob", "Charlie", "David"];
let result = names.filter(name => name.charAt(0) === "C");
console.log(result); */


// For Loop

/* let names = ["Alice", "Bob", "Charlie", "David"];
let result = [];
for (let i = 0; i < names.length; i++) {
    if (names[i][0] === "C") {
        result.push(names[i]);
    }
}
console.log(result);*/


// Q: 6 Sort an array [32, 10, 45, 2, 15] in ascending order.

/* let arr = [32 , 10 , 45 , 2 , 15];
arr.sort((a , b )=>{
    return a - b;
});
console.log(arr); */


// Q: 7. Find the sum of all numbers in the array [1, 2, 3, 4, 5].

/* let arr = [1, 2, 3, 4, 5];
let result = arr.reduce ((preVal , currVal)=>{
    return preVal + currVal
}); 
console.log(result); */


// Q: 8 Check if all numbers in the array [12, 19, 24, 35] are even.

/* let arr = [12, 19, 24, 35];
let evenArr = arr.filter((element , index , arr) =>{
   return element  %2 === 0
});

console.log(evenArr); */



// Q: 9 Check if at least one number in the array [12, 19, 24, 35] is greater than 20.

/* let arr = [12, 19, 24, 35] ;
let result = arr.filter ((element , index , arr) => {
     return element > 20
});

console.log(result);*/


// Q: 10 Flatten the array [[1, 2], [3, 4], [5, 6]] into [1, 2, 3, 4, 5, 6]

/* let arr = [[1, 2], [3, 4], [5, 6]];
console.log(arr.flat(1)); */


// Q: 11.Remove Duplicates from an Array [1, 2, 3, 2, 4, 3, 5]

// By Using Filter () + indexOf()
/* let arr = [1, 2, 3, 2, 4, 3, 5];
let uniqueArr = arr.filter(( item , index , arr)=>{
     return arr.indexOf(item) === index;
});

console.log(uniqueArr); */

// By Using Reduce()

/* let arr = [1, 2, 3, 2, 4, 3, 5];
let uniqueArr = arr.reduce ((preVal , currVal)=>{
        if(!preVal.includes(currVal)) {
            preVal.push(currVal)
        }
        return preVal;
}, []);

console.log(uniqueArr); */

// By Using For Loop

/* let arr = [1 , 2 , 3, 3 , 4 , 3 , 5];
let uniqueArr = [];

for (let i = 0 ; i < arr.length ; i++) {
    if(!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
}
}
console.log(uniqueArr); */




// Q: 12 Find All Even Numbers in an Array [4, 7, 8, 3, 10, 13]

/* let arr = [ 4 , 7 , 8 , 3 , 10 , 13];
let result = arr.filter((element , index , arr)=>{
     return element %2 === 0;
});
 console.log(result); */





// Q: 13  Count Occurrence of Each Element ["a", "b", "a", "c", "b", "a"]


// By Using Reduce Method
/* let arr = ["a", "b", "a", "c", "b", "a"];
let occurence = arr.reduce((preVal , currVal)=>{
     preVal[currVal] = (preVal[currVal] || 0) + 1;
     return preVal
}, {});

console.log(occurence); */


// By using For Each
/* let arr = ["a", "b", "a", "c", "b", "a"];
let occurence = {};
arr.forEach((item)=>{
   occurence[item] = (occurence[item] || 0) + 1;
});

console.log(occurence); */


// For Loop
/* let arr = ["a", "b", "a", "c", "b", "a"];
let occurence = {}
for (let  i = 0; i < arr.length; i++){
    let item = arr[i];
    occurence [item] = (occurence [item] || 0) + 1;
}
console.log(occurence); */


// Q: 14 Find Second Largest Number [10, 4, 20, 15, 5]

/* let arr = [10, 4, 20, 15, 5];

let result = arr.reduce((acc, curr) => {
  if (curr > acc.first) {
    acc.second = acc.first;
    acc.first = curr;
  } else if (curr > acc.second && curr !== acc.first) {
    acc.second = curr;
  }
  return acc;
}, { first: -Infinity, second: -Infinity });

console.log("Second Largest:", result.second); */



// Q: 15 Reverse the Elements in an Array [1, 2, 3, 4, 5]

/* let arr = [ 1, 2, 3 , 4 , 5];
console.log(arr.reverse());
*/

// Q: 16 Count Positive and Negative Numbers [3, -2, -7, 5, 1, -1]


// By For loop
/* let arr = [3, -2, -7, 5, 1, -1];

let positive = 0;
let negative = 0;

for (let i = 0 ; i< arr.length; i ++ ){
    if (arr[i] >= 0){
        positive++;
    } else {
        negative++;
    }
}

console.log('Positive Count: ' , positive);
console.log('Negative Count: ' , negative); */

// By For of Loop

/* let arr = [3, -2, -7, 5, 1, -1];
let positive = 0;
let negative = 0;

for (let element of arr){
    if(element >= 0 ){
        positive++
    } else {
        negative++;
    }
}

console.log('Positive Count: ' , positive); 
console.log('Negative Count: ' , negative); */


// By For Each Loop

/* let arr = [3, -2, -7, 5, 1, -1];
let positive = 0;
let negative = 0;

arr.forEach((num)=>{
  if(num >= 0){
    positive++;
  }else {
    negative++;
  }
});


console.log('Positive Count: ' , positive); 
console.log('Negative Count: ' , negative); */

// By Reduce

/* let arr = [3, -2, -7, 5, 1, -1];

let result = arr.reduce((preVal , currVal)=>{
  if (currVal>0) preVal.positive++;
  else preVal.negative++;
  return preVal;
}, {positive: 0 , negative : 0});

console.log("Positive:", result.positive);
console.log("Negative:", result.negative); */


