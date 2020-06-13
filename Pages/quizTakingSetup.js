let userQuiz = JSON.parse(localStorage.getItem("newQuiz"));

const body = document.getElementsByTagName("body")[0];
body.insertAdjacentHTML("afterbegin",
"<h1>" + userQuiz._title + "</h1>\n" +
"<h2>" + userQuiz._desc + "</h2>\n" +
"<h2>Category: " + userQuiz._cat + "</h2>\n");

const form = document.getElementsByTagName("form")[0];
for (let x = 0; x < userQuiz._questionArray.length; x++) {
    let focusQuestion = userQuiz._questionArray[x];
    form.innerHTML += 

    "<br><div id=\"question" + x + "\">" +
    "<label>Question " + (x + 1) + ": " + focusQuestion._question + "</label><br>\n" +
    
    "<div id=\"question" + x + "answers\">";
    for (let y = 0; y < focusQuestion._answerArray.length; y++) {
        let focusAnswer = focusQuestion._answerArray[y];
        form.innerHTML +=

        "<input name=\"question" + x + "radioGroup\" type=\"radio\" id=\"questionR" + x + "a" + y + "\" value=\"a" + y + "\">" +
        "<label id=\"questionL" + x + "a" + y + "\"> " + focusAnswer._answer + "</label><br>\n";

        let firstAnswer = document.getElementById("questionR" + x + "a0");
        firstAnswer.checked = true;
    }
}