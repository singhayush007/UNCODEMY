// CLASS BASED OBJECT QUESTION

// Q: 1.Define a BankAccount class with properties accountNumber, balance, and owner.
/*
class BankAccount {
  constructor(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
  }

  bankDetails() {
    console.log(
      `Hello , AccountNumber ${this.accountNumber} , balance is ${this.balance} and owner name is ${this.owner}`
    );
  }
}

let bankAccount1 = new BankAccount("101", 1000, "John");
let bankAccount2 = new BankAccount("102", 5000, "Jane");
bankAccount1.bankDetails();
bankAccount2.bankDetails();
*/

// Q: 2.Define a Student class with properties name, rollNumber, and marks.
/*
class Student {
    constructor(name , rollNumber , marks){
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    studentDetails(){
        console.log(`Hello , my Name is ${this.name} my RollNumber is ${this.rollNumber} and my Marks is ${this.marks}`)
    }
}

let student1 = new Student ("John" , 101 , 80);
let student2 = new Student ("Jane" , 102 , 90);
student1.studentDetails();
student2.studentDetails();
*/

// Q:3.Define an Employee class with properties name, position, and salary.
/*
class Employee{
    constructor(name , position , salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    EmployeeDetails(){
        console.log(`My name is ${this.name}, my position in bank is ${this.position} and my salary is ${this.salary}`)
    }
}

let employee1 = new Employee ("John" , "Manager" , 50000);
let employee2 = new Employee ("Jane" , "Accountant" , 25000);
let employee3 = new Employee ("ALex" , "Chairman" , 100000);

employee1.EmployeeDetails();
employee2.EmployeeDetails();
employee3.EmployeeDetails();
*/

// Q: 4.Define a Book class with properties title, author, and price.
/*
class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
  BookDetails() {
    console.log(
      `Book title is ${this.title} , author name is ${this.author} and price is ${this.price}`
    );
  }
}

let book1 = new Book ("The Alchemist " , "Paulo Coelho" , 110);
let book2 = new Book ("The 48 Laws of Power" , "Robert Greene" , 180);
let book3 = new Book ("Atomic Habits" , "James Clear" , 300);

book1.BookDetails();
book2.BookDetails();
book3.BookDetails();
*/

// Q: 5.Define a Car class with properties brand, model, and year.
/*
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  carDetails() {
    console.log(
      `Car brand is ${this.brand} , model name is ${this.model} and launch year is ${this.year}`
    );
  }
}

let car1 = new Car("Rolls-Royce", "Rolls-Royce Spectre", 2024);
let car2 = new Car("Porsche", "Porsche Macan EV", 2025);
let car3 = new Car("Mercedes", "Mercedes-Benz Electric G-Class", 2025);

car1.carDetails();
car2.carDetails();
car3.carDetails();
*/

/* Q: 6. Define a ShoppingCart class with properties items (array).
Include methods:
addItem(item, price) → Adds an item with price to the cart.
removeItem(item) → Removes an item from the cart.
calculateTotal() → Returns total price of items.
*/
/*
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  addItem(item, price) {
    if (item && price > 0) {
      this.items.push({ item, price });
      console.log(`${item} added to cart`);
    } else {
      console.log("Invalid item or price");
    }
  }
  removeItem(item) {
    const index = this.items.findIndex((product) => product.item === item);
    if (index !== -1) {
      console.log(`${this.items[index].item} removed from cart`);
      this.items.splice(index, 1);
    } else {
      console.log("Item not found in cart");
    }
  }
  calculateTotal() {
    if (this.items.length === 0) {
      console.log("Cart is Empty");
      return 0;
    } else {
      let total = this.items.reduce((sum, product) => sum + product.price, 0);
      return total;
    }
  }
}

const cart = new ShoppingCart();
cart.addItem("Laptop" , 60000);
cart.addItem("Desk" , 5000);
cart.addItem("" , 10000);
console.log('Total Price:' , cart.calculateTotal());

cart.removeItem("Mobile");
cart.removeItem("Desk");
console.log("Total price after removing :" , cart.calculateTotal());
*/

