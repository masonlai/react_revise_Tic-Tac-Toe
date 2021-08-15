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