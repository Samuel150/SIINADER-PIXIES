import React from 'react';
import Col from 'react-bootstrap/Col';
import Logo from './assets/notas.jpg';
import Image from 'react-bootstrap/Image'
import NotasList from './components/NotasList';

export const Notas = () => (
    <Col>
       <Image src={Logo} height='400' />
        <h2 className="text-center">MIS NOTAS</h2>
        <NotasList/>
    </Col>
)