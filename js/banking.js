// deposit area
document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositeAmount = parseInt(depositInput.value);

    //   get current deposite
    const deposite = document.getElementById("diposit-amount");
    let currentDeposite = parseInt(deposite.innerText);

    currentDeposite = depositeAmount + currentDeposite;
    deposite.innerText = currentDeposite;

    // update balance
    const balance = document.getElementById("total-balance");
    let totalBalance = parseInt(balance.innerText);
    totalBalance = depositeAmount + totalBalance;
    balance.innerText = totalBalance;

    //   clear deposit input
    depositInput.value = "";
    document.getElementById("deposite-area").style.backgroundColor("red");
  });

//   withdraw area

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawAmount = parseInt(withdrawInput.value);

    const withdrawAmountTotalText = document.getElementById(
      "withdraw-amount-total"
    );
    const withdrawAmountTotal = parseInt(withdrawAmountTotalText.innerText);
    const currentWithdrawAmount = withdrawAmountTotal + newWithdrawAmount;
    withdrawAmountTotalText.innerText = currentWithdrawAmount;
    //   balance
    const totalBalanceText = document.getElementById("total-balance");
    const currentTotalBalance = parseInt(totalBalanceText.innerText);
    const newTotalBalance = currentTotalBalance - newWithdrawAmount;
    totalBalanceText.innerText = newTotalBalance;
    //   clear withdraw input
    withdrawInput.value = "";
  });
