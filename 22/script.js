// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");

// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("three");

// },3000)
// console.log("four");

// callback -> callback hell -> promises => promise chaining => es6 async/ await

// callback : callback is a function used a parameter in another function
// function calculator(a, b, operation) {
//   operation(a, b);
// }

// calculator(2, 4, (a, b) => {
//   console.log(a + b);
// });

// // callback hell

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 1000);
// }

// // getData(101, getData(102));

// console.log("getting data..");
// getData(101, () => {
//   console.log("getting data..");
//   getData(102, () => {
//     console.log("getting data..");
//     getData(103, () => {
//       console.log("getting data..");
//       getData(104, () => {
//         console.log("getting data..");
//         getData(105, () => {
//           console.log("getting data..");
//           getData(106, () => {
//             console.log("getting data..");
//             getData(107, () => {
//               console.log("getting data..");
//               getData(108, () => {
//                 console.log("getting data..");
//                 getData(109, () => {
//                   console.log("getting data..");
//                   getData(110, () => {
//                   console.log("All data fetched..");

//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// example
//  Student Exam Registration System
// Tasks:

// Register Student

// Select Exam Subjects

// Pay Exam Fees

// Get Registration Confirmation

function RegistrationStudent(callback) {
  setTimeout(() => {
    console.log("student registered");
    callback();
  }, 2000);
}

function selectExamSubject(callback) {
  setTimeout(() => {
    console.log("Exam Subject Selected");
    callback();
  }, 2000);
}

function payExamFees(callback) {
  setTimeout(() => {
    console.log("Exam fees paid");
    callback();
  }, 2000);
}

function RegistrationConfirmation(callback) {
  setTimeout(() => {
    console.log("registration confirmed");
    callback();
  }, 2000);
}

// callback hell

RegistrationStudent(() => {
  selectExamSubject(() => {
    payExamFees(() => {
      RegistrationConfirmation(() => {
        console.log("All task completed");
      });
    });
  });
});

// example : shopping cart : add to card > pricing > discount > payment > confirmation

/*
function addToCart(callback) {
  setTimeout(() => {
    console.log("Item added to cart");
    callback();
  }, 2000);
}

function totalPricing(callback) {
  setTimeout(() => {
    console.log("Total Price");
    callback();
  }, 2000);
}

function applyDiscount(callback) {
  setTimeout(() => {
    console.log("Discount Applied");
    callback();
  }, 2000);
}

addToCart(() => {
  totalPricing(() => {
    applyDiscount(() => {
      console.log("All task completed");
    });
  });
});
*/

// example : shopping cart : add to card > pricing > discount > payment > confirmation

// promises: exventually work done

// let promise = new Promise((resolve, reject) => {
// })

// states in promise : pending , fulfilled(resolve), reject(error)

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//     //   resolve("success");
//     reject("some error")
//     }, 5000);
//   });
// }

// const data = getData(101);

// methods in promise chaning : .then(res) => {...}
//                              .catch(reject) => {...}


// const getPromise = () => {
//     return new Promise ((resolve, reject) => {
//         console.log("i am a promise");
//         // resolve(200);
//         reject("network error");
//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled" , res);
// })
// promise.catch((err) => {
//     console.log("promise rejected", err);
// })

// example : promise chainng

// function asyncfun () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data 101");
//             resolve("success");
//         }, 4000)
//     })
// }

// function asyncfun1 () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data 102");
//             resolve("success");
//         }, 4000)
//     })
// }


// console.log("fetching data...");
// let p1 = asyncfun();
// p1.then(() => {
//     console.log("fetching data..");
//     let p2= asyncfun1();
//     p2.then((res) => {
//         console.log(res);
//     })
// })

// console.log("fetching data...");
// asyncfun().then(() => {
// console.log("fetching data...");
// asyncfun1().then((res) => {
// console.log(res);
// })
// })


// getdata with promise chaining:


// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     // reject("some error")
//     }, 2000);
//   });
// }


// console.log("getting data..");
// getData(101).then(() => {
// console.log("getting data..");
//     return getData(102);
// })
// .then(() => {
// console.log("getting data..");
//     return getData(103);
// })
// .then(() => {
// console.log("getting data..");
//     return getData(104);
// })
// .then(() => {
// console.log("getting data..");
//     return getData(105);
// })
// .then(() => {
// console.log("getting data..");
//     return getData(106);
// })
// .then(() => {
// console.log("getting data..");
//     return getData(107);
// })
// .then(() => {
// console.log("getting data..");
//     return getData(108);
// })
// .then(() => {
// console.log("getting data..");
//     return getData(109);
// })
// .then(() => {
// console.log("getting data..");
//     return getData(110);
// })
// .then((res) => {
//     console.log(res);
// })


// Async/ Await : =>  always rreturn a promise , we use async keyword to create async function.
// await: to hold to wait before executing next function.

// function hello(){
//     console.log("hello");
// }

// async function hello(){
//     setTimeout(() => {
//         console.log("hello");
//     },4000);
// }

// function api() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some Data...");
//             resolve("success");
//         },4000)
//     })
// }



// async function getData(){
//     console.log("fetching data..");
//     await api();
//     console.log("fetching data...");
//     await api();
//     console.log("fetching data...");
//     await api();
// }


// example : getData()


// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//      if(dataId < 111){
//         resolve (dataId + 1);
//      }else{
//         resolve("completed");
//      }
//     }, 3000);
//   });
// }

// async function getAllData() {
//     console.log("Fetching Data...");
//     await getData(101);
//     console.log("Fetching Data...");
//     await getData(102);
//     console.log("Fetching Data...");
//     await getData(103);
//     console.log("Fetching Data...");
//     await getData(104);
//     console.log("Fetching Data...");
//     await getData(105);
//     console.log("Fetching Data...");
//     await getData(106);
//     console.log("Fetching Data...");
//     await getData(107);
//     console.log("Fetching Data...");
//     await getData(108);
//     console.log("Fetching Data...");
//     await getData(109);
//     console.log("Fetching Data...");
//     await getData(110);


// }

// getAllData();


// async function getAllData(){
//     let currentId = 101;
//     try{
//         while(currentId !== "completed"){
//             console.log("fetching data...")
//             currentId = await getData(currentId);
//         }
//         console.log("All data Fetched");
//     }catch(error){
//         console.log("error", error);
//     }

// }

// getAllData();


// add to cart :
// add to cart
// caclculate total
// discount
// payment
// confirmation

// function addToCart(item){
//     return new Promise ((resolve => {
//         setTimeout(() => {
//             console.log(⁠ ${item} added to cart ⁠);
//             resolve("success");
//         },2000)
//     }))
// }

// function calculateTotal(){
//     return new Promise ((resolve => {
//         setTimeout(() => {
//             console.log("total calculated");
//             resolve("success");
//         },2000)
//     }))
// }

// function discount() {
//     return new Promise ((resolve => {
//         setTimeout(() => {
//             console.log("discount applied");
//             resolve("success");
//         },2000)
//     }))
// }

// function payment() {
//      return new Promise((resolve => {
//         setTimeout(() => {
//             console.log("payment proceed");
//             resolve("success");
//         },2000)
//      }))
// }


// function confirmation(){
//     return new Promise ((resolve => {
//         setTimeout(() => {
//             console.log("Confirmation sent");
//             resolve("success");
//         },2000);
//     }))
// }


// async function proceedShopingCart() {
//     try{
//         await addToCart("laptop");
//         await calculateTotal();
//         await discount();
//         await payment();
//         await confirmation();
//         console.log("all task completed");
//     }catch(err){
//         console.log("an error", err)
//     }
// }

// const payout = proceedShopingCart();