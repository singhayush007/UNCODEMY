// function : a block of codes used to perform some task.

console.log("hello");

let a = "xyz";
console.log(a.toUpperCase());

// function defination and calling :

function functionName() {
    console.log("this is function class");
    console.log(4 + 6);
}


functionName();

// es6: prameter / argument 


// arrow function:

   let sum = (x, y) => {
           console.log(x + y);
           return ;
           console.log(x + y);
         }

let r = sum(2, 3);

// Q . write a function to find vowels , consonant count  from the word. 


function vowelCount(string){ 
    let vowel = 0;
    let consto = 0;
    for(let i=0; i<string.length; i++){
        if(string[i] === 'a' || string[i] === 'e' || string[i]=== "i" || string[i]=== "o" || string[i]=== "u"){ 
        vowel++;
    }
    else{
        consto++;
    }
    }
    console.log("vowel:" + vowel);
    console.log("consto:" +consto);

}
vowelCount("hello");