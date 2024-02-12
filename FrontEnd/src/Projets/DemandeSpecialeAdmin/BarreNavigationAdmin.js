import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {useTranslation} from "react-i18next";



export const BarreNavigationAdmin = () => {
    const { t } = useTranslation();
    return (
        <Navbar className="bg-dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/repertoireAdmin" className="text-white">{t('repertoire')}</Nav.Link>
                        <Nav.Link as={Link} to="/demandes-speciales-total" className="text-white">{t('listeDemandesSpeciales')}</Nav.Link>
                        <Nav.Link as={Link} to="/demandes-speciales-actives" className="text-white">{t('listeDemandesSpecialesActives')}</Nav.Link>
                        <Nav.Link as={Link} to="/demandes-speciales-date-croissante" className="text-white">{t('ordreCroissant')}</Nav.Link>
                        <Nav.Link as={Link} to="/demandes-speciales-date-decroissante" className="text-white">{t('ordreDecroissant')}</Nav.Link>
                        <Nav.Link as={Link} to="/demandes-speciales-par-client" className="text-white">{t('demandeParClient')}</Nav.Link>
                        <Nav.Link as={Link} to="/top5" className="text-white">{t('top5')}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};