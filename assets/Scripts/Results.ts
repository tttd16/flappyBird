import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Results')
export class Results extends Component {
  @property({
    type: Label,
  })
  public scoreLabel: Label;

  @property({
    type: Label,
  })
  public highScore: Label;

  @property({
    type: Label,
  })
  public resultEnd: Label;

  maxScore: number = 0;
  currentScore: number;

  updateScore(num: number) {
    this.currentScore = num;

    this.scoreLabel.string = '' + this.currentScore;
  }

  resetScore() {
    this.updateScore(0);

    this.hideResults();
  }

  addScore() {
    this.updateScore(this.currentScore + 1);
  }

  showResults() {
    this.maxScore = Math.max(this.maxScore, this.currentScore);
    this.highScore.string = 'High Score: ' + this.maxScore;
    this.resultEnd.node.active = true;
    this.highScore.node.active = true;
  }

  hideResults() {
    this.highScore.node.active = false;
    this.resultEnd.node.active = false;
  }
}
