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
        },
        correctAnswer: "d"
    }

    // Add the question objects to our array of questions
    myQuestions.push(question1, question2, question3);

    // function to build a quiz that goes through our questiobn objects and generates HTML for each question

    function buildQuiz() {
        // We need to go threough each of our question objects and use them to build out the HTML to show a question

        for (var i = 0; i < myQuestions.length; i++) {
            // Create a display for the question text
            // creating a new div called questionDiv that will hold information about a single question
            var questionDiv = document.createElement("div");

            // Get the question text from the question we are looking at with this iteration of the loop
            questionDiv.innerText = myQuestions[i].question;

            // Display the answer choice (and take user input to select an answer)

            // Create a div to hold the question answers
            var answersDiv = document.createElement("div");
            answersDiv.classList.add("answers");

            // For each property in the current questions answers object
            //  A for-in loop is used to go through the properties of an object

            for (letter in myQuestions[i].answers) {
                // Create the label for the radio button input
                var label = document.createElement("label");

                // Create a radio button for each answer for this question
                var input = document.createElement("input");
                // Configure the input element
                input.type = "radio";
                input.name = "question" + i;
                input.value = letter;

                // Add the input to our label
                label.appendChild(input);

                // Create some text from the current letter we're looking at and the corresponding answer for that letter.
                var labelText = document.createTextNode(`${letter} : ${myQuestions[i].answers[letter]}`);

                // Add the text to the label
                label.appendChild(labelText);

                // Add the label to the answersDiv
                answersDiv.appendChild(label);
            }

            // Once all the answers are added, add the answerDiv to the questionDiv
            questionDiv.appendChild(answersDiv);

            // Add the questionDiv to the quizContainer
            quizContainer.appendChild(questionDiv);
        }
    }

    buildQuiz();

    // Function to show the results of the quiz
    function showResults() {
        //Getting all the answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll(".answers"); //This will basically give us back an array containing everything in the quiz container with the class "answers"
        
        // Keep track of how many they get right
        var numCorrect = 0;

        for (var i = 0; i < answerContainers.length; i++) {
            // get current answer container were looking at for the loop
            var answerContainer = answerContainers[i];

            // string to find which input is checked for the current question
            var selector = `input[name=question${i}]:checked`;

            // try to find the selected answer in the container and print out the value
            var userAnswer = (answerContainer.querySelector(selector) || {}).value; // If it cant find a selected input for a question, querySelector will give back null, if it does, use an empty object instead since {}.value gives back undefined instead of null

            if (userAnswer === myQuestions[i].correctAnswer) {
                //They got it right!
                // Add 1 to numCorrect
                numCorrect++;
                answerContainer.style.color = "green";
            } else {
                //They got it wrong!
                answerContainer.style.color = "red";
            }

        }

        // add text to the results container to show how many they got right
        resultsContainer.innerText = "You got " + numCorrect + " out of " + myQuestions.length;
    }

    // call the showResults function when the submit button is clicked
    submitButton.addEventListener("click", showResults);

    // Function to reset the quiz

    function resetQuiz() {
        // Clear out whats in the results container
        resultsContainer.innerText = "";
        // clear out the quiz container
        quizContainer.innerHTML = "";
        // rebuild the quiz
        buildQuiz();
    }

    // call the resetQuiz function when the reset button is clicked3
    resetButton.addEventListener("click", resetQuiz);

})();