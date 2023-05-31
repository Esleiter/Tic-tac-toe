# Tic-tac-toe ⌛
Enjoy an exciting game of Tic-Tac-Toe developed with Vanilla JavaScript. Choose your moves wisely and be the first to align three of your plays in a horizontal, vertical, or diagonal line. Have fun with this classic game of strategy!

* [Demo](https://ttt.esleiter.com/): https://ttt.esleiter.com

## Table of Contents
1. [General Info](#general-info)
2. [Screenshot](#screenshot)
***

## General Info

The project consists of an implementation of the game of **Tic-Tac-Toe (three in a row)** using JavaScript. The game is played on a 3x3 grid, where two players take turns placing their checkers on the available squares.

The code uses variables to keep track of the state of the game, such as the game board **(board)**, the current player **(currentPlayer)**, and the number of moves made **(move)**.

The game starts with the **Clear function**, which initializes the board, sets the starting player as **"X"** and resets the **move counter**. In addition, it enables all the squares on the board so that the players can make their moves.

When a player clicks on a square, the **movement function** is called. This function checks if the selected square is empty on the board and, if so, places the current player's token on that position. Then the visual representation of the board is updated and the **Checks function** is called to check if there is a **winner or a tie**.

The **Checks function** is in charge of checking if there is a **winner in the game**. Check all the possible **winning combinations in rows, columns and diagonals**. If it finds a winning combination, it displays a message indicating the winning player and disables all squares on the board. If there is no winner but 9 moves have been made, a message is displayed indicating a tie. Otherwise, the current player is changed and the next player's message is displayed.

The game continues until there is a winner or a tie is reached. At that point, players can restart the game by calling the **Clear function**.

In short, this code implements the classic game of **Tic-Tac-Toe using JavaScript**, allowing two players to compete against each other.

## Screenshot
![Image text](https://raw.githubusercontent.com/Esleiter/tic-tac-toe/master/img/screenShot/tic-tac-toe.png)