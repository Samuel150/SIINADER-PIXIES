import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
export default class MateriaList extends React.Component {
  state = {
    materias: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/materias')
      .then(res => {
        console.log(res.data);
        const materiasRes = res.data;
        this.setState({ materias: materiasRes });
      }).catch((err) => console.log(err.res));
  }

  render() {
    var semestre1 = this.state.materias.slice(0,8);
    var semestre2 = this.state.materias.slice(8,16);
    var semestre3 = this.state.materias.slice(16,24);
    var semestre4 = this.state.materias.slice(24,32);
    var semestre5 = this.state.materias.slice(32,41);
    var semestre6 = this.state.materias.slice(41,49);
    var semestre7 = this.state.materias.slice(49,58);
    var semestre8 = this.state.materias.slice(58,67);
    console.log(semestre1);
    console.log(semestre2);
    return (
      <Row>
        <Col>
          <h5 className="text-center">PRIMER SEMESTRE</h5>
          <ListGroup>
            {semestre1.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">SEGUNDO SEMESTRE</h5>
          <ListGroup>
            {semestre2.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">TERCER SEMESTRE</h5>
          <ListGroup>
            {semestre3.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">CUARTO SEMESTRE</h5>
          <ListGroup>
            {semestre4.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">QUINTO SEMESTRE</h5>
          <ListGroup>
            {semestre5.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">SEXTO SEMESTRE</h5>
          <ListGroup>
            {semestre6.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">SÉPTIMO SEMESTRE</h5>
          <ListGroup>
            {semestre7.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">OCTAVO SEMESTRE</h5>
          <ListGroup>
            {semestre8.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.nombre}</ListGroup.Item>)}
          </ListGroup>
        </Col>
        <Col>
        <h5 className="text-center">CRÉDITOS</h5>
          <ListGroup>
            {semestre1.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.creditos}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">CRÉDITOS</h5>
          <ListGroup>
            {semestre2.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.creditos}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">CRÉDITOS</h5>
          <ListGroup>
            {semestre3.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.creditos}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">CRÉDITOS</h5>
          <ListGroup>
            {semestre4.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.creditos}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">CRÉDITOS</h5>
          <ListGroup>
            {semestre5.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.creditos}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">CRÉDITOS</h5>
          <ListGroup>
            {semestre6.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.creditos}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">CRÉDITOS</h5>
          <ListGroup>
            {semestre7.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.creditos}</ListGroup.Item>)}
          </ListGroup>
          <h5 className="text-center">CRÉDITOS</h5>
          <ListGroup>
            {semestre8.map(materia => <ListGroup.Item key={materia.idMateria}>{materia.creditos}</ListGroup.Item>)}
          </ListGroup>
        </Col>
      </Row>

    )
  }
}