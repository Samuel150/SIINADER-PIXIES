import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Logo from '../assets/perfil.png';

export const NavigationBar = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">SIINADER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/:rol/inicio">Inicio</Nav.Link>
                <Nav.Link href="/:rol/materias">Materias</Nav.Link>
                <Nav.Link href="/:rol/estudios">Plan de Estudios</Nav.Link>
                <Nav.Link href="/:rol/notas">Notas</Nav.Link>
                <NavDropdown title="Configuración" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/:rol/editar_perfil">Editar Perfil</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action/3.4">Cerrar Sesión</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/:rol/perfil"><Image src={Logo} height='30' roundedCircle /></Nav.Link>
                
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
