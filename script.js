const correctNames = [
  "gauss",
  "carl",
  "friedrich",
  "carl friedrich gauss"
];

const correctNumber = "119"; // correct number string

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
  window.location.href = "https://ohlonecicada.netlify.app/"; // target page
});

// Add the button to the result area
result.parentNode.appendChild(redirectButton);

function checkAnswer() {
  const nameInput = input.value.trim().toLowerCase();

  // check if name is in accepted list
  const nameValid = correctNames.includes(nameInput);

  // check if number matches
  const numberValid = rin.value.trim() === correctNumber;

  if (nameValid && numberValid) {
    result.textContent = "✅ Type \"M3SA\" in your channel";
    result.style.color = "green";
    redirectButton.style.display = "inline-block"; // show button
  } else {
    result.textContent = "❌ Try again.";
    result.style.color = "red";
    redirectButton.style.display = "none"; // hide button if wrong
  }
}

button.addEventListener("click", checkAnswer);

// Also allow pressing Enter on either field
[input, rin].forEach(field => {
  field.addEventListener("keypress", e => {
    if (e.key === "Enter") checkAnswer();
  });
});