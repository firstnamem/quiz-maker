/* let answerCount = 4; problem with having answercount is
that we would need one for every question */
let questionCount = 0; // we start on the 0th question
function addQuestion() {
    const form = document.getElementsByTagName("form")[0];
    form.insertAdjacentHTML("beforeend",
                
    "<div id=\"q" + questionCount + "\" class=\"allElements\">" +
    "<label>Question:</label>\n" +
    
    "<input type=\"text\" id=\"q" + questionCount + "question\"><br>\n" +
    "<button type=\"button\" onclick=\"addAnswer(" + questionCount + ")\" id=\"addA\">Add Answer</button>" +
    "<button type=\"button\" onclick=\"removeAnswer(" + questionCount + ")\" id=\"qMButtons\">Remove Answer</button>" +
    "<button type=\"button\" onclick=\"removeQuestion(" + questionCount + ")\" id=\"qMButtons\">Remove Question</button><br>" +

    "<div id=\"q" + questionCount + "answers\">" +
        "<label for=\"a1\" id=\"q" + questionCount + "a1" + "label\">A1:</label>\n" +
        "<input type=\"text\" id=\"q" + questionCount + "a1\"><br>\n" +
        "<label for=\"a2\" id=\"q" + questionCount + "a2" + "label\">A2:</label>\n" +
        "<input type=\"text\" id=\"q" + questionCount + "a2\"><br>\n" +
        "<label for=\"a3\" id=\"q" + questionCount + "a3" + "label\">A3:</label>\n" +
        "<input type=\"text\" id=\"q" + questionCount + "a3\"><br>\n" +
        "<label for=\"a4\" id=\"q" + questionCount + "a4" + "label\">A4:</label>\n" +
        "<input type=\"text\" id=\"q" + questionCount + "a4\"><br>\n" +
    "</div>" +
            
    "<label for=\"a\">Select The Correct Answer:</label>\n" +
    "<div id=\"q" + questionCount + "selections\">\n" +
        "<input name=\"q" + questionCount + "radioGroup\" type=\"radio\" id=\"qR" + questionCount + "a1\" checked>\n" +
        "<label for=\"a1\" id=\"qR" + questionCount + "a1" + "label\">Answer 1</label>\n" +
        "<input name=\"q" + questionCount + "radioGroup\" type=\"radio\" id=\"qR" + questionCount + "a2\">\n" +
        "<label for=\"a2\" id=\"qR" + questionCount + "a2" + "label\">Answer 2</label>\n" +
        "<input name=\"q" + questionCount + "radioGroup\" type=\"radio\" id=\"qR" + questionCount + "a3\">\n" +
        "<label for=\"a3\" id=\"qR" + questionCount + "a3" + "label\">Answer 3</label>\n" +
        "<input name=\"q" + questionCount + "radioGroup\" type=\"radio\" id=\"qR" + questionCount + "a4\">\n" +
        "<label for=\"a4\" id=\"qR" + questionCount + "a4" + "label\">Answer 4</label>\n" +
    "</div><br>" +
    "</div>");
    questionCount++;
}

function addAnswer(questionNum) {
        
    const answerCount = document.getElementsByName("q" + questionNum + "radioGroup").length;
    if (answerCount<9) {
        const div = document.getElementById("q" + questionNum + "answers");
        let label = document.createElement("LABEL");
        label.setAttribute("for", "a" + (answerCount + 1));
        label.setAttribute("id", "q" + questionNum + "a" + (answerCount + 1) + "label");
        label.textContent = "A" + (answerCount + 1) + ":\n";
        let input = document.createElement("INPUT");
        input.setAttribute("type", "text");
        input.setAttribute("id", "q" + questionNum + "a" + (answerCount + 1));
        div.appendChild(label); div.appendChild(input);
        div.appendChild(document.createElement("BR"));
        
        const radioDiv = document.getElementById("q" + questionNum + "selections"); // Will probably change...
        let radioInput = document.createElement("INPUT");
        radioInput.setAttribute("name", "q" + questionNum + "radioGroup");
        radioInput.setAttribute("type", "radio");
        radioInput.setAttribute("id", "qR" + questionNum + "a" + (answerCount + 1));
        let radioLabel = document.createElement("LABEL");
        radioLabel.setAttribute("for", "a" + (answerCount + 1));
        radioLabel.setAttribute("id", "qR" + questionNum + "a" + (answerCount + 1) + "label");
        radioLabel.textContent = "Answer " + (answerCount + 1) + "\n";
        radioDiv.appendChild(radioInput); radioDiv.appendChild(radioLabel);
    }
}
            
function removeAnswer(questionNum) {
    const answerCount = document.getElementsByName("q" + questionNum + "radioGroup").length;
    
    const answerRadio = document.getElementById("qR" + questionNum + "a" + (answerCount));
    const radioLabel = document.getElementById("qR" + questionNum + "a" + (answerCount) + "label");
    const answerInput = document.getElementById("q" + questionNum + "a" + (answerCount));
    const inputLabel = document.getElementById("q" + questionNum + "a" + (answerCount) + "label");

    if (answerRadio.checked) { // basically if you remove a checked radiobutton the check will switch to 1st answer
        const recheckRadio = document.getElementById("qR" + questionNum + "a1");
        recheckRadio.checked = true;
    }

    if (answerCount>2) {
        answerRadio.remove(); // remove radiobutton
        radioLabel.remove(); // remove radiobutton label
        answerInput.nextElementSibling.remove(); // deletes line break so spacing can stay the same
        answerInput.remove(); // remove answer label
        inputLabel.remove(); // remove answer input box
    }
}

function removeQuestion(questionNum) {
    const div = document.getElementById("q" + questionNum);
    div.remove();
    /* const divCount = document.getElementsByTagName("div").length;
    console.log(divCount);*/
}