document.getElementById("signin-button").addEventListener("click", function () {
  // get user email
  document.getElementById;
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //   get user password
  const passField = document.getElementById("user-pass");
  const userPass = passField.value;
  if (userEmail == "email.com" && userPass == "sakib") {
    window.location.href = "./banking.html";
  }
});
