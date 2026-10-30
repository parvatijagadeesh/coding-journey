 const questions = [
{
question: "What does HTML stand for?",
options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Mark Language", "Home Tool Markup Language"],
answer: 0
},
{
question: "Which language is used to style web pages?",
options: ["HTML", "Python", "CSS", "Java"],
answer: 2
},
{
question: "Which tag creates a hyperlink?",
options: ["<link>", "<a>", "<href>", "<url>"],
answer: 1
},
{
question: "Which symbol is used for JavaScript comments?",
options: ["<!-- -->", "#", "//", "**"],
answer: 2
},
{
question: "Which keyword declares a variable that cannot be reassigned?",
options: ["var", "let", "const", "static"],
answer: 2
},
{
question: "What does CSS stand for?",
options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"],
answer: 1
},
{
question: "Which HTML tag displays an image?",
options: ["<image>", "<pic>", "<img>", "<src>"],
answer: 2
},
{
question: "Which company developed Java?",
options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
answer: 1
},
{
question: "Which method displays a message in the browser console?",
options: ["console.log()", "print()", "display()", "show()"],
answer: 0
},
{
question: "Which language retrieves data from a database?",
options: ["HTML", "CSS", "SQL", "XML"],
answer: 2
}
];

let currentQuestion = 0;
let score = 0;

const welcome = document.getElementById("welcome");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("restart-btn").addEventListener("click", restartQuiz);

function startQuiz() {
welcome.classList.add("hide");
quiz.classList.remove("hide");
loadQuestion();
}

function loadQuestion() {
let q = questions[currentQuestion];

questionElement.textContent = `Question ${currentQuestion + 1}: ${q.question}`;
optionsElement.innerHTML = "";
feedback.textContent = "";
nextButton.disabled = true;

q.options.forEach((option, index) => {
    let button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");

    button.addEventListener("click", () => selectAnswer(index));

    optionsElement.appendChild(button);
});

}

function selectAnswer(index) {
let correct = questions[currentQuestion].answer;
let buttons = optionsElement.querySelectorAll(".option");

buttons.forEach(button => button.disabled = true);

if (index === correct) {
    score++;
    feedback.textContent = "Correct! Well done!";
    feedback.style.color = "green";
} else {
    feedback.textContent = "Wrong! Correct answer: " + questions[currentQuestion].options[correct];
    feedback.style.color = "red";
}

buttons[correct].classList.add("correct");

if (index !== correct) {
    buttons[index].classList.add("wrong");
}

nextButton.disabled = false;

}

nextButton.addEventListener("click", () => {
currentQuestion++;

if (currentQuestion < questions.length) {
    loadQuestion();
} else {
    quiz.classList.add("hide");
    result.classList.remove("hide");
    document.getElementById("final-score").textContent = `Your Score: ${score} / ${questions.length}`;
}

});

function restartQuiz() {
currentQuestion = 0;
score = 0;

result.classList.add("hide");
quiz.classList.remove("hide");

loadQuestion();


}
