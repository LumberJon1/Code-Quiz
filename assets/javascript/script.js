//Variables for the intro page logic
var introSectionEl = document.querySelector("#intro-section");
var introTitleEl = introSectionEl.querySelector("h1");
var introDescriptionEl = introSectionEl.querySelector("p");
var startButton = introSectionEl.querySelector("button");
var highScoresButtonEl = document.querySelector("#high-scores-button");

//variables for the end screen logic
var endScreenEl = document.querySelector("#end-section");

//Variables for the high score screen logic
var highScoresEl = document.querySelector("#high-scores-section");
var highScores = [];

//Variables for the quiz element logic
var quizSectionEl = document.querySelector("#quiz-section");
var mainPageEl = document.querySelector("main");
var questionCounter = 1;
var timerEl = document.querySelector("#timer");
var timeValue = 100;

//Quiz questions object, which contains 15 question objects, each with a question string,
//an answers array of strings, and a correct answer, which is an index of the answers array.
var quizQuestions = [
    question1 = {
        number: 1,
        question: "What programming language is used to style webpages?",
        answers: ["Java", "CSS", "Javascript", "HTML"],
        correct: "CSS"
    },
    question2 = {
        number: 2,
        question: "In the following array, how might you access the letter 'a'?\nvar array = ['a', 'b', 'c', 'd']",
        answers: ["array.'a'", "array[1]", "array[0]", "array: a"],
        correct: "array[0]"
    },
    question3 = {
        number: 3,
        question: "How would you access the 'length' property of an array using JavaScript?",
        answers: ["array.length()", "array.length", "len(array)", "array[].length"],
        correct: "array.length"
    },
    question4 = {
        number: 4,
        question: "What is the method that appends an item to the end of a JavaScript array?",
        answers: ["array.push()", "array.pushItem()", "array.append()", "array.add()"],
        correct: "array.push()"
    },
    question5 = {
        number: 5,
        question: "What method makes a JSON object readable by localStorage?",
        answers: ["JASON.stringify()", "JSON.readable()", "JSON.stringify()", "JSON.parse()"],
        correct: "JSON.stringify()"
    },
    question6 = {
        number: 6,
        question: "Which of the following operators is strict comparison?",
        answers: ["=", "==", "===", "!="],
        correct: "==="
    },
    question7 = {
        number: 7,
        question: "What would the following code evaluate to?\nif (0 < 5 || 0 > 50) {};",
        answers: ["true", "false", "True", "False"],
        correct: "true"
    },
    question8 = {
        number: 8,
        question: "Which attribute should every <img> element have?",
        answers: ["background-position", "img", "alt", "id"],
        correct: "alt"
    },
    question9 = {
        number: 9,
        question: "In a CSS stylesheet, what kind of selector is represented by '.'?",
        answers: ["element", "class", "universal", "id"],
        correct: "class"
    },
    question10 = {
        number: 10,
        question: "How would one access the 'number' attribute of an object named 'question'?",
        answers: ["question[number]", "question.number()", "question.number", "question(number)"],
        correct: "question.number"
    },
    question11 = {
        number: 11,
        question: "What method will allow form submission on a webpage to be handled by JavaScript?",
        answers: [".preventDefault()", ".allow()", ".javaHandler()", ".formAllow()"],
        correct: ".preventDefault()"
    },
    question12 = {
        number: 12,
        question: "What does the && comparison operator do?",
        answers: ["Checks whether two expressions are both true", "Checks whether two expressions are both false", "Checks whether two expressions are strictly equal", "Checks whether either of two expressions are true"],
        correct: "Checks whether two expressions are both true"
    },
    question13 = {
        number: 13,
        question: "Which git command creates and checks out into a new branch?",
        answers: ["git checkout new", "git checkout -b", "git branch checkout", "git checkout new branch"],
        correct: "git checkout -b"
    },
    question14 = {
        number: 14,
        question: "What is the syntax to listen for a click event and call the runCommand() function?",
        answers: ["addEventListener(click, runCommand)", "addEventListener('click', runCommand)", "addEventListener('click', runCommand()", "addEventListener('click', runCommand())"],
        correct: "addEventListener('click', runCommand())"
    },
    question15 = {
        number: 15,
        question: "Which of the following operators would return false? \nif(0 ___ 0) {};",
        answers: ["==", "===", "<=", "!="],
        correct: "!="
    },
];

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

    //reset questionCounter
    questionCounter = 1;

    //Toggle display of both the intro and the quiz sections
    introSectionEl.style.display = "none";
    endScreenEl.style.display = "none";
    highScoresEl.style.display = "none"
    //I would like to use the toggle() function but for some reason it doesn't work on the first run.
    quizSectionEl.style.display = "flex";

    //Set timer
    timeValue = 100;
    
    setInterval(function() {
        timerEl.textContent = "Time: "+timeValue;
        timeValue--;
        if (timeValue <= 0) {
            clearInterval();
            timeValue = 0;
            endQuiz();
        }
    }, 1000);

    //Loop through the questions and display the current question
    for (var i = 0; i < quizQuestions.length; i++) {
        if (quizQuestions[i].number == questionCounter) {
            questionObj = quizQuestions[i];
            showQuestion(questionObj);
        }
    }
}

