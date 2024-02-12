import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import React from 'react';
import {useTranslation} from "react-i18next";


export function BarreNavigation() {
    const { t } = useTranslation();
    return (
        <Navbar className="bg-body-tertiary" expand="lg">
            <Container>
                <Nav className="navbar navbar-light bg-light">
                    <Nav.Link className="nav-link" href="/">{t('accueil')}</Nav.Link>
                    <Nav.Link className="nav-link" href="/repertoire">{t('repertoire')}</Nav.Link>
                    <Nav.Link className="nav-link" href="/demandeSpecial">{t('demandesSpeciales')}</Nav.Link>
                    <Nav.Link className="nav-link" href="/ajouter">{t('ajouter')}</Nav.Link>
                    <Nav.Link className="nav-link" href="/admin">{t('administration')}</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}