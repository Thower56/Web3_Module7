import React from 'react';
import { Container, Button,  Row, Col, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { BarreNavigationAdmin } from './DemandeSpecialeAdmin/BarreNavigationAdmin';
import {useTranslation} from "react-i18next";


export const PageAdmin = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <h1>{t('pageAccueil')}</h1>
            <BarreNavigationAdmin />
            <Row>
                <h3>{t('titreAdmin')}</h3>
                <p>{t('textAdmin')}</p>
            </Row>        
        </Container>
    );
};
