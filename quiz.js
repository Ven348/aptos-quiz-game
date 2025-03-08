* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f1f1f1;
    color: #333;
    text-align: center;
}

#game-container {
    margin-top: 50px;
}

#question-container {
    margin-bottom: 20px;
}

#answers button {
    display: block;
    width: 200px;
    margin: 10px auto;
    padding: 15px;
    font-size: 18px;
    cursor: pointer;
    background-color: #4CAF50;
    border: none;
    color: white;
    border-radius: 5px;
}

#answers button:hover {
    background-color: #45a049;
}

#dashboard, #quiz-container, #leaderboard {
    margin: 20px;
}

#timer {
    font-size: 20px;
    margin-top: 10px;
}

#result {
    display: none;
    margin-top: 30px;
}

#leaderboard {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
}
