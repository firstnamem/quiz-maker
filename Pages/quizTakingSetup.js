let userQuiz = JSON.parse(localStorage.getItem("newQuiz"));

const body = document.getElementsByTagName("body")[0];
body.insertAdjacentHTML("afterbegin",
"<div class=\"allElements\">\n\t" +
"<h1>" + userQuiz._title + "</h1>\n" +
"<h2>" + userQuiz._desc + "</h2>\n" +
"<h2>Category: " + userQuiz._cat + "</h2>\n");
"</div>"

const form = document.getElementsByTagName("form")[0];
for (let x = 0; x < userQuiz._questionArray.length; x++) {
    let focusQuestion = userQuiz._questionArray[x];
    form.insertAdjacentHTML("beforeend",

    "<br><div id=\"question" + x + "\" class=\"allElements\">" +
    "<label>Question " + (x + 1) + ": " + focusQuestion._question + "</label><br>\n" +
    
    "<div id=\"question" + x + "answers\" class=\"allElements\">");
    for (let y = 0; y < focusQuestion._answerArray.length; y++) {
        let focusAnswer = focusQuestion._answerArray[y];
        form.insertAdjacentHTML("beforeend",

        "<input name=\"question" + x + "radioGroup\" type=\"radio\" class=\"allElements\" id=\"questionR" + x + "a" + y + "\" value=\"a" + y + "\">" +
        "<label id=\"questionL" + x + "a" + y + "\" class=\"allElements\"> " + focusAnswer._answer + "</label><br>\n");

        let firstAnswer = document.getElementById("questionR" + x + "a0");
        firstAnswer.checked = true;
    }
    form.insertAdjacentHTML("beforeend", "</div>");
    form.insertAdjacentHTML("beforeend", "</div>");
}

const lineBreak = document.createElement("br");
form.appendChild(lineBreak);

let submitButton = document.createElement("INPUT");
submitButton.setAttribute("type", "button");
submitButton.setAttribute("onclick", "grade()")
submitButton.setAttribute("value", "Submit Answers");
submitButton.setAttribute("id", "quizTakingSubmit");
form.appendChild(submitButton);