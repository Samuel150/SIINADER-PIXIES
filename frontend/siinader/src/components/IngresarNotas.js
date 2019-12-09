import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default class NotasList extends React.Component {
    state = {
        materias: [],
        materia: '',
    }
    componentDidMount() {
        axios.get('http://localhost:3000/api/materias')
            .then(res => {
                console.log(res.data);
                const materiasRes = res.data;
                this.setState({ materias: materiasRes });
            }).catch((err) => console.log(err.res));
    }
    handle() {
        console.log(this.myInput.value);
    }
    render() {
        return (
            <Col>
            <Form>
                <Row>
                    <Col>
                        <h5>Estudiante</h5>
                        <Form.Control placeholder="Código de Estudiante" />
                    </Col>
                    <Col>
                        <h5>Materia</h5>
                        <Form.Control placeholder="Código de Materia" />
                    </Col>
                    <Col>
                        <h5>Notas</h5>
                        <Form.Control placeholder="Primer Parcial" inputRef={ref => { this.myInput = ref; }}/>
                        <Form.Control placeholder="Segundo Parcial" />
                        <Form.Control placeholder="Tercer Parcial" />
                    </Col>
                </Row>
            </Form>
            <Button variant="primary" onClick={this.handle}>Primary</Button>
            </Col>
            
        )
    }
}