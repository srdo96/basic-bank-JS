// deposit area
document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositeAmount = parseInt(depositInput.value);
    if (typeof depositeAmount === "number") {
      // console.log("total: ", depositeAmount);
      const deposite = document.getElementById("diposit-amount");
      let currentDeposite = parseInt(deposite.innerText);
      currentDeposite = depositeAmount + currentDeposite;
      deposite.innerText = currentDeposite;
      const balance = document.getElementById("total-balance");
      let totalBalance = parseInt(balance.innerText);
      totalBalance = depositeAmount + totalBalance;
      // console.log("total: ", totalBalance);
      balance.innerText = totalBalance;
      //   clear deposit input
      depositInput.value = "";
    } else {
      document.getElementById("deposite-area").style.backgroundColor("red");
    }
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
    let totalBalance = parseInt(balance.innerText);
  });
