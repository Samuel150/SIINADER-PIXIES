import React from 'react';
import { useParams } from "react-router";
import { Layout } from './components/Layout';
export const Inicio = () => {
    let { rol } = useParams();
    var nombre;
    switch (rol) {
        case 'estudiante':
            nombre = 'ESTUDIANTIL'
            break;
        case 'docente':
            nombre = 'DE DOCENTE';
            break;
        case 'kardex':
            nombre = 'DE KARDEX';
            break;
        default:
            nombre = 'ESTUDIANTIL';
            break;
    }
    return (
        <Layout>
            <h1 className="text-center">BIENVENIDO A TU</h1>
            <h1 className="text-center">PLATAFORMA {nombre}</h1>
        </Layout>

    )
}