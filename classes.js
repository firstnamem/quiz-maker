class Quiz {
    constructor(title, description = "", category = "") {
        this.title = title;
        this.desc = description;
        this.cat = category;
    }

    // Maybe add getters?
    // Later make the addQuestion(), removeQuestion() methods
}

class Question {
    constructor(question) {
        this.question = question;
    }

    addAnswer(answer) {
        
    }

    removeAnswer(answer) {

    }

    // Later make the addAnswer(), removeAnswer() methods
}

class Answer {
    var correct = false;
    constructor(answer) {
        this.answer = answer;
    }
}