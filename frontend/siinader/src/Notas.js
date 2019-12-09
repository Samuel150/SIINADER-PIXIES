import React from 'react';
import Col from 'react-bootstrap/Col';
import Logo from './assets/notas.jpg';
import Image from 'react-bootstrap/Image'
import NotasList from './components/NotasList';
import IngresarNotas from './components/IngresarNotas';
import { useParams } from "react-router";
export const Notas = () => {
    let { rol } = useParams();
    var body;
    switch (rol) {
        case 'estudiante':
            body = <NotasList/>
            break;
        case 'docente':
            body = <IngresarNotas/>;
            break;
        case 'kardex':
            body = <IngresarNotas/>;
            break;
        default:
            body = <NotasList/>
            break;
    }
    return (
        <Col>
            <Image src={Logo} height='400' />
            {body}
        </Col>
    )

}