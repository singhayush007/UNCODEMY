// object  collection of data
// key and values 

// let obj = {
//     name : "snehank",
//     course : "mern",
// }

// function print () {
//     console.log("hello");
// }


// let obj = {
//     name : "mandeep",
//     course : "mern",

//     print(){
//         console.log("hello");
//     }
// }


// Object._proto_ = reference(object) 

// let emp = {

//     calTax(){
//         console.log("tax rate is 10%");
//     },

//     print(){
//         console.log("print tax");
//     }
// }


// let emp1 = {
//     name : "mandeep",
//     salary : 500000,

//         start(){
//         console.log("start");
//     },

//     stop(){
//         console.log("stop");
//     }
    
// }

// let emp2 = {
//     name : "ayush",
//     salary : 400000,
//         start(){
//         console.log("start");
//     },

//     stop(){
//         console.log("stop");
//     }
// }

// emp1._proto_ = emp;
// emp2._proto_ = emp;

// // prototype = it is a special object 


// // classes = class is a programing code to create object taking as a templete or a blueprint.
// // methods in classes : constructor, get/set, private , static , 

// // class MyClass {
// //     constructor(){

// //     }

// //     methods(){

// //     }
// // }

// // let obj = new MyClass(); syntax to create an object through class blueprint or templete.

// class car {

//     constructor(brand, millage){
//         console.log("creating a new object");
//         this.brand = brand;
//         this.millage = millage;
//     }

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }

// let city = new car("honda", "28kmpl");
// let dezire = new car("maruti", "22kmpl");


// // inheritence =  passing down the properties from parent to child class templete.

// // keywoard : extend keywoard  use to inheritance properties

// class parent {
//     hello(){
//         console.log("hello");
//     }
// }


// class child extends parent {
//     hi(){
//         console.log("hi");
//     }
// }

// let obj1 = new parent();
// let obj2 = new child();

// Q.  

// class person {
//     constructor(gender){
//         this.gender = gender;
//     }

//     eat (){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }

//     work(){
//         console.log("work");
//     }


// }


// class engineer extends person {
//     constructor(gender, branch){
//         super(gender);
//         this.branch = branch;
//     }
//     work(){
//         console.log("solves problems");
//     }
// }
// class doctor {
//     work(){
//         console.log("treat people");
//     }
// }

// let mandeep = new engineer("Male", "fullstack"); 


// static method

// class claculator {
//     static add (a, b){
//         console.log(a + b);
//     }
//     static multi (a, b){
//         console.log(a * b);
//     }
// }

// console.log(claculator.add(5,4));


// private method :
// #varible 


// class bankAccount {
//     #balance = 0;

//     constructor(accountHolder){
//         this.accountHolder = accountHolder;
//     }

//     deposite(amount){
//         if(amount > 0){
//             this.#balance += amount;
//         }else{
//             console.log("deposite amount is inValid");
//         }
//     }

//     withdraw(amount){
//         if(amount <= this.#balance){
//             this.#balance -= amount;
//         }else{
//             console.log("insufficent funds");
//         }
//     }

//     checkBalance(){
//         console.log(⁠ Balance = ${this.#balance} ⁠);

//     }
// }

// let account101 = new bankAccount("Ayush");
// account101.deposite(50000);
// account101.withdraw(5000);
// account101.checkBalance();
// console.log(account101);
// console.log(typeof account101);


// getter / setter


// class person {
//     constructor(firstName, lastName){
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }

//     get userName(){
//         return ⁠ ${this._firstName} ${this._lastName} ⁠;
//     }

//     set firstName(newFirstName){
//         if (newFirstName.length > 0){
//             this._firstName = newFirstName;
//         }else{
//             console.log("invalid first name")
//         }
//     }

//     set lastName(newLastName){
//         if(newLastName.length > 0){
//             this._lastName = newLastName;
//         }else{
//             console.log("invalid lastname");
//         }
//     }
// }

// let person1 = new person("snehank", "singh");
// console.log(person1.userName);

// person1.firstName = "ayush";
// console.log(person1.userName);

// person1.lastName = "kumar";
// console.log(person1.userName)


// 2.Define a Student class with properties name, rollNumber, and marks.

// class Student {
//   constructor(name , rollNumber , marks){
//     this.name = name;
//     this.rollNumber = rollNumber; 
//     this.marks = marks;
//   }

//   info(){
//     console.log(⁠ name: ${this.name} ⁠);
//     console.log(⁠ rollNumber: ${this.rollNumber} ⁠);
//     console.log(⁠ marks: ${this.marks} ⁠);
//   }
// }

// const student = new Student ('Ayush' , 1 , 80);

// student.info();


// class Student {
// constructor(name, rollNumber, marks) {
// this.name = name;
// this.rollNumber = rollNumber;
// this.marks = marks;
// }
// displayInfo() {
// console.log(⁠`Name: ${this.name}`⁠);
// console.log(⁠`Roll Number: ${this.rollNumber}`⁠);
// console.log(`⁠Marks: ${this.marks}`);
// }
// }
// const student1 = new Student("Manish", 102, 92);
// student1.displayInfo();
// console.log("----------");