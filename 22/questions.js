/* 
Q:1 Banking System Projects
a:  Bank Account Creation
b:  Deposit and Withdraw
c:  Fund Transfer
d:  Statement Generation
e:  OTP Verification for Transactions
*/

// Method 1 : By Callback
/*
function bankAccountCreation(callback) {
  setTimeout(() => {
    console.log("Bank Account Creation is in Process...");
    callback();
  }, 2000);
}

function depositandWithdraw(callback) {
  setTimeout(() => {
    console.log("Deposit money in an account...");
    callback();
  }, 2000);
}

function fundTransfer(callback) {
  setTimeout(() => {
    console.log("Fund is tranfer to bank Account...");
    callback();
  }, 2000);
}

function StatementGeneration(callback) {
  setTimeout(() => {
    console.log("Bank Statement is Generated...");
    callback();
  }, 2000);
}

function otpVerificationsandTransactions(callback) {
  setTimeout(() => {
    console.log(
      "OTP verfications is done and transaction is successfully done..."
    );
    callback();
  }, 2000);
}

const steps = [
  bankAccountCreation,
  depositandWithdraw,
  fundTransfer,
  StatementGeneration,
  otpVerificationsandTransactions
];

let i = 0;

function nextStep() {
  if (i < steps.length) {
    steps[i++](nextStep);
  } else {
    console.log("🎉 All banking processes completed successfully!");
  }
}

nextStep();

*/

/*

// Method 2 : By Callback Hell
/*
function bankAccountCreation(callback) {
  setTimeout(() => {
    console.log("Bank Account Creation is in Process...");
    callback();
  }, 2000);
}

function depositandWithdraw(callback) {
  setTimeout(() => {
    console.log("Deposit money in an account...");
    callback();
  }, 2000);
}

function fundTransfer(callback) {
  setTimeout(() => {
    console.log("Fund is tranfer to bank Account...");
    callback();
  }, 2000);
}

function StatementGeneration(callback) {
  setTimeout(() => {
    console.log("Bank Statement is Generated...");
    callback();
  }, 2000);
}

function otpVerificationsandTransactions(callback) {
  setTimeout(() => {
    console.log(
      "OTP verfications is done and transaction is successfully done..."
    );
    callback();
  }, 2000);
}

function bankingSystems() {
  bankAccountCreation(() => {
    depositandWithdraw(() => {
      fundTransfer(() => {
        StatementGeneration(() => {
          otpVerificationsandTransactions(() => {
            console.log(
              "All Process Done , Your banking system is generated successfully 🎉..."
            );
          });
        });
      });
    });
  });
}
bankingSystems();
*/

// Method 3 : By Promise
/*
function bankAccountCreation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Bank Account Created Successfully!");
    }, 1000);
  });
}

function depositandWithdraw() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("💰 Deposit & Withdraw Done Successfully!");
    }, 1000);
  });
}

function fundTransfer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("💸 Fund Transfer Completed!");
    }, 1000);
  });
}

function StatementGeneration() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("📃 Statement Generated!");
    }, 1000);
  });
}

function otpVerificationsandTransactions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🔐 OTP Verified Successfully!");
    }, 1000);
  });
}

bankAccountCreation().then((msg) => {
  console.log(msg);
});

depositandWithdraw().then((msg) => {
  console.log(msg);
});

fundTransfer().then((msg) => {
  console.log(msg);
});

StatementGeneration().then((msg) => {
  console.log(msg);
});

otpVerificationsandTransactions().then((msg) => {
  console.log(msg);
});
*/

// Method 4: By Promise Chaining
/*
function bankAccountCreation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Bank Account Created Successfully!");
    }, 1000);
  });
}

function depositandWithdraw() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("💰 Deposit & Withdraw Done Successfully!");
    }, 1000);
  });
}

function fundTransfer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("💸 Fund Transfer Completed!");
    }, 1000);
  });
}

function StatementGeneration() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("📃 Statement Generated!");
    }, 1000);
  });
}

function otpVerificationsandTransactions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🔐 OTP Verified Successfully!");
    }, 1000);
  });
}

bankAccountCreation()
  .then((msg) => {
    console.log(msg);
    return depositandWithdraw();
  })
  .then((msg) => {
    console.log(msg);
    return fundTransfer();
  })
  .then((msg) => {
    console.log(msg);
    return StatementGeneration();
  })
  .then((msg) => {
    console.log(msg);
    return otpVerificationsandTransactions();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
  */

