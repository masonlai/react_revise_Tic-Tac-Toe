import React from 'react';
import Board from './Board/board'
import GameHistory from './gameTrace/gameHistoryDropDownList'
import { InputGroup, FormControl, Row, Col, Container } from 'react-bootstrap';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            winCondition: 3,
            numOfBoardRows: 3,
            squares: Array(9).fill(null),
        }
        this.updateNumerOfRows = this.updateNumerOfRows.bind(this);
        this.updateWinCondition = this.updateWinCondition.bind(this);
    }

    updateSquares(squares){
        this.setState({squares:squares})
    }

    updateNumerOfRows(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({ numOfBoardRows: e.target.value })
        } else {
            e.target.value = ''
        }
    }
    updateWinCondition(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({ winCondition: e.target.value })
        } else {
            e.target.value = ''
        }

    }

    render() {
        return (
            <Container fluid>

                <div className='mt-4'>

                    <Row>
                        <Col xs={{ offset: 1, span: 3 }}>
                            <p>Number only</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ offset: 1, span: 3 }}>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-sm">Number of rows</InputGroup.Text>
                                <FormControl id="NumberOfRows" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                    onChange={this.updateNumerOfRows} />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ offset: 1, span: 3 }}>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-sm">Win condition</InputGroup.Text>
                                <FormControl id="winCondition" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                    onChange={this.updateWinCondition} />
                            </InputGroup>
                        </Col>
                    </Row>
                </div>
                <div className='mt-2'>
                    <Row>
                        <Col xs={{ offset: 1 }}>
                            <GameHistory />
                        </Col>
                    </Row>
                    </div>
                    <Row>
                    <hr className="mt-4"/>
                    <div className="game mt-4">
                        <div className="game-board">
                            <Board key={'board'} winCondition={this.state.winCondition}
                            numOfBoardRows={this.state.numOfBoardRows}
                            updateSquares={this.updateSquares}/>
                        </div>
                    </div>
                </Row>

            </Container>


        );
    }
}

export default Game;