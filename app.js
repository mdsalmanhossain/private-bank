// login button event handler
const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', function(event) {
    const loginArea = document.getElementById('login_area');
    loginArea.style.display = 'none';
    const hiddenArea = document.getElementById('hidden_area');
    hiddenArea.style.display = 'block'
})

// Deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function (event) {
    const depositAmount = document.getElementById('depositAmount').value;
    const addNumber = parseFloat(depositAmount);

    // update current Deposit and update current Balance
    updateSpanText('currentDeposit', addNumber);
    updateSpanText('currentBalance', addNumber);

    document.getElementById('depositAmount').value = '';
})

function updateSpanText(id, addNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;

}

// Withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function (event) {
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const addWithdrawNumber = parseFloat(withdrawAmount);

    updateSpanText('currentWithdraw', addWithdrawNumber);

    const mainBalanceWithdraw = document.getElementById('currentBalance').innerText;
    const totalBalance = withdrawAmount - mainBalanceWithdraw;
    document.getElementById('currentBalance').innerText = totalBalance;


    document.getElementById('withdrawAmount').value = '';
})