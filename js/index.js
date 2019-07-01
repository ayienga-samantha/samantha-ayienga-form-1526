let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// event-target object
let btn = document.getElementById("submit-btn");
let email = document.getElementById("email");
let fullname = document.getElementById("fullname");
let message = document.getElementById("message");

// Clear the data from HTML form
let testForm = document.querySelector("form");

// event-handler
function validateForm() {
    
    console.clear();
    
    // save data and errors:
    let data = {};
    let errors = [];
    
    
    //validating the full name
    if (fullname.value === ""){
        errors.push("Please enter your name!")
    } else {
        data.fullnameProp = fullname.value;
    }
    
    
    // validating the email
    if (email.value === "") {
        errors.push("Please enter your email!");
    } else {
        if (pattern.test(email.value)){
            data.emailProp = email.value;
        } else {
            errors.push("Your email is INVALID!");
        }
    }
    
    //validating the message
    if (message.value === ""){
        errors.push("Please enter your message!")
    } else {
        data.messageProp = message.value;
    }
    
    
    // create the feedback
    if (errors.length === 0) {
        // clear your form here:
        testForm.reset();
        console.log(data);
    } else {
        console.log(errors);
    } 
}

// registering event
btn.addEventListener("click", validateForm);