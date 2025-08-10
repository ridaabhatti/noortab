// Pick a random entry
const entry = seerahEntries[Math.floor(Math.random() * seerahEntries.length)];

// Populate content
document.getElementById("seerah-story").textContent = entry.story;
document.getElementById("sunnah-action").textContent = entry.sunnah;
document.getElementById("more-link").href = entry.link;

// Elements
const quizBtn = document.getElementById("quiz-btn");
const quizSection = document.getElementById("quiz-section");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const hrElement = document.querySelector("hr");

// Hide hr by default (in CSS you can also set hr { display: none; })
if (hrElement) hrElement.style.display = "none";

let quizBuilt = false; // build options once

quizBtn.addEventListener("click", () => {
    const isHidden = quizSection.style.display === "" || quizSection.style.display === "none";

    if (isHidden) {
        // Show quiz + hr
        quizSection.style.display = "block";
        if (hrElement) hrElement.style.display = "block";

        // Build question/options once
        if (!quizBuilt) {
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

            quizBuilt = true;
        }
    } else {
        // Hide quiz + hr
        quizSection.style.display = "none";
        if (hrElement) hrElement.style.display = "none";
    }
});