// Method : 5 By Async/Await
/*
function bankAccountCreation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Bank Account Created Successfully!");
    }, 1000);
  });
}

function depositandWithdraw() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("💰 Deposit & Withdraw Done Successfully!");
    }, 1000);
  });
}

function fundTransfer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("💸 Fund Transfer Completed!");
    }, 1000);
  });
}

function statementGeneration() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("📃 Statement Generated!");
    }, 1000);
  });
}

function otpVerificationsandTransactions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🔐 OTP Verified Successfully!");
    }, 1000);
  });
}

async function bankingSystemSteps() {
  try {
    const step1 = await bankAccountCreation();
    console.log(step1);
    const step2 = await depositandWithdraw();
    console.log(step2);
    const step3 = await fundTransfer();
    console.log(step3);
    const step4 = await statementGeneration();
    console.log(step4);
    const step5 = await otpVerificationsandTransactions();
  } catch (err) {
    console.log("Error: ", err);
  }
}

bankingSystemSteps();
*/
/*
Q:2 Hospital / Appointment System Projects:
a: Doctor Appointment Booking
b: Medical Report Upload
*/
// Method 1 : By Callback

/*
function doctorAppointmentBooking(callback) {
  setTimeout(() => {
    console.log("Doctor Appointment Booking in process....");
    callback();
  }, 2000);
}

function medicalReportUpload(callback) {
  setTimeout(() => {
    console.log("Upload Documents Successfully...");
    callback();
  }, 2000);
}

const steps = [doctorAppointmentBooking, medicalReportUpload];

let i = 0;
function nextStep() {
  if (i < steps.length) {
    steps[i++](nextStep);
  } else {
    console.log(
      "All Process done , Your appointment is successfulyy confirmed by the doctor..."
    );
  }
}

nextStep();
*/

// Method 2 : By Callback Hell
/*
function doctorAppointmentBooking(callback) {
  setTimeout(() => {
    console.log("Doctor Appointment Booking in process....");
    callback();
  }, 2000);
}

function medicalReportUpload(callback) {
  setTimeout(() => {
    console.log("Upload Documents Successfully...");
    callback();
  }, 2000);
}

function appointmentSystems() {
  doctorAppointmentBooking(() => {
    medicalReportUpload(() => {
      console.log(
        "All Process done , Your appointment is successfulyy confirmed by the doctor..."
      );
    });
  });
}

appointmentSystems();
*/

// Method 3: Promise
/*
function doctorAppointmentBooking() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Doctor Appointment Booking in process....");
    }, 2000);
  });
}

function medicalReportUpload() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Upload Documents Successfully...");
    }, 2000);
  });
}

doctorAppointmentBooking().then((msg) => {
  console.log(msg);
});

medicalReportUpload().then((msg) => {
  console.log(msg);
});
*/

// Method : 4 Promise Chaining
/*
function doctorAppointmentBooking() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Doctor Appointment Booking in process....");
    }, 2000);
  });
}

function medicalReportUpload() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Upload Documents Successfully...");
    }, 2000);
  });
}

doctorAppointmentBooking()
  .then((msg) => {
    console.log(msg);
    return medicalReportUpload();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
*/

// Method: 5 By Async/Await:
/*
function doctorAppointmentBooking() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Doctor Appointment Booking in process....");
    }, 2000);
  });
}

function medicalReportUpload() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Upload Documents Successfully...");
    }, 2000);
  });
}

async function hospitalAppointmentSystem() {
  try {
    const step1 = await doctorAppointmentBooking();
    console.log(step1);
    const step2 = await medicalReportUpload();
    console.log(step2);
  } catch (err) {
    console.log("Errror: ", err);
  }
}

hospitalAppointmentSystem();
*/

/*
Q:3 Cab Booking System:
a: Ride Booking
b: Cancel Ride
*/

// Method 1 : By Callback
/*
function rideBooking(callback){
    setTimeout(()=>{
        console.log("Ride Booking is Confirmed..");
        callback();
    }, 2000)
}

function cancelRide(callback){
    setTimeout(()=>{
        console.log("Ride is cancelled");
        callback();
    }, 2000)
}


const steps = [
    rideBooking,
    cancelRide
]

let  i = 0;

function nextStep(){
    if(i < steps.length){
        steps[i++] (nextStep)
    } else {
        console.log("Your Ride is finally cancelled , all task done...")
    }
}

nextStep();
*/

