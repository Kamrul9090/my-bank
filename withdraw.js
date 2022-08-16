//step-1: add handler in the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {

    //step-2: get withdraw input value
    const withdraw = document.getElementById("withdraw-input");
    const withdrawValue = withdraw.value;
    const withdrawNumberValue = parseFloat(withdrawValue);

    //step-3: get withdraw amount innerText
    const withdrawText = document.getElementById("withdraw-amount");
    const withdrawTextString = withdrawText.innerText;
    const withdrawTextStringToNumber = parseFloat(withdrawTextString);

    //step-4: clear withdraw input
    withdraw.value = "";

    //step-5: get blance amount 
    const blance = document.getElementById("blance-amount");
    const blanceValue = blance.innerText;
    const blanceValueNumber = parseFloat(blanceValue);


    //step-6: Validation withdraw amount
    if (withdrawNumberValue < 0) {
        alert("Your withdraw amount is invalid");
        return;
    }
    else if (withdrawNumberValue > blanceValueNumber) {
        alert("You have not enough money in your account")
        return;
    }
    else if (isNaN(withdrawNumberValue)) {
        alert("Please provide valid input");
        return;
    }

    //step-7: Calculate withdraw amount
    const currentWithdrawAmount = withdrawTextStringToNumber + withdrawNumberValue;
    withdrawText.innerText = currentWithdrawAmount;

    //step-8: minus withdraw amount from blance
    const currentBlance = blanceValueNumber - withdrawNumberValue;
    blance.innerText = currentBlance;
})