/* Q: 7. Create a Person Class
Define a Person class with properties name, age, and city.
Include methods:
birthday() → Increases age by 1.
changeCity(newCity) → Updates the city.
*/

/*
class Person {
    constructor(name , age , city){
      this.name = name;
      this.age = age;
      this.city = city;
    }
    birthday(){
        this.age = this.age + 1
    }
    changeCity(newCity){
        this.city = newCity;
    }
}

let person1 = new Person ("Ayush" , 23 , "Delhi");
console.log(person1.age);
person1.birthday();
console.log(person1.age);

console.log(person1.city);
person1.changeCity("Chandiagrh");
console.log(person1.city);
*/

/* 8. Define a Movie class with properties title, director, releaseYear, and rating.
Include methods:
updateRating(newRating) → Updates the movie rating.
movieDetails() → Logs movie details.
*/
/*
class Movie {
  constructor(title, director, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  updateRating(newRating) {
    this.rating = newRating;
  }
  movieDetails() {
    console.log(
      `Movie title is ${this.title} , which is directed by ${this.director} , released in ${this.releaseYear} and IMDB rating is ${this.rating}`
    );
  }
}

let movie1 = new Movie("The Godfather", "Francis Ford Coppola", 1972 , 9.2);

movie1.movieDetails();
movie1.updateRating(9.5);
console.log("After updating rating : ");
movie1.movieDetails();
*/

/* Q: 9 Define a Library class
Properties:
books (array of book objects)
Methods:
addBook(title, author, price) → Adds a book to the library.
removeBook(title) → Removes a book by title.
findBook(title) → Returns details of a book by title.
*/
/*
class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, price) {
    if (title && author && price > 0) {
      this.books.push({ title, author, price });
      console.log(`${title} added to liabrary`);
    } else {
      console.log("Invalid Title, Author or Price");
    }
  }
  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index !== -1) {
      console.log(`${this.books[index].title} removed from library`);
      this.books.splice(index, 1);
    } else {
      console.log("Books not found in Library");
    }
  }
  findBook(title) {
    const book = this.books.find((book) => book.title === title);
    if (book) {
      console.log(
        `Book Found: Title: ${book.title}, Author: ${book.author}, Price: ${book.price}`
      );
      return book;
    } else {
      console.log("Book not Found in Library");
      return null;
    }
  }
}
const library = new Library ();
library.addBook("1984", "George Orwell", 300);
library.addBook("The Alchemist", "Paulo Coelho", 250);
library.findBook("1984");
library.findBook("The Alchemist");
library.removeBook("1984");
*/

/* Q: 10 Define a Rectangle class
Properties: length , width
Methods: area() → Returns the area of the rectangle.
perimeter() → Returns the perimeter of the rectangle.
*/
/*
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    area() {
        if (this.length > 0 && this.width > 0) {
            return this.length * this.width;
        } else {
            return "Invalid dimensions";
        }
    }

    perimeter() {
        if (this.length > 0 && this.width > 0) {
            return 2 * (this.length + this.width);
        } else {
            return "Invalid dimensions";
        }
    }
}


let rectangle = new Rectangle(2, 2);
console.log(`Area: ${rectangle.area()}`);   
console.log(`Permeter: ${rectangle.perimeter()}`)
*/

