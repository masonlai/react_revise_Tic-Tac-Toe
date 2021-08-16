
 import Square from './BoardComponent/Square';
 export default RenderBoard;

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

  function RenderSquare(pros) {
    return <Square selectedByUser={this.state.squares[pros.id]} onClick={() => this.handleClick(pros.id)} />;
}
  
  function RenderBoard(pros) {
    let rows = pros.numOfBoardRows;
  
    function calculateSqureId(rowIndex, columnIndex)  {
      return rowIndex * rows + (columnIndex)
    }
  
    return (
      <RowLayer rows={rows} >
        {(rowIndex) => <div key={rowIndex} id={rowIndex} className="board-row">
          <RowEle numTimes={4}>{(columnIndex) =>
            <RenderSquare key={columnIndex} id={calculateSqureId(rowIndex,columnIndex)}></RenderSquare>}</RowEle>
        </div>}
      </RowLayer>
    );
  }



//   return (
//     <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//         </div>
//     </div>
// );