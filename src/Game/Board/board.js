import React from 'react';
import Square from './BoardComponent/Square';
import winnerCalculator from './calculateWinner';



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

    isOverwiriting(i) {
        return this.state.squares[i] != null
    }

    renderSquare(i) {
        return <Square selectedByUser={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    render() {
        const winner = this.state.winner;
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + this.state.turnPlayer;
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;