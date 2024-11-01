
        const gameContainer = document.getElementById('game-container');
        const resetButton = document.getElementById('reset-button');
        const pauseButton = document.getElementById('pause-button');
        const scoreContainer = document.getElementById('score-container');
        const resultsTable = document.getElementById('results-table').querySelector('tbody');
        const icons = ["🍎", "🍌", "🍇", "🍉", "🍒", "🍍", "🥥", "🍓"];
        let cardIcons = [...icons, ...icons];
        let flippedCards = [];
        let matchedPairs = 0;
        let startTime;
        let timerInterval;
        let gameCount = 1;
        let isPaused = false;
        let elapsedSeconds = 0;

        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
        }

        function createCard(icon) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.icon = icon;
            card.innerText = "❓";
            card.addEventListener('click', flipCard);
            return card;
        }

        function startGame() {
            gameContainer.innerHTML = "";
            matchedPairs = 0;
            flippedCards = [];
            shuffle(cardIcons);
            elapsedSeconds = 0;
            isPaused = false;
            pauseButton.innerText = 'Pausar';

            clearInterval(timerInterval);
            startTime = Date.now();
            timerInterval = setInterval(updateTime, 1000);

            cardIcons.forEach(icon => {
                const card = createCard(icon);
                gameContainer.appendChild(card);
            });
        }

        function updateTime() {
            if (!isPaused) {
                elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
                scoreContainer.innerText = `Tiempo: ${elapsedSeconds} segundos`;
            }
        }

        function flipCard() {
            if (flippedCards.length === 2 || this.classList.contains('flip') || this.classList.contains('matched') || isPaused) return;

            this.classList.add('flip');
            this.innerText = this.dataset.icon;
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(checkForMatch, 800);
            }
        }

        function checkForMatch() {
            const [card1, card2] = flippedCards;

            if (card1.dataset.icon === card2.dataset.icon) {
                card1.classList.add('matched');
                card2.classList.add('matched');
                matchedPairs++;

                if (matchedPairs === icons.length) {
                    clearInterval(timerInterval);
                    const finalTime = elapsedSeconds;
                    addResult(finalTime);
                    setTimeout(() => alert(`¡Ganaste! Tiempo total: ${finalTime} segundos.`), 300);
                }
            } else {
                card1.classList.remove('flip');
                card2.classList.remove('flip');
                card1.innerText = "❓";
                card2.innerText = "❓";
            }

            flippedCards = [];
        }

        function addResult(time) {
            const newRow = document.createElement('tr');
            const gameCell = document.createElement('td');
            const timeCell = document.createElement('td');

            gameCell.innerText = `Partida ${gameCount}`;
            timeCell.innerText = `${time} s`;

            newRow.appendChild(gameCell);
            newRow.appendChild(timeCell);
            resultsTable.appendChild(newRow);

            gameCount++;
        }

        function togglePause() {
            isPaused = !isPaused;
            pauseButton.innerText = isPaused ? 'Reanudar' : 'Pausar';
            if (!isPaused) {
                startTime = Date.now() - elapsedSeconds * 1000;
            }
        }

        resetButton.addEventListener('click', startGame);
        pauseButton.addEventListener('click', togglePause);

        startGame();