/* Q: 11 Define a Bank class
Properties:
customers (array of customer objects)
Methods:
addCustomer(name, accountNumber, balance) → Adds a new customer.
removeCustomer(accountNumber) → Removes a customer by account number.
deposit(accountNumber, amount) → Deposits money into a customer’s account.
withdraw(accountNumber, amount) → Withdraws money if sufficient balance is available.*/
/*
class Bank {
    constructor() {
        this.customers = []; // customers ka data store hoga array me
    }

    //Add Customer
    addCustomer(name, accountNumber, balance) {
        let customer = { name, accountNumber, balance };
        this.customers.push(customer);
        console.log(`Customer ${name} added successfully.`);
    }

    //Remove Customer
    removeCustomer(accountNumber) {
        let index = this.customers.findIndex(cust => cust.accountNumber === accountNumber);

        if (index !== -1) {
            console.log(`Customer ${this.customers[index].name} removed successfully.`);
            this.customers.splice(index, 1);
        } else {
            console.log("Customer not found!");
        }
    }

    // Deposit
    deposit(accountNumber, amount) {
        let customer = this.customers.find(cust => cust.accountNumber === accountNumber);

        if (customer) {
            customer.balance += amount;
            console.log(`₹${amount} deposited. New Balance: ₹${customer.balance}`);
        } else {
            console.log("Customer not found!");
        }
    }

    //Withdraw 
    withdraw(accountNumber, amount) {
        let customer = this.customers.find(cust => cust.accountNumber === accountNumber);

        if (customer) {
            if (customer.balance >= amount) {
                customer.balance -= amount;
                console.log(`₹${amount} withdrawn. Remaining Balance: ₹${customer.balance}`);
            } else {
                console.log("Insufficient balance!");
            }
        } else {
            console.log("Customer not found!");
        }
    }
}

let bank = new Bank ();
bank.addCustomer('Jane' , 101 , 50000);
bank.addCustomer("John" , 102 , 10000);

bank.deposit(101 , 20000);
bank.deposit(102 , 5000);

bank.withdraw(102, 2000);

bank.removeCustomer(101);
console.log(bank.customers);
*/

/* Q: 12 Define a Circle class
Properties: radius
Methods: area() → Returns the area of the circle.
circumference() → Returns the circumference of the circle.*/

/*
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    area(){
        if(this.radius > 0){
            return Math.PI * this.radius * this.radius
        } else {
            console.log("Invalid Radius");
            return null;
        }
    }
    circumference(){
        if (this.radius > 0){
            return 2 * Math.PI * this.radius;
        } else {
            console.log("Invalid Radius");
            return null;
        }
    }
}

let circle = new Circle(3);
console.log("Area:" , circle.area().toFixed(2));
console.log("Circumference:" , circle.circumference().toFixed(2))
*/

/* Q: 13 Define a Hospital class
Properties:
patients (array of patient objects)
Methods:
admitPatient(name, age, disease) → Adds a patient.
dischargePatient(name) → Removes a patient by name.
listPatients() → Displays all admitted patients. */
/*
class Hospital {
  constructor() {
    this.patients = [];
  }

  // Add Patients
  admitPatient(name, age, disease) {
    let patient = { name, age, disease };
    this.patients.push(patient);
    console.log(`Patient ${name} added Successfully.`);
  }

  // Remove Patient
  dischargePatient(name) {
    let index = this.patients.findIndex((pat) => pat.name === name);
    if (index !== -1) {
      console.log(`Patient ${this.patients[index].name} Discharged`);
      this.patients.splice(index, 1);
    } else {
      console.log("Patient Not Foud!");
    }
  }
  // List Patients
  listPatients() {
    if (this.patients.length === 0) {
      console.log("No Patients admitted.");
    } else {
      console.log("List of aditted Patients:");
      this.patients.forEach((pat, idx) => {
        console.log(
          `${idx + 1}. Name : ${pat.name}, Age : ${pat.age}, Disease: ${
            pat.disease
          }`
        );
      });
    }
  }
}

const hospital = new Hospital();

hospital.admitPatient("John", 20, "Fever");
hospital.admitPatient("Jane", 21, "Cold");
hospital.listPatients();
hospital.dischargePatient("John");
hospital.listPatients();
*/

/* Q: 14Define a Restaurant class
Properties:
menu (array of food items with prices)
Methods:
addItem(name, price) → Adds a food item to the menu.
removeItem(name) → Removes a food item.
updatePrice(name, newPrice) → Updates the price of a food item.
 */
