const fullnameInput = document.getElementById('fullname');
const initialBalanceInput = document.getElementById('initialBalance');
const createAccountForm = document.getElementById('createAccountForm');


const depositAccountNumberInput = document.getElementById('depositAccountNumber');
const depositAmountInput = document.getElementById('depositAmount');
const depositForm = document.getElementById('depositForm');


const creditAccountNumberInput = document.getElementById('creditAccountNumber');
const creditAmountInput = document.getElementById('creditAmount');
const creditForm = document.getElementById('creditForm');


const accounts = []



function CreateBankAccount(customerName, balance) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance ?? 0;

  this.deposit = (amount) => {
    const accountExists = accounts.find((account) => account.accountNumber === Number(depositAccountNumberInput.value))
    if (!accountExists) {
      console.log("This account is not exists");
      return;
    }
    accountExists.balance = accountExists.balance + amount
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
  userAccount.deposit(Number(depositAmountInput.value))
});

creditForm.addEventListener('submit', function (event) {
  event.preventDefault();
});




// console.log(hammadAccount, rakeshAccount);