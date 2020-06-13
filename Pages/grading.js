function grade() {
    let userQuiz = JSON.parse(localStorage.getItem("newQuiz"));

const numQuestions = userQuiz._questionArray.length;
let numCorrect = 0;

// const form = document.getElementsByTagName("form")[0];
for (let x = 0; x < userQuiz._questionArray.length; x++) {
    // const questionDiv = document.getElementById("q" + x + "answers");
    let focusQuestion = userQuiz._questionArray[x];
    for (let y = 0; y < focusQuestion._answerArray.length; y++) {
        let focusAnswer = focusQuestion._answerArray[y];
        let userSelect = document.getElementById("questionR" + x + "a" + y);
        if (userSelect.checked && focusAnswer._correct) {
            numCorrect++;
        }
    }
}

let label = document.getElementById("grade");
label.textContent = "You scored a " + numCorrect + " out of " + numQuestions + "!";
}