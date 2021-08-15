import React from 'react';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


class GameHistory extends React.Component {

    render() {
        

        return (
            <div className="game-info">
                <div>Moves: #1</div>
                <DropdownButton id="dropdown-basic-button-sm" title="Game Histroy" size="sm">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </div>
        );
    }

}

export default GameHistory;