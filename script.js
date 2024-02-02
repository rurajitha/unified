const board = Array(9).fill('');
let currentPlayer = 'X';
let gameActive = true;

function handleCellClick(index) {
    if (!gameActive || board[index] !== '') return;

    board[index] = currentPlayer;
    renderBoard();
    checkWinner();
    togglePlayer();
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('status').innerText = `Current Player: ${currentPlayer}`;
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('status').innerText = `Player ${board[a]} wins!`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes('')) {
        document.getElementById('status').innerText = 'It\'s a draw!';
        gameActive = false;
    }
}

function renderBoard() {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < board.length; i++) {
        cells[i].innerText = board[i];
    }
}

function resetGame() {
    board.fill('');
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('status').innerText = 'Current Player: X';
    renderBoard();
}

// Initial setup
document.getElementById('status').innerText = 'Current Player : X';
renderBoard();
