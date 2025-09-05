const correctAnswer = "gaus";
const correctNumber = "119"; // the string to check

const input = document.getElementById("answer"); // name input
const rin = document.getElementById("nums");     // number input
const button = document.getElementById("submitBtn");
const result = document.getElementById("result");

// Create a button for redirection
const redirectButton = document.createElement("button");
redirectButton.textContent = "Home Page";
redirectButton.style.display = "none"; // hidden by default
redirectButton.style.marginTop = "10px";
redirectButton.addEventListener("click", () => {
  window.location.href = "https://ohlonecicada.netlify.app/"; // change this to your target page
});

// Add the button to the result area
result.parentNode.appendChild(redirectButton);

function checkAnswer() {
  if (
    input.value.trim().toLowerCase() === correctAnswer &&
    rin.value.trim() === correctNumber
  ) {
    // Show success message
    result.textContent = "✅ Type \"M3SA\" in your channel";
    result.style.color = "green";

    // Show the redirect button
    redirectButton.style.display = "inline-block";
  } else {
    result.textContent = "❌ Try again.";
    result.style.color = "red";

    // Hide the redirect button if answer is wrong
    redirectButton.style.display = "none";
  }
}

button.addEventListener("click", checkAnswer);

// Also allow pressing Enter on either field
[input, rin].forEach(field => {
  field.addEventListener("keypress", e => {
    if (e.key === "Enter") checkAnswer();
  });
});