import React from 'react';
import Board from './Board/board'
import GameHistory from './gameTrace/gameHistoryDropDownList'

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <GameHistory />
            </div>
        );
    }
}

export default Game;