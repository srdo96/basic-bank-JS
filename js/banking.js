// common function
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputAmount = parseInt(inputField.value);
  //   clear deposit input
  inputField.value = "";
  return inputAmount;
}

function updateTotalField(id, inputAmount) {
  const previousAmountText = document.getElementById(id);
  const previousAmount = parseInt(previousAmountText.innerText);
  previousAmountText.innerText = inputAmount + previousAmount;
}

function updateBalance(amount, type) {
  const balanceText = document.getElementById("total-balance");
  const currentBalance = parseInt(balanceText.innerText);
  if (type == "deposit") {
    balanceText.innerText = amount + currentBalance;
  } else {
    balanceText.innerText = currentBalance - amount;
  }
}

// deposit area code
document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");
    updateTotalField("diposit-amount", depositAmount);
    // update balance
    updateBalance(depositAmount, "deposit");
  });

//   withdraw area
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const newWithdrawAmount = getInputValue("withdraw-input");

    updateTotalField("withdraw-amount-total", newWithdrawAmount);
    //  update balance
    updateBalance(newWithdrawAmount, "withdraw");
  });
