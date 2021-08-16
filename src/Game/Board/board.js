import React from 'react';
import winnerCalculator from './calculateWinner';
import Square from './BoardComponent/Square';



class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            Xturn: true,
            turnPlayer: 'X',
            winCondition: 3,
            numOfBoardRows: 3,
            winner: null

        }
    }


    handleClick(i) {
        if (this.isOverwiriting(i) || this.state.winner) return;


        let squaresCopy = this.state.squares.slice();
        if (this.state.Xturn) {
            squaresCopy[i] = 'X';
            this.setState({ Xturn: false, turnPlayer: 'O' })
        } else {
            squaresCopy[i] = 'O';
            this.setState({ Xturn: true, turnPlayer: 'X' })
        }
        this.setState({ squares: squaresCopy })

        const WinnerCalculator = new winnerCalculator(squaresCopy, this.state.winCondition, this.state.numOfBoardRows);
        const winner = WinnerCalculator.getWinner();
        this.setState({
            winner: winner
        })
    }

    returnCurrPlayer() {
        return this.state.Xturn ? 'X' : 'O';
    }

    isOverwiriting(key) {
        return this.state.squares[key] != null
    }

    renderSquare(i) {
        return <Square selectedByUser={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    calculateSqureId(rowIndex, columnIndex)  {
        return rowIndex * this.state.numOfBoardRows + (columnIndex)
      }

    render() {
        const winner = this.state.winner;
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + this.state.turnPlayer;
        }
        //https://reactjs.org/docs/jsx-in-depth.html#jsx-children
        //jsx-children document
        return (
            <div>
                <div className="status">{status}</div>
                {() => {
                    let rows = [];
                    for (let i = 0; i < 4; i++) {
                        rows.push(
                            <div className="board-row">
                                {() => {
                                    for (let i = 0; i < 4; i++) {
                                        { this.renderSquare(0) }
                                    }
                                }}

                            </div>
                        );
                    }
                    return rows;
                }
                }

            </div>
        );

    }

}

export default Board;