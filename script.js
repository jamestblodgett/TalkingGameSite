function sayHello() {
  alert("Congratulations! This does absolutely nothing!");
}

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const correctPassword = "A"; // You can change this

  if (input === correctPassword) {
    document.getElementById("secret-section").style.display = "block";
    document.getElementById("password-prompt").style.display = "none";
  } else {
    alert("Incorrect password. Try again.");
  }
}

function insertPasswordPrompt(targetId) {
  const container = document.getElementById(targetId);
  if (container) {
    container.innerHTML = `
    <div class="images">
      <img src="images/KeyGate.png" alt="Key Gate Image" width="80">
    </div>
      <div class="password-prompt">
        <input type="password" id="password-input" placeholder="Enter password">
        <button onclick="checkPassword()">Submit</button>
      </div>
    `;
  }
}

insertPasswordPrompt("password-placeholder");