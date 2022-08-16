// step-1:add handler in the submit button
document.getElementById("btn-submit").addEventListener("click", function () {

    // step-2: get email input filed
    const email = document.getElementById("user-email");
    const emailValue = email.value;

    //step-2: get password input filed
    const password = document.getElementById("user-password");
    const passwordValue = password.value;

    //step-3: validation submit form
    if (emailValue.includes("@gmail") && passwordValue.length > 6) {
        window.location.href = 'http://127.0.0.1:5500/bank.html';
    } else if (passwordValue.length <= 6) {
        alert("Please give apassword minimum 6 digit")
    }
    else {
        console.log("Please Provide valid info");
    }
})



