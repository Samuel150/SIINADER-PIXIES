import React from 'react';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Logo from './assets/inscripcion.jpg';
import MateriasList from './components/MateriasList';
export const Materias = () => (
    <Col>
       <Image src={Logo} height='400' />
        <h2 className="text-center">MIS MATERIAS</h2>
        <MateriasList/>
    </Col>
)