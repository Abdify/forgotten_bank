let submitButton = document.querySelector("#submitButton");
let logInArea = document.querySelector("#logInArea");
let transactionArea = document.querySelector("#transactionArea");

//Display transaction area
submitButton.addEventListener("click", function(){
    logInArea.style.display = "none";
    transactionArea.style.display = "block";

});

//click event listener
let depositButton = document.querySelector("#depositButton");
let withdrawButton = document.querySelector("#withdrawButton");

depositButton.addEventListener("click", function(){
    calculate("currentDepositAmount", "depositAmount");
});

withdrawButton.addEventListener("click", function(){
    calculate("currentWithdrawAmount", "withdrawAmount");
});

//Calculate
function calculate(current, amount){
    //User amount
    let currentAmount = Number(document.getElementById(current).innerText);
    let userAmount = Number(document.getElementById(amount).value);
    let currentBalance = Number(document.getElementById("currentBalance").innerText);

    //Check validity
    if(/\D+/.test(userAmount) || userAmount <= 0){
        alert("Enter valid amount!");
        document.getElementById(amount).value = "";
        return;
    }
    else if(amount === "withdrawAmount" && currentBalance - userAmount < 0){
        alert("Not enough money :(");
        document.getElementById(amount).value = "";
        return;
    }
    //total
    let totalAmount = currentAmount + userAmount;
    let totalBalance = amount === "withdrawAmount" ? currentBalance - userAmount : currentBalance + userAmount;
    //update total value
    document.getElementById(current).innerText = totalAmount;
    document.getElementById("currentBalance").innerText = totalBalance;
    document.getElementById(amount).value = "";
}


