/* let answerCount = 4; problem with having answercount is
that we would need one for every question */
let questionCount = 0; // we start on the 0th question
function addQuestion() {
    const form = document.getElementsByTagName("form")[0];
    form.innerHTML += 
                
    "<div id=\"q" + questionCount + "\">" +
    "<label>Question:</label>\n" +
    
    "<input type=\"text\" id=\"q" + questionCount + "question\">\n" +
    "<button type=\"button\" onclick=\"addAnswer(" + questionCount + ")\">Add Answer</button>" +
    "<button type=\"button\" onclick=\"removeAnswer(" + questionCount + ")\">Remove Answer</button><br>" +
    "<div id=\"q" + questionCount + "answers\">" +
        "<label for=\"a1\">A1:</label>\n" +
        "<input type=\"text\" id=\"q" + questionCount + "a1\"><br>\n" +
        "<label for=\"a2\">A2:</label>\n" +
        "<input type=\"text\" id=\"q" + questionCount + "a2\"><br>\n" +
        "<label for=\"a3\">A3:</label>\n" +
        "<input type=\"text\" id=\"q" + questionCount + "a3\"><br>\n" +
        "<label for=\"a4\">A4:</label>\n" +
        "<input type=\"text\" id=\"q" + questionCount + "a4\"><br>\n" +
    "</div>" +
            
    "<label for=\"a\">Select The Correct Answer:</label>\n" +
    "<div id=\"q" + questionCount + "selections\">\n" +
        "<input name=\"q" + questionCount + "radioGroup\" type=\"radio\" id=\"qR" + questionCount + "a1\" value=\"a1\" checked>\n" +
        "<label for=\"a1\">Question 1</label>\n" +
        "<input name=\"q" + questionCount + "radioGroup\" type=\"radio\" id=\"qR" + questionCount + "a2\" value=\"a2\">\n" +
        "<label for=\"a2\">Question 2</label>\n" +
        "<input name=\"q" + questionCount + "radioGroup\" type=\"radio\" id=\"qR" + questionCount + "a3\" value=\"a3\">\n" +
        "<label for=\"a3\">Question 3</label>\n" +
        "<input name=\"q" + questionCount + "radioGroup\" type=\"radio\" id=\"qR" + questionCount + "a4\" value=\"a4\">\n" +
        "<label for=\"a4\">Question 4</label>\n" +
    "</div><br>" +
    "</div>";
    questionCount++;
}

function addAnswer(questionNum) {
    const answerCount = document.getElementsByName("q" + questionNum + "radioGroup").length;
    // console.log(answerCount);
    const div = document.getElementById("q" + questionNum + "answers");
    let label = document.createElement("LABEL");
    label.setAttribute("for", "a" + (answerCount + 1));
    label.textContent = "A" + (answerCount + 1) + ":\n";
    let input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.setAttribute("id", "q" + questionNum + "a" + (answerCount + 1));
    div.appendChild(label); div.appendChild(input);
    div.appendChild(document.createElement("BR"));
    /*const form = document.getElementById("q" + questionNum + "selections");
    form.innerHTML += "<input type=\"radio\" name=\"qR" + questionNum + "a5\" value=\"a5\">\n" +
    "<label for=\"a5\">Question 5</label>\n"; // This should add the bullet for the question*/
    const radioDiv = document.getElementById("q" + questionNum + "selections"); // Will probably change...
    let radioInput = document.createElement("INPUT");
    radioInput.setAttribute("name", "q" + questionNum + "radioGroup");
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("id", "qR" + questionNum + "a" + (answerCount + 1));
    radioInput.setAttribute("value", "a" + (answerCount + 1));
    let radioLabel = document.createElement("LABEL");
    radioLabel.setAttribute("for", "a" + (answerCount + 1));
    radioLabel.textContent = "Question " + (answerCount + 1) + "\n";
    radioDiv.appendChild(radioInput); radioDiv.appendChild(radioLabel);
}
            
function removeAnswer(questionNum) {
    const answerCount = document.getElementsByName("q" + questionNum + "radioGroup").length;
    const answerRadio = document.getElementById("qR" + questionNum + "a" + (answerCount + 1));
    const answerInput = document.getElementById("q" + questionNum + "a" + (answerCount + 1));

    answerRadio.parentNode.removeChild(); // remove radiobutton
    // ansDiv.removeChild(document.getElementById()); // remove radiobutton label
    answerInput.parentNode.removeChild(); // remove answer label
    // radioDiv.removeChild(document.getElementById()); // remove answer input box
}