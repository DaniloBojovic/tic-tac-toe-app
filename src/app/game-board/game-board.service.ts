import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameBoardService {
  board: string[][] = [];
  currentPlayer: string = 'X';

  constructor() {
    this.newGame();
  }

  newGame() {
    this.board = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-'],
    ];
    this.currentPlayer = 'X';
  }

  makeMove(row: number, col: number) {
    if (this.board[row][col] === '-') {
      this.board[row][col] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  // game-board.service.ts
  checkWin(): number[] | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      if (
        this.board[Math.floor(line[0] / 3)][line[0] % 3] ===
          this.board[Math.floor(line[1] / 3)][line[1] % 3] &&
        this.board[Math.floor(line[1] / 3)][line[1] % 3] ===
          this.board[Math.floor(line[2] / 3)][line[2] % 3] &&
        this.board[Math.floor(line[0] / 3)][line[0] % 3] !== '-'
      ) {
        return line;
      }
    }

    return null;
  }
}
