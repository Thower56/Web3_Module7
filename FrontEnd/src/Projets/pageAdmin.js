import React from 'react';
import { Container, Button,  Row, Col, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { NavigationDemandeSpeciale } from './DemandeSpecialeAdmin/BarreNavigationAdminDemandeSpeciale';



export const PageAdmin = () => {
    return (
        <Container>
           <NavigationDemandeSpeciale /> 
        <h1>Page d'administration</h1>
        <Link to="/repertoireAdmin">
            <Button variant="primary" className="m-2">Consulter le repertoire</Button>
        </Link>
        <Link to="/creer-piece">
            <Button variant="primary" className="m-2">Creer une pièce</Button>
        </Link>
        <Link to="/demandes-speciales-total">
            <Button variant="primary" className="m-2">Consulter les demandes speciales</Button>
        </Link>
    </Container>
    );
};
