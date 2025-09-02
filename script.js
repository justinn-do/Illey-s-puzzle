const correctAnswer = "gaus";
const correctNumber = "119"; // the string to check

const input = document.getElementById("answer"); // name input
const rin = document.getElementById("nums");     // number input
const button = document.getElementById("submitBtn");
const result = document.getElementById("result");

function checkAnswer() {
  if (
    input.value.trim().toLowerCase() === correctAnswer &&
    rin.value.trim() === correctNumber
  ) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
    // window.location.href = "nextpage.html"; // optional redirect
  } else {
    result.textContent = "❌ Try again.";
    result.style.color = "red";
  }
}

button.addEventListener("click", checkAnswer);

// also allow pressing Enter on either field
[input, rin].forEach(field => {
  field.addEventListener("keypress", e => {
    if (e.key === "Enter") checkAnswer();
  });
});