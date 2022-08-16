// step-1: add handler in the Deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {

    // step-2: get deposit input value
    const deposit = document.getElementById("deposit-input");
    const depositValue = deposit.value;
    const depositNumberValue = parseFloat(depositValue);

    //step-3:get deposit innerText
    const depositText = document.getElementById("deposit-amount");
    const depositTextString = depositText.innerText;
    const depositTextToNumber = parseFloat(depositTextString);

    //step-4: Clear input Filed
    deposit.value = "";

    //step:-5 validation deposit amount
    if (depositNumberValue < 0) {
        alert("Invalid deposit");
        return;
    }
    else if (isNaN(depositNumberValue)) {
        alert("Please give your deposit amount");
        return;
    }

    // step-6: Calcutale deposit input
    const currentDepositValue = depositTextToNumber + depositNumberValue;
    depositText.innerText = currentDepositValue;


    //step-7: Get Valance Amount innerText
    const blanceText = document.getElementById("blance-amount");
    const blanceTextString = blanceText.innerText;
    const blanceTextStringToNumber = parseFloat(blanceTextString);

    //step-8: Update blance amount to added by the deposit amount
    const currentBlanceAmount = blanceTextStringToNumber + depositNumberValue;
    blanceText.innerText = currentBlanceAmount;
});