// Method 2 : By Callback Hell
/*
function rideBooking(callback){
    setTimeout(()=>{
        console.log("Ride Booking is Confirmed..");
        callback();
    }, 2000)
}

function cancelRide(callback){
    setTimeout(()=>{
        console.log("Ride is cancelled");
        callback();
    }, 2000)
}

function cabBookingSystem (){
    rideBooking(()=>{
        cancelRide(()=>{
            console.log("Your Ride is finally cancelled , all task done...")
        })
    })
}

cabBookingSystem();
*/

// Method : 3 Prmoise
/*
function rideBooking() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ride Booking is Confirmed..");
    }, 2000);
  });
}

function cancelRide() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ride is cancelled...");
    }, 2000);
  });
}

rideBooking().then((msg) => {
  console.log(msg);
});

cancelRide().then((msg) => {
  console.log(msg);
});
*/
// Method : 4 Promise Chaining
/*
function rideBooking() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ride Booking is Confirmed..");
    }, 2000);
  });
}

function cancelRide() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ride is cancelled...");
    }, 2000);
  });
}

rideBooking()
  .then((msg) => {
    console.log(msg);
    return cancelRide();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

*/

// Method: 5 By Async / Await
/*
function rideBooking() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ride Booking is Confirmed..");
    }, 2000);
  });
}

function cancelRide() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ride is cancelled...");
    }, 2000);
  });
}

async function cabBookingsystem() {
  try {
    const step1 = await rideBooking();
    console.log(step1);
    const step2 = await cancelRide();
    console.log(step2);
  } catch (err) {
    console.log("Error: ", err);
  }
}
cabBookingsystem();
*/
/*
Q:4 Event Ticket Booking System
Tasks:
a: Search Event
b: Book Ticket
c: Payment
d: Ticket Confirmation
*/

// Method 1 : By Callback
/*
function searchEvent(callback) {
  setTimeout(() => {
    console.log("Searching an Event...");
    callback();
  }, 2000);
}

function bookTicket(callback) {
  setTimeout(() => {
    console.log("Ticket Booking...");
    callback();
  }, 2000);
}

function payment(callback) {
  setTimeout(() => {
    console.log("Payment is done...");
    callback();
  }, 2000);
}

function ticketConfirmation(callback) {
  setTimeout(() => {
    console.log("Ticket Confirmation Done...");
    callback();
  }, 2000);
}

const steps = [searchEvent, bookTicket, payment, ticketConfirmation];

let i = 0;

function nextStep() {
  if (i < steps.length) {
    steps[i++](nextStep);
  } else {
    console.log("All Process is done , your ticket for an event is booked...");
  }
}

nextStep();
*/
// Method 2 : By Callback Hell
/*
function searchEvent(callback){
    setTimeout(()=>{
        console.log("Searching an Event...");
        callback();
    }, 2000)
}

function bookTicket(callback){
    setTimeout(()=>{
        console.log("Ticket Booking...");
        callback();
    }, 2000)
}

function payment(callback){
    setTimeout(()=>{
        console.log("Payment is done...");
        callback();
    }, 2000)
}

function ticketConfirmation(callback){
    setTimeout(()=>{
        console.log("Ticket Confirmation Done...");
        callback();
    }, 2000)
}


function eventTicketBookingSystem(){
    searchEvent(()=>{
        bookTicket(()=>{
            payment(()=>{
                ticketConfirmation(()=>{
                    console.log("All Process is done , your ticket for an event is booked...")
                });
            });
        });
    });
};

eventTicketBookingSystem();
*/

// Method: 3 Promise
/*
function searchEvent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Searching an Event...");
    }, 2000);
  });
}

function bookTicket() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket Booking...");
    }, 2000);
  });
}

function payment() {
  return new Promise((resolve , reject) => {
    setTimeout(() => {
      resolve("Payment is done...");
    }, 2000);
  });
}

function ticketConfirmation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket Confirmation Done...");
    }, 2000);
  });
}

searchEvent().then((msg) => {
  console.log(msg);
});

bookTicket().then((msg) => {
  console.log(msg);
});

payment().then((msg) => {
  console.log(msg);
});

ticketConfirmation().then((msg) => {
  console.log(msg);
});
*/

