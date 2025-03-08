let score = 0;
let currentQuestion = 0;
let timer;
let timeLeft = 30;
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2,
        difficulty: "easy"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "Who wrote '1984'?",
        options: ["Aldous Huxley", "George Orwell", "J.K. Rowling", "Mark Twain"],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
        correct: 1,
        difficulty: "hard"
    }
];

function nextQuestion() {
    if (currentQuestion < questions.length) {
        loadQuestion(questions[currentQuestion]);
        currentQuestion++;
    } else {
        endGame();
    }
}

function loadQuestion(questionObj) {
    document.getElementById('question').innerText = questionObj.question;
    const options = questionObj.options;

    options.forEach((option, index) => {
        document.getElementById(`answer${index + 1}`).innerText = option;
        document.getElementById(`answer${index + 1}`).onclick = () => checkAnswer(index, questionObj.correct);
    });

    timeLeft = 30;
    document.getElementById('time').innerText = timeLeft;
    startTimer();
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
        document.getElementById('result-text').innerText = "Correct!";
    } else {
        document.getElementById('result-text').innerText = "Wrong!";
    }
    updateLeaderboard();
    document.getElementById('result').style.display = 'block';
}

function startTimer() {
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById('time').innerText = timeLeft;
        } else {
            clearInterval(timer);
            document.getElementById('result-text').innerText = "Time's up!";
            document.getElementById('result').style.display = 'block';
        }
    }, 1000);
}

function endGame() {
    // Save score to leaderboard
    leaderboard.push({ score: score });
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    // Show leaderboard
    updateLeaderboard();

    // Reset for new game
    score = 0;
    currentQuestion = 0;
    document.getElementById('score').innerText = score;
    document.getElementById('result').style.display = 'none';
}

function updateLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard');
    leaderboardList.innerHTML = '';
    leaderboard.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = `Player ${index + 1}: ${entry.score} points`;
        leaderboardList.appendChild(listItem);
    });
}

nextQuestion();
