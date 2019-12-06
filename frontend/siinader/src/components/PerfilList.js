import React from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

export default class PerfilList extends React.Component {
    state = {
        datos: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/estudiantes/2')
            .then(res => {
                const datosRes = res.data;
                this.setState({ datos: datosRes });
            }).catch((err) => console.log(err.res));
    }

    render() {
        return (
            <Col>
                <h5 className="text-center">MI PERFIL</h5>
                <ListGroup>
                    <ListGroup.Item key={1}>Nombre: {this.state.datos.map(dato => dato.nombre)} {this.state.datos.map(dato => dato.apellido_1)} {this.state.datos.map(dato => dato.apellido_2)}</ListGroup.Item>
                    <ListGroup.Item key={2}>CI: {this.state.datos.map(dato => dato.ci)}</ListGroup.Item>
                    <ListGroup.Item key={3}>Código: {this.state.datos.map(dato => dato.idEstudiante)}</ListGroup.Item>
                    <ListGroup.Item key={4}>Fecha de Nacimiento: {this.state.datos.map(dato => dato.fecha_nacimiento.slice(0,10))}</ListGroup.Item>
                </ListGroup>
            </Col>
        )
    }
}