// Method : 4 Promise Chaining
/*
function searchEvent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Searching an Event...");
    }, 2000);
  });
}

function bookTicket() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket Booking...");
    }, 2000);
  });
}

function payment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment is done...");
    }, 2000);
  });
}

function ticketConfirmation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket Confirmation Done...");
    }, 2000);
  });
}

searchEvent()
  .then((msg) => {
    console.log(msg);
    return bookTicket();
  })
  .then((msg) => {
    console.log(msg);
    return payment();
  })
  .then((msg) => {
    console.log(msg);
    return ticketConfirmation();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
*/

// Method : 5 By Async/Await
/*
function searchEvent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Searching an Event...");
    }, 2000);
  });
}

function bookTicket() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket Booking...");
    }, 2000);
  });
}

function payment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment is done...");
    }, 2000);
  });
}

function ticketConfirmation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket Confirmation Done...");
    }, 2000);
  });
}

async function ticketBookingSystem() {
  try {
    const step1 = await searchEvent();
    console.log(step1);
    const step2 = await bookTicket();
    console.log(step2);
    const step3 = await payment();
    console.log(step3);
    const step4 = await ticketConfirmation();
    console.log(step4);
  } catch (err) {
    console.log("Error: ", err);
  }
}

ticketBookingSystem();
*/

/*
Q:5 Movie Ticket Reservation System
Tasks:
a:Select Movie
b:Choose Seats
c:Make Payment
d:Get Ticket Confirmation
*/

// Method 1 : By Callback
/*
function selectMovie(callback) {
  setTimeout(() => {
    console.log("Selecting a movie...");
    callback();
  }, 2000);
}

function chooseSeats(callback) {
  setTimeout(() => {
    console.log("Choosing a seats..");
    callback();
  }, 2000);
}

function makePayment(callback) {
  setTimeout(() => {
    console.log("Payment is done...");
    callback();
  }, 2000);
}

function getTicketConfirmation(callback) {
  setTimeout(() => {
    console.log("Ticket Confirmation is done...");
    callback();
  }, 2000);
}

const steps = [selectMovie, chooseSeats, makePayment, getTicketConfirmation];

let i = 0;

function nextStep() {
  if (i < steps.length) {
    steps[i++](nextStep);
  } else {
    console.log(
      "Your all process is done, now your movie ticket is confirmed..."
    );
  }
}

nextStep();
*/

// Method 2: By Callback Hell
/*
function selectMovie(callback) {
  setTimeout(() => {
    console.log("Selecting a movie...");
    callback();
  }, 2000);
}

function chooseSeats(callback) {
  setTimeout(() => {
    console.log("Choosing a seats..");
    callback();
  }, 2000);
}

function makePayment(callback) {
  setTimeout(() => {
    console.log("Payment is done...");
    callback();
  }, 2000);
}

function getTicketConfirmation(callback) {
  setTimeout(() => {
    console.log("Ticket Confirmation is done...");
    callback();
  }, 2000);
}

function movieTicketReservationSystem() {
  selectMovie(() => {
    chooseSeats(() => {
      makePayment(() => {
        getTicketConfirmation(() => {
          console.log(
            "Your all process is done, now your movie ticket is confirmed..."
          );
        });
      });
    });
  });
}

movieTicketReservationSystem();
*/

// Method : 3 Promise
/*
function selectMovie() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Selecting a movie...");
    }, 2000);
  });
}

function chooseSeats() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Choosing a seats..");
    }, 2000);
  });
}

function makePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment is done...");
    }, 2000);
  });
}

function getTicketConfirmation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket Confirmation is done...");
    }, 2000);
  });
}

selectMovie().then((msg)=>{
    console.log(msg)
})

chooseSeats().then((msg)=>{
    console.log(msg)
})

makePayment().then((msg)=>{
    console.log(msg)
})

getTicketConfirmation().then((msg)=>{
    console.log(msg)
})
*/

// Method : 4 Promise Chaining

/*
function selectMovie() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Selecting a movie...");
    }, 2000);
  });
}

function chooseSeats() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Choosing a seats..");
    }, 2000);
  });
}

function makePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment is done...");
    }, 2000);
  });
}

function getTicketConfirmation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket Confirmation is done...");
    }, 2000);
  });
}

selectMovie()
  .then((msg) => {
    console.log(msg);
    return chooseSeats();
  })
  .then((msg) => {
    console.log(msg);
    return makePayment();
  })
  .then((msg) => {
    console.log(msg);
    return getTicketConfirmation();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

*/

