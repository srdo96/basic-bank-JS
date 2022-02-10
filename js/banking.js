// common function
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputAmount = parseInt(inputField.value);

  //   clear deposit input
  inputField.value = "";
  return inputAmount;
}

// deposit area code
document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const depositeAmount = getInputValue("deposit-input");
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
  });

//   withdraw area

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const newWithdrawAmount = getInputValue("withdraw-input");
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
  });
