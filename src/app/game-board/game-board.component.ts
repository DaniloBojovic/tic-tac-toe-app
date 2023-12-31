import { Component } from '@angular/core';
import { GameBoardService } from './game-board.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent {
  gameStatus: string = '';
  winningLine: number[] | null = null;
  gameWon = false;
  showStartNewGameButton = false;

  constructor(public gameService: GameBoardService) {}

  makeMove(row: number, col: number) {
    if (!this.winningLine) {
      this.gameService.makeMove(row, col);
      this.winningLine = this.gameService.checkWin();
      if (this.winningLine) {
        this.gameStatus = 'WIN';
        setTimeout(() => {
          this.showStartNewGameButton = true;
        }, 5000);
      }
    }
  }
  startNewGame() {
    this.gameService.newGame();
    this.showStartNewGameButton = false;
    this.gameWon = false;
    this.gameStatus = '';
    this.winningLine = null;
  }
}
