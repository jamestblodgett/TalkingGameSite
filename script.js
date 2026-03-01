function sayHello() {
  alert("Congratulations! This does absolutely nothing!");
}

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const correctPassword = "TGSecret"; // You can change this

  if (input === correctPassword) {
    document.getElementById("secret-section").style.display = "block";
    document.getElementById("password-prompt").style.display = "none";
  } else {
    alert("Incorrect password. Try again.");
  }
}