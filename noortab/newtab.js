

const entry = seerahEntries[0];

document.getElementById("seerah-title").textContent = entry.title;
document.getElementById("seerah-story").textContent = entry.story;
document.getElementById("sunnah-action").textContent = entry.sunnah;
document.getElementById("more-link").href = entry.link;

// Quiz
const quizBtn = document.getElementById("quiz-btn");
const quizSection = document.getElementById("quiz-section");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");

quizBtn.addEventListener("click", () => {
    quizSection.style.display = "block";
    quizQuestion.textContent = entry.quiz.question;
    quizOptions.innerHTML = "";
    quizFeedback.textContent = "";

    entry.quiz.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => {
            quizFeedback.textContent =
                index === entry.quiz.correctIndex ? "✅ Correct!" : "❌ Try again.";
        };
        quizOptions.appendChild(btn);
    });
});
