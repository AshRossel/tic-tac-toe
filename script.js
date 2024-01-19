const Gameboard = (function () {
    let playerTurn = '';
    let board = ['', '', '', '', '', '', '', '', ''];
    const player = [
        {
            player: '1',
            marker: 'X',
        },
        {
            player: '2',
            marker: 'O',
        }
    ]
    const startGame = function () {
        const randomNumber = Math.floor(Math.random() * 2);
        if (randomNumber === 1) {
            playerTurn = 'X';
            console.log("Player 1, it's your turn!");
        } else {
            playerTurn = 'O';
            console.log("Player 2, it's your turn!");
        }
    }

    const switchTurn = function () {
        if (playerTurn === 'X') {
            playerTurn = 'O';
            console.log("Player 2, it's your turn!");
        } else if (playerTurn === 'O') {
            playerTurn = 'X';
            console.log("Player 1, it's your turn!");
        }
    }

    const playerSelection = function (selection) {
        const place = Number(selection);
        if (board[place] === '') {
            board[place] = playerTurn;
            return true
        } else {
            return false
        }
    }

    const checkWinner = function () {
        if (board[0] === playerTurn && board[1] === playerTurn && board[2] === playerTurn) {
            return true
        } else if (board[3] === playerTurn && board[4] === playerTurn && board[5] === playerTurn) {
            return true
        } else if (board[6] === playerTurn && board[7] === playerTurn && board[8] === playerTurn) {
            return true
        } else if (board[0] === playerTurn && board[3] === playerTurn && board[6] === playerTurn) {
            return true
        } else if (board[1] === playerTurn && board[4] === playerTurn && board[7] === playerTurn) {
            return true
        } else if (board[2] === playerTurn && board[5] === playerTurn && board[8] === playerTurn) {
            return true
        } else if (board[0] === playerTurn && board[4] === playerTurn && board[8] === playerTurn) {
            return true
        } else if (board[2] === playerTurn && board[4] === playerTurn && board[6] === playerTurn) {
            return true
        } else {
            return false
        }
    }

    const checkTie = function() {
        if (board.indexOf('') === -1) {
            return true;
        } else {
            return false;
        }
    }
    return { player, startGame, playerSelection, checkWinner, switchTurn, checkTie }
})();

Gameboard.startGame();

while (true) {
    while (Gameboard.playerSelection(prompt("What's your choice?")) != true) {
        console.log('This place is already selected');
    }

    if (Gameboard.checkTie()) {
        console.log("It's a tie!");
        break;
    }

    if (Gameboard.checkWinner() == true) {
        console.log("It's over!");
        break;
    }

    Gameboard.switchTurn();
}

