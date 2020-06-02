class Quiz {
    constructor(title, description = null, category = null) {
        this.title = title;
        this.desc = description;
        this.cat = category;
        this.questionArray = [];
    }

    addQuestion(questionObj, index = this.numQuestions) {
    // Input should be a question object and index,
    // if index is unspecified the question will be placed at the end
        this.questionArray.splice(index, 0, questionObj);
        // splice function will not replace any array elements,
        // just adds a new one and shifts elements accordingly
    }

    removeQuestion(index) { // Input should be the index of the question being removed
        this.questionArray.splice(index, 1);
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
        return this.title;
    }

    get desc() {
        return this.desc;
    }

    get cat() {
        return this.cat;
    }

    get numQuestions() {
        return this.questionArray.length;
    }

    // ADDING SETTERS JUST IN CASE...

    set title(title) {
        this.title = title;
    }

    set desc(description) {
        this.desc = description;
    }

    set cat(category) {
        this.cat = category;
    }

}

class Question {
    constructor(question) { // Input is the question being asked
        this.question = question;
        this.answerArray = [];
    }

    addAnswer(answerObj, index = this.numAnswers) {
        this.answerArray.splice(index, 0, answerObj);
    }

    removeAnswer(index) {
        this.answerArray.splice(index, 1);
    }

    validQuestion() {
        for (let x = 0; x < this.numAnswers; x++) {
            if (this.answerArray[x].correct) {
                const oneCorrect = true;
            }
        } // for loop that checks if there is at least one correct answer

        if (this.numAnswers >= 2 && oneCorrect) {
            return true;
        }

    }

    get question() {
        return this.question;
    }

    get numAnswers() {
        return this.answerArray.length;
    }

    // ADDING SETTER JUST IN CASE...
    
    set question(question) {
        this.question = question;
    }

}

class Answer {
    constructor(answer, correctBoolean = false) { // Input is the possible answer
        this.answer = answer;
        this.correct = correctBoolean;
    }

    get answer() {
        return this.answer;
    }

    get correct() {
        return this.correct;
    }

    // ADDING SETTERS AND METHODS JUST IN CASE...

    set answer(answer) {
        this.answer = answer;
    }

    set correct(correctBoolean) {
        this.correct = correctBoolean;
    }

    setCorrect() {
        this.correct = true;
    }

    setIncorrect() {
        this.correct = false;
    }

    flipCorrect() { // This one might be useful for a button or switch
        this.correct = !this.correct;
    }
}