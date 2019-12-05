import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Logo from './assets/estudios.jpg';
import MateriaList from './components/MateriaList';

export const Estudios = () => (
    <Col>
        <Image src={Logo} height='400' />
        <h2 className="text-center">CARRERA DE DERECHO</h2>
        <MateriaList />
    </Col>
)