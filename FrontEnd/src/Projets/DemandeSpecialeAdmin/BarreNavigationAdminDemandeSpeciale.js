import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';


export const NavigationDemandeSpeciale = () => {
    return (
        <Navbar className="bg-body-tertiary" expand="lg">
            <Container>
                <Nav className="navbar navbar-light bg-light">
                    <Nav.Link as={Link} to="/demandes-speciales-total">Toutes les demandes</Nav.Link>
                    <Nav.Link as={Link} to="/demandes-speciales-actives">Demandes actives</Nav.Link>
                    <Nav.Link as={Link} to="/demandes-speciales-date-croissante">Date croissante</Nav.Link>
                    <Nav.Link as={Link} to="/demandes-speciales-date-decroissante">Date décroissante</Nav.Link>
                    <Nav.Link as={Link} to="/top5">Top 5</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};