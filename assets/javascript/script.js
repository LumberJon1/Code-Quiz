//Variables for the intro page logic
var introSectionEl = document.querySelector("#intro-section");
var introTitleEl = introSectionEl.querySelector("h1");
var introDescriptionEl = introSectionEl.querySelector("p");
var startButton = introSectionEl.querySelector("button");

//Variables for the quiz element logic
var quizSectionEl = document.querySelector("#quiz-section");

//Quiz questions object, which contains 15 question objects, each with a question string,
//an answers array of strings, and a correct answer, which is an index of the answers array.
var quizQuestions = {
    question1: {
        question: "What programming language is used to style webpages?",
        answers: ["Java", "CSS", "Javascript", "HTML"],
        correct: "CSS"
    },
    question2: {
        question: "In the following array, how might you access the letter 'a'?\nvar array = ['a', 'b', 'c', 'd']",
        answers: ["array.'a'", "array[1]", "array[0]", "array: a"],
        correct: "array[0]"
    },
    question3: {
        question: "How would you access the 'length' property of an array using JavaScript?",
        answers: ["array.length()", "array.length", "len(array)", "array[].length"],
        correct: ""
    },
    question4: {
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    },
    question5: {
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    },
    question6: {
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    },
    question7: {
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    },
    question8: {
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    },
    question9: {
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    },
    question10: {
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    },
    question11: {
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    },
    question12: {
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    },
    question13: {
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    },
    question14: {
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    },
    question15: {
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    },
};

//Function to toggle the display of the intro page
var toggleIntro = function() {
    if (introSectionEl.style.display === "none") {
        introSectionEl.style.display = "flex";    
    }
    else {
        introSectionEl.style.display = "none";
    }
}

var startQuiz = function() {
    //Toggle display of both the intro and the quiz sections
    toggleIntro();
    //I would like to use the toggle() function but for some reason it doesn't work on the first run.
    quizSectionEl.style.display = "flex";

    //Call the function that will loop through the quizQuestions object
    showQuestion(quizQuestions.question1);
    console.log(quizQuestions); //currently shows undefined, unsure why that is.
}

//Function to add quiz elements to the page
var showQuestion = function(questionObj) {
    /*Takes an object from the quizQuestions object as a parameter and creates
    elements to display to the screen with its attributes*/

    //Create and append the question h3 element to the quiz section
    var quizQuestionEl = document.createElement("h2");
    quizQuestionEl.textContent = questionObj.question;
    quizSectionEl.appendChild(quizQuestionEl);

    //create and append the 4 answer elements to an ol element inside quiz section
    //with class answer-list
    var answerListEl = document.createElement("ol");
    answerListEl.className = "answer-list";
    quizSectionEl.appendChild(answerListEl);

    for (var i = 0; i < questionObj.answers.length; i++) {
        var answerEl = document.createElement("li");
        answerEl.textContent = questionObj.answers[i];
        answerEl.className = "answer";
        answerListEl.appendChild(answerEl);
    }

}


//Function to toggle visibility of the quiz questions section
var toggleQuestions = function() {
    if (quizSectionEl.style.display === "none") {
        quizSectionEl.style.display = "flex";    
    }
    else {
        quizSectionEl.style.display = "none";
    }
}

//Function to assess the correctness of a user answer

//Function to decrement the time/score

//Event listeners for the intro page
startButton.addEventListener("click", startQuiz);

//Event listeners for the quiz pages
