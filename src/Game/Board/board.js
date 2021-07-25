import React from 'react';
import Square from './BoardComponent/Square';
import calculateWinner from './calculateWinner';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            Xturn: true,
            turnPlayer: 'X',
        }
    }

    handleClick(i) {
        if (this.isOverwiriting(i) || calculateWinner(this.state.squares)) return;

        let squaresCopy = this.state.squares.slice();
        if (this.state.Xturn) {
            squaresCopy[i] = 'X';
            this.setState({ Xturn: false, turnPlayer: 'O' })
        } else {
            squaresCopy[i] = 'O';
            this.setState({ Xturn: true, turnPlayer: 'X' })
        }
        this.setState({ squares: squaresCopy })
    }

    returnCurrPlayer(){
        return this.state.Xturn ? 'X':'O';
    }

    isOverwiriting(i) {
        return this.state.squares[i] != null
    }


    renderSquare(i) {
        return <Square selectedByUser={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + this.state.turnPlayer;
        }
        return (
            <div>
                <div className="status">{status}</div>
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
        );
    }
}

export default Board;