//  This is an IIFE - Immediately Invoked Function Expression.
// IIFEs run as soon as they are defined. IIFEs are commonly used to keep variables/functions outside the global scope and they tend to work better if you're running multiple scripts

// this variable exists in the global scope, which means it's less secure and can be accessed by anything.
var global;

(function () {
    // Because this variable is inside of an IIFE, it is not in the global scope
    var variable = 10;

    // Make references to our elements that we're going to interact with
    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var resetButton = document.getElementById("reset");

    var myQuestions = [];

    // What does a quiz question consist of?
    // Question text, Answer choices, Correct answer

    var question1 = {
        question: "What color is the sky?",
        answers: {
            a: "Blue",
            b: "Brown",
            c: "Green",
        },
        correctAnswer: "a"
    }

    console.log(question1.question); // get the question text
    console.log(question1.answers.b); // get answer b

    var question2 = {
        question: "What is the capital city of Peru?",
        answers: {
            a: "Lima",
            b: "Cusco",
            c: "No idea",
        },
        correctAnswer: "a"
    }

    var question3 = {
        question: "Where is Waldo really?",
        answers: {
            a: "Antarctica",
            b: "Exploring the pacific ocean",
            c: "Sitting in a tree",
            d: "Minding his own business, so stop asking",
        }
    }

    // Add the question objects to our array of questions
    myQuestions.push(question1, question2, question3);

    // function to build a quiz that goes through our questiobn objects and generates HTML for each question

    function buildQuiz() {

    }

    // Function to show the results of the quiz
    function showResults() {

    }

    // Function to reset the quiz

    function resetQuiz() {

    }

})();