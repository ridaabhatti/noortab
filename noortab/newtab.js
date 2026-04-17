// ============================================================
//  NoorTab — newtab.js
// ============================================================

// ── Star canvas ──────────────────────────────────────────────
(function initStars() {
    const canvas = document.getElementById('star-canvas');
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createStars(count) {
        stars = [];
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.3 + 0.3,
                alpha: Math.random() * 0.6 + 0.2,
                speed: Math.random() * 0.004 + 0.002,
                phase: Math.random() * Math.PI * 2,
                // a few "sparkle" stars — 4-pointed
                sparkle: Math.random() < 0.06
            });
        }
    }

    function drawStar4(ctx, x, y, r, alpha) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#ffd700';
        ctx.translate(x, y);
        ctx.beginPath();
        for (let a = 0; a < 8; a++) {
            const angle = (a * Math.PI) / 4;
            const radius = a % 2 === 0 ? r * 3.5 : r * 1.2;
            if (a === 0) ctx.moveTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
            else ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    let t = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Radial gradient background
        const grad = ctx.createRadialGradient(
            canvas.width * 0.4, canvas.height * 0.3, 0,
            canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.8
        );
        grad.addColorStop(0, '#111340');
        grad.addColorStop(0.6, '#0b0c2a');
        grad.addColorStop(1, '#060714');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        t += 0.012;

        stars.forEach(s => {
            const pulse = Math.sin(t * s.speed * 60 + s.phase);
            const a = s.alpha * (0.6 + 0.4 * pulse);

            if (s.sparkle) {
                drawStar4(ctx, s.x, s.y, s.r, a);
            } else {
                ctx.save();
                ctx.globalAlpha = a;
                ctx.fillStyle = '#ffd700';
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        });

        requestAnimationFrame(draw);
    }

    resize();
    createStars(130);
    draw();
    window.addEventListener('resize', () => { resize(); createStars(130); });
})();

// ── Content ──────────────────────────────────────────────────
const entry = seerahEntries[Math.floor(Math.random() * seerahEntries.length)];

// Seerah title (optional — only if entry has it)
const titleEl = document.getElementById('seerah-title');
if (entry.title) {
    titleEl.textContent = entry.title;
} else {
    titleEl.style.display = 'none';
}

document.getElementById('seerah-story').textContent = entry.story;
document.getElementById('sunnah-action').textContent = entry.sunnah;
document.getElementById('more-link').href = entry.link;

// ── Quiz ─────────────────────────────────────────────────────
const quizBtn     = document.getElementById('quiz-btn');
const quizSection = document.getElementById('quiz-section');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions  = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');

let quizBuilt   = false;
let quizAnswered = false;

quizBtn.addEventListener('click', () => {
    const isOpen = quizSection.classList.contains('open');

    if (!isOpen) {
        quizSection.classList.add('open');
        quizBtn.textContent = 'Hide Quiz';

        if (!quizBuilt) {
            quizQuestion.textContent = entry.quiz.question;
            quizOptions.innerHTML = '';
            quizFeedback.textContent = '';

            entry.quiz.options.forEach((option, index) => {
                const btn = document.createElement('button');
                btn.textContent = option;
                btn.addEventListener('click', () => {
                    if (quizAnswered) return;
                    quizAnswered = true;

                    // Disable all options
                    quizOptions.querySelectorAll('button').forEach(b => b.disabled = true);

                    if (index === entry.quiz.correctIndex) {
                        btn.classList.add('correct');
                        quizFeedback.textContent = '✓ Correct! MashAllah.';
                    } else {
                        btn.classList.add('wrong');
                        quizOptions.querySelectorAll('button')[entry.quiz.correctIndex].classList.add('correct');
                        quizFeedback.textContent = `The answer is: ${entry.quiz.options[entry.quiz.correctIndex]}`;
                    }
                });
                quizOptions.appendChild(btn);
            });

            quizBuilt = true;
        }
    } else {
        quizSection.classList.remove('open');
        quizBtn.textContent = 'Quiz Me';
    }
});
