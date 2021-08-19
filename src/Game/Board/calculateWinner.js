export default class winnerCalculator {

  constructor(squares, winCondition, numOfBoardRows) {
    this.squares = squares;
    this.winCondition = winCondition;
    this.numOfBoardRows = numOfBoardRows;
  }


  getWinner() {
    for (let i = 0; i < this.squares.length; i++) {
      if (this.squares[i] == null) continue;

      const winByRow = this.winByRow(i)
      if (winByRow){
        console.log("winByRow")
        return winByRow
      }

      const winByColumn = this.winByColumn(i)
      if (winByColumn){
        console.log("winByColumn")
        return winByColumn
      }

      const winByBackslash = this.winByBackslash(i)
      if (winByBackslash) {
        console.log("winByBackslash")
        return winByBackslash
      }

      const winBySlash = this.winBySlash(i)
      if (winBySlash){
        console.log("winBySlash")
        return winBySlash
      }
    }
    return null;
  }
  getX(position) {
    return position % this.numOfBoardRows
  }

  getY(position, x) {
    return ((position - x) / this.numOfBoardRows)
  }

  winByRow(i) {
    const countWin = []
    for (let j = 0; j < this.winCondition; j++) {
      const x = this.getX(i + j);
      if (x >= (this.numOfBoardRows)) break;
      countWin.push(this.squares[i + j])
    }

    return this.whoWon(countWin)
  }

  winByColumn(i) {
    const countWin = []
    for (let j = 0; j < this.winCondition; j++) {
      const x = this.getX(i + j);
      const y = this.getY(i + j, x)
      console.log("y".concat(y));
      console.log("x".concat(x));
      if (y >= (this.numOfBoardRows)) break;
      countWin.push(this.squares[i + (j * this.numOfBoardRows)])
    }

    return this.whoWon(countWin)

  }

  winBySlash(i) {
    const countWin = []
    for (let j = 0; j < this.winCondition; j++) {
      const x = this.getX(i + j);
      const y = this.getY(i + j, x);
      if (x >= this.numOfBoardRows || y >= this.numOfBoardRows) break;
      countWin.push(this.squares[i + (j * this.numOfBoardRows) - j])
    }
    return this.whoWon(countWin)
  }

  winByBackslash(i) {
    const countWin = []
    for (let j = 0; j < this.winCondition; j++) {
      const x = this.getX(i + j);
      const y = this.getY(i, x);
      if (x >= this.numOfBoardRows || y >= this.numOfBoardRows) break;
      countWin.push(this.squares[i + (j * this.numOfBoardRows) + j])
    }
    return this.whoWon(countWin)
  }

  whoWon(countWin) {
    if (countWin.length !== this.winCondition) return null
    let uniq = [...new Set(countWin)];
    if (uniq.length === 1 && uniq[0] !== null) { return uniq[0] };
    return null
  }


}
