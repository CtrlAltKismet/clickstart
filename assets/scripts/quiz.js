// Imported quiz questions
import quizQuestions from "./quizQuestions.js";

// Quiz test

let currentQuestionIndex = 0;
let score = 0;

// Connecting JS to the HTML

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const scoreDisplay = document.getElementById("score");
const nextButton = document.getElementById("next-btn");
const questionNumber = document.getElementById("question-number");
const progressFill = document.getElementById("progress-fill");
const quizCard = document.getElementById("quiz-card");

// Shuffle answers to randomise selection

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));

        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }

    return shuffled;
}

// Display a question

function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    questionText.textContent = currentQuestion.question;

    questionNumber.textContent = 
    `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;

    answersContainer.innerHTML = "";

    const shuffledAnswers = shuffleArray(currentQuestion.answers);
        shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("quiz-answer");

        button.addEventListener("click", () => selectAnswer(answer));

        answersContainer.appendChild(button);
    });
}


// Answer changes colour depending if it is correct or incorrect

function selectAnswer(selectedAnswer) {
    
    const currentQuestion = quizQuestions[currentQuestionIndex];

    const isCorrect = checkAnswer(selectedAnswer, currentQuestion.correct);

    score = updateScore(score, isCorrect);

    scoreDisplay.textContent = `${score}`;

    const buttons = document.querySelectorAll(".quiz-answer");

    buttons.forEach(button => {

        if (button.textContent === currentQuestion.correct) {
            button.classList.add("correct");
        }

        if (button.textContent === selectedAnswer && !isCorrect) {
            button.classList.add("incorrect");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";


    // Update progress bar
    const progressPercent =
    ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    progressFill.style.width = progressPercent + "%";
}

// Checks if answer selected is correct
// Returns true if correct, false if not

function checkAnswer (selected, correct) {
    return selected === correct;
}

// Returns +1 score if answer is correct, updates the score
function updateScore (score, isCorrect) {
    if (isCorrect) {
        return score + 1;
    }
    return score;
}

// Goes to next question in Quiz

function nextQuestion(currentIndex) {
    return currentIndex + 1;
}

// Next button moves onto the next question so long as there is a question after current

nextButton.addEventListener("click", () => {

    currentQuestionIndex = nextQuestion(currentQuestionIndex);

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        // calculate percentage of score for assessing quiz results with feedback for results
        const percentage = Math.round((score / quizQuestions.length) * 100);

        let feedback = "";

        if (percentage >= 85) {
            feedback = "Excellent work! You have a strong understanding of digital skills.";
        } else if (percentage >= 65) {
            feedback = "Good job! You understand most of the material.";
        } else if (percentage >= 40) {
            feedback = "You're making progress, but reviewing the lessons would help.";
        } else {
            feedback = "Consider revising the learning sections before trying again.";
        }

        questionText.textContent = "Quiz Complete!";

        answersContainer.innerHTML = 
        `<div class="quiz-results">
            <h3>Your final score is ${score} out of ${quizQuestions.length}</h3>
            <p> You scored <strong>${percentage}%</strong></p>
            <p class="quiz-feedback">${feedback}</p>
            <button id="restart-btn" class="btn btn-primary">Restart Quiz</button>
        </div>`;

        nextButton.style.display = "none";
        questionNumber.textContent = "";

        document.getElementById("restart-btn").addEventListener("click", () => {
            currentQuestionIndex = 0;
            score = 0;
            scoreDisplay.textContent = " 0";
            progressFill.style.width = "0%";
            showQuestion();
        });
    }

});

// Start the quiz

nextButton.style.display = "none";

showQuestion();
quizCard.classList.remove("hidden");

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        checkAnswer,
        updateScore,
        nextQuestion
    };
}
