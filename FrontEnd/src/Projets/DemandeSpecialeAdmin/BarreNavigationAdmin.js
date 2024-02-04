import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';


export const BarreNavigationAdmin = () => {
    return (
        <Navbar className="bg-dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/repertoireAdmin" className="text-white">Repertoire complet</Nav.Link>
                        <Nav.Link as={Link} to="/demandes-speciales-total" className="text-white">Toutes les demandes speciales</Nav.Link>
                        <Nav.Link as={Link} to="/demandes-speciales-actives" className="text-white">Demandes speciales actives</Nav.Link>
                        <Nav.Link as={Link} to="/demandes-speciales-date-croissante" className="text-white">Demandes speciales par dates croissantes</Nav.Link>
                        <Nav.Link as={Link} to="/demandes-speciales-date-decroissante" className="text-white">Demandes speciales par dates decroissantes</Nav.Link>
                        <Nav.Link as={Link} to="/top5" className="text-white">Top 5 demandes speciales</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};