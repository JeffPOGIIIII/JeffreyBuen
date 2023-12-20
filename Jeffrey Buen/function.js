let score = 0;
    let timeLeft = 10;
    let timer;

    function startGame() {
        timer = setInterval(updateTimer, 1000);
    }

    function handleClick() {
        score++;
        document.getElementById('scoreValue').innerText = score;
    }

    function updateTimer() {
        timeLeft--;
        document.getElementById('timerValue').innerText = timeLeft;

        if (timeLeft === 0) {
            endGame();
        }
    }

    function endGame() {
        clearInterval(timer);
        document.getElementById('clickButton').disabled = true;
        alert(`HAHAHHAHAHAHAH BAWI NEXT TIME LODS !`);
        alert(`YOUR SCORE IS ${score}`);
    }

    startGame();