// Method : 5 By Async/Await
/*
function selectMovie() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Selecting a movie...");
    }, 2000);
  });
}

function chooseSeats() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Choosing a seats..");
    }, 2000);
  });
}

function makePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment is done...");
    }, 2000);
  });
}

function getTicketConfirmation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket Confirmation is done...");
    }, 2000);
  });
}

async function ticketReservationSystem() {
  try {
    const step1 = await selectMovie();
    console.log(step1);
    const step2 = await chooseSeats();
    console.log(step2);
    const step3 = await makePayment();
    console.log(step3);
    const step4 = await getTicketConfirmation();
    console.log(step4);
  } catch (err) {
    console.log("Error: ", err);
  }
}

ticketReservationSystem();
*/
/*
Q:6 Online Shopping Return System
Tasks:
a: Initiate Return
b: Pickup Scheduled
c: Refund Process
d: Refund Complete
*/

// Method 1 : By Callback
/*
function initiateReturn(callback) {
  setTimeout(() => {
    console.log("Return is Inititated...");
    callback();
  }, 2000);
}

function pickupScheduled(callback) {
  setTimeout(() => {
    console.log("Pickup is Scheduled...");
    callback();
  }, 2000);
}

function refundProcess(callback) {
  setTimeout(() => {
    console.log("Refund Process...");
    callback();
  }, 2000);
}

function refundCompleted(callback) {
  setTimeout(() => {
    console.log("Refund Completed...");
    callback();
  }, 2000);
}


const steps = [
    initiateReturn,
    pickupScheduled,
    refundProcess,
    refundCompleted,
]

let i = 0;

function nextStep(){
    if(i < steps.length){
        steps[i++] (nextStep)
    } else {
        console.log("All Process is done , Your refund is completed....")
    }
}

nextStep();

*/
// Method 2: By Callback Hell
/*
function initiateReturn(callback) {
  setTimeout(() => {
    console.log("Return is Inititated...");
    callback();
  }, 2000);
}

function pickupScheduled(callback) {
  setTimeout(() => {
    console.log("Pickup is Scheduled...");
    callback();
  }, 2000);
}

function refundProcess(callback) {
  setTimeout(() => {
    console.log("Refund Process...");
    callback();
  }, 2000);
}

function refundCompleted(callback) {
  setTimeout(() => {
    console.log("Refund Completed...");
    callback();
  }, 2000);
}

function onlineShoppingReturnSystems() {
  initiateReturn(() => {
    pickupScheduled(() => {
      refundProcess(() => {
        refundCompleted(() => {
          console.log("All Process is done , Your refund is completed....");
        });
      });
    });
  });
}


onlineShoppingReturnSystems();
*/

// Method : 3 By Promise
/*
function initiateReturn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve ("Return is Inititated...");
    }, 2000);
  });
}

function pickupScheduled() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pickup is Scheduled...");
    }, 2000);
  });
}

function refundProcess() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Refund Process...");
    }, 2000);
  });
}

function refundCompleted() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Refund Completed...");
    }, 2000);
  });
}

initiateReturn().then((msg) => {
  console.log(msg);
});

pickupScheduled().then((msg) => {
  console.log(msg);
});

refundProcess().then((msg) => {
  console.log(msg);
});

refundCompleted().then((msg) => {
  console.log(msg);
});
*/

// Method : 4 By Promise Chaining
/*
function initiateReturn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Return is Inititated...");
    }, 2000);
  });
}

function pickupScheduled() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pickup is Scheduled...");
    }, 2000);
  });
}

function refundProcess() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Refund Process...");
    }, 2000);
  });
}

function refundCompleted() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Refund Completed...");
    }, 2000);
  });
}

initiateReturn()
  .then((msg) => {
    console.log(msg);
    return pickupScheduled();
  })
  .then((msg) => {
    console.log(msg);
    return refundProcess();
  })
  .then((msg) => {
    console.log(msg);
    return refundCompleted();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Eror: ", err);
  });
*/

// Method : 5 By Async Await
/*
function initiateReturn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Return is Inititated...");
    }, 2000);
  });
}

function pickupScheduled() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pickup is Scheduled...");
    }, 2000);
  });
}

function refundProcess() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Refund Process...");
    }, 2000);
  });
}

function refundCompleted() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Refund Completed...");
    }, 2000);
  });
}

async function shoppingReturnSystem() {
  try {
    const step1 = await initiateReturn();
    console.log(step1);
    const step2 = await pickupScheduled();
    console.log(step2);
    const step3 = await refundProcess();
    console.log(step3);
    const step4 = await refundCompleted();
    console.log(step4);
  } catch (err) {
    console.log("Error:", err);
  }
}

shoppingReturnSystem();
*/
/*
Q:7 Student Exam Registration System
Tasks:
a: Register Student.
b: Select Exam Subjects.
c: Pay Exam Fees.
d: Get Registration Confirmation.
*/

