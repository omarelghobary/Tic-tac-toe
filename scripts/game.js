function startNewGame() {
    if(players[0].name === '' || players[1].name === '') {
        alert('PLease set custom player names for both players!');
        return;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
    
}

function switchPlayer() {
    if(activePlayer === 0){
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {

    const selectedField = event.target
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    
    const selectedCol = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;
    
    if(gameData[selectedRow][selectedCol] > 0) {
        alert('Please select an empty field!');
        return;
    }
    
    gameData[selectedRow][selectedCol] = activePlayer + 1;

    console.log(gameData);
    
    switchPlayer();
}