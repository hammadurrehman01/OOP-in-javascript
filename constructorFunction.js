const fullnameInput = document.getElementById('fullname');
const initialBalanceInput = document.getElementById('initialBalance');
const createAccountForm = document.getElementById('createAccountForm');


const depositAccountNumberInput = document.getElementById('depositAccountNumber');
const depositAmountInput = document.getElementById('depositAmount');
const depositForm = document.getElementById('depositForm');


const withdrawAccountNumberInput = document.getElementById('withdrawAccountNumber');
const withdrawAmountInput = document.getElementById('withdrawAmount');
const withdrawForm = document.getElementById('withdrawForm');


const accounts = []

function CreateBankAccount(customerName, balance) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance ?? 0;

  this.deposit = (accountNumber, amount) => {
    const accountExists = accounts.find((account) => account.accountNumber === accountNumber)
    if (!accountExists) {
      console.log("This account is not exists");
      return;
    }
    accountExists.balance = accountExists.balance + amount
    console.log(accounts);

  }

  this.withdraw = (accountNumber, amount) => {
    const accountExists = accounts.find((account) => account.accountNumber === accountNumber)
    if (!accountExists) {
      console.log("This account is not exists");
      return;
    }
    accountExists.balance = accountExists.balance - amount
    console.log(accounts);
  }
}

createAccountForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const userAccount = new CreateBankAccount(fullnameInput.value, Number(initialBalanceInput.value));
  accounts.push(userAccount)
  console.log(accounts);
  fullnameInput.value = ''
  initialBalanceInput.value = ''

});

depositForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const userAccount = new CreateBankAccount();
  userAccount.deposit(Number(depositAccountNumberInput.value), Number(depositAmountInput.value))
  depositAmountInput.value = ''
  depositAccountNumberInput.value = ''

});

withdrawForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const userAccount = new CreateBankAccount();
  userAccount.withdraw(Number(withdrawAccountNumberInput.value), Number(withdrawAmountInput.value))
  withdrawAmountInput.value = ''
  withdrawAccountNumberInput.value = ''

});


