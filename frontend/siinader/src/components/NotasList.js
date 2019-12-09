import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
export default class NotasList extends React.Component {
    state = {
        materias: [],
    }
    componentDidMount() {
        axios.get('http://localhost:3000/api/estudiantes/1/materias')
            .then(res => {
                console.log(res.data);
                const materiasRes = res.data;
                this.setState({ materias: materiasRes });
            }).catch((err) => console.log(err.res));
    }
    render() {
        var semestre1 = [];
        var semestre2 = [];
        var semestre3 = [];
        var semestre4 = [];
        var semestre5 = [];
        var semestre6 = [];
        var semestre7 = [];
        var semestre8 = [];
        this.state.materias.forEach(materia => {
            switch (materia.semestre_cursada) {
                case 1:
                    semestre1.push(materia);
                    break;
                case 2:
                    semestre2.push(materia);
                    break;
                case 3:
                    semestre3.push(materia);
                    break;
                case 4:
                    semestre4.push(materia);
                    break;
                case 5:
                    semestre5.push(materia);
                    break;
                case 6:
                    semestre6.push(materia);
                    break;
                case 7:
                    semestre7.push(materia);
                    break;
                case 8:
                    semestre8.push(materia);
                    break;
                default:
                    console.log('Semestre no encontrado');
                    break;
            }
        });
        return (
            <Col>
                <h2 className="text-center">MIS NOTAS</h2>
                <Carousel>
                    <Carousel.Item>
                        <Col>
                            <Row>
                                <h5 className="text-center">PRIMER SEMESTRE</h5>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className="text-center">MATERIA</h5>
                                    <ListGroup>
                                        {semestre1.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">1P</h5>
                                    <ListGroup>
                                        {semestre1.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota1er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">2P</h5>
                                    <ListGroup>
                                        {semestre1.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota2do}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">3P</h5>
                                    <ListGroup>
                                        {semestre1.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota3er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Col>
                            <Row>
                                <h5 className="text-center">SEGUNDO SEMESTRE</h5>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className="text-center">MATERIA</h5>
                                    <ListGroup>
                                        {semestre2.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">1P</h5>
                                    <ListGroup>
                                        {semestre2.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota1er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">2P</h5>
                                    <ListGroup>
                                        {semestre2.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota2do}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">3P</h5>
                                    <ListGroup>
                                        {semestre2.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota3er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Col>
                            <Row>
                                <h5 className="text-center">TERCER SEMESTRE</h5>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className="text-center">MATERIA</h5>
                                    <ListGroup>
                                        {semestre3.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">1P</h5>
                                    <ListGroup>
                                        {semestre3.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota1er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">2P</h5>
                                    <ListGroup>
                                        {semestre3.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota2do}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">3P</h5>
                                    <ListGroup>
                                        {semestre3.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota3er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Col>
                            <Row>
                                <h5 className="text-center">CUARTO SEMESTRE</h5>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className="text-center">MATERIA</h5>
                                    <ListGroup>
                                        {semestre4.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">1P</h5>
                                    <ListGroup>
                                        {semestre4.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota1er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">2P</h5>
                                    <ListGroup>
                                        {semestre4.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota2do}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">3P</h5>
                                    <ListGroup>
                                        {semestre4.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota3er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Col>
                            <Row>
                                <h5 className="text-center">QUINTO SEMESTRE</h5>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className="text-center">MATERIA</h5>
                                    <ListGroup>
                                        {semestre5.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">1P</h5>
                                    <ListGroup>
                                        {semestre5.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota1er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">2P</h5>
                                    <ListGroup>
                                        {semestre5.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota2do}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">3P</h5>
                                    <ListGroup>
                                        {semestre5.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota3er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Col>
                            <Row>
                                <h5 className="text-center">SEXTO SEMESTRE</h5>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className="text-center">MATERIA</h5>
                                    <ListGroup>
                                        {semestre6.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">1P</h5>
                                    <ListGroup>
                                        {semestre6.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota1er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">2P</h5>
                                    <ListGroup>
                                        {semestre6.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota2do}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">3P</h5>
                                    <ListGroup>
                                        {semestre6.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota3er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Col>
                            <Row>
                                <h5 className="text-center">SÉPTIMO SEMESTRE</h5>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className="text-center">MATERIA</h5>
                                    <ListGroup>
                                        {semestre7.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">1P</h5>
                                    <ListGroup>
                                        {semestre7.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota1er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">2P</h5>
                                    <ListGroup>
                                        {semestre7.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota2do}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">3P</h5>
                                    <ListGroup>
                                        {semestre7.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota3er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Col>
                            <Row>
                                <h5 className="text-center">OCTAVO SEMESTRE</h5>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className="text-center">MATERIA</h5>
                                    <ListGroup>
                                        {semestre8.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">1P</h5>
                                    <ListGroup>
                                        {semestre8.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota1er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">2P</h5>
                                    <ListGroup>
                                        {semestre8.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota2do}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h5 className="text-center">3P</h5>
                                    <ListGroup>
                                        {semestre8.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nota3er}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Carousel.Item>
                </Carousel>
            </Col>
        )
    }
}