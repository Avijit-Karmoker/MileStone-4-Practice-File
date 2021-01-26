const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const hideLoginArea = document.getElementById('login-area');
    hideLoginArea.style.display = 'none';
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})