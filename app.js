const fullnameInput = document.getElementById('fullname');
const initialBalanceInput = document.getElementById('initialBalance');
const createAccountForm = document.getElementById('createAccountForm');

// Get elements from Deposit Form
const depositAccountNumberInput = document.getElementById('depositAccountNumber');
const depositAmountInput = document.getElementById('depositAmount');
const depositForm = document.getElementById('depositForm');

// Get elements from Credit Form
const creditAccountNumberInput = document.getElementById('creditAccountNumber');
const creditAmountInput = document.getElementById('creditAmount');
const creditForm = document.getElementById('creditForm');

// Example: Add event listeners to the forms
createAccountForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Full Name:', fullnameInput.value);
  console.log('Initial Balance:', initialBalanceInput.value);
});

depositForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Deposit Account Number:', depositAccountNumberInput.value);
  console.log('Deposit Amount:', depositAmountInput.value);
});

creditForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Credit Account Number:', creditAccountNumberInput.value);
  console.log('Credit Amount:', creditAmountInput.value);
});

function CreateBankAccount(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance ?? 0;
}


const hammadAccount = new CreateBankAccount("Hammad Ur Rehman", 1000);
const rakeshAccount = new CreateBankAccount("Rakesh k", 1000);

console.log(hammadAccount, rakeshAccount);