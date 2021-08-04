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
    const addNumber = getInputNumber('depositAmount')

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
    const addWithdrawNumber = getInputNumber('withdrawAmount')

    updateSpanText('currentWithdraw', addWithdrawNumber);
    updateSpanText('currentBalance', -1 * addWithdrawNumber)

    document.getElementById('withdrawAmount').value = '';
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}