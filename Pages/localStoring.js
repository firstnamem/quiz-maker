class Quiz {
    constructor(title, description = null, category = null) {
        this._title = title;
        this._desc = description;
        this._cat = category;
        this._questionArray = [];
    }

    addQuestion(questionObj, index = this.numQuestions) {
    // Input should be a question object and index,
    // if index is unspecified the question will be placed at the end
        this._questionArray.splice(index, 0, questionObj);
        // splice function will not replace any array elements,
        // just adds a new one and shifts elements accordingly
    }

    removeQuestion(index) { // Input should be the index of the question being removed
        this._questionArray.splice(index, 1);
        // splice function will remove an array element at specified index,
        // will also shift other elements accordingly
    }

    validQuiz() { // Returns boolean
    // Makes sure quiz is valid to submit (quiz must have at least 1 question)
        if (this.numQuestions >= 1) {
            return true;
        }
        else {
            return false;
        }
    }

    get title() {
        return this._title;
    }

    get desc() {
        return this._desc;
    }

    get cat() {
        return this._cat;
    }

    get questionArray() {
        return this._questionArray;
    }

    get numQuestions() {
        return this._questionArray.length;
    }

    // ADDING SETTERS JUST IN CASE...

    set title(newTitle) {
        this._title = newTitle;
    }

    set desc(newDescription) {
        this._desc = newDescription;
    }

    set cat(newCategory) {
        this._cat = newCategory;
    }

    set questionArray(newQuestionArray) {
        this._question = newQuestionArray;
    }

}

class Question {
    constructor(question) { // Input is the question being asked
        this._question = question;
        this._answerArray = [];
    }

    addAnswer(answerObj, index = this.numAnswers) {
        this._answerArray.splice(index, 0, answerObj);
    }

    removeAnswer(index) {
        this._answerArray.splice(index, 1);
    }

    validQuestion() {
        const oneCorrect = false;
        for (let x = 0; x < this.numAnswers; x++) {
            if (this._answerArray[x].correct) {
                oneCorrect = true;
            }
        } // for loop that checks if there is at least one correct answer

        if (this.numAnswers >= 2 && oneCorrect) {
            return true;
        }
        else {
            return false;
        }

    }

    get question() {
        return this._question;
    }

    get answerArray() {
        return this._answerArray;
    }

    get numAnswers() {
        return this._answerArray.length;
    }

    // ADDING SETTER JUST IN CASE...
    
    set question(newQuestion) {
        this._question = newQuestion;
    }

    set answerArray(newAnswerArray) {
        this._answerArray = newAnswerArray;
    }

}

class Answer {
    constructor(answer, correctBoolean = false) { // Input is the possible answer
        this._answer = answer;
        this._correct = correctBoolean;
    }

    get answer() {
        return this._answer;
    }

    get correct() {
        return this._correct;
    }

    // ADDING SETTERS AND METHODS JUST IN CASE...

    set answer(newAnswer) {
        this._answer = newAnswer;
    }

    set correct(newCorrectBoolean) {
        this._correct = newCorrectBoolean;
    }

    setCorrect() {
        this._correct = true;
    }

    setIncorrect() {
        this._correct = false;
    }

    flipCorrect() { // This one might be useful for a button or switch
        this._correct = !this._correct;
    }
}

function quizStore() {
let userQuiz = new Quiz(localStorage.getItem("title"), localStorage.getItem("desc"), localStorage.getItem("cat"));
const divList = document.getElementsByTagName("div");
for (let x = 2; x < divList.length; x += 3) {
    let newQuestion = new Question(divList[x].children[1].value);
    let inputBoxList = divList[x + 1].getElementsByTagName("input");
    let radioList = divList[x + 2].getElementsByTagName("input");
    for (let y = 0; y < inputBoxList.length; y++) {
        let answerText = inputBoxList[y].value;
        let answerBoolean = radioList[y].checked;
        let newAnswer = new Answer(answerText, answerBoolean);
        newQuestion.addAnswer(newAnswer);
    }
    userQuiz.addQuestion(newQuestion);
}

localStorage.setItem("newQuiz", JSON.stringify(userQuiz));

}