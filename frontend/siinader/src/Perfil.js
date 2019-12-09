import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './assets/perfil.png';
import Image from 'react-bootstrap/Image';
import PerfilList from './components/PerfilList';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
export const Perfil = () => (
    <Col>
        <Row>
            <Col><PerfilList /></Col>
            <Col><Image src={Logo} height='300' roundedCircle /></Col>
        </Row>
        <ButtonToolbar>
            <Button variant="primary" size="lg">Reglamento Estudiantil</Button>
            <Button variant="primary" size="lg">CPE</Button>
            <Button variant="primary" size="lg">Decreto Supremo</Button>
        </ButtonToolbar>
    </Col>
)