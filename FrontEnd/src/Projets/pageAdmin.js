import React from 'react';
import { Container, Button,  Row, Col, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { BarreNavigationAdmin } from './DemandeSpecialeAdmin/BarreNavigationAdmin';



export const PageAdmin = () => {
    return (
        <Container>
            <h1>Page d'administration</h1>
            <BarreNavigationAdmin />
            <Row>
                <h3>Bienvenue sur la page administrateur</h3>
                <p>Pour modifier ou supprimer un titre, cliquer sur Repertoire complet</p>
            </Row>        
        </Container>
    );
};
