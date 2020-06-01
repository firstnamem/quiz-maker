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

    // Later make the addAnswer(), removeAnswer() methods
}

class Answer {
    constructor(answer) {
        this.answer = answer;
    }
}