// Method 1 : By Callback

/*
function registerStudent(callback) {
  setTimeout(() => {
    console.log("Student Registration Process...");
    callback();
  }, 2000);
}

function selectExamSubjects(callback) {
  setTimeout(() => {
    console.log("Exam Subjects selected...");
    callback();
  }, 2000);
}

function payExamFees(callback) {
  setTimeout(() => {
    console.log("Exam Fees Paid...");
    callback();
  }, 2000);
}

function RegistrationConfirmation(callback) {
  setTimeout(() => {
    console.log("✅ Student Regsitration Done...");
    callback();
  }, 2000);
}


const steps = [
    registerStudent,
    selectExamSubjects,
    payExamFees,
    RegistrationConfirmation
]


let i = 0;

function nextStep(){
    if ( i < steps.length){
        steps[i++] (nextStep)
    } else {
        console.log("All Process done,  Your registration is successfully done 🎉...")
    }
}

nextStep();
*/

// Method 2 : By Callback Hell

/*
function registerStudent(callback) {
  setTimeout(() => {
    console.log("Student Registration Process...");
    callback();
  }, 2000);
}

function selectExamSubjects(callback) {
  setTimeout(() => {
    console.log("Exam Subjects selected...");
    callback();
  }, 2000);
}

function payExamFees(callback) {
  setTimeout(() => {
    console.log("Exam Fees Paid...");
    callback();
  }, 2000);
}

function RegistrationConfirmation(callback) {
  setTimeout(() => {
    console.log("✅ Student Regsitration Done...");
    callback();
  }, 2000);
}

function registration() {
  registerStudent(() => {
    selectExamSubjects(() => {
      payExamFees(() => {
        RegistrationConfirmation(() => {
          console.log(
            "All Process done,  Your registration is successfully done 🎉..."
          );
        });
      });
    });
  });
}

registration();
*/

// Method : 3 Promise
/*
function registerStudent(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("Student Registration Process...")
        }, 2000);
    });
}

function selectExamSubjects(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Exam Subjects selected...")
        }, 2000)
    })
}

function payExamFees(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Exam Fees Paid...")
        }, 2000)
    });
}

function RegistrationConfirmation(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("✅ Student Regsitration Done...")
        }, 2000)
    });
}

registerStudent().then((msg)=>{
    console.log(msg)
});

selectExamSubjects().then((msg)=>{
    console.log(msg)
});

payExamFees().then((msg)=>{
    console.log(msg)
});

RegistrationConfirmation().then((msg)=>{
    console.log(msg)
})
*/

// Method : 4 Promise Chaining

/*
function registerStudent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Student Registration Process...");
    }, 2000);
  });
}

function selectExamSubjects() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Exam Subjects selected...");
    }, 2000);
  });
}

function payExamFees() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Exam Fees Paid...");
    }, 2000);
  });
}

function RegistrationConfirmation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Student Regsitration Done...");
    }, 2000);
  });
}

registerStudent()
  .then((msg) => {
    console.log(msg);
    return selectExamSubjects();
  })
  .then((msg) => {
    console.log(msg);
    return payExamFees();
  })
  .then((msg) => {
    console.log(msg);
    return RegistrationConfirmation();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch(() => {
    console.log("Error:", err);
  });
*/

// Method : 5 Async/Await
/*
function registerStudent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Student Registration Process...");
    }, 2000);
  });
}

function selectExamSubjects() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Exam Subjects selected...");
    }, 2000);
  });
}

function payExamFees() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Exam Fees Paid...");
    }, 2000);
  });
}

function RegistrationConfirmation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Student Regsitration Done...");
    }, 2000);
  });
}

async function examRegistrationSystem() {
    try{
        const step1 = await registerStudent();
        console.log(step1);
        const step2 = await selectExamSubjects();
        console.log(step2);
        const step3 = await payExamFees();
        console.log(step3);
        const step4 = await RegistrationConfirmation();
        console.log(step4);
    } catch(err){
        console.log("Error:" , err);
    }
}

examRegistrationSystem();
*/
