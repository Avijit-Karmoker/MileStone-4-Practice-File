//login button even handler

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const hideLoginArea = document.getElementById('login-area');
    hideLoginArea.style.display = 'none';
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//    deposite buytton even handler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositNumber = getInputNumber("depositAmount");
    
//    put deposite amount in the input and show and add them
    
//    const currentDeposit = document.getElementById("currentDeposit").innerText;
//    const currentDepositeNumber = parseFloat(currentDeposit);
//    const totalDeposite = depositNumber + currentDepositeNumber;
//    document.getElementById("currentDeposit").innerText = totalDeposite;
//   
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    
    document.getElementById("depositAmount").value = "";
    
//    add the current deposite with the current balance and show them
    
//    const currentBalance = document.getElementById('currentBalance').innerText;
//    const currentBalanceNumber = parseFloat(currentBalance);
//    const totalBalance = depositNumber + currentBalanceNumber;
//    document.getElementById("currentBalance").innerText = totalBalance;
})

//        withdrow button handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
    
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1*withdrawNumber);
    
    document.getElementById("withdrawAmount").value = "";
})

//        declear a function for withdraw

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

//        declear a function for deposit

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}