//Function to add quiz elements to the page
var showQuestion = function(questionObj) {
    /*Takes an object from the quizQuestions object as a parameter and creates
    elements to display to the screen with its attributes*/

    //Check whether the elements already exist
    if (document.querySelector(".answer") === null) {

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

        //Event listener to call nextQuestion only when we are not on the last question
        if (questionObj.number == quizQuestions.length) {
        }
        else {
            answerListEl.addEventListener("click", nextQuestion);
        }
    }
    //If they already exist, simply do nothing
}

//Function that progresses to the next quiz question
var nextQuestion = function(event) {

    if (questionCounter != quizQuestions.length) {
        if (event.target.getAttribute("class") === "answer") {

            //Iterate through the quizQuestions array and find the object that matches,
            //assign it to var questionObj
            var quizAnswers = document.getElementsByTagName("li");
    
            //Loop through the li elements and find the one that event corresponds with
            answerIndex = 0;
            for (var i = 0; i < quizAnswers.length; i++) {
                if (event.target.textContent === quizAnswers[i].textContent) {
                    answerIndex = i;
                }
            }
    
            var questionObj = {};
    
            /*Check whether each of the answers in the <li> element matches any of the 
            answers in the quizQuestions in the array*/
            for (var i = 0; i < quizQuestions.length; i++) {
                if (quizAnswers[0].textContent === quizQuestions[i].answers[0] && quizAnswers[1].textContent === quizQuestions[i].answers[1]) {
                    //Assign questionObj to the next question obj
                    questionObj = quizQuestions[i];
                    nextQuestionObj = quizQuestions[i + 1];
                }
            }
    
            //Select the question and update its text content
            var quizQuestionEl = document.querySelector("h2");
            quizQuestionEl.textContent = nextQuestionObj.question;
    
    
            //Update the textContent for each of the 4 answer elements
            for (var i = 0; i < quizAnswers.length; i++) {
                quizAnswers[i].textContent = nextQuestionObj.answers[i]; 
            }
    
            /*Check the user's selected answer against the correct answer and display message below.
            Decrement time/score if the user selected an incorrect answer.*/
            correctIndex = 0;
    
            for (var i = 0; i < questionObj.answers.length; i++) {
                if (questionObj.answers[i] === questionObj.correct) {
                    correctIndex = i;
                }
            }
            checkAnswer(answerIndex, correctIndex);
        }
    }
    //If this is the last quiz question, call the endQuiz function
    else {
        endQuiz();
    } 
}

