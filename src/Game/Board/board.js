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

        const WinnerCalculator = new winnerCalculator(squaresCopy, this.props.winCondition, this.props.numOfBoardRows);
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

    renderSquare(rowIndex, columnIndex) {
        let id = this.calculateSqureId(rowIndex, columnIndex);
        return <Square key={id} selectedByUser={this.state.squares[id]} onClick={() => this.handleClick(id)} />;
    }

    calculateSqureId(rowIndex, columnIndex) {
        return rowIndex * this.props.numOfBoardRows + (columnIndex)
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

        let rows = [];
        let numOfBoardRows = this.props.numOfBoardRows;
        for (let i = 0; i < numOfBoardRows; i++) {
            rows.push(
                <div className="board-row" key={i}>
                    {[...Array(parseInt(this.props.numOfBoardRows))].map((x, j) =>
                        this.renderSquare(i, j)
                    )}
                </div>
            );
        }



        return (
            <div>
                <div className="status">{status}</div>
                {rows}
            </div>
        );

    }

}

export default Board;