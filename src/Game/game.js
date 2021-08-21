import React from 'react';
import Board from './Board/board'
import { InputGroup, FormControl, Row, Col, Container, Button } from 'react-bootstrap';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            winCondition: 3,
            numOfBoardRows: 3,
            squares: Array(3 ** 2).fill(null),
            winner: null,
        }
        this.updateNumerOfRows = this.updateNumerOfRows.bind(this);
        this.updateWinCondition = this.updateWinCondition.bind(this);
        this.updateSquares = this.updateSquares.bind(this);
        this.reset = this.reset.bind(this);
        this.updateWinner = this.updateWinner.bind(this);
    }

    updateWinner(player) {
        this.setState({ winner: player })
    }

    reset() {
        this.setState({
            squares: Array(this.state.numOfBoardRows ** 2).fill(null),
            winner: null
        })
    }

    updateSquares(arr) {
        this.setState({ squares: arr })
    }

    updateNumerOfRows(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({
                winner: null,
                numOfBoardRows: e.target.value,
                squares: Array(e.target.value ** 2)
            })
        } else {
            e.target.value = ''
        }
    }
    updateWinCondition(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({
                winner: null,
                winCondition: e.target.value,
                squares: Array(this.state.numOfBoardRows ** 2)
            })
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
                <Row>
                    <Col xs={{ offset: 1, span: 3 }}>
                        <Button variant="outline-danger" onClick={this.reset}>
                            Reset
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <hr className="mt-4" />
                    <div className="game mt-4">
                        <div className="game-board">
                            <Board key={'board'} winCondition={this.state.winCondition}
                                numOfBoardRows={this.state.numOfBoardRows}
                                squares={this.state.squares}
                                updateWinner={this.updateWinner}
                                winner={this.state.winner}
                                updateSquares={this.updateSquares} />
                        </div>
                    </div>
                </Row>

            </Container>

        );
    }
}

export default Game;