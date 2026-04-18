// NoorTab — newtab.js

// ── Star canvas ───────────────────────────────────────────────
(function initStars() {
    const canvas = document.getElementById('star-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createStars() {
        stars = [];
        const count = Math.floor((canvas.width * canvas.height) / 6000);
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.2 + 0.3,
                alpha: Math.random() * 0.55 + 0.2,
                speed: Math.random() * 0.003 + 0.002,
                phase: Math.random() * Math.PI * 2,
                sparkle: Math.random() < 0.07
            });
        }
    }

    function drawSparkle(x, y, r, alpha) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#ffd700';
        ctx.translate(x, y);
        ctx.beginPath();
        for (let a = 0; a < 8; a++) {
            const angle = (a * Math.PI) / 4;
            const radius = a % 2 === 0 ? r * 3.2 : r * 1.1;
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
        const grad = ctx.createRadialGradient(
            canvas.width * 0.38, canvas.height * 0.28, 0,
            canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.85
        );
        grad.addColorStop(0, '#121640');
        grad.addColorStop(0.55, '#0a0b22');
        grad.addColorStop(1, '#06071a');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        t += 0.01;
        stars.forEach(s => {
            const pulse = Math.sin(t * s.speed * 60 + s.phase);
            const a = s.alpha * (0.55 + 0.45 * pulse);
            if (s.sparkle) {
                drawSparkle(s.x, s.y, s.r, a);
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
    createStars();
    draw();
    window.addEventListener('resize', () => { resize(); createStars(); });
})();

// ── Content ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

    // Safety check — if seerahEntries didn't load, show fallback
    if (typeof seerahEntries === 'undefined' || seerahEntries.length === 0) {
        document.getElementById('seerah-title').textContent = 'Could not load entry';
        document.getElementById('seerah-story').textContent = 'Please check that seerahData.js is in the same folder.';
        return;
    }

    const entry = seerahEntries[Math.floor(Math.random() * seerahEntries.length)];

    // Populate story panel
    const titleEl = document.getElementById('seerah-title');
    if (entry.title) {
        titleEl.textContent = entry.title;
    } else {
        titleEl.style.display = 'none';
    }

    document.getElementById('seerah-story').textContent = entry.story;
    document.getElementById('sunnah-action').textContent = entry.sunnah;
    document.getElementById('more-link').href = entry.link;

    // ── Panel swap ────────────────────────────────────────────
    const storyPanel   = document.getElementById('story-panel');
    const quizPanel    = document.getElementById('quiz-panel');
    const quizBtn      = document.getElementById('quiz-btn');
    const backBtn      = document.getElementById('back-btn');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions  = document.getElementById('quiz-options');
    const quizFeedback = document.getElementById('quiz-feedback');

    let quizBuilt    = false;
    let quizAnswered = false;

    quizBtn.addEventListener('click', function () {
        storyPanel.classList.add('hidden');
        quizPanel.classList.remove('hidden');

        if (!quizBuilt) {
            quizQuestion.textContent = entry.quiz.question;
            quizOptions.innerHTML = '';
            quizFeedback.textContent = '';

            entry.quiz.options.forEach(function (option, index) {
                const btn = document.createElement('button');
                btn.textContent = option;
                btn.addEventListener('click', function () {
                    if (quizAnswered) return;
                    quizAnswered = true;
                    quizOptions.querySelectorAll('button').forEach(function (b) {
                        b.disabled = true;
                    });
                    if (index === entry.quiz.correctIndex) {
                        btn.classList.add('correct');
                        quizFeedback.textContent = 'MashAllah, correct!';
                    } else {
                        btn.classList.add('wrong');
                        quizFeedback.textContent = 'Incorrect. Try again.';
                        quizAnswered = false;
                        quizOptions.querySelectorAll('button').forEach(function (b) {
                            b.disabled = false;
                        });
                        btn.disabled = true;
                    }
                });
                quizOptions.appendChild(btn);
            });

            quizBuilt = true;
        }
    });

    backBtn.addEventListener('click', function () {
        quizPanel.classList.add('hidden');
        storyPanel.classList.remove('hidden');
    });

});