let board;
let currentPlayer;
let move;

const Disable = (action) => {
    for (let i = 0; i < 9; i++) {
        document.getElementsByClassName("btnCell")[i].disabled = action;
    }
}

const Clear = () => {
    document.getElementById("message").innerHTML = "Let the game begin 🎮!";

    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            let id = `${x}${y}`;
            document.getElementById(id).innerHTML = "&nbsp";
        }
    }

    currentPlayer = "X";
    move = 0;

    Disable(false);
}

const movement = (x, y) => {
    move++;
    if (board[y][x] === null) {
        board[y][x] = currentPlayer;
        let id = `${x}${y}`;
        document.getElementById(id).innerHTML = currentPlayer;
        Checks();
    } else {
        document.getElementById("message").innerHTML = currentPlayer + "! You cannot occupy this space.";
    }
}

const ChangePlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

const Ganador = () => {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== null && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return true;
        }
        if (board[0][i] !== null && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return true;
        }
    }

    if (board[0][0] !== null && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== null && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return true;
    }

    return false;
}

const Checks = () => {
    if (Ganador()) {
        document.getElementById("message").innerHTML = "We have a winner: " + currentPlayer + "! 🎉";
        Disable(true);
    } else if (move === 9) {
        document.getElementById("message").innerHTML = "The game is over with no winners, let's continue playing 🎮!";
    } else {
        ChangePlayer();
        document.getElementById("message").innerHTML = "Next player: " + currentPlayer
    }
}
    
Clear();