var checkAnswer = function(guess, answer) {

    var message = mainPageEl.querySelector("h3");

    //Check whether the main page already has an h3 element
    if (mainPageEl.querySelector("h3") === null) {
        message = document.createElement("h3");
    };

    //Define the messages to display on true/false conditions
    var correctMessage = "Correct!";
    var incorrectMessage = "Incorrect.";

    //Compare guess against answer
    if (guess === answer) {
        //Define elements and methods that will display messages
        message.textContent = correctMessage;
        message.className = "message";
        mainPageEl.appendChild(message);

        //Do not decrement time
    }

    else {
        message.textContent = incorrectMessage;
        message.className = "message";
        mainPageEl.appendChild(message);

        //Decrement the time element
        timeValue -= 10;
        timerEl.textContent = "Time: "+timeValue;
    }

    //Once user has checked answer, increment the questionCounter
    questionCounter++;
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

var toggleEndScreen = function() {
    if (endScreenEl.style.display === "none") {
        endScreenEl.style.display = "flex";    
    }
    else {
        endScreenEl.style.display = "none";
    }
}

var endQuiz = function() {
    //Clear the quiz answer elements from the display
    introSectionEl.style.display = "none";
    quizSectionEl.style.display = "none";
    endScreenEl.style.display = "flex";

    //Check that endQuiz elements don't already exist
    if (endScreenEl.querySelector("button") === null) {
        
        //Define elements to show in their place
        endTitleEl = document.createElement("h2");
        endTitleEl.textContent = "All Done!"

        endScoreEl = document.createElement("p");
        endScoreEl.textContent = "Your final score is: "+timeValue;

        scoreFormEl = document.createElement("form");
        nameLabelEl = document.createElement("label");
        nameLabelEl.textContent = "Enter your name";
        nameInputEl = document.createElement("input");
        nameInputEl.setAttribute("type", "text");

        buttonDivEl = document.createElement("div");
        retryButtonEl = document.createElement("button");
        retryButtonEl.textContent = "Retry";
        submitButtonEl = document.createElement("button");
        submitButtonEl.setAttribute("type", "submit");
        submitButtonEl.textContent = "Submit Score";

        endScreenEl.appendChild(endTitleEl);
        endScreenEl.appendChild(endScoreEl);
        endScreenEl.appendChild(scoreFormEl);
        endScreenEl.appendChild(buttonDivEl);

        scoreFormEl.appendChild(nameLabelEl);
        scoreFormEl.appendChild(nameInputEl);
        scoreFormEl.appendChild(buttonDivEl);

        buttonDivEl.appendChild(retryButtonEl);
        buttonDivEl.appendChild(submitButtonEl);

        submitButtonEl.addEventListener("click", submitScores);
        retryButtonEl.addEventListener("click", startQuiz);
    }   
}

var submitScores = function(event) {
    event.preventDefault();
    //Take the form submission
    var scoreName = document.querySelector("input").value;
    var userScore = timeValue;

    //Append that data to the highScores
    highScores.push({name: scoreName, score: userScore});

    //Ensure the values of high scores are appended to localStorage
    localStorage.setItem("high-scores", JSON.stringify(highScores));

    viewHighScores(event);
}

var viewHighScores = function(event) {

    event.preventDefault();

    //Load the high scores display
    toggleHighScores();

    //Check to see whether the high scores section already contains elements
    if (highScoresEl.querySelector("#go-back-button") === null) {
        //Create title element
        var scoresTitleEl = document.createElement("h2");
        scoresTitleEl.textContent = "High Scores";

        scoresListEl = document.createElement("ul");

        //Pull the data from the localStorage object and load it into highScores
        highScores = JSON.parse(localStorage.getItem("high-scores"));

        //Append a new child for every entry within the highScores array
        for (var i = 0; i < highScores.length; i++) {
            var newScore = document.createElement("li");
            newScore.textContent = highScores[i].name+": "+highScores[i].score;
            scoresListEl.appendChild(newScore);
        }

        //create div and buttons
        var scoresButtonDivEl = document.createElement("div");
        var goBackButton = document.createElement("button");
        goBackButton.setAttribute("id", "go-back-button");
        var clearScoresButton = document.createElement("button");
        clearScoresButton.setAttribute("id", "clear-scores-button");
        goBackButton.textContent = "Go Back";
        clearScoresButton.textContent = "Clear Scores";

        //Append to the div
        scoresButtonDivEl.appendChild(goBackButton);
        scoresButtonDivEl.appendChild(clearScoresButton);

        //Append the items to the high score screen
        highScoresEl.appendChild(scoresTitleEl);
        highScoresEl.appendChild(scoresListEl);
        highScoresEl.appendChild(scoresButtonDivEl);

        //Event listeners for the goBackButton and clearScoresButtons
        if (questionCounter != quizQuestions.length) {

            goBackButton.addEventListener("click", toggleHighScores);
        }
        else {
            goBackButton.addEventListener("click", startQuiz);
            endScreenEl.style.display = "none";
        }
        clearScoresButton.addEventListener("click", clearScores);

    }
    else {
        //Modify the textContent of the existing elements

        for (var i = 0; i < highScores.length; i++) {
            let scoresList = document.getElementsByTagName("li");
            scoresList[i].textContent = highScores[i].name+" "+highScores[i].score;
        }
    }
}

//toggle high scores and return to previous screen on click of goBackButton
var toggleHighScores = function() {

    //hide the endScreenEl if it has popped up from ending the quiz
    if (endScreenEl.style.display != "none") {
        endScreenEl.style.display = "none";
    }

    if (highScoresEl.style.display === "flex") {
        highScoresEl.style.display = "none";
        highScoresEl.style.position = "relative";
        highScoresEl.style.zIndex = "0";
    }
    else {
        //Allow the high scores screen to be brought forward with z-index and change its styles to cover the other sections
        highScoresEl.style.display = "flex";
        highScoresEl.style.position = "fixed";
        highScoresEl.style.top = "0";
        highScoresEl.style.left = "10%";
        highScoresEl.style.width = "80%";
        highScoresEl.style.backgroundColor = "white";
        highScoresEl.style.height = "600px";
        highScoresEl.style.zIndex = "2";
    }
}

//clear scores from array
var clearScores = function() {
    for (var i = 0; i < highScores.length; i++) {
        highScores[i].name = "";
        highScores[i].score = ""
    }

    //Change the textContent to reflect the empty values
    for (var i = 0; i < highScores.length; i++) {
        let scoresList = document.getElementsByTagName("li");
        scoresList[i].textContent = "";
    }
}

//Event listeners for the intro page
startButton.addEventListener("click", startQuiz);

//Event listeners for the high scores button
highScoresButtonEl.addEventListener("click", viewHighScores);