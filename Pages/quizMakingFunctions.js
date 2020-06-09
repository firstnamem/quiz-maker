let answerCount = 4;
let questionCount = 0; // we start on the 0th question
function addQuestion() {
    const form = document.getElementsByTagName("form")[0];
    form.innerHTML += 
                
    "<div id=\"q" + questionCount + "\">" +
    "<label>Question:</label>\n" +
    
    "<input type=\"text\" id=\"q" + questionCount + "question\">\n" +
    "<button type=\"button\" onclick=\"addAnswer(" + questionCount + ")\">Add Answer</button><br>" +
    "<div id=\"q" + questionCount + "answers\">" +
        "<label for=\"a1\">Q1:</label>\n" +
        "<input type=\"text\" id=\"q" + questionCount + "a1\"><br>\n" +
        "<label for=\"a2\">Q2:</label>\n" +
        "<input type=\"text\" id=\"q" + questionCount + "a2\"><br>\n" +
        "<label for=\"a3\">Q3:</label>\n" +
        "<input type=\"text\" id=\"q" + questionCount + "a3\"><br>\n" +
        "<label for=\"a4\">Q4:</label>\n" +
        "<input type=\"text\" id=\"q" + questionCount + "a4\"><br>\n" +
    "</div>" +
            
    "<label for=\"a\">Select The Correct Answer:</label>\n" +
    "<form id=\"q" + questionCount + "selections\">\n" +
        "<input name=\"q" + questionCount + "radioGroup\" type=\"radio\" id=\"qR" + questionCount + "a1\" value=\"a1\" checked>\n" +
        "<label for=\"a1\">Question 1</label>\n" +
        "<input name=\"q" + questionCount + "radioGroup\" type=\"radio\" id=\"qR" + questionCount + "a2\" value=\"a2\">\n" +
        "<label for=\"a2\">Question 2</label>\n" +
        "<input name=\"q" + questionCount + "radioGroup\" type=\"radio\" id=\"qR" + questionCount + "a3\" value=\"a3\">\n" +
        "<label for=\"a3\">Question 3</label>\n" +
        "<input name=\"q" + questionCount + "radioGroup\" type=\"radio\" id=\"qR" + questionCount + "a4\" value=\"a4\">\n" +
        "<label for=\"a4\">Question 4</label>\n" +
    "</form><br>" +
    "</div>";
    questionCount++;
}

function addAnswer(questionNum) {
    answerCount++;
    const div = document.getElementById("q" + questionNum + "answers");
    let label = document.createElement("LABEL");
    label.setAttribute("for", "a5");
    label.textContent = "Q5:\n";
    let input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.setAttribute("id", "q" + questionNum + "a5");
    div.appendChild(label); div.appendChild(input);
    div.appendChild(document.createElement("BR"));
    // this MUST BE worked on
    // issue: need to start using IDs (for each form) so that the answer can be added
    // ... to the correct question instead of straight at the end of the page.
    /*const form = document.getElementById("q" + questionNum + "selections");
    form.innerHTML += "<input type=\"radio\" name=\"qR" + questionNum + "a5\" value=\"a5\">\n" +
    "<label for=\"a5\">Question 5</label>\n"; // This should add the bullet for the question*/
    const form = document.getElementsByTagName("form")[questionNum + 1]; // Will probably change...
    let radioInput = document.createElement("INPUT");
    radioInput.setAttribute("name", "q" + questionNum + "radioGroup");
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("id", "qR" + questionNum + "a5");
    radioInput.setAttribute("value", "a5");
    let radioLabel = document.createElement("LABEL");
    radioLabel.setAttribute("for", "a5");
    radioLabel.textContent = "Question 5\n";
    // form.appendChild(radioInput); form.appendChild(radioLabel); // For later...

}
            
function removeAnswer() {
    // TODO - Umar
}