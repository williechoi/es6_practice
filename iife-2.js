const makeWithdraw = (balance) =>
  (function (copyBalance) {
    let balance = copyBalance; // this variable is private
    let doBadThings = function () {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw: function (amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        } else {
          return "Insufficient money";
        }
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100);
console.log(firstAccount.balance);
console.log(firstAccount.withdraw(20));
console.log(firstAccount.withdraw(30));
console.log(firstAccount.doBadThings);

const secondAccount = makeWithdraw(100);
secondAccount.withdraw(30);
secondAccount.withdraw(20);
