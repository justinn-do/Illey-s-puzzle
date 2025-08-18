const correctAnswer = "gaus"; // the string to check
const input = document.getElementById("answer");
const button = document.getElementById("submitBtn");
const result = document.getElementById("result");

function checkAnswer() {
  if (input.value.trim().toLowerCase() === correctAnswer) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
    // You could also redirect:
    // window.location.href = "nextpage.html";
  } else {
    result.textContent = "❌ Try again.";
    result.style.color = "red";
  }
}

button.addEventListener("click", checkAnswer);
input.addEventListener("keypress", e => {
  if (e.key === "Enter") checkAnswer();
});