/*
class Restaurant {
  constructor() {
    this.menu = [];
  }
  // Add food item
  addItem(name , price){
    if(name && price > 0){
        this.menu.push({name , price});
        console.log(`${name} added to the menu.`);
    } else {
        console.log('Invalid name or Price');
    }
  }

  // Remove Food item
  removeItem (name){
    const index = this.menu.findIndex(item=> item.name === name);
    if(index !== -1){
        console.log(`${this.menu[index].name} removed from the menu.`)
        this.menu.splice(index , 1);
    } else {
        console.log("Item nt found in the menu");
    }
  }

  // Update price 

  updatePrice(name, newPrice) {
    const item = this.menu.find(item => item.name === name);
    if (item) {
      if (newPrice > 0) {
        item.price = newPrice;
        console.log(`${name}'s price updated to ₹${newPrice}.`);
      } else {
        console.log("Invalid new price.");
      }
    } else {
      console.log("Item not found in the menu.");
    }
  }
}

const restaurant = new Restaurant();

restaurant.addItem("Pizza", 250);
restaurant.addItem("Burger", 150);
restaurant.updatePrice("Pizza", 300);
restaurant.removeItem("Burger");

console.log(restaurant.menu);
*/

/* Q: 15Define a University class
Properties:
students (array of student objects)
professors (array of professor objects)
Methods:
addStudent(name, rollNumber, course) → Adds a student.
removeStudent(rollNumber) → Removes a student.
addProfessor(name, department) → Adds a professor.
*/
/*
class University {
  constructor() {
    this.students = [];
    this.professor = [];
  }
  // Add Student

  addStudent(name, rollNumber, course) {
    if (name && rollNumber && course) {
      this.students.push({ name, rollNumber, course });
      console.log(`Student ${name} added successfully.`);
    } else {
      console.log("Invalid Student Details.");
    }
  }
  // Student Remove

  removeStudent(rollNumber) {
    const index = this.students.findIndex(
      (student) => student.rollNumber === rollNumber
    );
    if (index !== -1) {
      console.log(`Student ${this.students[index].name} removed.`);
      this.students.splice(index, 1);
    } else {
      console.log("Student not found");
    }
  }

  // Add Professor
  addProfessor(name, department) {
    if (name && department) {
      this.professor.push({ name, department });
      console.log(`Professor ${name} added successfully`);
    } else {
      console.log("Invalid Professor");
    }
  }
}

let university = new University();
university.addStudent("John" , 101 , "B.Tech");
university.addStudent("Jane" , 102 , "BCA");
university.addProfessor("Dr.Martin" ,"PHD")
university.removeStudent(101);
console.log("Students:" , university.students);
console.log('Professor:' , university.professor);
*/

/* Q: 16 Define a MusicPlaylist class
Properties:
songs (array of song objects)
Methods:
addSong(title, artist) → Adds a song.
removeSong(title) → Removes a song.
playAll() → Displays all songs in the playlist.
*/
/*

class MusicPlaylist {
  constructor() {
    this.songs = [];
  }
  // Add Songs
  addSong(title, artist) {
    if (title && artist) {
      this.songs.push({ title, artist });
      console.log(`Songs ${title} added successfully`);
    } else {
      console.log("Wrong Song or Artist");
    }
  }

  // Remove Songs
  removeSong(title) {
    const index = this.songs.findIndex((song) => song.title === title);
    if (index !== -1) {
      console.log(`Song ${this.songs[index].name} removed.`);
      this.songs.splice(index, 1);
    } else {
      console.log("Songs not Found.");
    }
  }

  playAll() {
    if (this.songs.length === 0) {
      console.log("Playlist is empty");
    } else {
      console.log("Playing all Songs:");
    }
    this.songs.forEach((song, index) => {
      console.log(`${index + 1}. ${song.title} by ${song.artist}`);
    });
  }
}

const musicplaylist = new MusicPlaylist();
musicplaylist.addSong("Shape of you", "Ed SHeeran");
musicplaylist.addSong("Blinding Lights", "The Weeknd");

musicplaylist.playAll();
musicplaylist.removeSong("Shape of You");
musicplaylist.playAll();
*/
