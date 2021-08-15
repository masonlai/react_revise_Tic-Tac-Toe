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

    handleClick(key) {
        if (this.isOverwiriting(key) || calculateWinner(this.state.squares)) return;

        let squaresCopy = this.state.squares.slice();
        if (this.state.Xturn) {
            squaresCopy[key] = 'X';
            this.setState({ Xturn: false, turnPlayer: 'O' })
        } else {
            squaresCopy[key] = 'O';
            this.setState({ Xturn: true, turnPlayer: 'X' })
        }
        this.setState({ squares: squaresCopy })
    }

    returnCurrPlayer() {
        return this.state.Xturn ? 'X' : 'O';
    }

    isOverwiriting(key) {
        return this.state.squares[key] != null
    }


    renderSquare(key) {
        return <Square selectedByUser={this.state.squares[key]} onClick={() => this.handleClick(key)} />;
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + this.state.turnPlayer;
        }
        //https://reactjs.org/docs/jsx-in-depth.html#jsx-children
        //jsx-children document
        return (
        <RenderBoard numOfBoardRows={4}>

        </RenderBoard>)
        ;
    }

}


function RowEle(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
  }
  
  function RowLayer(props) {
    let items = [];
  
    for (let i = 0; i < props.rows; i++) {
      items.push(props.children(i));
    }
    return <div id="rowsLayer">{items}</div>;
  }
  
  function RenderBoard(pros) {
    let rows = pros.numOfBoardRows;
  
    function calculateSqureId(rowIndex, columnIndex)  {
      return rowIndex * rows + (columnIndex + 1)
    }
  
    return (
      <RowLayer rows={rows} >
        {(rowIndex) => <ul key={rowIndex} id={rowIndex + 1}>
          <RowEle numTimes={4}>{(columnIndex) =>
            <li key={columnIndex} id={calculateSqureId(rowIndex,columnIndex)}>This is item {calculateSqureId(rowIndex,columnIndex)} in the list</li>}</RowEle>
        </ul>}
      </RowLayer>
    );
  }

export default Board;