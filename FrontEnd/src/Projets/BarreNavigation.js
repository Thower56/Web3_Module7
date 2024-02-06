import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import React from 'react';


export function BarreNavigation() {
    return (
        <Navbar className="bg-body-tertiary" expand="lg">
            <Container>
                <Nav className="navbar navbar-light bg-light">
                    <Nav.Link className="nav-link" href="/">Accueil</Nav.Link>
                    <Nav.Link className="nav-link" href="/repertoire">Repertoire</Nav.Link>
                    <Nav.Link className="nav-link" href="/demandeSpecial">Demande Speciales</Nav.Link>
                    <Nav.Link className="nav-link" href="/ajouter">Ajouter</Nav.Link>
                    <Nav.Link className="nav-link" href="/admin">Administration</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}