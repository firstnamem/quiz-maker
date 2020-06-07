// this is kinda a workspace for me

function addQuestion() {
    /* <label for="q">Question:</label> <!-- This needs to be extended to 35-ish characters -->
                <input type="text" name="q"><br>

                <label for="question1">Q1:</label>
                <input type="text" name="question1"><br>
                <label for="question2">Q2:</label>
                <input type="text" name="question2"><br>
                <label for="question3">Q3:</label>
                <input type="text" name="question3"><br>
                <label for="question4">Q4:</label>
                <input type="text" name="question4"><br>

                <label for="a">Select The Correct Answer:</label>
                <form action = "../classes.mjs">
                    <input type="radio" name="qR" value="q1">
                    <label for="q1">Question 1</label>
                    <input type="radio" name="qR" value="q2">
                    <label for="q2">Question 2</label>
                    <input type="radio" name="qR" value="q3">
                    <label for="q3">Question 3</label>
                    <input type="radio" name="qR" value="q4">
                    <label for="q4">Question 4</label>
                </form> */
    const form = document.getElementsByTagName("form")[0];
    
    /*let questionIntro = document.createElement("label");
    questionIntro.setAttribute("for", "q");
    questionIntro.innerText = "Question:";
    form.appendChild(questionIntro);

    let questionTitle = document.createElement("input");
    questionTitle.setAttribute("type", "text");
    questionTitle.setAttribute("name", "q");*/

    form.innerHTML = "<label for=\"q\">Question:</label> <!-- This needs to be extended to 35-ish characters -->\n" +
    "<input type=\"text\" name=\"q\"><br>\n" +

    "<label for=\"question1\">Q1:</label>\n" +
    "<input type=\"text\" name=\"question1\"><br>\n" +
    "<label for=\"question2\">Q2:</label>\n" +
    "<input type=\"text\" name=\"question2\"><br>\n" +
    "<label for=\"question3\">Q3:</label>\n" +
    "<input type=\"text\" name=\"question3\"><br>\n" +
    "<label for=\"question4\">Q4:</label>\n" +
    "<input type=\"text\" name=\"question4\"><br>\n" +

    "<label for=\"a\">Select The Correct Answer:</label>\n" +
    "<form action = \"../classes.mjs\">\n" +
        "<input type=\"radio\" name=\"qR\" value=\"q1\">\n" +
        "<label for=\"q1\">Question 1</label>\n" +
        "<input type=\"radio\" name=\"qR\" value=\"q2\">\n" +
        "<label for=\"q2\">Question 2</label>\n" +
        "<input type=\"radio\" name=\"qR\" value=\"q3\">\n" +
        "<label for=\"q3\">Question 3</label>\n" +
        "<input type=\"radio\" name=\"qR\" value=\"q4\">\n" +
        "<label for=\"q4\">Question 4</label>\n" +
    "</form>\n";
    
}

/* This will contain the functions for adding questions, removing questions,
adding answers, removing answers, and more.*/