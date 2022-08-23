let questionList = document.getElementsByClassName("question-card");

for (let i = 0; i < questionList.length; i++) {
  let question = questionList[i];
  question.addEventListener("click", showAnswer);
}

function showAnswer() {
  let answer = this.nextElementSibling;
  answer.classList.toggle("hidden");
  this.classList.toggle("selected");
}
