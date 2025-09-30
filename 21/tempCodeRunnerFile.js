
function registeredStudent(callback) {
    setTimeout(()=>{
        console.log("Student Registered");
        callback();
    }, 2000);
}

function selectSubjects(callback){
    setTimeout(()=>{
        console.log("Subjects Selected");
        callback();
    }, 2000);
}

function payFees(callback){
    setTimeout(()=>{
        console.log("Exam Fees Paid Successfully");
        callback();
    },2000)
}

function sendConfirmation(callback){
    setTimeout(()=>{
        console.log("Registrtion Done");
        callback();
    },2000)
}

registeredStudent(()=>{
    selectSubjects(()=>{
        payFees(()=>{
            sendConfirmation(()=>{
                console.log("All Process Done")
            });
        });
    });
});