import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavigationBar = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">SIINADER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/Materias">Materias</Nav.Link>
                <Nav.Link href="/Estudios">Estudios</Nav.Link>
                <Nav.Link href="/Notas">Notas</Nav.Link>
                <NavDropdown title="Configuración" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Editar Perfil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Cerrar Sesión</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
