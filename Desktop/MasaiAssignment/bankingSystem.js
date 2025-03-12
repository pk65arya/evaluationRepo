//Question 1: Banking Transaction System

//You need to create a bank account system where users can deposit, withdraw, and check their balance, but the account details should not be directly accessible.

// Requirements:
// 1️⃣ The initial balance is set when the account is created.

// 2️⃣ Users can deposit and withdraw money, but they cannot modify the balance directly.

// 3️⃣ If the withdrawal amount exceeds the available balance, return "Insufficient funds".

// 4️⃣ Implement a method to check the current balance.

// Example:

// const myAccount = createBankAccount(1000);  
// console.log(myAccount.deposit(500));   // "Deposited ₹500. New balance: ₹1500"  
// console.log(myAccount.withdraw(200));  // "Withdrew ₹200. New balance: ₹1300"  
// console.log(myAccount.withdraw(1500)); // "Insufficient funds"  
// console.log(myAccount.getBalance());   // "Current balance: ₹1300"  


function createBankAccount(balance){
  let bal=balance;

  return {
    deposit(amount){
       bal=bal+amount;
      return `Deposited Rs${amount}. New balance: Rs${bal}` ;  
    },

    withdraw(amount){
       
      if(amount>bal)
        return `Insufficient funds`;
      else
      bal=bal-amount;
      return `Withdrew Rs${amount}. New balance: Rs${bal}`;
    },

    getBalance(){
        return `Current balance: Rs${bal}`
    }
  }
}
const myAccount = createBankAccount(1000); 
console.log(myAccount.deposit(500));
console.log(myAccount.withdraw(200));
console.log(myAccount.withdraw(1500));
console.log(myAccount.getBalance());