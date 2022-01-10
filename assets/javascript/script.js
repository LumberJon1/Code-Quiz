//Variables for the intro page logic
var introSectionEl = document.querySelector("#intro-section");
var introTitleEl = introSectionEl.querySelector("h1");
var introDescriptionEl = introSectionEl.querySelector("p");
var startButton = introSectionEl.querySelector("button");

//Variables for the quiz element logic

//Function to toggle the display of the intro page
var toggleIntro = function() {
    if (introSectionEl.style.display === "none") {
        introSectionEl.style.display = "flex";    
    }
    else {
        introSectionEl.style.display = "none";
    }
}

//Function to add quiz elements to the page

//Function to assess the correctness of a user answer

//Function to decrement the time/score

//Event listeners for the intro page
startButton.addEventListener("click", toggleIntro);

//Event listeners for the quiz pages